// Prova rapida del motore: OpenCascade + replicad in Node.
import opencascade from 'replicad-opencascadejs';
import * as R from 'replicad';

const t0 = performance.now();
const oc = await opencascade();
R.setOC(oc);
console.log('OC pronto in', Math.round(performance.now() - t0), 'ms');

const plane = new R.Plane([0, 0, 0], [1, 0, 0], [0, 0, 1]);
const prof = R.draw([0, 0]).lineTo([40, 0]).lineTo([40, 20]).threePointsArcTo([0, 20], [20, 30]).close();
const hole = R.drawCircle(4).translate(20, 10);
let solid = prof.cut(hole).sketchOnPlane(plane).extrude(15);
console.log('facce', solid.faces.length, 'spigoli', solid.edges.length);

const top = solid.faces.filter((f) => f.geomType === 'PLANE' && f.normalAt().z > 0.9)[0];
console.log('faccia sopra', top.geomType, top.center.toTuple());
const e0 = solid.edges[0];
console.log('spigolo', e0.geomType, e0.pointAt(0.5).toTuple(), e0.tangentAt(0.5).toTuple());

const v = R.makeVertex([20, 0, 15]);
const d = R.measureDistanceBetween(solid.faces[0], v);
console.log('distanza', d);

const targetEdges = solid.edges.filter((e) => Math.abs(e.pointAt(0.5).z - 15) < 1e-6 && e.geomType === 'LINE');
const f = solid.fillet(2, (fe) => fe.inList(targetEdges));
console.log('raccordo ok, facce', f.faces.length);
const topF = f.faces.filter((x) => x.geomType === 'PLANE' && x.normalAt().z > 0.9);
const sh = f.shell(-1.5, (ff) => ff.inList(topF));
console.log('guscio ok, volume', R.measureVolume(sh).toFixed(1), 'vs', R.measureVolume(f).toFixed(1));

const m = sh.mesh({ tolerance: 0.05, angularTolerance: 0.2 });
console.log('mesh tri', m.triangles.length / 3, 'gruppi', m.faceGroups.length, 'facce', sh.faces.length);
const em = sh.meshEdges({ tolerance: 0.05, angularTolerance: 0.2 });
console.log('linee', em.lines.length / 6, 'gruppi spigoli', em.edgeGroups.length, 'spigoli', sh.edges.length);
const step = R.exportSTEP([{ shape: sh, name: 'corpo' }]);
console.log('step bytes', step.size);
console.log('stl bytes', sh.blobSTL({ binary: true }).size);
const rev = R.draw([5, 0]).lineTo([10, 0]).lineTo([10, 10]).lineTo([5, 10]).close().sketchOnPlane(new R.Plane([0, 0, 0], [1, 0, 0], [0, -1, 0])).revolve([0, 0, 1], { origin: [0, 0, 0], angle: 270 });
console.log('rivoluzione volume', R.measureVolume(rev).toFixed(1));
console.log('tempo totale', Math.round(performance.now() - t0), 'ms');
