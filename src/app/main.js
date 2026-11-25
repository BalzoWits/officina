// Officina: CAD parametrico per iPad. Collega vista, schizzi, comandi e motore.
import { Viewport, bodyColor } from './viewport.js';
import { Sketcher, newSketchGeo, SKETCH_CMDS } from './sketcher.js';
import { readSvg, svgToSketch } from './svgimport.js';
import { initSolver, solve } from './solver.js';
import { Cad } from './cad.js';
import { COMMANDS, TYPE_NAMES, TYPE_ICONS, readyToCommit } from './commands.js';
import { icon } from './icons.js';
import * as store from './store.js';
import { findRegions, matchRegion, pointInPoly } from '../shared/profiles.js';
import { evalParams, evaluate, fmt, isValidName } from '../shared/expr.js';
import { STD_FRAMES, frameFromNormal, to2, to3, dot } from '../shared/frames.js';

const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s ?? '').replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));
const clone = (o) => JSON.parse(JSON.stringify(o));
const fid = () => 'f' + Math.random().toString(36).slice(2, 9);

const app = {
  project: null, doc: null, undo: [], redo: [],
  model: null, base: null, preview: null,
  mode: 'loading', cmd: null, sketch: null, selBody: null,
};

// ---------- avvio ----------
const vp = new Viewport($('#viewport'));
const sketcher = new Sketcher({
  host: $('#viewport'), viewport: vp,
  onChange: (st) => renderSketchUi(st),
  toast, promptValue, getScope: () => evalParams(app.doc.params).scope,
});
const cad = new Cad(new URL('./worker.js', import.meta.url));

async function boot() {
  setLoading('Carico il motore CAD (circa 20 MB la prima volta)…');
  try {
    await Promise.all([initSolver(new URL('./planegcs.wasm', import.meta.url).href), cad.call('init')]);
  } catch (e) {
    setLoading('Il motore CAD non si è avviato: ' + e.message + '. Ricarica la pagina.', true);
    return;
  }
  let p = null;
  const last = store.lastProjectId();
  if (last) { try { p = await store.loadProject(last); } catch { /* */ } }
  if (!p) p = { id: store.newId(), name: 'Primo progetto', doc: store.newDoc('Primo progetto') };
  await openProject(p);
  setLoading(null);
}

async function openProject(p) {
  app.project = { id: p.id, name: p.name };
  app.doc = migrate(p.doc);
  app.undo = []; app.redo = [];
  app.mode = 'model';
  app.cmd = null;
  store.setLastProjectId(p.id);
  await store.saveProject({ id: p.id, name: p.name, doc: app.doc });
  vp.setGrid(app.doc.ui.grid !== false);
  renderAll();
  await refresh();
  vp.fit(false);
}
function migrate(doc) {
  doc.ui ||= {};
  for (const k of ['hidden', 'colors', 'names', 'sketchVis']) doc.ui[k] ||= {};
  doc.params ||= [];
  if (doc.rollback === undefined) doc.rollback = null;
  return doc;
}

// ---------- salvataggio e cronologia ----------
let saveTimer = null;
function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => store.saveProject({ id: app.project.id, name: app.doc.name, doc: app.doc }).catch(() => toast('Salvataggio non riuscito', 'warn')), 500);
}
function commit(mutate, { rebuild = true } = {}) {
  app.undo.push(JSON.stringify(app.doc));
  if (app.undo.length > 100) app.undo.shift();
  app.redo = [];
  mutate(app.doc);
  scheduleSave();
  renderTopbar();
  if (rebuild) refresh();
  else { renderTimeline(); renderBrowser(); }
}
function undo() {
  if (app.mode === 'sketch') { sketcher.undo(); return; }
  if (app.mode !== 'model' || !app.undo.length) return;
  app.redo.push(JSON.stringify(app.doc));
  app.doc = JSON.parse(app.undo.pop());
  scheduleSave(); renderTopbar(); refresh();
}
function redo() {
  if (app.mode === 'sketch') { sketcher.redo(); return; }
  if (app.mode !== 'model' || !app.redo.length) return;
  app.undo.push(JSON.stringify(app.doc));
  app.doc = JSON.parse(app.redo.pop());
  scheduleSave(); renderTopbar(); refresh();
}

// ---------- ricostruzione ----------
let busy = false, queued = false;
async function refresh() {
  if (busy) { queued = true; return; }
  busy = true;
  try { await doRefresh(); } catch (e) { toast(e.message, 'warn'); } finally {
    busy = false;
    if (queued) { queued = false; refresh(); }
  }
}
async function rebuild(features, upto = null) {
  const doc = { ...app.doc, features };
  const r = await cad.call('rebuild', { doc, upto, have: [...vp.meshCache.keys()] });
  vp.ingest(r.bodies);
  return r;
}
const insertIndex = () => (app.doc.rollback == null ? app.doc.features.length : app.doc.rollback);

async function doRefresh() {
  setBusy(true);
  try {
    if (app.mode === 'command' && app.cmd) {
      const c = app.cmd;
      const before = app.doc.features.slice(0, c.index);
      app.base = await rebuild(before);
      const draftFeats = draftFeatures();
      app.preview = readyToCommit(c.draft) ? await rebuild([...before, ...draftFeats]) : null;
      render3D();
      renderPanel();
    } else if (app.mode === 'model') {
      const hadBodies = !!(app.model && app.model.bodies.length);
      app.model = await rebuild(app.doc.features, app.doc.rollback);
      render3D();
      if (!hadBodies && app.model.bodies.length) vp.fit();
      renderTimeline();
      renderBrowser();
      const nErr = Object.keys(app.model.errors).length;
      setStatus(nErr ? `${nErr} feature con errori` : `Ricostruito in ${app.model.ms} ms`, nErr ? 'warn' : '');
    }
  } finally { setBusy(false); }
}

/** Feature provvisorie del comando aperto (il foro su faccia crea anche il suo schizzo). */
function draftFeatures() {
  const c = app.cmd;
  const d = clone(c.draft);
  if (d.type === 'hole' && d.place) {
    const pl = d.place;
    delete d.place;
    if (!pl.face || !pl.pts.length) return [d];
    const fr = frameFromNormal(pl.face.n, pl.face.p);
    const skId = c.holeSketchId || (c.holeSketchId = fid());
    const geo = newSketchGeo();
    pl.pts.forEach((p, i) => { const [u, v] = to2(fr, p); geo.push({ id: `p${i + 1}`, type: 'point', x: u, y: v, fixed: false }); });
    const sk = { id: skId, type: 'sketch', name: `Schizzo foro`, plane: { face: stripRef(pl.face) }, geo, cons: [] };
    d.sketch = skId;
    return [sk, d];
  }
  return [d];
}
const stripRef = (r) => { const o = { ...r }; delete o.i; return o; };

// ---------- vista 3D ----------
function bodyList(result) {
  if (!result) return [];
  return result.bodies.map((b, i) => ({
    id: b.id, key: b.key, name: app.doc.ui.names[b.id] || b.name,
    color: app.doc.ui.colors[b.id] || bodyColor(i), visible: !app.doc.ui.hidden[b.id],
  }));
}

function sketchVisible(f) {
  const v = app.doc.ui.sketchVis[f.id];
  if (v !== undefined) return v;
  return !app.doc.features.some((x) => x.sketch === f.id);
}

function sketchPolylines(geo) {
  const P = new Map(geo.map((g) => [g.id, g]));
  const out = [];
  for (const g of geo) {
    if (g.ref || g.type === 'point') continue;
    if (g.type === 'line') { const a = P.get(g.p1_id), b = P.get(g.p2_id); out.push({ id: g.id, kind: 'line', construction: g.construction, pts: [[a.x, a.y], [b.x, b.y]] }); }
    else {
      const c = P.get(g.c_id);
      let a0 = 0, sw = Math.PI * 2;
      if (g.type === 'arc') { a0 = g.start_angle; sw = g.end_angle - g.start_angle; while (sw <= 0) sw += Math.PI * 2; }
      const n = Math.max(8, Math.ceil((sw / (Math.PI * 2)) * 72));
      const pts = [];
      for (let i = 0; i <= n; i++) { const a = a0 + (sw * i) / n; pts.push([c.x + g.radius * Math.cos(a), c.y + g.radius * Math.sin(a)]); }
      out.push({ id: g.id, kind: g.type, construction: g.construction, pts });
    }
  }
  // assi dello schizzo come linee selezionabili (per l'asse di rivoluzione)
  return out;
}

/** Regioni "esterne": non stanno dentro il foro di un'altra (così un anello non si riempie). */
function outerRegions(rs) {
  return rs.filter((r) => !rs.some((o) => o !== r && o.holePolys.some((h) => pointInPoly(r.sample, h))));
}

const regionCache = new Map();
function regionsOf(sketch) {
  const k = sketch.id + ':' + JSON.stringify(sketch.geo);
  let r = regionCache.get(k);
  if (!r) { r = findRegions(sketch.geo); regionCache.set(k, r); if (regionCache.size > 50) regionCache.delete(regionCache.keys().next().value); }
  return r;
}

function render3D() {
  const cmd = app.mode === 'command' ? app.cmd : null;
  let display = app.model;
  if (cmd) display = app.preview && !app.preview.errors[cmd.draft.id] && !Object.keys(app.preview.errors).some((k) => !app.base.errors[k]) ? app.preview : app.base;
  vp.setBodies(bodyList(display));
  vp.setPickBodies(cmd ? bodyList(app.base) : null);
  vp.gc();

  // schizzi
  const frames = (cmd ? app.base : app.model)?.frames || {};
  const lim = cmd ? cmd.index : insertIndex();
  const overlays = [];
  const field = cmd ? activePickField() : null;
  for (const f of app.doc.features.slice(0, lim)) {
    if (f.type !== 'sketch' || f.suppressed || !frames[f.id]) continue;
    const isCurrent = cmd && cmd.draft.sketch === f.id;
    if (!sketchVisible(f) && !isCurrent) continue;
    const ov = { id: f.id, frame: frames[f.id].frame, polylines: sketchPolylines(f.geo) };
    if (field && field.pick === 'region') {
      ov.regions = regionsOf(f);
      ov.selected = isCurrent ? cmd.draft.regions.map((r) => ov.regions.indexOf(matchRegion(ov.regions, r))).filter((i) => i >= 0) : [];
    } else if (isCurrent && cmd.draft.regions) {
      const rs = regionsOf(f);
      ov.regions = cmd.draft.regions.map((r) => matchRegion(rs, r)).filter(Boolean);
      ov.selected = ov.regions.map((_, i) => i);
    } else if (!cmd && app.mode === 'model') {
      // forme chiuse in azzurro chiaro: si toccano per selezionarle (blu pieno)
      ov.regions = regionsOf(f);
      ov.selected = app.msel.sketch === f.id ? app.msel.regions.map((r) => ov.regions.indexOf(matchRegion(ov.regions, r))).filter((i) => i >= 0) : [];
    }
    if (field && field.pick === 'sketchLine' && isCurrent) {
      // anche gli assi dello schizzo valgono come asse di rivoluzione
      ov.pickLines = true;
      const L = 1000;
      ov.polylines.push({ id: 'AX', kind: 'line', construction: true, pts: [[-L, 0], [L, 0]] }, { id: 'AY', kind: 'line', construction: true, pts: [[0, -L], [0, L]] });
    }
    overlays.push(ov);
  }
  vp.setSketchOverlays(overlays);

  // evidenziazioni
  const sel = { faces: [], edges: [], bodies: [] };
  if (cmd) collectHighlights(cmd.draft, sel);
  else {
    if (app.selBody) sel.bodies.push(app.selBody);
    for (const r of app.msel.edges) { const i = nearestEdgeIndex(r); if (i >= 0) sel.edges.push({ body: r.body, i }); }
    for (const r of app.msel.faces) { const i = nearestFaceIndex(r); if (i >= 0) sel.faces.push({ body: r.body, i }); }
  }
  vp.setSelection(sel);
  vp.setPlanesVisible(app.mode === 'pickPlane' || !!(field && (field.pick === 'planarFace')) || !!app.doc.ui.showPlanes);
  let hs = [];
  try { hs = cmd ? commandHandles(cmd) : []; } catch { hs = []; }
  vp.setHandles(hs);
}

// ---------- frecce di controllo sul modello ----------
const AXIS_DIR = { X: [1, 0, 0], Y: [0, 1, 0], Z: [0, 0, 1] };
const vnorm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const vadd = (a, b, s = 1) => [a[0] + b[0] * s, a[1] + b[1] * s, a[2] + b[2] * s];
const isPlainNumber = (s) => String(s ?? '').trim() !== '' && Number.isFinite(Number(String(s).replace(',', '.')));

/** Maniglie da mostrare per il comando aperto: una per ogni misura trascinabile. */
function commandHandles(cmd) {
  const d = cmd.draft;
  const scope = evalParams(app.doc.params).scope;
  const val = (k) => { try { return evaluate(d[k], scope); } catch { return null; } };
  const mk = (k, h) => { const v = val(k); return v == null ? null : { id: k, value: v, locked: !isPlainNumber(d[k]), ...h }; };
  const frames = (app.base && app.base.frames) || {};
  const out = [];
  const regionPoint = () => {
    const sk = app.doc.features.find((f) => f.id === d.sketch);
    const fr = frames[d.sketch];
    if (!sk || !fr || !d.regions || !d.regions.length) return null;
    const r = matchRegion(regionsOf(sk), d.regions[0]);
    return r ? { p: to3(fr.frame, r.sample), frame: fr.frame, sk } : null;
  };
  if (d.type === 'extrude') {
    const rp = regionPoint();
    if (rp) {
      const dir = d.flip ? rp.frame.n.map((x) => -x) : rp.frame.n;
      out.push(mk('dist', { kind: 'linear', origin: rp.p, dir, scale: d.mode === 'sym' ? 0.5 : 1 }));
      if (d.mode === 'two') out.push(mk('dist2', { kind: 'linear', origin: rp.p, dir: dir.map((x) => -x) }));
    }
  } else if (d.type === 'revolve') {
    const rp = regionPoint();
    if (rp) {
      let o = [0, 0, 0], ax = AXIS_DIR[(d.axis && d.axis.world) || 'Z'];
      if (d.axis && d.axis.line) {
        const g = rp.sk.geo.find((x) => x.id === d.axis.line);
        const P = (id) => { const q = rp.sk.geo.find((x) => x.id === id); return [q.x, q.y]; };
        if (g) { const a = to3(rp.frame, P(g.p1_id)), b = to3(rp.frame, P(g.p2_id)); o = a; ax = vnorm([b[0] - a[0], b[1] - a[1], b[2] - a[2]]); }
      }
      if (d.flip) ax = ax.map((x) => -x);
      const w = [rp.p[0] - o[0], rp.p[1] - o[1], rp.p[2] - o[2]];
      const t = dot(w, ax);
      const center = vadd(o, ax, t);
      const rv = [rp.p[0] - center[0], rp.p[1] - center[1], rp.p[2] - center[2]];
      const radius = Math.hypot(...rv);
      if (radius > 1e-6) out.push(mk('angle', { kind: 'arc', center, axis: ax, ref: vnorm(rv), radius }));
    }
  } else if (d.type === 'hole' && !d.through) {
    let p = null, n = null;
    if (d.place && d.place.face && d.place.pts.length) { p = d.place.pts[0]; n = d.place.face.n; }
    else if (d.sketch && frames[d.sketch]) {
      const sk = app.doc.features.find((f) => f.id === d.sketch);
      const pt = sk && sk.geo.find((g) => g.type === 'point' && !g.ref && !g.construction);
      if (pt) { p = to3(frames[d.sketch].frame, [pt.x, pt.y]); n = frames[d.sketch].frame.n; }
    }
    if (p) out.push(mk('depth', { kind: 'linear', origin: p, dir: d.flip ? n : n.map((x) => -x), min: 0.1 }));
  } else if ((d.type === 'fillet' || d.type === 'chamfer') && d.edges.length) {
    const ref = d.edges[0];
    const e = vp.pickBodies.get(ref.body);
    const i = nearestEdgeIndex(ref);
    if (e && i >= 0) {
      const info = e.data.edgeInfo[i];
      const ns = info.f.map((x) => x.n).filter(Boolean);
      if (ns.length) {
        const dir = vnorm(ns.reduce((s, n) => vadd(s, n), [0, 0, 0]));
        out.push(mk(d.type === 'fillet' ? 'r' : 'd', { kind: 'linear', origin: info.m, dir, min: 0.05 }));
      }
    }
  } else if (d.type === 'shell' && d.faces.length) {
    const f = d.faces[0];
    if (f.n) out.push(mk('t', { kind: 'linear', origin: f.p, dir: d.outside ? f.n : f.n.map((x) => -x), min: 0.1 }));
  } else if (d.type === 'move' && d.bodies.length) {
    const bb = vp.boundsOf(d.bodies);
    if (bb) {
      const c = bb.center;
      const off = Math.max(5, bb.size * 0.35);
      const dx = val('dx') || 0, dy = val('dy') || 0, dz = val('dz') || 0;
      const cols = { dx: 0xd64545, dy: 0x2f9e57, dz: 0x2f6fe0 };
      out.push(mk('dx', { kind: 'linear', origin: [c[0], c[1] + dy, c[2] + dz], dir: [1, 0, 0], offset: off, color: cols.dx }));
      out.push(mk('dy', { kind: 'linear', origin: [c[0] + dx, c[1], c[2] + dz], dir: [0, 1, 0], offset: off, color: cols.dy }));
      out.push(mk('dz', { kind: 'linear', origin: [c[0] + dx, c[1] + dy, c[2]], dir: [0, 0, 1], offset: off, color: cols.dz }));
    }
  }
  return out.filter(Boolean);
}
vp.onHandle = (id, v) => {
  const d = app.cmd && app.cmd.draft;
  if (!d) return;
  d[id] = fmt(v, 3);
  renderPanel();
  schedulePreview();
};
vp.onHandleLocked = () => toast('Questo valore viene da un parametro: cambialo nel pannello', 'warn');

function nearestEdgeIndex(ref) {
  const e = vp.pickBodies.get(ref.body);
  if (!e || !e.data) return -1;
  if (ref.i != null && e.data.edgeInfo[ref.i]) {
    const m = e.data.edgeInfo[ref.i].m;
    if (Math.hypot(m[0] - ref.p[0], m[1] - ref.p[1], m[2] - ref.p[2]) < 1e-3) return ref.i;
  }
  let best = -1, bd = Infinity;
  e.data.edgeInfo.forEach((x, i) => { const d = Math.hypot(x.m[0] - ref.p[0], x.m[1] - ref.p[1], x.m[2] - ref.p[2]); if (d < bd) { bd = d; best = i; } });
  return best;
}
function nearestFaceIndex(ref) {
  const e = vp.pickBodies.get(ref.body);
  if (!e || !e.data) return -1;
  if (ref.i != null && e.data.faceInfo[ref.i] && e.data.faceInfo[ref.i].t === ref.t) return ref.i;
  let best = -1, bd = Infinity;
  e.data.faceInfo.forEach((x, i) => {
    let d = Math.hypot(x.c[0] - ref.p[0], x.c[1] - ref.p[1], x.c[2] - ref.p[2]);
    if (ref.n && x.n) d += 50 * (1 - dot(ref.n, x.n));
    if (d < bd) { bd = d; best = i; }
  });
  return best;
}

function collectHighlights(d, sel) {
  const addE = (r) => { if (!r) return; const i = nearestEdgeIndex(r); if (i >= 0) sel.edges.push({ body: r.body, i }); };
  const addF = (r) => { if (!r) return; const i = nearestFaceIndex(r); if (i >= 0) sel.faces.push({ body: r.body, i }); };
  (d.edges || []).forEach(addE);
  (d.faces || []).forEach(addF);
  if (d.axis && d.axis.edge) addE(d.axis.edge);
  if (d.plane && d.plane.face) addF(d.plane.face);
  if (d.place && d.place.face) addF(d.place.face);
  for (const id of [...(d.targets || []), ...(d.tools || []), ...(d.bodies || []), d.target, d.src && d.src.body]) if (id) sel.bodies.push(id);
}

// ---------- tocchi nella vista ----------
vp.onTap((x, y, ptype) => {
  const tol = ptype === 'touch' ? 22 : ptype === 'pen' ? 14 : 9;
  if (app.mode === 'pickPlane') {
    const h = vp.pick(x, y, { plane: true, face: true }, tol);
    if (!h) return;
    if (h.kind === 'plane') startSketch({ std: h.plane });
    else if (h.kind === 'face') {
      const info = vp.pickBodies.get(h.body).data.faceInfo[h.i];
      if (info.t !== 'PLANE') { toast('Serve una faccia piana', 'warn'); return; }
      startSketch({ face: { body: h.body, p: h.point, n: info.n, t: 'PLANE' } });
    }
    return;
  }
  if (app.mode === 'command') {
    const fld = activePickField();
    if (!fld) return;
    const filt = { region: { region: true }, edge: { edge: true }, face: { face: true }, planarFace: { face: true }, facePoint: { face: true }, body: { body: true }, sketchLine: { sketchLine: true } }[fld.pick];
    const h = vp.pick(x, y, filt, tol);
    if (!h) return;
    applyPick(fld, h);
    return;
  }
  if (app.mode === 'model') {
    const h = vp.pick(x, y, { region: true, edge: true, face: true }, tol);
    if (h && h.kind === 'region') { toggleRegionSel(h); return; }
    app.selBody = null;
    if (!h) { clearModelSel(); return; }
    toggleModelSel(h);
  }
});

// ---------- selezione nel modello (prima si seleziona, poi si sceglie il comando) ----------
const emptySel = () => ({ edges: [], faces: [], regions: [], sketch: null });
app.msel = emptySel();
function toggleRegionSel(h) {
  const sel = app.msel;
  // le forme vanno estruse da un solo schizzo: cambiando schizzo si riparte
  if (sel.sketch !== h.sketch || sel.edges.length || sel.faces.length) { app.msel = emptySel(); app.msel.sketch = h.sketch; }
  const sk = app.doc.features.find((f) => f.id === h.sketch);
  const rs = regionsOf(sk);
  const r = rs[h.region];
  const list = app.msel.regions;
  const i = list.findIndex((x) => matchRegion(rs, x) === r);
  if (i >= 0) list.splice(i, 1); else list.push({ key: r.key, seed: r.sample });
  if (!list.length) app.msel.sketch = null;
  render3D();
  renderSelbar();
}
function edgeRefOf(h) {
  const D = vp.pickBodies.get(h.body).data, info = D.edgeInfo[h.i];
  return { body: h.body, i: h.i, p: info.m, d: info.d, t: info.t, f: info.f.map((x) => ({ n: x.n, t: D.faceInfo[x.i].t })) };
}
function faceRefOf(h) {
  const info = vp.pickBodies.get(h.body).data.faceInfo[h.i];
  return { body: h.body, i: h.i, p: h.point, n: info.t === 'PLANE' ? info.n : h.normal, t: info.t };
}
function toggleModelSel(h) {
  if (app.msel.regions.length) app.msel = emptySel();
  const list = h.kind === 'edge' ? app.msel.edges : app.msel.faces;
  const i = list.findIndex((r) => r.body === h.body && r.i === h.i);
  if (i >= 0) list.splice(i, 1); else list.push(h.kind === 'edge' ? edgeRefOf(h) : faceRefOf(h));
  render3D();
  renderSelbar();
}
function clearModelSel() {
  app.msel = emptySel();
  render3D();
  renderSelbar();
}
function selBodies() { return [...new Set([...app.msel.edges, ...app.msel.faces].map((r) => r.body))]; }
/** Valori iniziali di un comando presi dalla selezione fatta nel modello. */
function presetFromSelection(type) {
  const { edges, faces, regions } = app.msel;
  if (regions.length && (type === 'extrude' || type === 'revolve')) return { sketch: app.msel.sketch, regions: regions.map((r) => ({ ...r })) };
  if (!edges.length && !faces.length) return null;
  const strip = (r) => ({ ...r });
  if ((type === 'fillet' || type === 'chamfer') && edges.length) return { edges: edges.map(strip) };
  if (type === 'shell' && faces.length) return { faces: faces.map(strip) };
  if (type === 'move') return { bodies: selBodies() };
  if ((type === 'pattern' || type === 'mirror') && selBodies().length === 1) return { src: { body: selBodies()[0] } };
  if (type === 'combine' && selBodies().length >= 2) return { target: selBodies()[0], tools: selBodies().slice(1) };
  return null;
}
function renderSelbar() {
  const bar = $('#selbar');
  const { edges, faces, regions } = app.msel;
  if (app.mode !== 'model' || (!edges.length && !faces.length && !regions.length)) { bar.hidden = true; return; }
  hideQuick();
  if (regions.length) {
    const sk = app.doc.features.find((f) => f.id === app.msel.sketch);
    bar.hidden = false;
    bar.innerHTML = `<span><b>${regions.length} ${regions.length === 1 ? 'forma' : 'forme'}</b> di «${esc(sk ? sk.name : '')}»</span>
      <button class="btn primary" data-scmd="extrude">${icon('extrude', 18)} Estrudi</button>
      <button class="btn" data-scmd="revolve">${icon('revolve', 18)} Rivoluzione</button>
      <button class="btn" data-sedit>${icon('sketch', 18)} Modifica schizzo</button>
      <button class="icon" data-sclear aria-label="Deseleziona">${icon('close', 18)}</button>`;
    return;
  }
  const parts = [];
  if (edges.length) parts.push(`${edges.length} ${edges.length === 1 ? 'spigolo' : 'spigoli'}`);
  if (faces.length) parts.push(`${faces.length} ${faces.length === 1 ? 'faccia' : 'facce'}`);
  const btn = (cmd, ic, label) => `<button class="btn" data-scmd="${cmd}">${icon(ic, 18)} ${label}</button>`;
  bar.hidden = false;
  bar.innerHTML = `<span><b>${parts.join(' · ')}</b> selezionati</span>
    ${edges.length ? btn('fillet', 'fillet', 'Raccordo') + btn('chamfer', 'chamfer', 'Smusso') : ''}
    ${faces.length ? btn('shell', 'shell', 'Guscio') : ''}
    ${btn('move', 'move', 'Sposta corpo')}
    <button class="icon" data-sclear aria-label="Deseleziona">${icon('close', 18)}</button>`;
}
$('#selbar').addEventListener('click', (e) => {
  const t = e.target.closest('button');
  if (!t) return;
  if (t.dataset.sclear !== undefined) clearModelSel();
  else if (t.dataset.sedit !== undefined) { const sk = app.doc.features.find((f) => f.id === app.msel.sketch); clearModelSel(); if (sk) editSketch(sk); }
  else if (t.dataset.scmd) openCommand(t.dataset.scmd);
});
/** Tocco su una forma chiusa di uno schizzo: comandi rapidi. */
function regionMenu(h, x, y) {
  const sk = app.doc.features.find((f) => f.id === h.sketch);
  const rs = regionsOf(sk);
  const r = rs[h.region];
  // se la forma toccata ne contiene altre (es. un foro), si estrude con i suoi fori
  const preset = { sketch: sk.id, regions: [{ key: r.key, seed: r.sample }] };
  const anchor = { getBoundingClientRect: () => { const c = vp.canvas.getBoundingClientRect(); return new DOMRect(c.left + x, c.top + y, 0, 0); } };
  popMenu(anchor, [
    { label: `Forma di «${sk.name}»`, cls: 'title', disabled: true },
    { label: 'Estrudi questa forma', icon: 'extrude', act: () => openCommand('extrude', null, preset) },
    { label: 'Rivoluzione', icon: 'revolve', act: () => openCommand('revolve', null, preset) },
    { label: 'Modifica lo schizzo', icon: 'sketch', act: () => editSketch(sk) },
  ]);
}

vp.hoverHandler = (x, y) => {
  if (app.mode === 'model') {
    const h = x == null ? null : vp.pick(x, y, { edge: true, face: true }, 9);
    const k = h ? `${h.kind}${h.body}${h.i}` : '';
    if (k !== app.hoverKey) { app.hoverKey = k; vp.setPreselect(h); }
    return;
  }
  if (app.mode !== 'command') { if (vp.preselect) vp.setPreselect(null); return; }
  const fld = activePickField();
  if (x == null || !fld || !['edge', 'face', 'planarFace'].includes(fld.pick)) { if (vp.preselect) vp.setPreselect(null); return; }
  const h = vp.pick(x, y, { edge: fld.pick === 'edge', face: fld.pick !== 'edge' }, 9);
  const k = h ? `${h.kind}${h.body}${h.i}` : '';
  if (k !== app.hoverKey) { app.hoverKey = k; vp.setPreselect(h); }
};

function applyPick(fld, h) {
  const d = app.cmd.draft;
  const get = () => (fld.get ? fld.get(d) : d[fld.k]) || [];
  const set = (v) => { if (fld.set) fld.set(d, v); else d[fld.k] = v; };
  const toggle = (list, item, same) => {
    const i = list.findIndex((x) => same(x, item));
    if (i >= 0) { list.splice(i, 1); return list; }
    if (!fld.multi) return [item];
    list.push(item);
    return list;
  };
  const data = (body) => vp.pickBodies.get(body).data;
  if (fld.pick === 'region') {
    const sk = app.doc.features.find((f) => f.id === h.sketch);
    const r = regionsOf(sk)[h.region];
    const ref = { key: r.key, seed: r.sample };
    if (d.sketch && d.sketch !== h.sketch) { d.regions = []; }
    d.sketch = h.sketch;
    const regs = regionsOf(sk);
    d.regions = toggle(d.regions.slice(), ref, (a, b) => matchRegion(regs, a) === matchRegion(regs, b));
    if (!d.regions.length) d.sketch = null;
  } else if (fld.pick === 'edge') {
    const D = data(h.body), info = D.edgeInfo[h.i];
    const ref = { body: h.body, i: h.i, p: info.m, d: info.d, t: info.t, f: info.f.map((x) => ({ n: x.n, t: D.faceInfo[x.i].t })) };
    set(toggle(get().slice(), ref, (a, b) => a.body === b.body && nearestEdgeIndex(a) === b.i));
  } else if (fld.pick === 'face' || fld.pick === 'planarFace') {
    const info = data(h.body).faceInfo[h.i];
    if (fld.pick === 'planarFace' && info.t !== 'PLANE') { toast('Serve una faccia piana', 'warn'); return; }
    const ref = { body: h.body, i: h.i, p: h.point, n: info.t === 'PLANE' ? info.n : h.normal, t: info.t };
    set(toggle(get().slice(), ref, (a, b) => a.body === b.body && nearestFaceIndex(a) === b.i));
  } else if (fld.pick === 'facePoint') {
    const info = data(h.body).faceInfo[h.i];
    if (info.t !== 'PLANE') { toast('I fori vanno su una faccia piana', 'warn'); return; }
    const pl = d.place;
    const same = pl.face && pl.face.body === h.body && nearestFaceIndex(pl.face) === h.i;
    if (!same) { pl.face = { body: h.body, i: h.i, p: h.point, n: info.n, t: 'PLANE' }; pl.pts = []; }
    const near = pl.pts.findIndex((p) => Math.hypot(p[0] - h.point[0], p[1] - h.point[1], p[2] - h.point[2]) < 1.5);
    if (near >= 0) pl.pts.splice(near, 1); else pl.pts.push(h.point.map((v) => Math.round(v * 100) / 100));
  } else if (fld.pick === 'body') {
    set(toggle(get().slice(), h.body, (a, b) => a === b));
  } else if (fld.pick === 'sketchLine') {
    if (h.sketch !== d.sketch) { toast('Scegli una linea dello stesso schizzo', 'warn'); return; }
    set([h.id]);
  }
  renderPanel();
  render3D();
  schedulePreview();
}

let previewTimer = null;
function schedulePreview() { clearTimeout(previewTimer); previewTimer = setTimeout(refresh, 140); }

// ---------- comandi ----------
function commandCtx(index) {
  const before = app.doc.features.slice(0, index).filter((f) => !f.suppressed);
  const toolFeatures = before.filter((f) => ['extrude', 'revolve', 'hole'].includes(f.type)).map((f) => ({ id: f.id, name: f.name }));
  const bodies = (app.model && app.model.bodies) || [];
  let autoRegions = null;
  const lastSk = [...before].reverse().find((f) => f.type === 'sketch');
  if (lastSk && !app.doc.features.some((f) => f.sketch === lastSk.id)) {
    const outer = outerRegions(regionsOf(lastSk));
    if (outer.length) autoRegions = { sketch: lastSk.id, regions: outer.map((r) => ({ key: r.key, seed: r.sample })) };
  }
  return { hasBodies: bodies.length > 0, lastBody: bodies.length ? bodies[bodies.length - 1].id : null, toolFeatures, autoRegions };
}

function openCommand(type, existing = null, preset = null) {
  if (app.mode === 'sketch') return;
  if (app.mode === 'command') cancelCommand();
  hideQuick();
  const spec = COMMANDS[type];
  const index = existing ? app.doc.features.findIndex((f) => f.id === existing.id) : insertIndex();
  const ctx = commandCtx(index);
  const pre = preset || (existing ? null : presetFromSelection(type));
  const draft = existing ? clone(existing) : { id: fid(), ...spec.init(ctx), ...(pre || {}) };
  app.msel = emptySel();
  $('#selbar').hidden = true;
  app.cmd = { type, spec, draft, index, editing: !!existing, ctx, active: null };
  app.mode = 'command';
  const picks = visibleFields().filter((f) => f.kind === 'pick');
  const empty = picks.find((f) => !((f.get ? f.get(draft) : draft[f.k]) || []).length && !f.optional);
  app.cmd.active = (empty || picks[0] || {}).k || null;
  app.selBody = null;
  renderAll();
  refresh();
}
function visibleFields() {
  const c = app.cmd;
  return c.spec.fields(c.draft, c.ctx).filter(Boolean);
}
function activePickField() {
  if (!app.cmd) return null;
  return visibleFields().find((f) => f.kind === 'pick' && f.k === app.cmd.active) || null;
}
function cancelCommand() {
  app.cmd = null;
  app.mode = 'model';
  app.preview = null;
  renderAll();
  refresh();
}
function okCommand() {
  const c = app.cmd;
  if (!readyToCommit(c.draft)) { toast('Completa la selezione', 'warn'); return; }
  const feats = draftFeatures();
  const err = app.preview && feats.map((f) => app.preview.errors[f.id]).find(Boolean);
  if (err) { toast(err, 'warn'); return; }
  commit((doc) => {
    const counter = (t) => doc.features.filter((f) => f.type === t).length + 1;
    for (const f of feats) if (!f.name) f.name = `${TYPE_NAMES[f.type]} ${counter(f.type)}`;
    if (c.editing) doc.features.splice(c.index, 1, ...feats);
    else {
      doc.features.splice(c.index, 0, ...feats);
      if (doc.rollback != null) doc.rollback += feats.length;
    }
  }, { rebuild: false });
  app.cmd = null;
  app.mode = 'model';
  renderAll();
  refresh();
}

// ---------- schizzi ----------
function beginSketchCommand() {
  if (app.mode === 'command') cancelCommand();
  hideQuick();
  app.mode = 'pickPlane';
  renderAll();
  render3D();
  setHint('Dove disegni? Tocca un piano colorato (blu = pianta XY, verde = fronte XZ, rosso = lato YZ) o una faccia piana di un corpo');
}
function startSketch(plane) {
  const n = app.doc.features.filter((f) => f.type === 'sketch').length + 1;
  const f = { id: fid(), type: 'sketch', name: `Schizzo ${n}`, plane: plane.face ? { face: plane.face } : { std: plane.std }, geo: newSketchGeo(), cons: [] };
  const frame = plane.face ? frameFromNormal(plane.face.n, plane.face.p) : STD_FRAMES[plane.std];
  enterSketch(f, frame, insertIndex(), true);
}
async function editSketch(f) {
  hideQuick();
  const index = app.doc.features.findIndex((x) => x.id === f.id);
  setBusy(true);
  let r;
  try { r = await rebuild(app.doc.features, index + 1); } finally { setBusy(false); }
  const fr = r.frames[f.id];
  if (!fr) { toast(r.errors[f.id] || 'Il piano dello schizzo non è disponibile', 'warn'); return; }
  app.model = r;
  render3D();
  enterSketch(f, fr.frame, index, false);
}
function enterSketch(f, frame, index, isNew) {
  app.mode = 'sketch';
  app.sketch = { index, isNew, id: f.id };
  setHint('');
  renderAll();
  vp.setSketchOverlays([]);
  vp.setSelection({});
  vp.setPlanesVisible(false);
  sketcher.open(f, frame);
}
function finishSketch(keep = true) {
  const s = app.sketch;
  const sk = sketcher.close();
  app.mode = 'model';
  app.sketch = null;
  if (keep) {
    commit((doc) => {
      if (s.isNew) {
        doc.features.splice(s.index, 0, sk);
        if (doc.rollback != null) doc.rollback += 1;
      } else doc.features[s.index] = sk;
    }, { rebuild: false });
  }
  renderAll();
  refresh();
  if (keep && !app.doc.features.some((f) => f.sketch === sk.id)) showQuick(sk);
}

// ---------- azioni rapide dopo uno schizzo ----------
function showQuick(sk) {
  const bar = $('#quickbar');
  const outer = outerRegions(regionsOf(sk));
  const hasCurves = sk.geo.some((g) => !g.ref && g.type !== 'point');
  if (!hasCurves) { hideQuick(); return; }
  bar.hidden = false;
  if (!outer.length) {
    bar.className = 'warn';
    bar.innerHTML = `<span>${icon('info', 18)} «${esc(sk.name)}» non ha forme chiuse: per estrudere il contorno deve chiudersi (l'ultima linea deve finire sul primo punto).</span>
      <button class="btn" data-qedit>Modifica schizzo</button><button class="icon" data-qclose aria-label="Chiudi">${icon('close', 18)}</button>`;
  } else {
    bar.className = '';
    bar.innerHTML = `<span><b>${esc(sk.name)}</b> · ${outer.length === 1 ? '1 forma chiusa' : `${outer.length} forme chiuse`}. Cosa vuoi farne?</span>
      <button class="btn primary" data-qcmd="extrude">${icon('extrude', 18)} Estrudi</button><button class="btn" data-qcmd="revolve">${icon('revolve', 18)} Rivoluzione</button>
      <button class="icon" data-qclose aria-label="Chiudi">${icon('close', 18)}</button>`;
  }
  bar.onclick = (e) => {
    const t = e.target.closest('button');
    if (!t) return;
    if (t.dataset.qcmd) openCommand(t.dataset.qcmd, null, { sketch: sk.id, regions: outer.map((r) => ({ key: r.key, seed: r.sample })) });
    else if (t.dataset.qedit !== undefined) { hideQuick(); editSketch(app.doc.features.find((f) => f.id === sk.id)); }
    hideQuick();
  };
}
function hideQuick() { $('#quickbar').hidden = true; }

// ---------- interfaccia: barra superiore ----------
const MODEL_TOOLS = [
  { group: 'Crea' },
  ['sketch', 'Schizzo', () => beginSketchCommand()],
  ['extrude', 'Estrudi', () => openCommand('extrude')],
  ['revolve', 'Rivoluzione', () => openCommand('revolve')],
  ['hole', 'Foro', () => openCommand('hole')],
  { group: 'Modifica' },
  ['fillet', 'Raccordo', () => openCommand('fillet')],
  ['chamfer', 'Smusso', () => openCommand('chamfer')],
  ['shell', 'Guscio', () => openCommand('shell')],
  ['combine', 'Combina', () => openCommand('combine')],
  ['move', 'Sposta', () => openCommand('move')],
  { group: 'Ripeti' },
  ['pattern', 'Serie', () => openCommand('pattern')],
  ['mirror', 'Specchio', () => openCommand('mirror')],
  { group: 'Inserisci' },
  ['import', 'Importa', () => importModel()],
];
// [icona, etichetta, tipo, nome strumento se diverso dall'icona]
const SKETCH_TOOLS = [
  { group: 'Disegna' },
  ['select', 'Seleziona', 'tool'], ['line', 'Linea', 'tool'], ['rect', 'Rettangolo', 'tool'], ['circle', 'Cerchio', 'tool'],
  ['arc', 'Arco', 'tool'], ['point', 'Punto', 'tool'],
  { group: 'Misura' },
  ['dim', 'Quota', 'tool'],
  { group: 'Modifica' },
  ['trim', 'Taglia', 'tool'], ['offset', 'Offset', 'tool', 'cmd:offset'], ['fillet', 'Raccordo', 'tool', 'cmd:sfillet'], ['chamfer', 'Smusso', 'tool', 'cmd:schamfer'],
  ['mirror', 'Specchia', 'tool', 'cmd:smirror'], ['construction', 'Costruzione', 'act'], ['trash', 'Elimina', 'act'],
  { group: 'Vincoli' },
  ['coincident', 'Coincidente', 'cons'], ['horizontal', 'Orizzontale', 'cons'], ['vertical', 'Verticale', 'cons'],
  ['parallel', 'Parallela', 'cons'], ['perpendicular', 'Perpendic.', 'cons'], ['tangent', 'Tangente', 'cons'],
  ['equal', 'Uguale', 'cons'], ['midpoint', 'Punto medio', 'cons'], ['concentric', 'Concentrico', 'cons'],
  ['symmetric', 'Simmetria', 'cons'], ['fix', 'Fissa', 'cons'],
];

function renderTopbar() {
  const tb = $('#toolbar');
  const sk = app.mode === 'sketch';
  $('#docName').textContent = app.doc ? app.doc.name : '';
  $('#btnUndo').disabled = sk ? !sketcher.undoStack?.length : app.mode !== 'model' || !app.undo.length;
  $('#btnRedo').disabled = sk ? !sketcher.redoStack?.length : app.mode !== 'model' || !app.redo.length;
  $('#topRight').hidden = sk;
  $('#sketchFinish').hidden = !sk;
  const tools = sk ? SKETCH_TOOLS : MODEL_TOOLS;
  tb.innerHTML = tools.map((t, i) => {
    if (t.group) return `<span class="grp">${t.group}</span>`;
    const [ic, label, kind, name] = t;
    const on = sk ? (kind === 'tool' && sketcher.tool === (name || ic)) || (kind === 'cons' && sketcher.tool === 'c:' + ic) : (app.mode === 'command' && app.cmd.type === ic) || (ic === 'sketch' && app.mode === 'pickPlane');
    return `<button class="tool ${on ? 'on' : ''}" data-i="${i}" title="${label}">${icon(ic)}<span>${label}</span></button>`;
  }).join('');
  tb.className = sk ? 'sketch' : '';
}
$('#toolbar').addEventListener('click', (e) => {
  const b = e.target.closest('button[data-i]');
  if (!b) return;
  const t = (app.mode === 'sketch' ? SKETCH_TOOLS : MODEL_TOOLS)[+b.dataset.i];
  if (app.mode === 'sketch') {
    const [name, , kind, toolName] = t;
    if (kind === 'tool') sketcher.setTool(toolName || name);
    // vincolo: se la selezione è già giusta si applica, altrimenti si entra nello strumento e si toccano gli elementi
    else if (kind === 'cons') { if (sketcher.sel.size && sketcher.consReady(name)) sketcher.applyConstraint(name); else sketcher.setTool('c:' + name); }
    else if (name === 'construction') sketcher.toggleConstruction();
    else if (name === 'trash') sketcher.deleteSelection();
    renderTopbar();
    return;
  }
  if (app.mode === 'pickPlane') { app.mode = 'model'; setHint(''); }
  t[2]();
});

function renderSketchUi(st) {
  renderTopbar();
  const el = $('#sketchStatus');
  if (app.mode !== 'sketch') { el.hidden = true; $('#sketchInput').hidden = true; $('#sketchInput').dataset.kind = ''; return; }
  el.hidden = false;
  let txt, cls = '';
  if (st.conflicting && st.conflicting.length) { txt = 'Vincoli in conflitto'; cls = 'bad'; }
  else if (st.dof === 0) { txt = 'Completamente vincolato'; cls = 'ok'; }
  else txt = st.dof == null ? '' : `Liberi: ${st.dof}`;
  el.innerHTML = `<span class="dof ${cls}" title="Gradi di libertà: quanti movimenti restano da bloccare con quote e vincoli">${txt}</span><span class="hint">${esc(st.hint || '')}</span>`;
  renderSketchInput(st);
}

/** Sotto lo schizzo: barra delle misure (dito) o campi accanto al cursore (mouse); pannello dei comandi a campi. */
function renderSketchInput(st) {
  renderSketchPanel(st.cmd);
  const bar = $('#sketchInput'), dyn = $('#dynInput');
  const ex = st.exact;
  if (!ex || st.cmd) { hideBox(bar); hideBox(dyn); return; }
  if (st.lastPointer === 'mouse') { hideBox(bar); renderDyn(ex); } else { hideBox(dyn); renderBar(ex); }
}
function hideBox(el) { el.hidden = true; el.dataset.kind = ''; }

// --- barra in basso (dito / Pencil) ---
function renderBar(ex) {
  const bar = $('#sketchInput');
  bar.hidden = false;
  if (bar.dataset.kind === ex.kind) {
    // stessa forma: aggiorno solo i valori suggeriti, senza toccare quello che si sta scrivendo
    for (const f of ex.fields) { const i = bar.querySelector(`input[data-k="${f.k}"]`); if (i) i.placeholder = f.ph; }
    return;
  }
  bar.dataset.kind = ex.kind;
  bar.innerHTML = `<span class="lbl">Misure esatte</span>${ex.fields.map((f) => `<label class="xf"><span>${esc(f.label)}</span><input data-k="${f.k}" placeholder="${esc(f.ph)}" inputmode="decimal" autocomplete="off" autocapitalize="off" spellcheck="false"><em>${esc(f.unit)}</em></label>`).join('')}
    <button class="btn primary" data-xok>Inserisci</button>`;
}
$('#sketchInput').addEventListener('click', (e) => { if (e.target.closest('[data-xok]')) submitExact(); });
$('#sketchInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); submitExact(); } });
function submitExact() {
  const bar = $('#sketchInput');
  const vals = {};
  for (const i of bar.querySelectorAll('input')) vals[i.dataset.k] = i.value;
  if (!Object.values(vals).some((v) => v.trim())) { toast('Scrivi almeno un valore (vuoto = valore del disegno)', 'warn'); return; }
  const scope = evalParams(app.doc.params).scope;
  try {
    for (const v of Object.values(vals)) if (v.trim()) evaluate(v, scope);
  } catch (err) { toast(err.message, 'warn'); return; }
  bar.dataset.kind = '';
  if (sketcher.placeExact(vals, (x) => evaluate(x, scope))) {
    // se la catena di linee continua, il cursore torna sul primo campo
    setTimeout(() => { const i = $('#sketchInput input'); if (i) i.focus(); }, 30);
  }
}

// --- campi accanto al cursore (mouse e tastiera, come in Fusion) ---
function renderDyn(ex) {
  const dyn = $('#dynInput');
  dyn.hidden = false;
  if (dyn.dataset.kind !== ex.kind) {
    dyn.dataset.kind = ex.kind;
    dyn.innerHTML = ex.fields.map((f) => `<label class="df" title="${esc(f.label)}"><input data-k="${f.k}" inputmode="decimal" autocomplete="off" spellcheck="false" aria-label="${esc(f.label)}"><em>${esc(f.unit)}</em><b class="lock" title="Valore bloccato">${icon('fix', 12)}</b></label>`).join('')
      + '<span class="dhint">scrivi · Tab cambia campo · Invio conferma</span>';
  }
  const locks = sketcher.lockExpr || {};
  for (const f of ex.fields) {
    const i = dyn.querySelector(`input[data-k="${f.k}"]`);
    if (!i) continue;
    if (document.activeElement !== i) i.value = locks[f.k] ?? '';
    i.placeholder = f.ph;
    i.parentElement.classList.toggle('locked', locks[f.k] != null);
  }
  placeDyn();
}
function placeDyn() {
  const dyn = $('#dynInput');
  const a = sketcher.exactAnchor();
  if (!a || dyn.hidden) return;
  const x = Math.min(vp.w - dyn.offsetWidth - 8, a[0] + 22), y = Math.min(vp.h - dyn.offsetHeight - 8, a[1] + 22);
  dyn.style.left = Math.max(8, x) + 'px';
  dyn.style.top = Math.max(8, y) + 'px';
}
sketcher.onCursor = () => {
  if (app.mode !== 'sketch') return;
  const st = sketcher.statusInfo();
  if (st.exact && st.lastPointer === 'mouse' && !st.cmd) renderDyn(st.exact); else renderSketchInput(st);
};
const dynBox = $('#dynInput');
dynBox.addEventListener('input', (e) => {
  const i = e.target;
  if (!i.dataset.k) return;
  const ok = sketcher.setLock(i.dataset.k, i.value);
  i.parentElement.classList.toggle('bad', !ok);
  i.parentElement.classList.toggle('locked', ok && !!i.value.trim());
});
dynBox.addEventListener('keydown', (e) => {
  const inputs = [...dynBox.querySelectorAll('input')];
  const idx = inputs.indexOf(e.target);
  if (e.key === 'Tab') {
    e.preventDefault();
    const n = inputs[(idx + (e.shiftKey ? -1 : 1) + inputs.length) % inputs.length];
    n.focus(); n.select();
  } else if (e.key === 'Enter') { e.preventDefault(); commitDyn(); }
  else if (e.key === 'Escape') { e.preventDefault(); e.target.blur(); sketcher.cancel(); renderTopbar(); }
  e.stopPropagation();
});
function commitDyn() {
  const lock = { ...(sketcher.lockExpr || {}) };
  if (!Object.keys(lock).length) { toast('Scrivi un valore, oppure clicca nel disegno', 'warn'); return; }
  if (document.activeElement) document.activeElement.blur();
  dynBox.dataset.kind = '';
  const scope = evalParams(app.doc.params).scope;
  sketcher.placeExact(lock, (x) => evaluate(x, scope));
}
/** Da tastiera: un numero scritto mentre si disegna va subito nel primo campo. */
function dynTyping(e) {
  if (app.mode !== 'sketch' || dynBox.hidden || e.ctrlKey || e.metaKey || e.altKey) return false;
  if (!/^[0-9.,\-(]$/.test(e.key) && e.key !== 'Tab') return false;
  const inputs = [...dynBox.querySelectorAll('input')];
  if (!inputs.length) return false;
  e.preventDefault();
  const i = e.key === 'Tab' ? inputs[Math.min(1, inputs.length - 1)] : inputs[0];
  i.focus();
  if (e.key !== 'Tab') { i.value = e.key; sketcher.setLock(i.dataset.k, i.value); i.parentElement.classList.add('locked'); }
  return true;
}

// --- pannello dei comandi a campi dello schizzo (Specchia, Raccordo, Smusso, Offset) ---
function renderSketchPanel(info) {
  const el = $('#panel');
  if (app.mode !== 'sketch') return;
  if (!info) { el.hidden = true; el.innerHTML = ''; return; }
  const fk = document.activeElement && el.contains(document.activeElement) ? document.activeElement.dataset.skk : null;
  const caret = fk ? document.activeElement.selectionStart : null;
  el.hidden = false;
  const what = { curves: ['elemento', 'elementi'], line: ['linea', 'linee'], corner: ['angolo', 'angoli'], chain: ['tratto', 'tratti'] };
  const rows = info.fields.map((f) => {
    if (f.kind === 'pick') {
      const n = f.value.length, w = what[f.what], on = info.active === f.k;
      return `<div class="field"><label>${esc(f.label)}</label><div class="pick ${on ? 'on' : ''} ${n ? 'has' : ''}" data-skpick="${f.k}"><span class="dot"></span><span class="txt">${n ? `${n} ${n === 1 ? w[0] : w[1]}` : 'Nessuna selezione'}</span>${n ? `<button class="clr" data-skclear="${f.k}" aria-label="Svuota">${icon('close', 16)}</button>` : ''}</div>${on ? `<div class="val">${esc(f.hint)}</div>` : ''}</div>`;
    }
    if (f.kind === 'num') {
      return `<div class="field"><label>${esc(f.label)}</label><div class="num"><button data-skstep="-1" data-k="${f.k}" aria-label="meno">−</button><input data-skk="${f.k}" value="${esc(f.value)}" inputmode="decimal" autocomplete="off" autocapitalize="off" spellcheck="false"><span class="unit">${esc(f.unit)}</span><button data-skstep="1" data-k="${f.k}" aria-label="più">+</button></div></div>`;
    }
    return `<div class="field row"><label>${esc(f.label)}</label><button class="switch ${f.value ? 'on' : ''}" data-sktoggle="${f.k}" role="switch" aria-checked="${!!f.value}"><span></span></button></div>`;
  }).join('');
  el.innerHTML = `<header>${icon(SKETCH_CMDS[info.type].icon)}<h2>${esc(info.title)}</h2></header><div class="fields">${rows}</div>
    <footer><button class="btn" data-skcancel>Annulla</button><button class="btn primary" data-skok ${info.ready ? '' : 'disabled'}>OK</button></footer>`;
  if (fk) { const i = el.querySelector(`input[data-skk="${fk}"]`); if (i) { i.focus(); try { i.setSelectionRange(caret, caret); } catch { /* */ } } }
}
function sketchPanelClick(e) {
  const t = e.target.closest('button,[data-skpick]');
  if (!t) return;
  if (t.dataset.skcancel !== undefined) sketcher.cmdCancel();
  else if (t.dataset.skok !== undefined) sketcher.cmdApply();
  else if (t.dataset.skclear) { e.stopPropagation(); sketcher.cmdClear(t.dataset.skclear); }
  else if (t.dataset.skpick) sketcher.cmdSetActive(t.dataset.skpick);
  else if (t.dataset.skstep) {
    const k = t.dataset.k;
    let v;
    try { v = evaluate(sketcher.cmd.vals[k], evalParams(app.doc.params).scope); } catch { return; }
    const step = Math.abs(v) < 5 ? 0.5 : 1;
    sketcher.cmdSetVal(k, fmt(Math.max(step, v + step * Number(t.dataset.skstep))));
  } else if (t.dataset.sktoggle) sketcher.cmdSetVal(t.dataset.sktoggle, !sketcher.cmd.vals[t.dataset.sktoggle]);
  renderTopbar();
}

// ---------- pannello comando ----------
function renderPanel() {
  const el = $('#panel');
  if (app.mode !== 'command' || !app.cmd) { el.hidden = true; el.innerHTML = ''; return; }
  const c = app.cmd, d = c.draft;
  el.hidden = false;
  const scope = evalParams(app.doc.params).scope;
  const rows = visibleFields().map((f) => {
    if (f.kind === 'note') return `<p class="note">${esc(f.text)}</p>`;
    if (f.kind === 'num') {
      let ok = true, val = null;
      try { val = evaluate(d[f.k], scope); } catch { ok = false; }
      const showVal = ok && String(d[f.k]).trim() !== fmt(val);
      return `<div class="field"><label>${esc(f.label)}</label><div class="num ${ok ? '' : 'bad'}">
        <button data-step="-1" data-k="${f.k}" aria-label="meno">−</button>
        <input data-k="${f.k}" value="${esc(d[f.k])}" inputmode="decimal" autocomplete="off" autocapitalize="off" spellcheck="false">
        <span class="unit">${esc(f.unit || '')}</span>
        <button data-step="1" data-k="${f.k}" aria-label="più">+</button></div>
        ${showVal ? `<div class="val">= ${fmt(val)} ${esc(f.unit || '')}</div>` : ''}${ok ? '' : '<div class="val bad">Espressione non valida</div>'}</div>`;
    }
    if (f.kind === 'seg') {
      const cur = f.get ? f.get(d) : d[f.k];
      return `<div class="field"><label>${esc(f.label)}</label><div class="seg">${f.options.map(([v, l]) => `<button data-seg="${f.k}" data-v="${esc(v)}" class="${cur === v ? 'on' : ''}">${esc(l)}</button>`).join('')}</div></div>`;
    }
    if (f.kind === 'toggle') {
      return `<div class="field row"><label>${esc(f.label)}</label><button class="switch ${d[f.k] ? 'on' : ''}" data-toggle="${f.k}" role="switch" aria-checked="${!!d[f.k]}"><span></span></button></div>`;
    }
    if (f.kind === 'select') {
      const cur = f.get ? f.get(d) : d[f.k];
      return `<div class="field"><label>${esc(f.label)}</label><select data-sel="${f.k}">${f.options.length ? '' : '<option value="">(nessuna)</option>'}${f.options.map(([v, l]) => `<option value="${esc(v)}" ${cur === v ? 'selected' : ''}>${esc(l)}</option>`).join('')}</select></div>`;
    }
    if (f.kind === 'pick') {
      let n;
      if (f.pick === 'facePoint') n = d.place ? d.place.pts.length : 0;
      else { const v = f.get ? f.get(d) : d[f.k]; n = (v || []).length; }
      const active = c.active === f.k;
      const what = { region: ['profilo', 'profili'], edge: ['spigolo', 'spigoli'], face: ['faccia', 'facce'], planarFace: ['faccia', 'facce'], body: ['corpo', 'corpi'], sketchLine: ['linea', 'linee'], facePoint: ['foro', 'fori'] }[f.pick];
      const label = n ? `${n} ${n === 1 ? what[0] : what[1]}` : (f.optional ? 'Automatico' : 'Nessuna selezione');
      return `<div class="field"><label>${esc(f.label)}</label><div class="pick ${active ? 'on' : ''} ${n ? 'has' : ''}" data-pick="${f.k}">
        <span class="dot"></span><span class="txt">${esc(label)}</span>${n ? `<button class="clr" data-clear="${f.k}" aria-label="Svuota">${icon('close', 16)}</button>` : ''}</div>
        ${active ? `<div class="val">${esc(f.hint || 'Tocca nella vista')}</div>` : ''}</div>`;
    }
    return '';
  }).join('');
  const feats = draftFeatures();
  const err = app.preview ? feats.map((f) => app.preview.errors[f.id]).find(Boolean) : null;
  el.innerHTML = `<header>${icon(TYPE_ICONS[c.type])}<h2>${esc(c.spec.title)}${c.editing ? ' <small>modifica</small>' : ''}</h2></header>
    <div class="fields">${rows}</div>
    ${err ? `<div class="err">${esc(err)}</div>` : ''}
    <footer><button class="btn" data-act="cancel">Annulla</button><button class="btn primary" data-act="ok" ${readyToCommit(d) && !err ? '' : 'disabled'}>OK</button></footer>`;
  const af = activePickField();
  setHint(af ? (af.hint || 'Tocca nella vista') : '');
}

const panel = $('#panel');
panel.addEventListener('click', (e) => {
  if (app.mode === 'sketch') { sketchPanelClick(e); return; }
  const d = app.cmd && app.cmd.draft;
  if (!d) return;
  const t = e.target.closest('button,[data-pick]');
  if (!t) return;
  const fields = visibleFields();
  const fby = (k) => fields.find((f) => f.k === k);
  if (t.dataset.act === 'cancel') { cancelCommand(); return; }
  if (t.dataset.act === 'ok') { okCommand(); return; }
  if (t.dataset.clear) {
    e.stopPropagation();
    const f = fby(t.dataset.clear);
    if (f.pick === 'facePoint') { d.place.pts = []; }
    else if (f.set) f.set(d, []); else d[f.k] = [];
    if (f.pick === 'region') d.sketch = null;
  } else if (t.dataset.pick) {
    app.cmd.active = t.dataset.pick;
  } else if (t.dataset.step) {
    const k = t.dataset.k;
    const f = fby(k);
    let v = 0;
    try { v = evaluate(d[k], evalParams(app.doc.params).scope); } catch { return; }
    const step = f.unit === '°' ? 15 : f.unit === '' ? 1 : Math.abs(v) < 5 ? 0.5 : 1;
    d[k] = fmt(v + step * Number(t.dataset.step));
  } else if (t.dataset.seg) {
    const f = fby(t.dataset.seg);
    if (f.set) f.set(d, t.dataset.v); else d[f.k] = t.dataset.v;
    const nf = visibleFields().find((x) => x.kind === 'pick' && !(x.get ? x.get(d) : d[x.k] || []).length && !x.optional);
    if (nf) app.cmd.active = nf.k;
  } else if (t.dataset.toggle) {
    d[t.dataset.toggle] = !d[t.dataset.toggle];
  } else return;
  renderPanel();
  render3D();
  schedulePreview();
});
panel.addEventListener('input', (e) => {
  if (app.mode === 'sketch') { if (e.target.dataset.skk) sketcher.cmdSetVal(e.target.dataset.skk, e.target.value); return; }
  const d = app.cmd && app.cmd.draft;
  if (!d) return;
  if (e.target.dataset.k) {
    d[e.target.dataset.k] = e.target.value;
    clearTimeout(panel._t);
    panel._t = setTimeout(() => { const pos = e.target.selectionStart; const k = e.target.dataset.k; renderPanel(); const inp = panel.querySelector(`input[data-k="${k}"]`); if (inp) { inp.focus(); try { inp.setSelectionRange(pos, pos); } catch { /* */ } } schedulePreview(); }, 350);
  }
});
panel.addEventListener('change', (e) => {
  const d = app.cmd && app.cmd.draft;
  if (!d || !e.target.dataset.sel) return;
  const f = visibleFields().find((x) => x.k === e.target.dataset.sel);
  if (f.set) f.set(d, e.target.value); else d[f.k] = e.target.value;
  renderPanel();
  schedulePreview();
});
panel.addEventListener('keydown', (e) => {
  if (app.mode === 'sketch') { if (e.key === 'Enter' && e.target.tagName === 'INPUT') { e.preventDefault(); e.target.blur(); sketcher.cmdApply(); renderTopbar(); } return; }
  if (e.key === 'Enter' && e.target.tagName === 'INPUT') { e.target.blur(); refresh().then(() => { if (readyToCommit(app.cmd?.draft || {})) okCommand(); }); }
});

// ---------- cronologia (timeline) ----------
function renderTimeline() {
  const el = $('#timeline');
  const doc = app.doc;
  const errs = (app.model && app.model.errors) || {};
  const rb = doc.rollback;
  const items = doc.features.map((f, i) => {
    const cls = ['tl-item', errs[f.id] ? 'err' : '', f.suppressed ? 'sup' : '', rb != null && i >= rb ? 'after' : '', app.cmd && app.cmd.editing && app.cmd.index === i ? 'on' : ''].join(' ');
    const marker = rb != null && rb === i ? '<span class="tl-marker" title="Fine cronologia"></span>' : '';
    return `${marker}<button class="${cls}" data-f="${i}" title="${esc(f.name)}${errs[f.id] ? ' — ' + esc(errs[f.id]) : ''}">${icon(TYPE_ICONS[f.type] || 'body', 20)}<span>${esc(f.name)}</span></button>`;
  }).join('');
  const end = rb != null ? `<button class="tl-end" data-end="1">${icon('rollback', 18)}<span>Vai alla fine</span></button>` : '';
  el.innerHTML = `<div class="tl-track">${items || '<span class="tl-empty">La cronologia è vuota: inizia con uno schizzo</span>'}${rb == null && items ? '<span class="tl-marker" title="Fine cronologia"></span>' : ''}${end}</div>`;
  const on = el.querySelector('.tl-item.on');
  if (on) on.scrollIntoView({ inline: 'nearest', block: 'nearest' });
  renderWelcome();
}
$('#timeline').addEventListener('click', (e) => {
  if (app.mode !== 'model') return;
  const end = e.target.closest('[data-end]');
  if (end) { commit((d) => { d.rollback = null; }); return; }
  const b = e.target.closest('[data-f]');
  if (!b) return;
  const i = +b.dataset.f;
  const f = app.doc.features[i];
  const err = app.model && app.model.errors[f.id];
  popMenu(b, [
    err ? { label: err, cls: 'err', disabled: true } : null,
    { label: 'Modifica', icon: 'sketch', act: () => editFeature(f) },
    { label: 'Rinomina', act: async () => { const v = await promptText('Nome della feature', f.name); if (v) commit((d) => { d.features[i].name = v; }, { rebuild: false }); } },
    { label: f.suppressed ? 'Riattiva' : 'Sopprimi', act: () => commit((d) => { d.features[i].suppressed = !f.suppressed; }) },
    { label: 'Riporta la cronologia qui', icon: 'rollback', act: () => commit((d) => { d.rollback = i + 1 >= d.features.length ? null : i + 1; }) },
    f.type === 'sketch' ? { label: sketchVisible(f) ? 'Nascondi schizzo' : 'Mostra schizzo', act: () => commit((d) => { d.ui.sketchVis[f.id] = !sketchVisible(f); }, { rebuild: false }) } : null,
    { label: 'Elimina', icon: 'trash', cls: 'danger', act: () => deleteFeature(i) },
  ]);
});
function editFeature(f) {
  if (f.type === 'sketch') editSketch(f);
  else if (f.type === 'import') toast('Le importazioni non hanno parametri da modificare');
  else openCommand(f.type, f);
}
function deleteFeature(i) {
  const f = app.doc.features[i];
  const users = app.doc.features.filter((x) => x.sketch === f.id || (x.src && x.src.feature === f.id));
  commit((d) => {
    d.features.splice(i, 1);
    // il foro creato su faccia porta con sé il suo schizzo
    if (f.type === 'hole' && f.sketch) {
      const j = d.features.findIndex((x) => x.id === f.sketch);
      if (j >= 0 && d.features[j].name.startsWith('Schizzo foro') && !d.features.some((x) => x.sketch === f.sketch)) d.features.splice(j, 1);
    }
    if (d.rollback != null && d.rollback > i) d.rollback -= 1;
    if (d.rollback != null && d.rollback >= d.features.length) d.rollback = null;
  });
  if (users.length) toast(`Attenzione: ${users.map((u) => u.name).join(', ')} dipendeva da ${f.name}`, 'warn');
}

// ---------- browser (corpi e schizzi) ----------
function renderBrowser() {
  const el = $('#browser');
  if (!app.doc) return;
  const bodies = (app.model && app.model.bodies) || [];
  const ui = app.doc.ui;
  const lim = insertIndex();
  const sketches = app.doc.features.slice(0, lim).filter((f) => f.type === 'sketch');
  const eye = (on) => icon(on ? 'eye' : 'eyeoff', 18);
  el.innerHTML = `
    <section><h3>Corpi <small>${bodies.length}</small></h3>
    ${bodies.map((b, i) => `<div class="br-row ${app.selBody === b.id ? 'on' : ''}"><button class="eye" data-hide="${b.id}">${eye(!ui.hidden[b.id])}</button>
      <span class="sw" style="background:${esc(ui.colors[b.id] || bodyColor(i))}"></span>
      <button class="name" data-body="${b.id}">${esc(ui.names[b.id] || b.name)}</button></div>`).join('') || '<p class="empty">Nessun corpo</p>'}
    </section>
    <section><h3>Schizzi <small>${sketches.length}</small></h3>
    ${sketches.map((f) => `<div class="br-row"><button class="eye" data-skvis="${f.id}">${eye(sketchVisible(f))}</button>
      <button class="name" data-sketch="${f.id}">${esc(f.name)}</button></div>`).join('') || '<p class="empty">Nessuno schizzo</p>'}
    </section>
    <section><h3>Origine</h3>
      <div class="br-row"><button class="eye" data-planes="1">${eye(!!ui.showPlanes)}</button><span class="name">Piani XY · XZ · YZ</span></div>
      <div class="br-row"><button class="eye" data-grid="1">${eye(ui.grid !== false)}</button><span class="name">Griglia</span></div>
    </section>
    <section><h3>Parametri <small>${app.doc.params.length}</small></h3>
      ${app.doc.params.map((p) => `<div class="br-row param"><span class="name">${esc(p.name)}</span><span class="pv">${esc(p.expr)}</span></div>`).join('')}
      <button class="btn small" data-params="1">${icon('params', 16)} Gestisci parametri</button>
    </section>`;
}
$('#browser').addEventListener('click', (e) => {
  const t = e.target.closest('button');
  if (!t || app.mode !== 'model') return;
  const ui = app.doc.ui;
  if (t.dataset.hide) { const id = t.dataset.hide; commit((d) => { d.ui.hidden[id] = !ui.hidden[id]; }, { rebuild: false }); render3D(); }
  else if (t.dataset.skvis) { const f = app.doc.features.find((x) => x.id === t.dataset.skvis); commit((d) => { d.ui.sketchVis[f.id] = !sketchVisible(f); }, { rebuild: false }); render3D(); }
  else if (t.dataset.planes) { commit((d) => { d.ui.showPlanes = !ui.showPlanes; }, { rebuild: false }); render3D(); }
  else if (t.dataset.grid) { commit((d) => { d.ui.grid = ui.grid === false; }, { rebuild: false }); vp.setGrid(app.doc.ui.grid !== false); }
  else if (t.dataset.params) openParams();
  else if (t.dataset.sketch) { const f = app.doc.features.find((x) => x.id === t.dataset.sketch); editSketch(f); closeDrawer(); }
  else if (t.dataset.body) bodyMenu(t, t.dataset.body);
});
function bodyMenu(anchor, id) {
  const bodies = app.model.bodies;
  const i = bodies.findIndex((b) => b.id === id);
  const b = bodies[i];
  const name = app.doc.ui.names[id] || b.name;
  app.selBody = id; render3D(); renderBrowser();
  popMenu(anchor, [
    { label: 'Rinomina', act: async () => { const v = await promptText('Nome del corpo', name); if (v) commit((d) => { d.ui.names[id] = v; }, { rebuild: false }); render3D(); } },
    { label: 'Colore', act: () => pickColor(id, i) },
    { label: 'Proprietà', icon: 'info', act: () => bodyInfo(id, name) },
    { label: 'Esporta questo corpo', icon: 'export', act: () => openExport([id]) },
  ]);
}
const PALETTE = ['#b9c3cf', '#d9b38c', '#9fc7a8', '#c9a3c9', '#e0c56e', '#8fb6d9', '#d99a9a', '#a8b38f', '#5d6b7a', '#e8e4da', '#3c3c3c', '#d4553f'];
function pickColor(id, i) {
  modal(`<h2>Colore</h2><div class="swatches">${PALETTE.map((c) => `<button style="background:${c}" data-c="${c}"></button>`).join('')}</div><footer><button class="btn" data-close>Chiudi</button></footer>`, (el, close) => {
    el.addEventListener('click', (e) => { const b = e.target.closest('[data-c]'); if (b) { commit((d) => { d.ui.colors[id] = b.dataset.c; }, { rebuild: false }); render3D(); close(); } });
  });
  void i;
}
async function bodyInfo(id, name) {
  try {
    const [m] = await cad.call('measure', { ids: [id] });
    const sz = m.bbox ? m.bbox[1].map((v, k) => v - m.bbox[0][k]) : null;
    modal(`<h2>${esc(name)}</h2><dl class="props">
      <dt>Volume</dt><dd>${m.volume != null ? fmt(m.volume / 1000, 2) + ' cm³' : '—'}</dd>
      <dt>Area superficie</dt><dd>${m.area != null ? fmt(m.area / 100, 2) + ' cm²' : '—'}</dd>
      <dt>Ingombro</dt><dd>${sz ? sz.map((v) => fmt(v, 2)).join(' × ') + ' mm' : '—'}</dd>
      <dt>Peso in PLA</dt><dd>${m.volume != null ? fmt((m.volume / 1000) * 1.24, 1) + ' g' : '—'} <small>(pieno, 1,24 g/cm³)</small></dd>
      <dt>Peso in PETG</dt><dd>${m.volume != null ? fmt((m.volume / 1000) * 1.27, 1) + ' g' : '—'}</dd></dl>
      <footer><button class="btn" data-close>Chiudi</button></footer>`);
  } catch (e) { toast(e.message, 'warn'); }
}

// ---------- parametri ----------
function openParams() {
  let rows = clone(app.doc.params);
  modal(`<h2>Parametri</h2><p class="note">Usa i nomi nelle quote e nei campi numerici, ad es. <code>larghezza/2 + 3</code>.</p><div class="params"></div>
    <button class="btn small" data-add>${icon('plus', 16)} Aggiungi parametro</button>
    <footer><button class="btn" data-close>Annulla</button><button class="btn primary" data-apply>Applica</button></footer>`, (el, close) => {
    const draw = () => {
      const { scope, errors } = evalParams(rows);
      el.querySelector('.params').innerHTML = rows.length ? `<div class="prow head"><span>Nome</span><span>Espressione</span><span>Valore</span><span></span></div>` + rows.map((p, i) => `
        <div class="prow"><input data-i="${i}" data-f="name" value="${esc(p.name)}" autocapitalize="off" autocomplete="off" spellcheck="false" class="${isValidName(p.name) && rows.filter((q) => q.name === p.name).length === 1 ? '' : 'bad'}">
        <input data-i="${i}" data-f="expr" value="${esc(p.expr)}" inputmode="decimal" autocapitalize="off" autocomplete="off" spellcheck="false" class="${errors[p.name] ? 'bad' : ''}">
        <span class="pv">${errors[p.name] ? '⚠' : fmt(scope[p.name])}</span><button class="icon" data-del="${i}" aria-label="Elimina">${icon('trash', 18)}</button></div>`).join('') : '<p class="empty">Nessun parametro</p>';
    };
    draw();
    el.addEventListener('input', (e) => { const i = e.target.dataset.i; if (i == null) return; rows[+i][e.target.dataset.f] = e.target.value.trim(); clearTimeout(el._t); el._t = setTimeout(() => { const a = document.activeElement; const sel = a && a.dataset ? [a.dataset.i, a.dataset.f, a.selectionStart] : null; draw(); if (sel) { const n = el.querySelector(`input[data-i="${sel[0]}"][data-f="${sel[1]}"]`); if (n) { n.focus(); try { n.setSelectionRange(sel[2], sel[2]); } catch { /* */ } } } }, 400); });
    el.addEventListener('click', (e) => {
      const t = e.target.closest('button');
      if (!t) return;
      if (t.dataset.add !== undefined) { let k = rows.length + 1; while (rows.some((p) => p.name === `p${k}`)) k++; rows.push({ name: `p${k}`, expr: '10' }); draw(); }
      else if (t.dataset.del) { rows.splice(+t.dataset.del, 1); draw(); }
      else if (t.dataset.apply !== undefined) {
        const bad = rows.find((p) => !isValidName(p.name) || rows.filter((q) => q.name === p.name).length > 1);
        if (bad) { toast(`Nome non valido: ${bad.name}`, 'warn'); return; }
        const { scope } = evalParams(rows);
        commit((d) => {
          d.params = rows;
          for (const f of d.features) if (f.type === 'sketch' && (f.cons || []).some((c) => c.expr != null && !Number.isFinite(Number(c.expr)))) {
            const r = solve(f, scope);
            if (r.ok) f.geo = r.geo;
          }
        });
        close();
      }
    });
  });
}

// ---------- import / export ----------
function importModel() {
  const inp = document.createElement('input');
  inp.type = 'file';
  inp.accept = '.stl,.step,.stp,.svg';
  inp.onchange = async () => {
    const file = inp.files[0];
    if (!file) return;
    if (/\.svg$/i.test(file.name)) { importSvg(file); return; }
    if (file.size > 25e6) { toast('File troppo grande (max 25 MB)', 'warn'); return; }
    const buf = new Uint8Array(await file.arrayBuffer());
    let bin = '';
    for (let i = 0; i < buf.length; i += 0x8000) bin += String.fromCharCode.apply(null, buf.subarray(i, i + 0x8000));
    const format = /\.stl$/i.test(file.name) ? 'stl' : 'step';
    const f = { id: fid(), type: 'import', name: file.name, format, fname: file.name, data: btoa(bin), hash: `${file.size}-${file.lastModified}` };
    commit((d) => { d.features.splice(insertIndex(), 0, f); if (d.rollback != null) d.rollback += 1; });
  };
  inp.click();
}

/** SVG → nuovo schizzo: piano, dimensione finale e posizione si scelgono nella finestra. */
async function importSvg(file) {
  let data;
  try { data = readSvg(await file.text()); } catch (e) { toast(e.message, 'warn'); return; }
  const { box } = data;
  let plane = 'XY', anchor = 'center';
  const name = file.name.replace(/\.svg$/i, '');
  modal(`<h2>Importa SVG come schizzo</h2>
    <p class="note"><b>${esc(file.name)}</b> · misure nel file: ${fmt(box.w, 2)} × ${fmt(box.h, 2)} mm${data.skipped ? ` · ${data.skipped} elementi non importabili (testi o riferimenti: convertili in tracciati)` : ''}</p>
    <div class="field"><label>Piano</label><div class="seg wide"><button data-pl="XY" class="on">XY <small>pianta</small></button><button data-pl="XZ">XZ <small>fronte</small></button><button data-pl="YZ">YZ <small>lato</small></button></div></div>
    <div class="field"><label>Larghezza finale (le proporzioni restano)</label><div class="num"><input data-w value="${fmt(box.w, 2)}" inputmode="decimal" autocomplete="off"><span class="unit">mm</span></div><div class="val" data-h></div></div>
    <div class="field"><label>Posizione</label><div class="seg"><button data-an="center" class="on">Centrato sull'origine</button><button data-an="corner">Angolo in basso a sinistra sull'origine</button></div></div>
    <div class="field row"><label>Blocca la forma importata <small class="note">(consigliato: lo schizzo resta veloce)</small></label><button class="switch on" data-fix role="switch"><span></span></button></div>
    <footer><button class="btn" data-close>Annulla</button><button class="btn primary" data-go>Importa</button></footer>`, (el, close) => {
    const w = el.querySelector('[data-w]'), hEl = el.querySelector('[data-h]');
    const upd = () => { const v = parseFloat(w.value.replace(',', '.')); hEl.textContent = v > 0 ? `altezza ${fmt((box.h * v) / box.w, 2)} mm` : 'valore non valido'; hEl.classList.toggle('bad', !(v > 0)); };
    upd();
    w.oninput = upd;
    el.addEventListener('click', (e) => {
      const t = e.target.closest('button');
      if (!t) return;
      if (t.dataset.pl) { plane = t.dataset.pl; el.querySelectorAll('[data-pl]').forEach((b) => b.classList.toggle('on', b === t)); }
      else if (t.dataset.an) { anchor = t.dataset.an; el.querySelectorAll('[data-an]').forEach((b) => b.classList.toggle('on', b === t)); }
      else if (t.dataset.fix !== undefined) t.classList.toggle('on');
      else if (t.dataset.go !== undefined) {
        const v = parseFloat(w.value.replace(',', '.'));
        if (!(v > 0)) return;
        const { geo, stats } = svgToSketch(data, { scale: box.w > 0 ? v / box.w : 1, anchor, fixed: el.querySelector('[data-fix]').classList.contains('on') });
        const sk = { id: fid(), type: 'sketch', name, plane: { std: plane }, geo: [...newSketchGeo(), ...geo], cons: [] };
        close();
        commit((d) => { d.features.splice(insertIndex(), 0, sk); if (d.rollback != null) d.rollback += 1; });
        toast(`Importati ${stats.lines} segmenti, ${stats.arcs} archi, ${stats.circles} cerchi`, 'ok');
        showQuick(sk);
        vp.view(plane === 'XY' ? 'top' : plane === 'XZ' ? 'front' : 'right');
      }
    });
  });
}

function openExport(ids = null) {
  const bodies = ((app.model && app.model.bodies) || []).filter((b) => !app.doc.ui.hidden[b.id]);
  if (!bodies.length) { toast('Non ci sono corpi visibili da esportare', 'warn'); return; }
  const chosen = new Set(ids || bodies.map((b) => b.id));
  let fmtSel = 'threemf';
  modal(`<h2>Esporta</h2>
    <div class="field"><label>Formato</label><div class="seg wide">
      <button data-fmt="threemf" class="on">3MF <small>stampa 3D</small></button><button data-fmt="stl">STL</button><button data-fmt="step">STEP <small>CAD</small></button></div></div>
    <p class="note fmt-note">Il 3MF tiene separati i corpi: in Bambu Studio diventano oggetti distinti.</p>
    <div class="field"><label>Corpi</label><div class="checks">${bodies.map((b) => `<label class="chk"><input type="checkbox" value="${b.id}" ${chosen.has(b.id) ? 'checked' : ''}> ${esc(app.doc.ui.names[b.id] || b.name)}</label>`).join('')}</div></div>
    <div class="out"></div>
    <footer><button class="btn" data-close>Chiudi</button><button class="btn primary" data-go>Prepara file</button></footer>`, (el) => {
    const notes = { threemf: 'Il 3MF tiene separati i corpi: in Bambu Studio diventano oggetti distinti.', stl: 'L\'STL unisce i corpi scelti in un\'unica mesh.', step: 'Lo STEP conserva le superfici esatte: si riapre in Fusion, FreeCAD, Onshape.' };
    el.addEventListener('click', async (e) => {
      const t = e.target.closest('button');
      if (!t) return;
      if (t.dataset.fmt) { fmtSel = t.dataset.fmt; el.querySelectorAll('[data-fmt]').forEach((b) => b.classList.toggle('on', b === t)); el.querySelector('.fmt-note').textContent = notes[fmtSel]; return; }
      if (t.dataset.go === undefined) return;
      const sel = [...el.querySelectorAll('.checks input:checked')].map((i) => i.value);
      if (!sel.length) { toast('Scegli almeno un corpo', 'warn'); return; }
      t.disabled = true;
      const out = el.querySelector('.out');
      out.innerHTML = '<p class="note">Preparo il file…</p>';
      try {
        const format = fmtSel === 'threemf' ? '3mf' : fmtSel;
        const bytes = await cad.call('export', { format, ids: sel, name: app.doc.name });
        const ext = { '3mf': '3mf', stl: 'stl', step: 'step' }[format];
        const mime = { '3mf': 'model/3mf', stl: 'model/stl', step: 'model/step' }[format];
        const base = sel.length === 1 ? (app.doc.ui.names[sel[0]] || bodies.find((b) => b.id === sel[0]).name) : app.doc.name;
        const file = new File([bytes], `${safeName(base)}.${ext}`, { type: mime });
        out.innerHTML = `<div class="ready">${icon('check', 18)} <b>${esc(file.name)}</b> <small>${fmt(file.size / 1024 / 1024, 2)} MB</small></div><div class="ready-act">${canShare(file) ? '<button class="btn primary" data-share>Condividi / Salva su File</button>' : ''}<button class="btn" data-dl>Scarica</button></div>`;
        out.querySelector('[data-dl]').onclick = () => download(file);
        const sh = out.querySelector('[data-share]');
        if (sh) sh.onclick = () => navigator.share({ files: [file], title: file.name }).catch(() => { /* annullato */ });
      } catch (err) { out.innerHTML = `<p class="err">${esc(err.message)}</p>`; }
      t.disabled = false;
    });
  });
}
const safeName = (s) => String(s).replace(/[\\/:*?"<>|]+/g, '_').trim() || 'modello';
function canShare(file) { try { return !!(navigator.canShare && navigator.canShare({ files: [file] }) && matchMedia('(pointer: coarse)').matches); } catch { return false; } }
function download(file) {
  const url = URL.createObjectURL(file);
  const a = document.createElement('a');
  a.href = url; a.download = file.name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

// ---------- progetti ----------
async function openProjects() {
  const list = await store.listProjects();
  modal(`<h2>Progetti</h2>
    <div class="proj-actions"><button class="btn primary" data-new>${icon('plus', 16)} Nuovo</button><button class="btn" data-import>${icon('import', 16)} Apri file .officina</button><button class="btn" data-export>${icon('export', 16)} Salva copia su file</button></div>
    <div class="projects">${list.map((p) => `<div class="proj ${p.id === app.project.id ? 'on' : ''}"><button class="name" data-open="${p.id}"><b>${esc(p.name)}</b><small>${p.features} feature · ${new Date(p.updated).toLocaleString('it-IT', { dateStyle: 'short', timeStyle: 'short' })}</small></button>
      <button class="icon" data-dup="${p.id}" title="Duplica">${icon('plus', 18)}</button><button class="icon" data-del="${p.id}" title="Elimina">${icon('trash', 18)}</button></div>`).join('')}</div>
    <footer><button class="btn" data-close>Chiudi</button></footer>`, (el, close) => {
    el.addEventListener('click', async (e) => {
      const t = e.target.closest('button');
      if (!t) return;
      if (t.dataset.new !== undefined) {
        const name = await promptText('Nome del nuovo progetto', 'Nuovo progetto');
        if (!name) return;
        close();
        await openProject({ id: store.newId(), name, doc: store.newDoc(name) });
      } else if (t.dataset.open) {
        if (t.dataset.open === app.project.id) { close(); return; }
        const p = await store.loadProject(t.dataset.open);
        close();
        await openProject(p);
      } else if (t.dataset.dup) {
        const p = await store.loadProject(t.dataset.dup);
        const name = `${p.name} (copia)`;
        p.doc.name = name;
        await store.saveProject({ id: store.newId(), name, doc: p.doc });
        close(); openProjects();
      } else if (t.dataset.del) {
        if (t.dataset.confirm !== '1') { t.dataset.confirm = '1'; t.classList.add('danger'); t.title = 'Tocca di nuovo per eliminare'; toast('Tocca di nuovo il cestino per eliminare', 'warn'); return; }
        await store.deleteProject(t.dataset.del);
        if (t.dataset.del === app.project.id) {
          const rest = await store.listProjects();
          close();
          if (rest.length) await openProject(await store.loadProject(rest[0].id));
          else await openProject({ id: store.newId(), name: 'Nuovo progetto', doc: store.newDoc('Nuovo progetto') });
        } else { close(); openProjects(); }
      } else if (t.dataset.export !== undefined) {
        const file = new File([JSON.stringify(app.doc)], `${safeName(app.doc.name)}.officina`, { type: 'application/json' });
        if (canShare(file)) navigator.share({ files: [file] }).catch(() => download(file)); else download(file);
      } else if (t.dataset.import !== undefined) {
        const inp = document.createElement('input');
        inp.type = 'file';
        inp.accept = '.officina,.json,application/json';
        inp.onchange = async () => {
          try {
            const doc = JSON.parse(await inp.files[0].text());
            if (doc.app !== 'officina') throw new Error('Non è un progetto Officina');
            close();
            await openProject({ id: store.newId(), name: doc.name, doc });
          } catch (err) { toast(err.message, 'warn'); }
        };
        inp.click();
      }
    });
  });
}

// ---------- finestre, menu, avvisi ----------
function modal(html, setup) {
  const host = $('#modal');
  host.hidden = false;
  host.innerHTML = `<div class="sheet" role="dialog" aria-modal="true">${html}</div>`;
  const el = host.firstElementChild;
  const close = () => { host.hidden = true; host.innerHTML = ''; document.removeEventListener('keydown', onKey); };
  const onKey = (e) => { if (e.key === 'Escape') close(); };
  document.addEventListener('keydown', onKey);
  host.onclick = (e) => { if (e.target === host || e.target.closest('[data-close]')) close(); };
  if (setup) setup(el, close);
  return close;
}
function promptText(title, value) {
  return new Promise((resolve) => {
    let done = false;
    const close = modal(`<h2>${esc(title)}</h2><input class="big" value="${esc(value)}" autocomplete="off"><footer><button class="btn" data-close>Annulla</button><button class="btn primary" data-ok>OK</button></footer>`, (el, cl) => {
      const inp = el.querySelector('input');
      setTimeout(() => { inp.focus(); inp.select(); }, 30);
      const ok = () => { done = true; resolve(inp.value.trim()); cl(); };
      el.querySelector('[data-ok]').onclick = ok;
      inp.onkeydown = (e) => { if (e.key === 'Enter') ok(); };
    });
    const host = $('#modal');
    const obs = new MutationObserver(() => { if (host.hidden) { obs.disconnect(); if (!done) resolve(null); } });
    obs.observe(host, { attributes: true });
    void close;
  });
}
function promptValue({ title, value, options, option, allowDelete }) {
  return new Promise((resolve) => {
    let done = false, opt = option;
    modal(`<h2>${esc(title)}</h2>
      ${options ? `<div class="seg wide">${options.map(([v, l]) => `<button data-o="${v}" class="${v === option ? 'on' : ''}">${l}</button>`).join('')}</div>` : ''}
      <input class="big" value="${esc(value)}" inputmode="decimal" autocomplete="off" autocapitalize="off" spellcheck="false">
      <div class="val"></div>
      ${app.doc.params.length ? `<div class="chips">${app.doc.params.map((p) => `<button class="chip" data-p="${esc(p.name)}">${esc(p.name)}</button>`).join('')}</div>` : ''}
      <footer>${allowDelete ? `<button class="btn danger" data-rm>${icon('trash', 16)} Elimina quota</button>` : ''}<span class="grow"></span><button class="btn" data-close>Annulla</button><button class="btn primary" data-ok>OK</button></footer>`, (el, cl) => {
      const inp = el.querySelector('input');
      const val = el.querySelector('.val');
      const upd = () => { try { const v = evaluate(inp.value, evalParams(app.doc.params).scope); val.textContent = String(inp.value).trim() === fmt(v) ? '' : `= ${fmt(v)}`; val.classList.remove('bad'); } catch (e) { val.textContent = e.message; val.classList.add('bad'); } };
      upd();
      setTimeout(() => { inp.focus(); inp.select(); }, 30);
      inp.oninput = upd;
      const ok = () => { try { evaluate(inp.value, evalParams(app.doc.params).scope); } catch { return; } done = true; resolve({ value: inp.value.trim(), option: opt }); cl(); };
      inp.onkeydown = (e) => { if (e.key === 'Enter') ok(); };
      el.addEventListener('click', (e) => {
        const t = e.target.closest('button');
        if (!t) return;
        if (t.dataset.ok !== undefined) ok();
        else if (t.dataset.rm !== undefined) { done = true; resolve({ remove: true }); cl(); }
        else if (t.dataset.o) { opt = t.dataset.o; el.querySelectorAll('[data-o]').forEach((b) => b.classList.toggle('on', b === t)); }
        else if (t.dataset.p) { const s = inp.selectionStart ?? inp.value.length; inp.value = inp.value.slice(0, s) + t.dataset.p + inp.value.slice(inp.selectionEnd ?? s); inp.focus(); upd(); }
      });
    });
    const host = $('#modal');
    const obs = new MutationObserver(() => { if (host.hidden) { obs.disconnect(); if (!done) resolve(null); } });
    obs.observe(host, { attributes: true });
  });
}
function popMenu(anchor, items) {
  const host = $('#popover');
  const list = items.filter(Boolean);
  host.innerHTML = `<div class="menu">${list.map((it, i) => `<button data-mi="${i}" class="${it.cls || ''}" ${it.disabled ? 'disabled' : ''}>${it.disabled ? '' : it.icon ? icon(it.icon, 18) : '<span class="ic-pad"></span>'}<span>${esc(it.label)}</span></button>`).join('')}</div>`;
  host.hidden = false;
  const m = host.firstElementChild;
  const r = anchor.getBoundingClientRect();
  const mw = m.offsetWidth, mh = m.offsetHeight;
  let x = Math.min(window.innerWidth - mw - 8, Math.max(8, r.left));
  let y = r.top - mh - 6;
  if (y < 8) y = Math.min(window.innerHeight - mh - 8, r.bottom + 6);
  m.style.left = x + 'px'; m.style.top = y + 'px';
  host.onclick = (e) => {
    const b = e.target.closest('[data-mi]');
    host.hidden = true; host.innerHTML = '';
    if (b) list[+b.dataset.mi].act();
  };
}
function toast(msg, kind = '') {
  const el = document.createElement('div');
  el.className = `toast ${kind}`;
  el.textContent = msg;
  $('#toasts').appendChild(el);
  setTimeout(() => el.classList.add('out'), 3200);
  setTimeout(() => el.remove(), 3700);
}
function setHint(t) { const el = $('#hint'); el.textContent = t || ''; el.hidden = !t; }
function setStatus(t, kind = '') { const el = $('#status'); el.textContent = t; el.className = kind; }
function setBusy(b) { document.body.classList.toggle('busy', b); }
function setLoading(t, err = false) {
  const el = $('#loading');
  if (!t) { el.hidden = true; return; }
  el.hidden = false;
  el.querySelector('p').textContent = t;
  el.classList.toggle('err', err);
}
const openDrawer = () => { $('#browser').classList.add('open'); };
const closeDrawer = () => { $('#browser').classList.remove('open'); };

function renderAll() {
  renderTopbar();
  renderPanel();
  renderTimeline();
  renderBrowser();
  document.body.dataset.mode = app.mode;
  $('#sketchStatus').hidden = app.mode !== 'sketch';
  if (app.mode !== 'model') { hideQuick(); $('#selbar').hidden = true; }
  if (app.mode === 'model' || app.mode === 'sketch') setHint('');
  renderWelcome();
}

// ---------- benvenuto e guida ----------
function renderWelcome() {
  const el = $('#welcome');
  const show = app.mode === 'model' && app.doc && app.doc.features.length === 0;
  el.hidden = !show;
  if (!show || el.dataset.ready) return;
  el.dataset.ready = '1';
  el.innerHTML = `<h2>Come si crea un pezzo</h2>
    <ol>
      <li>${icon('sketch')}<div><b>Schizzo</b><span>Scegli un piano e disegna una forma chiusa: linee, rettangoli, cerchi. Dai le misure con <i>Quota</i>.</span></div></li>
      <li>${icon('extrude')}<div><b>Estrudi</b><span>Tocca la forma azzurra e scegli lo spessore: diventa un solido.</span></div></li>
      <li>${icon('fillet')}<div><b>Rifinisci</b><span>Raccordi, fori, gusci… ogni passo resta nella cronologia in basso e si può modificare.</span></div></li>
      <li>${icon('export')}<div><b>Esporta</b><span>3MF per Bambu Studio, STL o STEP.</span></div></li>
    </ol>
    <div class="w-act"><button class="btn primary" data-wstart>${icon('sketch', 18)} Inizia uno schizzo</button><button class="btn" data-whelp>Guida completa</button></div>`;
  el.onclick = (e) => {
    if (e.target.closest('[data-wstart]')) beginSketchCommand();
    else if (e.target.closest('[data-whelp]')) openHelp();
  };
}

const HELP = {
  model: [
    ['Muoversi', [
      ['view', 'Un dito ruota, due dita spostano e ingrandiscono. In basso a sinistra: viste Alto, Fronte, Destra e Adatta.'],
      ['tree', 'Il pannello Corpi elenca corpi, schizzi e parametri: con l\'occhio li mostri o nascondi.'],
    ]],
    ['Creare', [
      ['sketch', 'Schizzo: tocca un piano (o una faccia piana) e disegna. Si chiude con «Fine schizzo».'],
      ['extrude', 'Estrudi: tocca le forme azzurre (diventano blu, poi scegli Estrudi dalla barra in basso) e regola lo spessore. «Taglia» la scava dentro un corpo.'],
      ['move', 'Frecce di controllo: in Estrudi, Foro, Raccordo, Smusso, Guscio, Rivoluzione (arco) e Sposta (X/Y/Z) trascina la freccia blu per cambiare la misura; il passo si adatta allo zoom. Grigia = misura legata a un parametro, si cambia nel pannello.'],
      ['revolve', 'Rivoluzione: fa ruotare una forma attorno a un asse (X, Y, Z o una linea dello schizzo), come al tornio.'],
      ['hole', 'Foro: tocca una faccia piana dove forare, anche più punti. Diametro, profondità o passante, lamatura.'],
      ['svg', 'Importa: STL e STEP diventano corpi; un SVG diventa uno schizzo (scegli piano e larghezza), pronto da estrudere.'],
    ]],
    ['Modificare', [
      ['fillet', 'Raccordo e Smusso: tocca gli spigoli da arrotondare o smussare. Puoi anche selezionarli prima nel modello (tocco sugli spigoli) e poi premere il comando, o usare i pulsanti della barra di selezione.'],
      ['shell', 'Guscio: tocca le facce da togliere, il pezzo si svuota con lo spessore scelto.'],
      ['combine', 'Combina: unisce, sottrae o interseca corpi diversi.'],
      ['pattern', 'Serie: ripete una feature o un corpo in fila o in cerchio. Specchio: lo copia simmetrico rispetto a un piano.'],
    ]],
    ['Cronologia e parametri', [
      ['rollback', 'Ogni comando è un passo nella barra in basso: toccalo per modificarlo, sopprimerlo o eliminarlo.'],
      ['params', 'fx Parametri: dai un nome alle misure (es. larghezza = 60) e usale ovunque, anche come larghezza/2.'],
    ]],
  ],
  sketch: [
    ['Disegnare', [
      ['line', 'Linea: tocca un punto dopo l\'altro; la catena continua finché non torni al primo punto. Doppio tocco o Esc per fermarti.'],
      ['rect', 'Rettangolo: due angoli opposti. Cerchio: centro e raggio. Arco: inizio, fine e un punto di passaggio.'],
      ['point', 'Punto: punti liberi, ad esempio i centri dei fori.'],
      ['dim', 'Misure esatte. Col dito: mentre disegni compare in basso la barra per lunghezza e angolo, larghezza e altezza, diametro. Col mouse: scrivi subito il numero, Tab passa all\'angolo, Invio conferma; il valore scritto si blocca e il punto segue il mouse solo sull\'altra misura.'],
    ]],
    ['Quote', [
      ['dim', 'Quota: tocca una linea (lunghezza), un cerchio (diametro), due punti (distanza) o due linee (angolo). Tocca una quota esistente per cambiarla; accetta parametri.'],
    ]],
    ['Modificare', [
      ['select', 'Seleziona: trascina punti e linee; un dito sul vuoto sposta la vista.'],
      ['trim', 'Taglia: tocca il pezzo di linea o cerchio da togliere; si taglia tra gli incroci con le altre curve.'],
      ['offset', 'Offset: tocca un contorno (si prende tutto il tratto collegato), scrivi la distanza; «Dall\'altro lato» lo sposta dentro/fuori.'],
      ['fillet', 'Raccordo e Smusso: tocca gli angoli (anche più di uno) e scrivi raggio o distanza. Se avevi già selezionato angoli o coppie di linee, sono già dentro.'],
      ['mirror', 'Specchia: il pannello ha due campi, Oggetti e Linea di specchio. Tocca un campo per attivarlo, poi tocca nel disegno. La copia resta simmetrica anche se modifichi l\'originale.'],
      ['construction', 'Costruzione: trasforma le linee selezionate in tratteggiate di riferimento (non formano profili, servono come aiuto o asse).'],
    ]],
    ['Vincoli', [
      ['horizontal', 'Tocca il vincolo e poi gli elementi, uno dopo l\'altro: Orizzontale/Verticale (una linea), Parallela/Perpendicolare (due linee), Tangente, Uguale, Coincidente…'],
      ['fix', 'In basso a sinistra «Liberi: N» dice quanti movimenti restano: a 0 lo schizzo è completamente definito e diventa nero.'],
    ]],
  ],
};
function openHelp(first = app.mode === 'sketch' ? 'sketch' : 'model') {
  const sec = (key, title) => `<h3 class="hs">${title}</h3>` + HELP[key].map(([h, items]) => `<h4>${h}</h4><ul class="help">${items.map(([ic, t]) => `<li>${icon(ic)}<span>${esc(t)}</span></li>`).join('')}</ul>`).join('');
  const parts = first === 'sketch' ? [sec('sketch', 'Nello schizzo'), sec('model', 'Nel modello 3D')] : [sec('model', 'Nel modello 3D'), sec('sketch', 'Nello schizzo')];
  modal(`<h2>Guida rapida</h2>${parts.join('')}<footer><button class="btn primary" data-close>Ho capito</button></footer>`);
}

// ---------- pulsanti fissi ----------
$('#btnHelp').onclick = () => openHelp();
$('#btnProjects').onclick = openProjects;
$('#btnTree').onclick = () => $('#browser').classList.toggle('open');
$('#btnUndo').onclick = undo;
$('#btnRedo').onclick = redo;
$('#btnParams').onclick = openParams;
$('#btnExport').onclick = () => openExport();
$('#docName').onclick = async () => {
  if (app.mode !== 'model') return;
  const v = await promptText('Nome del progetto', app.doc.name);
  if (v) { commit((d) => { d.name = v; }, { rebuild: false }); app.project.name = v; }
};
$('#sketchFinish').querySelector('[data-finish]').onclick = () => finishSketch(true);
$('#sketchFinish').querySelector('[data-discard]').onclick = () => finishSketch(false);
$('#viewbar').addEventListener('click', (e) => {
  const b = e.target.closest('[data-view]');
  if (!b || app.mode === 'sketch') return;
  if (b.dataset.view === 'fit') vp.fit(); else vp.view(b.dataset.view);
});

window.addEventListener('keydown', (e) => {
  if (!e.target.closest('input,select,textarea') && $('#modal').hidden && dynTyping(e)) return;
  if (e.target.closest('input,select,textarea') || !$('#modal').hidden) return;
  const k = e.key.toLowerCase();
  if ((e.ctrlKey || e.metaKey) && k === 'z') { e.preventDefault(); if (e.shiftKey) redo(); else undo(); return; }
  if ((e.ctrlKey || e.metaKey) && k === 'y') { e.preventDefault(); redo(); return; }
  if (app.mode === 'sketch') {
    const map = { l: 'line', r: 'rect', c: 'circle', a: 'arc', p: 'point', d: 'dim', s: 'select', t: 'trim', o: 'cmd:offset', m: 'cmd:smirror', f: 'cmd:sfillet' };
    if (map[k] && !e.ctrlKey && !e.metaKey) { sketcher.setTool(map[k]); renderTopbar(); }
    else if (k === 'delete' || k === 'backspace') sketcher.deleteSelection();
    else if (k === 'escape') { if (!sketcher.cancel()) sketcher.setTool('select'); renderTopbar(); }
    else if (k === 'enter') finishSketch(true);
    return;
  }
  if (k === 'escape') {
    if (app.mode === 'model' && (app.msel.edges.length || app.msel.faces.length || app.msel.regions.length)) { clearModelSel(); return; }
    if (app.mode === 'command') cancelCommand();
    else if (app.mode === 'pickPlane') { app.mode = 'model'; renderAll(); render3D(); }
    return;
  }
  if (app.mode !== 'model') return;
  const cmds = { e: 'extrude', f: 'fillet', h: 'hole' };
  if (k === 's') beginSketchCommand();
  else if (cmds[k]) openCommand(cmds[k]);
});

// evita lo zoom della pagina col doppio tocco e il pinch fuori dalla vista (iPad)
document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('dblclick', (e) => { if (!e.target.closest('input')) e.preventDefault(); });

// aggancio per i test automatici e la console
window.officina = { app, vp, sketcher, cad, startSketch, openCommand, okCommand, cancelCommand, finishSketch, refresh, applyPick, activePickField };

for (const el of document.querySelectorAll('[data-icon]')) el.insertAdjacentHTML('afterbegin', icon(el.dataset.icon, el.classList.contains('btn') ? 18 : 22));
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => { /* senza offline */ });
boot();
