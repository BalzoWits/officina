import { findRegions, matchRegion } from '../src/shared/profiles.js';
import { evaluate, evalParams } from '../src/shared/expr.js';
import assert from 'node:assert/strict';

const P = (id, x, y) => ({ id, type: 'point', x, y, fixed: false });
const L = (id, a, b) => ({ id, type: 'line', p1_id: a, p2_id: b });
const C = (id, c, r) => ({ id, type: 'circle', c_id: c, radius: r });
const rect = (k, x0, y0, x1, y1) => [P(k + 'a', x0, y0), P(k + 'b', x1, y0), P(k + 'c', x1, y1), P(k + 'd', x0, y1),
  L(k + '1', k + 'a', k + 'b'), L(k + '2', k + 'b', k + 'c'), L(k + '3', k + 'c', k + 'd'), L(k + '4', k + 'd', k + 'a')];
const near = (a, b, tol = 0.5) => Math.abs(a - b) < tol;

// quadrato con foro circolare: 2 regioni (anello + disco)
let r = findRegions([...rect('q', 0, 0, 40, 40), P('o', 20, 20), C('c', 'o', 5)]);
assert.equal(r.length, 2, 'quadrato+cerchio');
assert.ok(near(r[0].area, 1600 - Math.PI * 25), 'area anello ' + r[0].area);
assert.equal(r[0].holes.length, 1);
console.log('ok quadrato con foro', r.map((x) => x.key));

// quadrato tagliato da una retta che sporge: 2 regioni
r = findRegions([...rect('q', 0, 0, 40, 40), P('m1', 20, -10), P('m2', 20, 50), L('m', 'm1', 'm2')]);
assert.equal(r.length, 2, 'quadrato diviso');
assert.ok(near(r[0].area, 800) && near(r[1].area, 800));
console.log('ok quadrato diviso', r.map((x) => [x.key, x.sample.map(Math.round)]));

// due cerchi sovrapposti: 3 regioni
r = findRegions([P('o1', 0, 0), C('c1', 'o1', 10), P('o2', 12, 0), C('c2', 'o2', 10)]);
assert.equal(r.length, 3, 'cerchi sovrapposti ' + r.length);
console.log('ok cerchi', r.map((x) => Math.round(x.area)));

// rettangolo dentro rettangolo + cerchio nel rettangolo interno
r = findRegions([...rect('e', 0, 0, 100, 60), ...rect('i', 20, 10, 80, 50), P('o', 50, 30), C('c', 'o', 8)]);
assert.equal(r.length, 3);
assert.ok(near(r[0].area, 6000 - 2400) && near(r[1].area, 2400 - Math.PI * 64, 1));
console.log('ok nidificati', r.map((x) => Math.round(x.area)));

// arco + retta (forma a D)
r = findRegions([P('a', 0, 0), P('b', 20, 0), P('k', 10, 0), { id: 'arc', type: 'arc', c_id: 'k', radius: 10, start_angle: 0, end_angle: Math.PI, start_id: 'b', end_id: 'a' }, L('l', 'a', 'b')]);
assert.equal(r.length, 1);
assert.ok(near(r[0].area, Math.PI * 50), 'D ' + r[0].area);
console.log('ok forma a D', r[0].segs.map((s) => s.k));

// cerchio tangente a una retta che chiude una forma (linea tocca il cerchio)
r = findRegions([...rect('q', 0, 0, 20, 20), P('o', 10, 30), C('c', 'o', 10)]);
assert.equal(r.length, 2, 'tangenza ' + r.length);
console.log('ok tangenza', r.map((x) => Math.round(x.area)));

// ritrovare una regione
const before = findRegions([...rect('q', 0, 0, 40, 40), P('m1', 20, -10), P('m2', 20, 50), L('m', 'm1', 'm2')]);
const ref = { key: before[1].key, seed: before[1].sample };
const after = findRegions([...rect('q', 0, 0, 60, 40), P('m1', 20, -10), P('m2', 20, 50), L('m', 'm1', 'm2')]);
const m = matchRegion(after, ref);
assert.ok(m && m.sample[0] < 20 === ref.seed[0] < 20, 'match lato');
console.log('ok match regione');

assert.equal(evaluate('2*(3+4)'), 14);
assert.equal(evaluate('larg/2 + 1', { larg: 10 }), 6);
assert.ok(near(evaluate('sin(30)'), 0.5, 1e-9));
assert.equal(evaluate('max(2;7;3)'), 7);
assert.equal(evaluate('12,5 mm'), 12.5);
assert.equal(evalParams([{ name: 'a', expr: '10' }, { name: 'b', expr: 'a*3' }]).scope.b, 30);
console.log('ok espressioni');
