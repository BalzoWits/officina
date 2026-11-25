// Prova end-to-end in un browser vero (Chrome headless): schizzo, estrusione, raccordo, foro, export.
import http from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';
import { chromium } from 'playwright-core';

const root = resolve('.');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.wasm': 'application/wasm', '.png': 'image/png', '.webmanifest': 'application/manifest+json', '.json': 'application/json' };
const server = http.createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  try { const data = await readFile(join(root, p)); res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'application/octet-stream' }); res.end(data); } catch { res.writeHead(404); res.end(); }
}).listen(8765);

const out = 'out';
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const ctx = await browser.newContext({ viewport: { width: 1180, height: 820 }, deviceScaleFactor: 1, hasTouch: true });
const page = await ctx.newPage();
const errors = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message));

const step = async (name, fn) => {
  const t = Date.now();
  try { await fn(); console.log('ok', name, `${Date.now() - t} ms`); } catch (e) { console.log('FALLITO', name, e.message); await page.screenshot({ path: `${out}/fail-${name}.png` }); throw e; }
};
const idle = () => page.waitForFunction(() => !document.body.classList.contains('busy'), null, { timeout: 60000 }).then(() => page.waitForTimeout(250));

try {
  await step('avvio', async () => {
    await page.goto('http://localhost:8765/');
    await page.waitForFunction(() => document.querySelector('#loading').hidden, null, { timeout: 90000 });
    await page.evaluate(async () => {
      // progetto pulito per il test
      const { app } = window.officina;
      app.doc.features = []; app.doc.params = [{ name: 'alt', expr: '12' }];
      await window.officina.refresh();
    });
    await idle();
    await page.screenshot({ path: `${out}/01-avvio.png` });
  });

  await step('schizzo rettangolo + cerchio', async () => {
    await page.evaluate(() => window.officina.startSketch({ std: 'XY' }));
    await page.waitForTimeout(300);
    const box = await page.locator('.sketch-svg').boundingBox();
    const cx = box.x + box.width / 2, cy = box.y + box.height / 2;
    await page.locator('#toolbar button[title="Rettangolo"]').click();
    await page.mouse.click(cx - 150, cy + 100);
    await page.mouse.click(cx + 150, cy - 100);
    await page.locator('#toolbar button[title="Cerchio"]').click();
    await page.mouse.click(cx, cy);
    await page.mouse.click(cx + 50, cy);
    await page.waitForTimeout(200);
    await page.screenshot({ path: `${out}/02-schizzo.png` });
    // quota sul lato inferiore con parametro
    await page.locator('#toolbar button[title="Quota"]').click();
    await page.mouse.click(cx, cy + 100);
    await page.mouse.click(cx + 60, cy + 140);
    await page.waitForSelector('#modal:not([hidden]) input.big');
    await page.fill('#modal input.big', 'alt*5');
    await page.click('#modal [data-ok]');
    await page.waitForTimeout(300);
    const st = await page.evaluate(() => window.officina.sketcher.statusInfo());
    console.log('   dof dopo quota', st.dof);
    await page.screenshot({ path: `${out}/03-quota.png` });
    await page.click('#sketchFinish [data-finish]');
    await idle();
  });

  await step('estrusione', async () => {
    await page.evaluate(() => window.officina.openCommand('extrude'));
    await idle();
    // tocco sull'anello (zona tra rettangolo e cerchio) per selezionare il profilo
    const sel = await page.evaluate(() => window.officina.app.cmd.draft.regions.length);
    console.log('   profili preselezionati', sel);
    if (!sel) {
      const p = await page.evaluate(() => {
        const { vp, app } = window.officina;
        const sk = app.doc.features.find((f) => f.type === 'sketch');
        const pts = sk.geo.filter((g) => g.type === 'point' && !g.ref);
        const xs = pts.map((p) => p.x), ys = pts.map((p) => p.y);
        const s = vp.project([Math.min(...xs) + 5, Math.min(...ys) + 5, 0]);
        const r = vp.canvas.getBoundingClientRect();
        return [s[0] + r.left, s[1] + r.top];
      });
      await page.mouse.click(p[0], p[1]);
      await idle();
    }
    await page.fill('#panel input[data-k="dist"]', 'alt');
    await page.waitForTimeout(500);
    await idle();
    await page.screenshot({ path: `${out}/04-estrusione-anteprima.png` });
    await page.click('#panel [data-act="ok"]');
    await idle();
    await page.screenshot({ path: `${out}/05-estrusione.png` });
    const n = await page.evaluate(() => window.officina.app.model.bodies.length);
    if (n !== 1) throw new Error('atteso 1 corpo, trovati ' + n);
  });

  await step('raccordo su uno spigolo superiore', async () => {
    await page.evaluate(() => window.officina.openCommand('fillet'));
    await idle();
    const p = await page.evaluate(() => {
      const { vp } = window.officina;
      const b = [...vp.pickBodies.values()][0];
      // spigolo dritto più in alto e più vicino alla camera
      let best = null;
      b.data.edgeInfo.forEach((e, i) => { if (e.t === 'LINE' && e.m[2] > 11) { const s = vp.project(e.m); if (!best || s[1] > best.s[1]) best = { i, s }; } });
      const r = vp.canvas.getBoundingClientRect();
      return [best.s[0] + r.left, best.s[1] + r.top];
    });
    await page.mouse.click(p[0], p[1]);
    await idle();
    const ne = await page.evaluate(() => window.officina.app.cmd.draft.edges.length);
    if (ne !== 1) throw new Error('spigoli selezionati: ' + ne);
    await page.fill('#panel input[data-k="r"]', '3');
    await page.waitForTimeout(500);
    await idle();
    await page.screenshot({ path: `${out}/06-raccordo-anteprima.png` });
    await page.click('#panel [data-act="ok"]');
    await idle();
  });

  await step('foro passante sulla faccia superiore', async () => {
    await page.evaluate(() => window.officina.openCommand('hole'));
    await idle();
    const p = await page.evaluate(() => {
      const { vp } = window.officina;
      const b = [...vp.pickBodies.values()][0];
      const fi = b.data.faceInfo.findIndex((f) => f.t === 'PLANE' && f.n && f.n[2] > 0.9);
      const c = b.data.faceInfo[fi].c;
      const s = vp.project([c[0] - 20, c[1], c[2]]);
      const r = vp.canvas.getBoundingClientRect();
      return [s[0] + r.left, s[1] + r.top];
    });
    await page.mouse.click(p[0], p[1]);
    await idle();
    await page.click('#panel [data-toggle="through"]');
    await idle();
    await page.screenshot({ path: `${out}/07-foro.png` });
    await page.click('#panel [data-act="ok"]');
    await idle();
    const errs = await page.evaluate(() => window.officina.app.model.errors);
    if (Object.keys(errs).length) throw new Error(JSON.stringify(errs));
  });

  await step('parametro modificato', async () => {
    await page.evaluate(async () => {
      const o = window.officina;
      o.app.doc.params[0].expr = '20';
      await o.refresh();
    });
    await idle();
    await page.evaluate(() => window.officina.vp.view('iso'));
    await page.waitForTimeout(600);
    await page.screenshot({ path: `${out}/08-param.png` });
    const errs = await page.evaluate(() => window.officina.app.model.errors);
    console.log('   errori dopo cambio parametro', JSON.stringify(errs));
  });

  await step('export 3mf e step', async () => {
    const r = await page.evaluate(async () => {
      const { cad } = window.officina;
      const a = await cad.call('export', { format: '3mf', ids: [] });
      const b = await cad.call('export', { format: 'step', ids: [] });
      const c = await cad.call('export', { format: 'stl', ids: [] });
      return [a.length, b.length, c.length];
    });
    console.log('   byte 3mf/step/stl', r.join(' / '));
  });

  await step('tocco nella vista (touch)', async () => {
    await page.touchscreen.tap(400, 400);
    await page.waitForTimeout(200);
  });
} finally {
  console.log('--- messaggi console ---');
  console.log(errors.filter((e) => !/GPU stall|GL Driver|WebGL|swiftshader/i.test(e)).join('\n') || '(nessuno)');
  await browser.close();
  server.close();
}
