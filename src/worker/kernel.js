// Kernel parametrico: riesegue lo storico delle feature con OpenCascade (replicad).
// Ogni passo è in cache: se cambia una feature, si riparte da lì.
import * as R from 'replicad';
import { evaluate, evalParams } from '../shared/expr.js';
import { findRegions, matchRegion } from '../shared/profiles.js';

import { add, sub, mul, dot, cross, len, norm, STD_FRAMES, frameFromNormal, to3 } from '../shared/frames.js';

const tup = (v) => (Array.isArray(v) ? v : v.toTuple());
const AXES = { X: [1, 0, 0], Y: [0, 1, 0], Z: [0, 0, 1] };
const toPlane = (fr) => new R.Plane(fr.o, fr.x, fr.n);

// ---------- hash ----------
function hash(str) {
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}

// ---------- disegni 2D dai profili ----------
function loopDrawing(segs) {
  if (segs.length === 1 && segs[0].k === 'circle') return R.drawCircle(segs[0].r).translate(segs[0].c[0], segs[0].c[1]);
  if (segs.length === 1 && segs[0].k === 'arc') return R.drawCircle(segs[0].r).translate(segs[0].c[0], segs[0].c[1]);
  let pen = R.draw(segs[0].a);
  for (const s of segs) {
    if (s.k === 'line') pen = pen.lineTo(s.b);
    else pen = pen.threePointsArcTo(s.b, s.m);
  }
  return pen.close();
}
function regionDrawing(rg) {
  let d = loopDrawing(rg.segs);
  for (const h of rg.holes) d = d.cut(loopDrawing(h));
  return d;
}

// ---------- informazioni per la selezione ----------
function shapeInfo(shape) {
  const faces = shape.faces;
  const edges = shape.edges;
  const faceInfo = faces.map((f) => {
    const c = tup(f.center);
    let n = null;
    try { n = tup(f.normalAt(c)); } catch { /* superficie degenere */ }
    return { t: f.geomType, c, n };
  });
  const buckets = new Map();
  edges.forEach((e, i) => {
    const k = e.hashCode;
    if (!buckets.has(k)) buckets.set(k, []);
    buckets.get(k).push(i);
  });
  const adj = edges.map(() => []);
  faces.forEach((f, fi) => {
    for (const e of f.edges) {
      const list = buckets.get(e.hashCode) || [];
      for (const i of list) if (edges[i].isSame(e)) { if (!adj[i].includes(fi)) adj[i].push(fi); break; }
    }
  });
  const edgeInfo = edges.map((e, i) => {
    let m = [0, 0, 0], d = [0, 0, 0], circ = null;
    try {
      m = tup(e.pointAt(0.5));
      d = tup(e.tangentAt(0.5));
      if (e.geomType === 'CIRCLE') circ = circleOf(e);
    } catch { /* spigolo degenere */ }
    return {
      t: e.geomType, m, d, circ,
      f: adj[i].map((fi) => {
        let n = faceInfo[fi].n;
        try { n = tup(faces[fi].normalAt(m)); } catch { /* */ }
        return { i: fi, n };
      }),
    };
  });
  return { faces, edges, faceInfo, edgeInfo };
}

function circleOf(e) {
  const a = tup(e.pointAt(0)), b = tup(e.pointAt(0.33)), c = tup(e.pointAt(0.66));
  const ab = sub(b, a), ac = sub(c, a);
  const n = cross(ab, ac);
  const n2 = dot(n, n);
  if (n2 < 1e-18) return null;
  const t = add(mul(cross(n, ab), dot(ac, ac)), mul(cross(ac, n), dot(ab, ab)));
  const center = add(a, mul(t, 1 / (2 * n2)));
  return { c: center, n: norm(n), r: len(sub(a, center)) };
}

// cache delle info per forma (le forme non cambiano: sono immutabili per noi)
const infoCache = new WeakMap();
function infoOf(shape) {
  let inf = infoCache.get(shape);
  if (!inf) { inf = shapeInfo(shape); infoCache.set(shape, inf); }
  return inf;
}

// ---------- risoluzione dei riferimenti geometrici ----------
function distTo(shape, p) {
  try { return R.measureDistanceBetween(shape, R.makeVertex(p)); } catch { return Infinity; }
}

function resolveFaceIdx(shape, ref) {
  const inf = infoOf(shape);
  let best = -1, bestS = Infinity;
  inf.faces.forEach((f, i) => {
    const fi = inf.faceInfo[i];
    let s = distTo(f, ref.p);
    if (ref.t && fi.t !== ref.t) s += 50;
    if (ref.n) {
      let n = fi.n;
      try { n = tup(f.normalAt(ref.p)); } catch { /* */ }
      if (n) s += 30 * (1 - dot(n, ref.n));
    }
    if (s < bestS) { bestS = s; best = i; }
  });
  return best;
}
export function resolveFace(shape, ref) {
  const i = resolveFaceIdx(shape, ref);
  return i < 0 ? null : infoOf(shape).faces[i];
}

function resolveEdgeIdx(shape, ref) {
  const inf = infoOf(shape);
  const near = [];
  inf.edges.forEach((e, i) => {
    const d = distTo(e, ref.p);
    const ei = inf.edgeInfo[i];
    const par = ref.d ? Math.abs(dot(ei.d, ref.d)) : 1;
    near.push({ i, d, par });
  });
  // corrispondenza esatta: passa dal punto medio salvato
  const exact = near.filter((x) => x.d < 1e-4 && x.par > 0.99);
  if (exact.length === 1) return exact[0].i;
  // via facce adiacenti
  if (ref.f && ref.f.length === 2) {
    const fa = resolveFaceIdx(shape, { p: ref.p, n: ref.f[0].n, t: ref.f[0].t });
    const fb = resolveFaceIdx(shape, { p: ref.p, n: ref.f[1].n, t: ref.f[1].t });
    if (fa >= 0 && fb >= 0 && fa !== fb) {
      const common = near.filter((x) => {
        const adj = inf.edgeInfo[x.i].f.map((f) => f.i);
        return adj.includes(fa) && adj.includes(fb);
      });
      if (common.length) {
        common.sort((a, b) => a.d - b.d);
        return common[0].i;
      }
    }
  }
  near.sort((a, b) => (a.d + 20 * (1 - a.par)) - (b.d + 20 * (1 - b.par)));
  return near.length ? near[0].i : -1;
}
export function resolveEdge(shape, ref) {
  const i = resolveEdgeIdx(shape, ref);
  return i < 0 ? null : infoOf(shape).edges[i];
}

// ---------- stato ----------
function cloneState(st) {
  return { bodies: new Map(st.bodies), tools: new Map(st.tools), frames: new Map(st.frames), n: st.n, order: st.order.slice() };
}
const emptyState = () => ({ bodies: new Map(), tools: new Map(), frames: new Map(), n: 0, order: [] });

function addBody(st, id, shape, name) {
  st.n += 1;
  st.bodies.set(id, { shape, name: name || `Corpo ${st.n}` });
  st.order.push(id);
}
function setBody(st, id, shape) {
  const b = st.bodies.get(id);
  st.bodies.set(id, { ...b, shape });
}
function removeBody(st, id) {
  st.bodies.delete(id);
  st.order = st.order.filter((x) => x !== id);
}
function lastBody(st) { return st.order[st.order.length - 1] || null; }
function bodyOf(st, id) {
  const b = st.bodies.get(id);
  if (!b) throw new Error('Corpo non trovato');
  return b;
}
function isEmpty(shape) {
  try { return !shape || shape.isNull || (shape.solids && shape.solids.length === 0 && shape.faces.length === 0); } catch { return true; }
}
function bboxOverlap(a, b) {
  try { return !a.boundingBox.isOut(b.boundingBox); } catch { return true; }
}

/** Applica una forma "utensile" ai corpi secondo l'operazione. */
function applyOp(st, f, tool, op, defaultTarget, newId) {
  const targets = (f.targets && f.targets.length ? f.targets : null);
  if (op === 'new' || (op === 'join' && !st.bodies.size)) {
    addBody(st, newId || f.id, tool);
    return { op: 'new', targets: [newId || f.id] };
  }
  if (op === 'join') {
    const t = (targets && targets[0]) || defaultTarget || lastBody(st);
    const b = bodyOf(st, t);
    setBody(st, t, b.shape.fuse(tool));
    return { op, targets: [t] };
  }
  if (op === 'cut' || op === 'intersect') {
    let ids = targets || (op === 'cut' ? [...st.bodies.keys()] : [defaultTarget || lastBody(st)]);
    ids = ids.filter((id) => st.bodies.has(id));
    const touched = [];
    for (const id of ids) {
      const b = st.bodies.get(id);
      if (op === 'cut' && !bboxOverlap(b.shape, tool)) continue;
      let r;
      try { r = op === 'cut' ? b.shape.cut(tool) : b.shape.intersect(tool); } catch (e) { throw new Error(`Operazione fallita su ${b.name}`); }
      if (isEmpty(r)) removeBody(st, id); else setBody(st, id, r);
      touched.push(id);
    }
    return { op, targets: touched };
  }
  throw new Error(`Operazione sconosciuta: ${op}`);
}

// ---------- feature ----------
function sketchRegions(ctx, sketchId) {
  let r = ctx.regionCache.get(sketchId);
  if (!r) {
    const sk = ctx.doc.features.find((x) => x.id === sketchId);
    if (!sk) throw new Error('Schizzo non trovato');
    r = findRegions(sk.geo);
    ctx.regionCache.set(sketchId, r);
  }
  return r;
}

function profileSketch(st, ctx, f) {
  const fr = st.frames.get(f.sketch);
  if (!fr) throw new Error('Lo schizzo non è disponibile in questo punto della cronologia');
  const regions = sketchRegions(ctx, f.sketch);
  const picked = (f.regions || []).map((ref) => matchRegion(regions, ref)).filter(Boolean);
  if (!picked.length) throw new Error('Nessun profilo selezionato');
  const uniq = [...new Set(picked)];
  let d = regionDrawing(uniq[0]);
  for (const r of uniq.slice(1)) d = d.fuse(regionDrawing(r));
  return { drawing: d, frame: fr.frame, body: fr.body };
}

const FEATURES = {
  sketch(st, f, ctx) {
    let frame, body = null;
    const off = ctx.ev(f.offset ?? 0);
    if (f.plane && f.plane.face) {
      const b = bodyOf(st, f.plane.face.body);
      const face = resolveFace(b.shape, f.plane.face);
      if (!face || face.geomType !== 'PLANE') throw new Error('La faccia dello schizzo non è piana');
      const n = tup(face.normalAt(tup(face.center)));
      frame = frameFromNormal(n, tup(face.center));
      body = f.plane.face.body;
    } else {
      frame = STD_FRAMES[(f.plane && f.plane.std) || 'XY'];
    }
    if (off) frame = { ...frame, o: add(frame.o, mul(frame.n, off)) };
    st.frames.set(f.id, { frame, body });
  },

  extrude(st, f, ctx) {
    const { drawing, frame, body } = profileSketch(st, ctx, f);
    let d1 = ctx.ev(f.dist);
    let d2 = f.mode === 'two' ? ctx.ev(f.dist2) : 0;
    let dir = frame.n;
    if (f.flip) dir = mul(dir, -1);
    if (d1 < 0) { d1 = -d1; dir = mul(dir, -1); }
    if (Math.abs(d1) < 1e-9 && f.mode !== 'two') throw new Error('Distanza nulla');
    const mk = (dist, direction, shift) => {
      const pl = new R.Plane(add(frame.o, shift), frame.x, frame.n);
      return drawing.clone().sketchOnPlane(pl).extrude(dist, { extrusionDirection: direction });
    };
    let tool;
    if (f.mode === 'sym') tool = mk(d1, dir, mul(dir, -d1 / 2));
    else if (f.mode === 'two') {
      const parts = [];
      if (d1 > 1e-9) parts.push(mk(d1, dir, [0, 0, 0]));
      if (Math.abs(d2) > 1e-9) parts.push(mk(Math.abs(d2), mul(dir, -Math.sign(d2) || -1), [0, 0, 0]));
      if (!parts.length) throw new Error('Distanze nulle');
      tool = parts.length === 2 ? parts[0].fuse(parts[1]) : parts[0];
    } else tool = mk(d1, dir, [0, 0, 0]);
    const res = applyOp(st, f, tool, f.op || 'new', body);
    st.tools.set(f.id, { tool, ...res });
  },

  revolve(st, f, ctx) {
    const { drawing, frame, body } = profileSketch(st, ctx, f);
    let origin, axis;
    if (f.axis && f.axis.line) {
      const sk = ctx.doc.features.find((x) => x.id === f.sketch);
      const ln = sk.geo.find((g) => g.id === f.axis.line);
      if (!ln) throw new Error("L'asse non esiste più nello schizzo");
      const p = (id) => { const q = sk.geo.find((g) => g.id === id); return [q.x, q.y]; };
      const a = to3(frame, p(ln.p1_id)), b = to3(frame, p(ln.p2_id));
      origin = a; axis = norm(sub(b, a));
    } else {
      origin = [0, 0, 0];
      axis = AXES[(f.axis && f.axis.world) || 'Z'];
    }
    let angle = ctx.ev(f.angle ?? 360);
    if (f.flip) angle = -angle;
    if (Math.abs(angle) < 1e-9) throw new Error('Angolo nullo');
    const tool = drawing.sketchOnPlane(toPlane(frame)).revolve(axis, { origin, angle });
    const res = applyOp(st, f, tool, f.op || 'new', body);
    st.tools.set(f.id, { tool, ...res });
  },

  fillet(st, f, ctx) { edgeMod(st, f, ctx, 'fillet'); },
  chamfer(st, f, ctx) { edgeMod(st, f, ctx, 'chamfer'); },

  shell(st, f, ctx) {
    if (!f.faces || !f.faces.length) throw new Error('Seleziona almeno una faccia da aprire');
    const bid = f.faces[0].body;
    const b = bodyOf(st, bid);
    const faces = f.faces.filter((r) => r.body === bid).map((r) => resolveFace(b.shape, r)).filter(Boolean);
    const t = ctx.ev(f.t);
    if (!(t > 0)) throw new Error('Spessore non valido');
    // in replicad lo spessore positivo svuota verso l'interno
    const r = b.shape.shell(f.outside ? -t : t, (ff) => ff.inList(faces));
    // OpenCascade a volte restituisce il solido invariato senza segnalare errori
    let same = false;
    try { const v0 = R.measureVolume(b.shape), v1 = R.measureVolume(r); same = Math.abs(v1 - v0) <= 1e-6 * Math.abs(v0); } catch { /* */ }
    if (same) throw new Error('Guscio non riuscito su questa geometria: prova a spostarlo prima dei raccordi nella cronologia');
    setBody(st, bid, r);
  },

  hole(st, f, ctx) {
    const fr = st.frames.get(f.sketch);
    if (!fr) throw new Error('Schizzo non disponibile');
    const sk = ctx.doc.features.find((x) => x.id === f.sketch);
    const used = new Set();
    for (const g of sk.geo) for (const k of ['p1_id', 'p2_id', 'c_id', 'start_id', 'end_id']) if (g[k]) used.add(g[k]);
    const pts = sk.geo.filter((g) => g.type === 'point' && !used.has(g.id) && !g.ref && !g.construction);
    if (!pts.length) throw new Error('Lo schizzo non ha punti per i fori');
    const dir = f.flip ? fr.frame.n : mul(fr.frame.n, -1);
    const dia = ctx.ev(f.dia);
    if (!(dia > 0)) throw new Error('Diametro non valido');
    let depth = ctx.ev(f.depth);
    if (f.through) {
      let diag = 1000;
      for (const b of st.bodies.values()) {
        try { const bb = b.shape.boundingBox.bounds; diag = Math.max(diag, len(sub(bb[1], bb[0])) * 2 + len(bb[0]) + len(bb[1])); } catch { /* */ }
      }
      depth = diag;
    }
    if (!(depth > 0)) throw new Error('Profondità non valida');
    const lead = 0.01;
    let tool = null;
    for (const p of pts) {
      const base = sub(to3(fr.frame, [p.x, p.y]), mul(dir, lead));
      let c = R.makeCylinder(dia / 2, depth + lead, base, dir);
      if (f.cbore) {
        const cd = ctx.ev(f.cdia), ch = ctx.ev(f.cdepth);
        if (cd > dia && ch > 0) c = c.fuse(R.makeCylinder(cd / 2, ch + lead, base, dir));
      }
      tool = tool ? tool.fuse(c) : c;
    }
    const res = applyOp(st, f, tool, 'cut', fr.body);
    st.tools.set(f.id, { tool, ...res });
  },

  pattern(st, f, ctx) {
    const xf = [];
    if (f.kind === 'circ') {
      const { origin, dir } = axisOf(st, f.axis, ctx);
      const n = Math.round(ctx.ev(f.n));
      const ang = ctx.ev(f.angle ?? 360);
      if (!(n >= 2)) throw new Error('Servono almeno 2 copie');
      const step = Math.abs(Math.abs(ang) - 360) < 1e-9 ? ang / n : ang / (n - 1);
      for (let k = 1; k < n; k++) xf.push((s) => s.clone().rotate(step * k, origin, dir));
    } else {
      const d1 = axisOf(st, f.d1, ctx).dir;
      const n1 = Math.round(ctx.ev(f.n1)), s1 = ctx.ev(f.s1);
      const use2 = f.d2 && f.d2 !== 'none' && f.d2.world !== 'none';
      const d2 = use2 ? axisOf(st, f.d2, ctx).dir : [0, 0, 0];
      const n2 = use2 ? Math.round(ctx.ev(f.n2)) : 1, s2 = use2 ? ctx.ev(f.s2) : 0;
      if (!(n1 >= 1 && n2 >= 1) || n1 * n2 < 2) throw new Error('Servono almeno 2 copie');
      for (let i = 0; i < n1; i++) for (let j = 0; j < n2; j++) {
        if (!i && !j) continue;
        const v = add(mul(d1, s1 * i), mul(d2, s2 * j));
        xf.push((s) => s.clone().translate(v));
      }
    }
    replicate(st, f, xf);
  },

  mirror(st, f, ctx) {
    let origin, n;
    if (f.plane && f.plane.face) {
      const b = bodyOf(st, f.plane.face.body);
      const face = resolveFace(b.shape, f.plane.face);
      if (!face || face.geomType !== 'PLANE') throw new Error('Serve una faccia piana');
      origin = tup(face.center);
      n = tup(face.normalAt(origin));
    } else {
      const fr = STD_FRAMES[(f.plane && f.plane.std) || 'YZ'];
      origin = fr.o; n = fr.n;
    }
    replicate(st, f, [(s) => s.clone().mirror(n, origin)]);
  },

  combine(st, f) {
    const t = bodyOf(st, f.target);
    let shape = t.shape;
    const tools = (f.tools || []).filter((id) => id !== f.target);
    if (!tools.length) throw new Error('Seleziona i corpi utensile');
    for (const id of tools) {
      const b = bodyOf(st, id);
      shape = f.op === 'cut' ? shape.cut(b.shape) : f.op === 'intersect' ? shape.intersect(b.shape) : shape.fuse(b.shape);
    }
    if (isEmpty(shape)) removeBody(st, f.target); else setBody(st, f.target, shape);
    if (!f.keep) for (const id of tools) removeBody(st, id);
  },

  move(st, f, ctx) {
    for (const id of f.bodies || []) {
      const b = bodyOf(st, id);
      let s = b.shape.clone();
      const ang = ctx.ev(f.angle ?? 0);
      if (Math.abs(ang) > 1e-12) s = s.rotate(ang, [ctx.ev(f.cx ?? 0), ctx.ev(f.cy ?? 0), ctx.ev(f.cz ?? 0)], AXES[f.raxis || 'Z']);
      const v = [ctx.ev(f.dx ?? 0), ctx.ev(f.dy ?? 0), ctx.ev(f.dz ?? 0)];
      if (len(v) > 1e-12) s = s.translate(v);
      setBody(st, id, s);
    }
  },

  async import(st, f, ctx) {
    let shape = ctx.importCache.get(f.id + ':' + f.hash);
    if (!shape) {
      const bin = Uint8Array.from(atob(f.data), (c) => c.charCodeAt(0));
      const blob = new Blob([bin]);
      shape = f.format === 'step' ? await R.importSTEP(blob) : await R.importSTL(blob);
      ctx.importCache.set(f.id + ':' + f.hash, shape);
    }
    if (f.format === 'stl') {
      try { const s = R.makeSolid([shape]); if (s && !s.isNull) shape = s; } catch { /* resta guscio */ }
    }
    addBody(st, f.id, shape.clone(), f.fname ? f.fname.replace(/\.[^.]+$/, '') : undefined);
  },
};

function edgeMod(st, f, ctx, kind) {
  if (!f.edges || !f.edges.length) throw new Error('Seleziona almeno uno spigolo');
  const v = ctx.ev(kind === 'fillet' ? f.r : f.d);
  if (!(v > 0)) throw new Error('Valore non valido');
  const groups = new Map();
  for (const r of f.edges) { if (!groups.has(r.body)) groups.set(r.body, []); groups.get(r.body).push(r); }
  for (const [bid, refs] of groups) {
    const b = bodyOf(st, bid);
    const list = [...new Set(refs.map((r) => resolveEdge(b.shape, r)).filter(Boolean))];
    if (!list.length) throw new Error('Spigoli non trovati');
    let r;
    try { r = b.shape[kind](v, (e) => e.inList(list)); } catch (e) { throw new Error(kind === 'fillet' ? 'Raccordo impossibile: prova un raggio più piccolo' : 'Smusso impossibile: prova una misura più piccola'); }
    setBody(st, bid, r);
  }
}

function axisOf(st, spec, ctx) {
  if (!spec || spec.world) return { origin: [0, 0, 0], dir: AXES[(spec && spec.world) || 'Z'] };
  if (spec.edge) {
    const b = bodyOf(st, spec.edge.body);
    const e = resolveEdge(b.shape, spec.edge);
    if (!e) throw new Error('Asse non trovato');
    if (e.geomType === 'CIRCLE') {
      const c = circleOf(e);
      return { origin: c.c, dir: c.n };
    }
    const a = tup(e.startPoint), z = tup(e.endPoint);
    return { origin: a, dir: norm(sub(z, a)) };
  }
  throw new Error('Asse non valido');
}

/** Ripete una feature (o un corpo) con le trasformazioni date. */
function replicate(st, f, xf) {
  const src = f.src || {};
  if (src.feature) {
    const t = st.tools.get(src.feature);
    if (!t) throw new Error('La feature sorgente non ha una forma ripetibile');
    let all = null;
    for (const fn of xf) { const c = fn(t.tool); all = all ? all.fuse(c) : c; }
    if (t.op === 'new') {
      xf.forEach((fn, k) => addBody(st, `${f.id}:${k}`, fn(t.tool)));
    } else {
      applyOp(st, { ...f, targets: t.targets }, all, t.op, t.targets[0]);
    }
    return;
  }
  if (src.body) {
    const b = bodyOf(st, src.body);
    if (f.op === 'new') {
      xf.forEach((fn, k) => addBody(st, `${f.id}:${k}`, fn(b.shape), `${b.name} (${k + 2})`));
    } else {
      let s = b.shape;
      for (const fn of xf) s = s.fuse(fn(b.shape));
      setBody(st, src.body, s);
    }
    return;
  }
  throw new Error('Scegli cosa ripetere');
}

// Le eccezioni di OpenCascade arrivano come numeri o WebAssembly.Exception: messaggio leggibile per tipo.
const FAIL = {
  extrude: 'Estrusione non riuscita: controlla il profilo e l\'operazione',
  revolve: 'Rivoluzione non riuscita: il profilo non deve attraversare l\'asse',
  fillet: 'Raccordo impossibile: prova un raggio più piccolo',
  chamfer: 'Smusso impossibile: prova una misura più piccola',
  shell: 'Guscio non riuscito su questa geometria (spessore troppo grande o corpo non unico)',
  hole: 'Foro non riuscito',
  pattern: 'Serie non riuscita',
  mirror: 'Specchio non riuscito',
  combine: 'Operazione booleana non riuscita',
  move: 'Spostamento non riuscito',
  import: 'File non leggibile',
};
export function errMessage(e, type) {
  const isOc = typeof e === 'number' || (typeof WebAssembly !== 'undefined' && WebAssembly.Exception && e instanceof WebAssembly.Exception);
  const msg = !isOc && e && e.message ? e.message : '';
  if (msg && !/^\[object|^\d+$|unreachable|out of bounds/i.test(msg)) return msg;
  return FAIL[type] || 'Operazione non riuscita in OpenCascade';
}

// ---------- ricostruzione ----------
export class Kernel {
  constructor() {
    this.cache = new Map(); // chiave -> { st, error }
    this.importCache = new Map();
  }

  async rebuild(doc, upto = null) {
    const { scope, errors: paramErrors } = evalParams(doc.params || []);
    const ctx = {
      doc,
      ev: (x) => evaluate(x ?? 0, scope),
      regionCache: new Map(),
      importCache: this.importCache,
    };
    let key = hash(JSON.stringify(scope));
    let st = emptyState();
    const errors = {};
    const keep = new Set();
    const feats = doc.features;
    const n = upto == null ? feats.length : Math.min(upto, feats.length);
    for (let i = 0; i < n; i++) {
      const f = feats[i];
      if (f.suppressed) continue;
      // lo schizzo dipende solo dalla geometria; le altre feature dalle geometrie degli schizzi che usano
      let dep = JSON.stringify(f);
      if (f.sketch) {
        const sk = feats.find((x) => x.id === f.sketch);
        if (sk) dep += JSON.stringify(sk.geo);
      }
      key = hash(key + '|' + dep);
      keep.add(key);
      const hit = this.cache.get(key);
      if (hit) {
        st = hit.st;
        if (hit.error) errors[f.id] = hit.error;
        continue;
      }
      const next = cloneState(st);
      let error = null;
      try {
        const fn = FEATURES[f.type];
        if (!fn) throw new Error(`Feature sconosciuta: ${f.type}`);
        await fn(next, f, ctx);
        st = next;
      } catch (e) {
        error = errMessage(e, f.type);
        errors[f.id] = error;
      }
      this.cache.set(key, { st, error });
    }
    // tiene la cache dell'ultima ricostruzione e di quella prima (anteprime avanti/indietro)
    this.prevKeep = this.lastKeep || new Set();
    this.lastKeep = keep;
    for (const k of this.cache.keys()) if (!keep.has(k) && !this.prevKeep.has(k)) this.cache.delete(k);
    return { st, errors, paramErrors, scope };
  }
}

export { infoOf, circleOf };
