// Sistemi di riferimento dei piani di schizzo (origine, assi x/y, normale).
export const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
export const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
export const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
export const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
export const len = (a) => Math.hypot(a[0], a[1], a[2]);
export const norm = (a) => { const l = len(a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };

export const STD_FRAMES = {
  XY: { o: [0, 0, 0], x: [1, 0, 0], y: [0, 1, 0], n: [0, 0, 1] },
  XZ: { o: [0, 0, 0], x: [1, 0, 0], y: [0, 0, 1], n: [0, -1, 0] },
  YZ: { o: [0, 0, 0], x: [0, 1, 0], y: [0, 0, 1], n: [1, 0, 0] },
};

/** Piano con normale n passante per il punto: x orizzontale, y verso l'alto quando possibile. */
export function frameFromNormal(n, through) {
  n = norm(n);
  let x, y;
  if (Math.abs(n[2]) > 0.9) {
    x = norm(sub([1, 0, 0], mul(n, n[0])));
    y = cross(n, x);
  } else {
    y = norm(sub([0, 0, 1], mul(n, n[2])));
    x = cross(y, n);
  }
  const o = mul(n, dot(through, n));
  return { o, x, y, n };
}

export const to3 = (fr, p) => add(fr.o, add(mul(fr.x, p[0]), mul(fr.y, p[1])));
export const to2 = (fr, p) => { const d = sub(p, fr.o); return [dot(d, fr.x), dot(d, fr.y)]; };
