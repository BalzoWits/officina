// Ottava prova: poligono regolare (tra i lati piatti / tra gli angoli), quota modificabile, estrusione.
import http from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';
import { chromium } from 'playwright-core';

const root = resolve('.');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.wasm': 'application/wasm', '.png': 'image/png' };
const server = http.createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  try { const data = await readFile(join(root, p)); res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'application/octet-stream' }); res.end(data); } catch { res.writeHead(404); res.end(); }
}).listen(8774);
await mkdir('out', { recursive: true });
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await (await browser.newContext({ viewport: { width: 1280, height: 820 }, hasTouch: true })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
const step = async (name, fn) => { try { await fn(); console.log('ok', name); } catch (e) { console.log('FALLITO', name, e.message); await page.screenshot({ path: `out/fail8-${name}.png` }); throw e; } };
const S = (f, a) => page.evaluate(f, a);
/** misure del poligono: lati, distanze tra lati opposti (pari) e tra vertici e centro */
const measure = () => S(() => {
  const s = window.officina.sketcher;
  const P = (id) => s.P(id);
  const lines = s.sk.geo.filter((g) => g.type === 'line' && !g.ref && !g.construction);
  const lens = lines.map((l) => { const a = P(l.p1_id), b = P(l.p2_id); return Math.hypot(b.x - a.x, b.y - a.y); });
  const k = s.sk.geo.find((g) => g.type === 'circle' && g.construction);
  const c = P(k.c_id);
  const apo = lines.map((l) => { const a = P(l.p1_id), b = P(l.p2_id); const dx = b.x - a.x, dy = b.y - a.y; return Math.abs((c.x - a.x) * dy - (c.y - a.y) * dx) / Math.hypot(dx, dy); });
  return { n: lines.length, minL: Math.min(...lens), maxL: Math.max(...lens), flats: 2 * Math.min(...apo), flatsMax: 2 * Math.max(...apo), dof: s.status.dof, dims: s.sk.cons.filter((x) => x.expr != null).map((x) => x.type + ':' + x.expr) };
});

try {
  await page.goto('http://localhost:8774/');
  await page.waitForFunction(() => document.querySelector('#loading').hidden, null, { timeout: 90000 });
  let box;
  await step('esagono da tastiera: 8 mm tra i lati piatti', async () => {
    await S(async () => { localStorage.clear(); const o = window.officina; o.app.doc.features = []; o.sketcher.polyN = 6; o.sketcher.polyMode = 'flats'; await o.refresh(); o.startSketch({ std: 'XY' }); });
    await page.waitForTimeout(300);
    box = await page.locator('.sketch-svg').boundingBox();
    await page.locator('#toolbar button[title="Poligono"]').click();
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.move(box.x + box.width / 2 + 60, box.y + box.height / 2 - 10);
    await page.waitForSelector('#dynInput:not([hidden])');
    await page.keyboard.type('8');
    await page.screenshot({ path: 'out/80-esagono-anteprima.png' });
    await page.keyboard.press('Enter');
    await page.waitForTimeout(200);
    const m = await measure();
    console.log('   ', JSON.stringify(m));
    if (m.n !== 6 || Math.abs(m.flats - 8) > 1e-6 || m.maxL - m.minL > 1e-6) throw new Error('esagono non regolare o misura errata');
  });

  await step('quota cambiata a 10: resta regolare', async () => {
    await S(() => { const s = window.officina.sketcher; const d = s.sk.cons.find((c) => c.expr === '8'); d.expr = '10'; s.resolve(); s.changed(); });
    const m = await measure();
    console.log('   ', JSON.stringify(m));
    if (Math.abs(m.flats - 10) > 1e-6 || Math.abs(m.flatsMax - 10) > 1e-6 || m.maxL - m.minL > 1e-6) throw new Error('non più regolare');
    await page.screenshot({ path: 'out/81-esagono.png' });
  });

  await step('ottagono col dito: 20 mm tra gli angoli dalla barra', async () => {
    await S(() => { const s = window.officina.sketcher; s.sk.geo = s.sk.geo.filter((g) => g.ref); s.sk.cons = []; s.resolve(); s.changed(); });
    await page.locator('#toolbar button[title="Poligono"]').click();
    await page.touchscreen.tap(box.x + box.width / 2 + 100, box.y + box.height / 2);
    await page.waitForSelector('#sketchInput:not([hidden]) [data-pchoice="corners"]');
    await page.click('#sketchInput [data-pchoice="corners"]');
    await page.waitForSelector('#sketchInput input[data-k="n"]');
    await page.fill('#sketchInput input[data-k="n"]', '8');
    await page.fill('#sketchInput input[data-k="size"]', '20');
    await page.screenshot({ path: 'out/82-barra-poligono.png' });
    await page.click('#sketchInput [data-xok]');
    await page.waitForTimeout(200);
    const r = await S(() => { const s = window.officina.sketcher; const k = s.sk.geo.find((g) => g.type === 'circle' && g.construction); return { n: s.sk.geo.filter((g) => g.type === 'line' && !g.ref).length, d: k.radius * 2, pref: localStorage.getItem('officina.polyMode') + '/' + localStorage.getItem('officina.polyN') }; });
    console.log('   ', JSON.stringify(r));
    if (r.n !== 8 || Math.abs(r.d - 20) > 1e-6) throw new Error('ottagono errato');
  });

  await step('estrusione dell\'ottagono', async () => {
    await page.click('#sketchFinish [data-finish]');
    await page.waitForSelector('#quickbar:not([hidden])');
    await page.click('#quickbar [data-qcmd="extrude"]');
    await page.waitForFunction(() => !document.body.classList.contains('busy'));
    await page.waitForTimeout(500);
    await page.click('#panel [data-act="ok"]');
    await page.waitForFunction(() => !document.body.classList.contains('busy'));
    await page.waitForTimeout(500);
    const r = await S(() => ({ b: window.officina.app.model.bodies.length, e: window.officina.app.model.errors }));
    console.log('   ', JSON.stringify(r));
    if (r.b !== 1) throw new Error('nessun corpo');
    await S(() => window.officina.vp.view('iso'));
    await page.waitForTimeout(600);
    await page.screenshot({ path: 'out/83-ottagono.png' });
  });
} finally {
  console.log('--- errori ---');
  console.log(errors.join('\n') || '(nessuno)');
  await browser.close();
  server.close();
}
