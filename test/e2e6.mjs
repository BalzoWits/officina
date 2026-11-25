// Sesta prova: magnete sulla griglia dello schizzo.
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
}).listen(8772);
await mkdir('out', { recursive: true });
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await (await browser.newContext({ viewport: { width: 1280, height: 820 } })).newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
const step = async (name, fn) => { try { await fn(); console.log('ok', name); } catch (e) { console.log('FALLITO', name, e.message); await page.screenshot({ path: `out/fail6-${name}.png` }); throw e; } };
const corners = () => page.evaluate(() => { const s = window.officina.sketcher; return { step: s.gridStep(), pts: s.sk.geo.filter((g) => g.type === 'point' && !g.ref).map((p) => [p.x, p.y]) }; });
const onGrid = ({ step, pts }) => pts.every(([x, y]) => Math.abs(x / step - Math.round(x / step)) < 1e-6 && Math.abs(y / step - Math.round(y / step)) < 1e-6);

try {
  await page.goto('http://localhost:8772/');
  await page.waitForFunction(() => document.querySelector('#loading').hidden, null, { timeout: 90000 });
  await page.evaluate(() => { localStorage.removeItem('officina.snap'); });
  await page.reload();
  await page.waitForFunction(() => document.querySelector('#loading').hidden, null, { timeout: 90000 });
  const box = { w: 0 };
  await step('magnete acceso di default, rettangolo sui quadretti', async () => {
    await page.evaluate(async () => { const o = window.officina; o.app.doc.features = []; await o.refresh(); o.startSketch({ std: 'XY' }); });
    await page.waitForTimeout(300);
    const b = await page.locator('.sketch-svg').boundingBox();
    Object.assign(box, b);
    if (!(await page.locator('#toolbar button[title="Magnete"].on').count())) throw new Error('pulsante non acceso');
    await page.locator('#toolbar button[title="Rettangolo"]').click();
    await page.mouse.click(b.x + b.width / 2 + 37, b.y + b.height / 2 - 23);
    await page.mouse.move(b.x + b.width / 2 + 163, b.y + b.height / 2 - 101);
    await page.screenshot({ path: 'out/60-magnete.png' });
    await page.mouse.click(b.x + b.width / 2 + 163, b.y + b.height / 2 - 101);
    const c = await corners();
    console.log('   passo', c.step, 'punti', JSON.stringify(c.pts));
    if (!onGrid(c)) throw new Error('punti fuori griglia');
  });
  await step('magnete spento: punti liberi, scelta ricordata', async () => {
    await page.locator('#toolbar button[title="Magnete"]').click();
    await page.locator('#toolbar button[title="Punto"]').click();
    await page.mouse.click(box.x + box.width / 2 - 151, box.y + box.height / 2 + 77);
    const c = await corners();
    const last = c.pts[c.pts.length - 1];
    console.log('   punto libero', JSON.stringify(last));
    if (onGrid({ step: c.step, pts: [last] })) throw new Error('il punto è ancora agganciato');
    const saved = await page.evaluate(() => localStorage.getItem('officina.snap'));
    if (saved !== '0') throw new Error('scelta non ricordata');
  });
} finally {
  console.log('--- errori ---');
  console.log(errors.join('\n') || '(nessuno)');
  await browser.close();
  server.close();
}
