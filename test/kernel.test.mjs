import opencascade from 'replicad-opencascadejs';
import * as R from 'replicad';
import assert from 'node:assert/strict';
import { Kernel, infoOf } from '../src/worker/kernel.js';
import { findRegions } from '../src/shared/profiles.js';

const log = console.log;
console.log = (...a) => { if (typeof a[0] === 'string' && /\*\*|Step File|Transfer|WorkSession/.test(a[0])) return; log(...a); };

R.setOC(await opencascade());
const k = new Kernel();

const P = (id, x, y, extra = {}) => ({ id, type: 'point', x, y, fixed: false, ...extra });
const L = (id, a, b) => ({ id, type: 'line', p1_id: a, p2_id: b });
const geo = [P('a', 0, 0), P('b', 60, 0), P('c', 60, 40), P('d', 0, 40), L('l1', 'a', 'b'), L('l2', 'b', 'c'), L('l3', 'c', 'd'), L('l4', 'd', 'a')];
const reg = findRegions(geo);
const doc = {
  params: [{ name: 'h', expr: '15' }],
  features: [
    { id: 's1', type: 'sketch', plane: { std: 'XY' }, geo },
    { id: 'e1', type: 'extrude', sketch: 's1', regions: [{ key: reg[0].key, seed: reg[0].sample }], dist: 'h', op: 'new' },
  ],
};
let r = await k.rebuild(doc);
assert.deepEqual(r.errors, {});
const body = r.st.bodies.get('e1');
assert.ok(Math.abs(R.measureVolume(body.shape) - 60 * 40 * 15) < 1e-3);
log('ok estrusione', r.st.order);

// riferimento allo spigolo superiore frontale (y=0, z=h)
const inf = infoOf(body.shape);
const ei = inf.edgeInfo.findIndex((e) => Math.abs(e.m[2] - 15) < 1e-6 && Math.abs(e.m[1]) < 1e-6);
const e = inf.edgeInfo[ei];
const edgeRef = { body: 'e1', p: e.m, d: e.d, f: e.f.map((x) => ({ n: x.n, t: inf.faceInfo[x.i].t })) };
const topFi = inf.faceInfo.findIndex((f) => f.n && f.n[2] > 0.9);
const faceRef = { body: 'e1', p: inf.faceInfo[topFi].c, n: inf.faceInfo[topFi].n, t: 'PLANE' };

doc.features.push({ id: 'sh', type: 'shell', faces: [faceRef], t: '2' });
doc.features.push({ id: 'f1', type: 'fillet', edges: [edgeRef], r: '1' });
r = await k.rebuild(doc);
assert.deepEqual(r.errors, {}, JSON.stringify(r.errors));
const v1 = R.measureVolume(r.st.bodies.get('e1').shape);
log('ok raccordo + guscio, volume', v1.toFixed(1));

// cambio parametro: lo spigolo si sposta a z=25, deve essere ritrovato
doc.params[0].expr = '25';
r = await k.rebuild(doc);
assert.deepEqual(r.errors, {}, JSON.stringify(r.errors));
const s2 = r.st.bodies.get('e1').shape;
const cyl = infoOf(s2).faceInfo.filter((f) => f.t === 'CYLINDRE' || f.t === 'CYLINDER');
assert.ok(cyl.length >= 1, 'raccordo presente');
assert.ok(cyl.some((f) => f.c[2] > 20 && f.c[1] < 5), 'raccordo sullo spigolo giusto ' + JSON.stringify(cyl.map((f) => f.c)));
log('ok riferimenti dopo cambio parametro', cyl.map((f) => f.c.map((x) => x.toFixed(1))));

// schizzo sulla faccia di fondo esterna (z=0, normale -Z) con punti foro
const inf2 = infoOf(s2);
const botFi = inf2.faceInfo.findIndex((f) => f.n && f.n[2] < -0.9);
const botRef = { body: 'e1', p: inf2.faceInfo[botFi].c, n: inf2.faceInfo[botFi].n, t: 'PLANE' };
doc.features.push({ id: 's2', type: 'sketch', plane: { face: botRef }, geo: [P('h1', 10, 10), P('h2', 10, -10)] });
doc.features.push({ id: 'ho', type: 'hole', sketch: 's2', dia: '4', depth: '10', through: true });
r = await k.rebuild(doc);
assert.deepEqual(r.errors, {}, JSON.stringify(r.errors));
log('ok foro, frame', JSON.stringify(r.st.frames.get('s2').frame));

// serie circolare della feature foro attorno a Z passante per il centro
doc.features.push({ id: 'pc', type: 'pattern', kind: 'rect', src: { feature: 'ho' }, d1: { world: 'X' }, n1: '3', s1: '15' });
r = await k.rebuild(doc);
assert.deepEqual(r.errors, {}, JSON.stringify(r.errors));
const holes = infoOf(r.st.bodies.get('e1').shape).faceInfo.filter((f) => f.t.startsWith('CYLIND')).length;
log('ok serie rettangolare, facce cilindriche', holes);

// rivoluzione su XZ attorno a Z, nuovo corpo, poi specchio e combina
const g2 = [P('a', 80, 0), P('b', 90, 0), P('c', 90, 10), P('d', 80, 10), L('l1', 'a', 'b'), L('l2', 'b', 'c'), L('l3', 'c', 'd'), L('l4', 'd', 'a')];
const reg2 = findRegions(g2);
doc.features.push({ id: 's3', type: 'sketch', plane: { std: 'XZ' }, geo: g2 });
doc.features.push({ id: 'rv', type: 'revolve', sketch: 's3', regions: [{ key: reg2[0].key, seed: reg2[0].sample }], axis: { world: 'Z' }, angle: '90', op: 'new' });
doc.features.push({ id: 'mi', type: 'mirror', src: { body: 'rv' }, plane: { std: 'YZ' }, op: 'new' });
doc.features.push({ id: 'co', type: 'combine', target: 'e1', tools: ['rv'], op: 'join', keep: false });
r = await k.rebuild(doc);
assert.deepEqual(r.errors, {}, JSON.stringify(r.errors));
log('ok rivoluzione + specchio + combina, corpi', r.st.order);

// cache: ricostruzione identica deve essere istantanea
const t0 = performance.now();
await k.rebuild(doc);
log('ricostruzione in cache', (performance.now() - t0).toFixed(1), 'ms');
// rollback
r = await k.rebuild(doc, 2);
assert.equal(r.st.order.length, 1);
log('ok rollback');
// errore controllato
doc.features.push({ id: 'bad', type: 'fillet', edges: [edgeRef], r: '500' });
r = await k.rebuild(doc);
assert.ok(r.errors.bad, 'errore atteso');
log('ok errore gestito:', r.errors.bad);
