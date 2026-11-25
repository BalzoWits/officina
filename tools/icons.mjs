// Genera le icone PNG (cubo isometrico su fondo blu) senza dipendenze.
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';

function png(w, h, rgba) {
  const crcT = new Uint32Array(256).map((_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c >>> 0; });
  const crc = (b) => { let c = 0xffffffff; for (const x of b) c = crcT[(c ^ x) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
  const chunk = (type, data) => {
    const b = Buffer.alloc(12 + data.length);
    b.writeUInt32BE(data.length, 0); b.write(type, 4, 'ascii'); data.copy(b, 8);
    b.writeUInt32BE(crc(b.subarray(4, 8 + data.length)), 8 + data.length);
    return b;
  };
  const raw = Buffer.alloc((w * 4 + 1) * h);
  for (let y = 0; y < h; y++) { raw[y * (w * 4 + 1)] = 0; rgba.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4); }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4); ihdr[8] = 8; ihdr[9] = 6;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]);
}
const inPoly = (x, y, P) => { let c = false; for (let i = 0, j = P.length - 1; i < P.length; j = i++) { const [xi, yi] = P[i], [xj, yj] = P[j]; if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c; } return c; };

function draw(S, full) {
  const buf = Buffer.alloc(S * S * 4);
  const cx = 0.5, cy = 0.53, r = 0.27;
  const v = (a, k = 1) => [cx + r * k * Math.cos(a), cy + r * k * Math.sin(a)];
  const A = (d) => (d * Math.PI) / 180;
  const top = [v(A(-90)), v(A(-30)), [cx, cy], v(A(-150))];
  const left = [v(A(-150)), [cx, cy], v(A(90)), v(A(150))];
  const right = [[cx, cy], v(A(-30)), v(A(30)), v(A(90))];
  const SS = 4;
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    let acc = [0, 0, 0, 0];
    for (let sy = 0; sy < SS; sy++) for (let sx = 0; sx < SS; sx++) {
      const u = (x + (sx + 0.5) / SS) / S, w = (y + (sy + 0.5) / SS) / S;
      let col = null;
      const rr = full ? 0 : 0.2;
      const dx = Math.max(0, Math.abs(u - 0.5) - (0.5 - rr)), dy = Math.max(0, Math.abs(w - 0.5) - (0.5 - rr));
      if (Math.hypot(dx, dy) <= rr + 1e-9) col = [31 + 20 * w, 122 - 30 * w, 224 - 20 * w, 255];
      if (col) {
        if (inPoly(u, w, top)) col = [255, 255, 255, 255];
        else if (inPoly(u, w, left)) col = [214, 230, 250, 255];
        else if (inPoly(u, w, right)) col = [160, 196, 240, 255];
      } else col = [0, 0, 0, 0];
      acc = acc.map((a, i) => a + col[i]);
    }
    const o = (y * S + x) * 4;
    for (let i = 0; i < 4; i++) buf[o + i] = Math.round(acc[i] / (SS * SS));
  }
  return png(S, S, buf);
}
mkdirSync('icons', { recursive: true });
writeFileSync('icons/icon-180.png', draw(180, true));
writeFileSync('icons/icon-192.png', draw(192, false));
writeFileSync('icons/icon-512.png', draw(512, false));
console.log('icone generate');
