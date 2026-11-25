// Worker CAD: OpenCascade fuori dal thread della pagina.
import opencascade from 'replicad-opencascadejs';
import * as R from 'replicad';
import { Kernel, infoOf, errMessage } from './kernel.js';
import { zipStore } from './zip.js';

let kernel = null;
const ready = (async () => {
  const oc = await opencascade({ locateFile: () => new URL('./replicad_single.wasm', self.location.href).href });
  R.setOC(oc);
  kernel = new Kernel();
})();

let shapeSeq = 0;
const shapeKeys = new WeakMap();
const keyOf = (s) => { let k = shapeKeys.get(s); if (!k) { k = `s${++shapeSeq}`; shapeKeys.set(s, k); } return k; };

let lastState = null;

function meshBody(shape) {
  let diag = 100;
  try { const [a, b] = shape.boundingBox.bounds; diag = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]); } catch { /* */ }
  const tol = Math.min(0.2, Math.max(0.005, diag * 0.0008));
  const m = shape.mesh({ tolerance: tol, angularTolerance: 0.25 });
  const e = shape.meshEdges({ tolerance: tol, angularTolerance: 0.25 });
  const inf = infoOf(shape);
  // i gruppi della mesh portano l'hash della faccia/spigolo: lo riporto all'indice
  const idxOf = (list, groups, key) => {
    const byHash = new Map();
    list.forEach((x, i) => { const h = x.hashCode; if (!byHash.has(h)) byHash.set(h, []); byHash.get(h).push(i); });
    return groups.map((g, i) => {
      const own = list[i] && list[i].hashCode === g[key] ? i : (byHash.get(g[key]) || [i])[0];
      return { start: g.start, count: g.count, i: own };
    });
  };
  return {
    vertices: new Float32Array(m.vertices),
    normals: new Float32Array(m.normals),
    triangles: new Uint32Array(m.triangles),
    faceGroups: idxOf(inf.faces, m.faceGroups, 'faceId'),
    lines: new Float32Array(e.lines),
    edgeGroups: idxOf(inf.edges, e.edgeGroups, 'edgeId'),
    faceInfo: inf.faceInfo,
    edgeInfo: inf.edgeInfo.map((x) => ({ t: x.t, m: x.m, d: x.d, circ: x.circ, f: x.f })),
  };
}

async function rebuild({ doc, upto, have }) {
  await ready;
  const t0 = performance.now();
  const { st, errors, paramErrors, scope } = await kernel.rebuild(doc, upto);
  lastState = st;
  const haveSet = new Set(have || []);
  const transfer = [];
  const bodies = [];
  for (const id of st.order) {
    const b = st.bodies.get(id);
    if (!b) continue;
    const key = keyOf(b.shape);
    const out = { id, name: b.name, key };
    if (!haveSet.has(key)) {
      try {
        out.mesh = meshBody(b.shape);
        transfer.push(out.mesh.vertices.buffer, out.mesh.normals.buffer, out.mesh.triangles.buffer, out.mesh.lines.buffer);
      } catch (e) {
        out.error = 'Impossibile triangolare il corpo';
      }
    }
    bodies.push(out);
  }
  const frames = {};
  for (const [id, v] of st.frames) frames[id] = v;
  return { result: { bodies, frames, errors, paramErrors, scope, ms: Math.round(performance.now() - t0) }, transfer };
}

// ---------- export ----------
function shapesFor(ids) {
  if (!lastState) throw new Error('Modello non pronto');
  const list = (ids && ids.length ? ids : lastState.order).map((id) => ({ id, b: lastState.bodies.get(id) })).filter((x) => x.b);
  if (!list.length) throw new Error('Nessun corpo da esportare');
  return list;
}

function fineMesh(shape) {
  const m = shape.mesh({ tolerance: 0.01, angularTolerance: 0.1 });
  return m;
}

function stlBinary(list) {
  const meshes = list.map(({ b }) => fineMesh(b.shape));
  const nTri = meshes.reduce((s, m) => s + m.triangles.length / 3, 0);
  const buf = new ArrayBuffer(84 + nTri * 50);
  const dv = new DataView(buf);
  const head = 'Officina STL';
  for (let i = 0; i < head.length; i++) dv.setUint8(i, head.charCodeAt(i));
  dv.setUint32(80, nTri, true);
  let o = 84;
  for (const m of meshes) {
    const v = m.vertices, t = m.triangles;
    for (let i = 0; i < t.length; i += 3) {
      const a = t[i] * 3, b = t[i + 1] * 3, c = t[i + 2] * 3;
      const ux = v[b] - v[a], uy = v[b + 1] - v[a + 1], uz = v[b + 2] - v[a + 2];
      const wx = v[c] - v[a], wy = v[c + 1] - v[a + 1], wz = v[c + 2] - v[a + 2];
      let nx = uy * wz - uz * wy, ny = uz * wx - ux * wz, nz = ux * wy - uy * wx;
      const l = Math.hypot(nx, ny, nz) || 1;
      nx /= l; ny /= l; nz /= l;
      dv.setFloat32(o, nx, true); dv.setFloat32(o + 4, ny, true); dv.setFloat32(o + 8, nz, true);
      o += 12;
      for (const k of [a, b, c]) { dv.setFloat32(o, v[k], true); dv.setFloat32(o + 4, v[k + 1], true); dv.setFloat32(o + 8, v[k + 2], true); o += 12; }
      dv.setUint16(o, 0, true);
      o += 2;
    }
  }
  return new Uint8Array(buf);
}

const xmlEsc = (s) => String(s).replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));

function threeMF(list, docName) {
  const parts = [];
  parts.push('<?xml version="1.0" encoding="UTF-8"?>\n<model unit="millimeter" xml:lang="it-IT" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02">\n');
  parts.push(`<metadata name="Title">${xmlEsc(docName || 'Officina')}</metadata>\n<metadata name="Application">Officina</metadata>\n<resources>\n`);
  list.forEach(({ b }, k) => {
    const m = fineMesh(b.shape);
    const v = m.vertices, t = m.triangles;
    const vs = [];
    for (let i = 0; i < v.length; i += 3) vs.push(`<vertex x="${+v[i].toFixed(5)}" y="${+v[i + 1].toFixed(5)}" z="${+v[i + 2].toFixed(5)}"/>`);
    const ts = [];
    for (let i = 0; i < t.length; i += 3) ts.push(`<triangle v1="${t[i]}" v2="${t[i + 1]}" v3="${t[i + 2]}"/>`);
    parts.push(`<object id="${k + 1}" name="${xmlEsc(b.name)}" type="model"><mesh><vertices>${vs.join('')}</vertices><triangles>${ts.join('')}</triangles></mesh></object>\n`);
  });
  parts.push('</resources>\n<build>\n');
  list.forEach((_, k) => parts.push(`<item objectid="${k + 1}"/>\n`));
  parts.push('</build>\n</model>\n');
  const enc = new TextEncoder();
  return zipStore([
    { name: '[Content_Types].xml', data: enc.encode('<?xml version="1.0" encoding="UTF-8"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>') },
    { name: '_rels/.rels', data: enc.encode('<?xml version="1.0" encoding="UTF-8"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>') },
    { name: '3D/3dmodel.model', data: enc.encode(parts.join('')) },
  ]);
}

async function exportFile({ format, ids, name }) {
  await ready;
  const list = shapesFor(ids);
  if (format === 'stl') return stlBinary(list);
  if (format === '3mf') return threeMF(list, name);
  if (format === 'step') {
    const blob = R.exportSTEP(list.map(({ b }) => ({ shape: b.shape, name: b.name })));
    return new Uint8Array(await blob.arrayBuffer());
  }
  throw new Error('Formato sconosciuto');
}

async function measure({ ids }) {
  await ready;
  const list = shapesFor(ids);
  return list.map(({ id, b }) => {
    let volume = null, area = null, bbox = null;
    try { volume = R.measureVolume(b.shape); } catch { /* */ }
    try { area = R.measureArea(b.shape); } catch { /* */ }
    try { bbox = b.shape.boundingBox.bounds; } catch { /* */ }
    return { id, name: b.name, volume, area, bbox };
  });
}

// console di OpenCascade (STEP) troppo verbosa: silenziata
const origLog = console.log;
console.log = (...a) => { if (typeof a[0] === 'string' && /\*\*|Step File|Transfer|WorkSession/.test(a[0])) return; origLog(...a); };

self.onmessage = async ({ data }) => {
  const { id, cmd, args } = data;
  try {
    if (cmd === 'init') { await ready; self.postMessage({ id, ok: true, result: true }); return; }
    if (cmd === 'rebuild') {
      const { result, transfer } = await rebuild(args);
      self.postMessage({ id, ok: true, result }, transfer);
      return;
    }
    if (cmd === 'export') {
      const bytes = await exportFile(args);
      self.postMessage({ id, ok: true, result: bytes }, [bytes.buffer]);
      return;
    }
    if (cmd === 'measure') { self.postMessage({ id, ok: true, result: await measure(args) }); return; }
    throw new Error(`Comando sconosciuto: ${cmd}`);
  } catch (e) {
    self.postMessage({ id, ok: false, error: errMessage(e, null) });
  }
};
