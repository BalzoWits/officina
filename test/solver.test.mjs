import assert from 'node:assert/strict';
import { initSolver, solve, measureDim } from '../src/app/solver.js';

await initSolver();
const P = (id, x, y, extra = {}) => ({ id, type: 'point', x, y, fixed: false, ...extra });
// gli id delle linee sono "minori" dei punti in ordine alfabetico: deve funzionare lo stesso
const sk = {
  geo: [P('O', 0, 0, { ref: true }), P('p1', 0, 0), P('p2', 48, 3), P('p3', 50, 31), P('p4', 2, 29),
    { id: 'a1', type: 'line', p1_id: 'p1', p2_id: 'p2' }, { id: 'a2', type: 'line', p1_id: 'p2', p2_id: 'p3' },
    { id: 'a3', type: 'line', p1_id: 'p3', p2_id: 'p4' }, { id: 'a4', type: 'line', p1_id: 'p4', p2_id: 'p1' }],
  cons: [
    { id: 'c1', type: 'p2p_coincident', p1_id: 'p1', p2_id: 'O' },
    { id: 'c2', type: 'horizontal_l', l_id: 'a1' }, { id: 'c3', type: 'horizontal_l', l_id: 'a3' },
    { id: 'c4', type: 'vertical_l', l_id: 'a2' }, { id: 'c5', type: 'vertical_l', l_id: 'a4' },
  ],
};
let r = solve(sk);
assert.ok(r.ok);
console.log('dof senza quote', r.dof);
sk.cons.push({ id: 'd1', type: 'p2p_distance', p1_id: 'p1', p2_id: 'p2', distance: 0, expr: 'w' });
sk.cons.push({ id: 'd2', type: 'p2p_distance', p1_id: 'p2', p2_id: 'p3', distance: 0, expr: 'w/2' });
r = solve(sk, { w: 60 });
assert.ok(r.ok, r.error);
const g = new Map(r.geo.map((x) => [x.id, x]));
console.log('p3', g.get('p3').x.toFixed(3), g.get('p3').y.toFixed(3), 'dof', r.dof);
assert.ok(Math.abs(g.get('p3').x - 60) < 1e-6 && Math.abs(g.get('p3').y - 30) < 1e-6);
assert.equal(r.dof, 0);
assert.ok(Math.abs(measureDim(sk.cons[5], r.geo) - 60) < 1e-6);
// trascinamento su schizzo vincolato: non si muove
r = solve({ ...sk, geo: r.geo }, { w: 60 }, { id: 'p3', x: 80, y: 50 });
console.log('drag su vincolato ok', r.ok, r.geo.find((x) => x.id === 'p3').x.toFixed(2));
// arco + cerchio tangente
const sk2 = {
  geo: [P('c', 0, 0), P('s', 10, 0), P('e', 0, 10), { id: 'arc', type: 'arc', c_id: 'c', radius: 10, start_angle: 0, end_angle: Math.PI / 2, start_id: 's', end_id: 'e' },
    P('k', 30, 0), { id: 'cir', type: 'circle', c_id: 'k', radius: 5 }],
  cons: [{ id: 't', type: 'tangent_ca', c_id: 'cir', a_id: 'arc' }, { id: 'r', type: 'arc_radius', a_id: 'arc', radius: 0, expr: '12' }],
};
r = solve(sk2);
assert.ok(r.ok, r.error);
const s2 = new Map(r.geo.map((x) => [x.id, x]));
const d = Math.hypot(s2.get('k').x - s2.get('c').x, s2.get('k').y - s2.get('c').y);
console.log('arco r', s2.get('arc').radius.toFixed(3), 'distanza centri', d.toFixed(3), 'cerchio r', s2.get('cir').radius.toFixed(3));
// conflitto
sk.cons.push({ id: 'd3', type: 'p2p_distance', p1_id: 'p3', p2_id: 'p4', distance: 0, expr: '10' });
r = solve(sk, { w: 60 });
console.log('conflitto: ok', r.ok, 'conflicting', r.conflicting, 'redundant', r.redundant);
