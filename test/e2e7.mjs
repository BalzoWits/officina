// Settima prova: salvataggio online tra due dispositivi (due browser separati) con un cloud finto.
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
}).listen(8773);
await mkdir('out', { recursive: true });

// "cloud" condiviso: lo spazio online di un solo utente
const cloud = { meta: {}, data: {} };
const signed = {};
function fake(dev) {
  return (op, ...a) => {
    const user = { uid: 'u1', name: 'Prova', email: 'prova@example.com' };
    switch (op) {
      case 'user': return signed[dev] ? user : null;
      case 'signIn': signed[dev] = true; return user;
      case 'signOut': signed[dev] = false; return null;
      case 'list': return Object.entries(cloud.meta).map(([id, m]) => ({ id, ...m }));
      case 'meta': return cloud.meta[a[0]] || null;
      case 'getData': return cloud.data[a[0]] || null;
      case 'claim': {
        const [id, expect, meta] = a;
        const cur = cloud.meta[id];
        if (((cur && cur.rev) || 0) !== expect) return { ok: false, remote: cur || null };
        cloud.meta[id] = { ...meta, rev: expect + 1 };
        return { ok: true, rev: expect + 1 };
      }
      case 'putData': cloud.data[a[0]] = { rev: a[1], json: a[2] }; return true;
      case 'remove': delete cloud.meta[a[0]]; delete cloud.data[a[0]]; return true;
      default: throw new Error('op ' + op);
    }
  };
}

const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const errors = [];
async function device(name) {
  const ctx = await browser.newContext({ viewport: { width: 1180, height: 820 } });
  await ctx.exposeFunction('__officinaFakeCloud', fake(name));
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errors.push(`${name}: ${e.message}`));
  await page.goto('http://localhost:8773/');
  await page.waitForFunction(() => document.querySelector('#loading').hidden, null, { timeout: 90000 });
  return page;
}
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const until = async (page, fn, arg, ms = 15000) => page.waitForFunction(fn, arg, { timeout: ms, polling: 200 });
const step = async (name, fn) => { try { await fn(); console.log('ok', name); } catch (e) { console.log('FALLITO', name, e.message); throw e; } };

try {
  const A = await device('A');
  const B = await device('B');

  await step('A accede: il suo progetto va online', async () => {
    if (!(await A.locator('#btnCloud').isVisible())) throw new Error('pulsante cloud nascosto');
    await A.click('#btnCloud');
    await A.click('#modal [data-in]');
    await A.evaluate(() => window.officina.commit((d) => { d.name = 'Staffa'; d.params.push({ name: 'larg', expr: '40' }); }));
    await until(A, () => window.officina.sync.status.state === 'ok');
    await wait(2500);
    const n = Object.keys(cloud.meta).length;
    console.log('   online:', JSON.stringify(Object.values(cloud.meta).map((m) => [m.name, m.rev])));
    if (!n) throw new Error('niente online');
  });

  await step('B accede: trova il progetto e lo apre', async () => {
    await B.click('#btnCloud');
    await B.click('#modal [data-in]');
    await wait(1500);
    await B.click('#btnProjects');
    await B.waitForSelector('#modal .projects');
    await B.screenshot({ path: 'out/70-progetti-B.png' });
    const id = await A.evaluate(() => window.officina.app.project.id);
    await B.click(`#modal [data-open="${id}"]`);
    await until(B, (id) => window.officina.app.project && window.officina.app.project.id === id, id);
    const p = await B.evaluate(() => window.officina.app.doc.params.map((x) => x.name + '=' + x.expr).join());
    console.log('   parametri su B:', p);
    if (p !== 'larg=40') throw new Error('progetto non arrivato');
  });

  await step('A modifica, B si aggiorna da solo', async () => {
    await A.evaluate(() => window.officina.commit((d) => { d.params[0].expr = '55'; }));
    await until(B, () => window.officina.app.doc.params[0] && window.officina.app.doc.params[0].expr === '55', null, 20000);
    console.log('   B vede larg=55');
  });

  await step('modifiche in contemporanea: conflitto, tieni entrambe', async () => {
    await A.evaluate(() => window.officina.commit((d) => { d.params.push({ name: 'da_A', expr: '1' }); }));
    await B.evaluate(() => window.officina.commit((d) => { d.params.push({ name: 'da_B', expr: '2' }); }));
    // uno dei due arriva secondo e vede la finestra di scelta
    const which = await Promise.race([
      A.waitForSelector('#modal .conflict', { timeout: 20000 }).then(() => A),
      B.waitForSelector('#modal .conflict', { timeout: 20000 }).then(() => B),
    ]);
    await which.screenshot({ path: 'out/71-conflitto.png' });
    await which.click('#modal [data-c="both"]');
    await wait(4000);
    const names = Object.values(cloud.meta).map((m) => m.name);
    console.log('   online ora:', JSON.stringify(names));
    // online: "Staffa" con la versione dell'altro dispositivo e la copia con le modifiche di chi ha scelto
    const params = (n) => { const id = Object.keys(cloud.meta).find((k) => cloud.meta[k].name === n); return id && cloud.data[id] ? JSON.parse(cloud.data[id].json).params.map((p) => p.name).join() : null; };
    const main = params('Staffa'), copy = params('Staffa (questo dispositivo)');
    console.log('   Staffa:', main, '· copia:', copy);
    if (!copy || !main || main === copy) throw new Error('le due versioni non sono separate');
    if (![main, copy].some((s) => s.includes('da_A')) || ![main, copy].some((s) => s.includes('da_B'))) throw new Error('una modifica è andata persa');
  });
} finally {
  console.log('--- errori ---');
  console.log(errors.join('\n') || '(nessuno)');
  await browser.close();
  server.close();
}
