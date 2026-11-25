// Seconda prova nel browser: gli altri comandi passando dal pannello, le finestre e l'iPad in verticale.
import http from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';
import { chromium } from 'playwright-core';

const root = resolve('.');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.wasm': 'application/wasm', '.png': 'image/png', '.webmanifest': 'application/manifest+json' };
const server = http.createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  try { const data = await readFile(join(root, p)); res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'application/octet-stream' }); res.end(data); } catch { res.writeHead(404); res.end(); }
}).listen(8767);
await mkdir('out', { recursive: true });
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ctx = await browser.newContext({ viewport: { width: 820, height: 1180 }, hasTouch: true, isMobile: false });
const page = await ctx.newPage();
const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message));
const idle = () => page.waitForFunction(() => !document.body.classList.contains('busy'), null, { timeout: 60000 }).then(() => page.waitForTimeout(300));
const step = async (name, fn) => { try { await fn(); console.log('ok', name); } catch (e) { console.log('FALLITO', name, e.message); await page.screenshot({ path: `out/fail2-${name}.png` }); throw e; } };

/** Apre un comando, applica le modifiche al draft e conferma. */
const run = (type, patch) => page.evaluate(async ({ type, patch }) => {
  const o = window.officina;
  o.openCommand(type);
  Object.assign(o.app.cmd.draft, typeof patch === 'function' ? {} : patch);
  await o.refresh();
  await new Promise((r) => setTimeout(r, 200));
  while (document.body.classList.contains('busy')) await new Promise((r) => setTimeout(r, 100));
  const err = document.querySelector('#panel .err');
  if (err) { const t = err.textContent; o.cancelCommand(); return t; }
  o.okCommand();
  await new Promise((r) => setTimeout(r, 200));
  while (document.body.classList.contains('busy')) await new Promise((r) => setTimeout(r, 100));
  return null;
}, { type, patch });

const sketchDoc = () => page.evaluate(async () => {
  const o = window.officina;
  const ref = [{ id: 'O', type: 'point', x: 0, y: 0, fixed: true, ref: true }, { id: 'X1', type: 'point', x: 1, y: 0, fixed: true, ref: true }, { id: 'Y1', type: 'point', x: 0, y: 1, fixed: true, ref: true },
    { id: 'AX', type: 'line', p1_id: 'O', p2_id: 'X1', ref: true }, { id: 'AY', type: 'line', p1_id: 'O', p2_id: 'Y1', ref: true }];
  const P = (id, x, y) => ({ id, type: 'point', x, y, fixed: false });
  const L = (id, a, b) => ({ id, type: 'line', p1_id: a, p2_id: b });
  o.app.doc.params = [];
  o.app.doc.features = [
    { id: 's1', type: 'sketch', name: 'Base', plane: { std: 'XY' }, cons: [], geo: [...ref, P('a', 0, 0), P('b', 40, 0), P('c', 40, 30), P('d', 0, 30), L('l1', 'a', 'b'), L('l2', 'b', 'c'), L('l3', 'c', 'd'), L('l4', 'd', 'a')] },
    // profilo di rivoluzione su XZ con asse costruzione verticale x=60
    { id: 's2', type: 'sketch', name: 'Profilo', plane: { std: 'XZ' }, cons: [], geo: [...ref, P('e', 64, 0), P('f', 70, 0), P('g', 70, 12), P('h', 64, 12), L('m1', 'e', 'f'), L('m2', 'f', 'g'), L('m3', 'g', 'h'), L('m4', 'h', 'e'),
      P('k1', 60, -5), P('k2', 60, 20), { ...L('ax', 'k1', 'k2'), construction: true }] },
  ];
  o.app.doc.rollback = null;
  await o.refresh();
});

const regionsOf = (sketchId) => page.evaluate((id) => {
  // usa la stessa logica della pagina: tocco sul profilo calcolato
  const o = window.officina;
  const sk = o.app.doc.features.find((f) => f.id === id);
  return sk ? sk.id : null;
}, sketchId);
void regionsOf;

try {
  await step('avvio verticale', async () => {
    await page.goto('http://localhost:8767/');
    await page.waitForFunction(() => document.querySelector('#loading').hidden, null, { timeout: 90000 });
    await sketchDoc();
    await idle();
  });

  await step('estrusione + rivoluzione su linea di costruzione', async () => {
    // regioni: chiave = sorgenti del contorno
    let e = await run('extrude', { sketch: 's1', regions: [{ key: 'l1,l2,l3,l4', seed: [20, 15] }], dist: '15', op: 'new' });
    if (e) throw new Error(e);
    e = await run('revolve', { sketch: 's2', regions: [{ key: 'm1,m2,m3,m4', seed: [67, 6] }], axis: { line: 'ax' }, angle: '360', op: 'new' });
    if (e) throw new Error(e);
    const n = await page.evaluate(() => window.officina.app.model.bodies.length);
    if (n !== 2) throw new Error('corpi ' + n);
    await page.evaluate(() => window.officina.vp.fit(false));
    await page.waitForTimeout(400);
    await page.screenshot({ path: 'out/11-rivoluzione.png' });
  });

  await step('serie circolare del corpo anello? no: serie rettangolare della rivoluzione', async () => {
    const e = await run('pattern', { kind: 'rect', src: { body: 'f_dummy' } });
    // corpo inesistente: deve dare errore leggibile, non bloccare
    console.log('   errore atteso:', e);
  });

  await step('specchio del corpo rivoluzione', async () => {
    const id = await page.evaluate(() => window.officina.app.model.bodies[1].id);
    const e = await run('mirror', { src: { body: id }, plane: { std: 'YZ' }, op: 'new' });
    if (e) throw new Error(e);
  });

  await step('combina: taglia la base con gli anelli', async () => {
    const ids = await page.evaluate(() => window.officina.app.model.bodies.map((b) => b.id));
    const e = await run('combine', { target: ids[0], tools: ids.slice(1), op: 'join', keep: false });
    if (e) throw new Error(e);
    const n = await page.evaluate(() => window.officina.app.model.bodies.length);
    console.log('   corpi dopo combina', n);
  });

  await step('smusso e guscio', async () => {
    const r = await page.evaluate(async () => {
      const o = window.officina;
      o.openCommand('chamfer');
      await o.refresh();
      while (document.body.classList.contains('busy')) await new Promise((r) => setTimeout(r, 100));
      const b = [...o.vp.pickBodies.values()][0];
      const D = b.data;
      const i = D.edgeInfo.findIndex((x) => x.t === 'LINE' && Math.abs(x.m[2] - 15) < 1e-6);
      o.applyPick(o.activePickField(), { kind: 'edge', body: b.id, i });
      o.app.cmd.draft.d = '1.5';
      await o.refresh();
      while (document.body.classList.contains('busy')) await new Promise((r) => setTimeout(r, 100));
      const err1 = document.querySelector('#panel .err')?.textContent || null;
      o.okCommand();
      await new Promise((r) => setTimeout(r, 300));
      while (document.body.classList.contains('busy')) await new Promise((r) => setTimeout(r, 100));
      o.openCommand('shell');
      await o.refresh();
      while (document.body.classList.contains('busy')) await new Promise((r) => setTimeout(r, 100));
      const b2 = [...o.vp.pickBodies.values()][0];
      const fi = b2.data.faceInfo.findIndex((f) => f.t === 'PLANE' && f.n && f.n[2] < -0.9);
      o.applyPick(o.activePickField(), { kind: 'face', body: b2.id, i: fi, point: b2.data.faceInfo[fi].c, normal: b2.data.faceInfo[fi].n });
      await o.refresh();
      while (document.body.classList.contains('busy')) await new Promise((r) => setTimeout(r, 100));
      const err2 = document.querySelector('#panel .err')?.textContent || null;
      o.okCommand();
      await new Promise((r) => setTimeout(r, 300));
      while (document.body.classList.contains('busy')) await new Promise((r) => setTimeout(r, 100));
      return { err1, err2, errors: o.app.model.errors };
    });
    console.log('   ', JSON.stringify(r));
    await page.evaluate(() => window.officina.vp.view('bottom'));
    await page.waitForTimeout(600);
    await page.screenshot({ path: 'out/12-guscio.png' });
  });

  await step('sposta + serie della feature', async () => {
    const ids = await page.evaluate(() => window.officina.app.model.bodies.map((b) => b.id));
    let e = await run('move', { bodies: [ids[0]], dx: '5', dz: '0', angle: '15', raxis: 'Z' });
    if (e) throw new Error(e);
    e = await run('extrude', { sketch: 's1', regions: [{ key: 'l1,l2,l3,l4', seed: [20, 15] }], dist: '3', op: 'new' });
    if (e) throw new Error(e);
    const last = await page.evaluate(() => window.officina.app.doc.features.at(-1).id);
    e = await run('pattern', { kind: 'circ', src: { feature: last }, axis: { world: 'Z' }, n: '4', angle: '360' });
    if (e) throw new Error(e);
    const n = await page.evaluate(() => window.officina.app.model.bodies.length);
    console.log('   corpi dopo serie circolare di feature "nuovo corpo"', n);
    await page.evaluate(() => window.officina.vp.view('iso'));
    await page.waitForTimeout(600);
    await page.screenshot({ path: 'out/13-serie.png' });
  });

  await step('finestre: parametri, esporta, progetti, menu cronologia', async () => {
    await page.click('#btnParams');
    await page.click('#modal [data-add]');
    await page.waitForTimeout(150);
    await page.screenshot({ path: 'out/14-parametri.png' });
    await page.click('#modal [data-close]');
    await page.click('#btnExport');
    await page.click('#modal [data-go]');
    await page.waitForSelector('#modal .ready', { timeout: 30000 });
    await page.screenshot({ path: 'out/15-esporta.png' });
    await page.click('#modal [data-close]');
    await page.click('#btnProjects');
    await page.waitForSelector('#modal .projects');
    await page.screenshot({ path: 'out/16-progetti.png' });
    await page.click('#modal [data-close]');
    await page.click('#timeline [data-f="2"]');
    await page.waitForSelector('#popover .menu');
    await page.screenshot({ path: 'out/17-menu.png' });
    await page.click('#popover', { position: { x: 5, y: 5 } });
    await page.click('#btnTree');
    await page.waitForTimeout(300);
    await page.screenshot({ path: 'out/18-browser.png' });
  });

  await step('modifica schizzo: linea, arco, vincolo, trascinamento, pinch', async () => {
    await page.click('#btnTree');
    await page.evaluate(() => window.officina.startSketch({ std: 'XY' }));
    await page.waitForTimeout(300);
    const box = await page.locator('.sketch-svg').boundingBox();
    const X = (dx) => box.x + box.width / 2 + dx, Y = (dy) => box.y + box.height / 2 + dy;
    await page.locator('#toolbar button[title="Linea"]').click();
    await page.mouse.click(X(-100), Y(80));
    await page.mouse.click(X(100), Y(82));
    await page.mouse.click(X(100), Y(-60));
    await page.locator('#toolbar button[title="Arco"]').click();
    await page.mouse.click(X(100), Y(-60));
    await page.mouse.click(X(-100), Y(-60));
    await page.mouse.click(X(0), Y(-130));
    await page.locator('#toolbar button[title="Linea"]').click();
    await page.mouse.click(X(-100), Y(-60));
    await page.mouse.click(X(-100), Y(80));
    let st = await page.evaluate(() => ({ s: window.officina.sketcher.statusInfo(), regions: window.officina.sketcher.regions?.length, n: window.officina.sketcher.sk.geo.length }));
    console.log('   dopo disegno', JSON.stringify(st));
    // seleziona: tocco sulla linea inferiore e vincolo orizzontale (già auto) poi trascino un punto
    await page.locator('#toolbar button[title="Seleziona"]').click();
    await page.mouse.move(X(100), Y(-60));
    await page.mouse.down();
    await page.mouse.move(X(130), Y(-80), { steps: 5 });
    await page.mouse.up();
    // pinch con due dita (CDP touch)
    const cdp = await ctx.newCDPSession(page);
    const t = (x1, y1, x2, y2) => [{ x: x1, y: y1, id: 1 }, { x: x2, y: y2, id: 2 }];
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: t(X(-50), Y(0), X(50), Y(0)) });
    for (let k = 1; k <= 5; k++) await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: t(X(-50 - k * 10), Y(0), X(50 + k * 10), Y(0)) });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    st = await page.evaluate(() => window.officina.sketcher.view);
    console.log('   vista dopo pinch', JSON.stringify(st));
    await page.screenshot({ path: 'out/19-schizzo-libero.png' });
    await page.click('#sketchFinish [data-finish]');
    await idle();
  });
} finally {
  console.log('--- errori console ---');
  console.log(errors.join('\n') || '(nessuno)');
  await browser.close();
  server.close();
}
