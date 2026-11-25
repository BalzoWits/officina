// Build: impacchetta pagina e worker in dist/ e copia i moduli WebAssembly.
import { build } from 'esbuild';
import { copyFileSync, mkdirSync } from 'node:fs';

mkdirSync('dist', { recursive: true });
await build({
  entryPoints: { app: 'src/app/main.js', worker: 'src/worker/worker.js' },
  bundle: true,
  format: 'esm',
  outdir: 'dist',
  minify: true,
  target: ['safari16', 'chrome110', 'firefox115'],
  platform: 'browser',
  // i moduli Emscripten cercano i moduli di Node solo quando girano in Node
  external: ['module', 'fs', 'path', 'crypto', 'url', 'worker_threads', 'node:*'],
  logLevel: 'info',
});
copyFileSync('node_modules/replicad-opencascadejs/dist/replicad_single.wasm', 'dist/replicad_single.wasm');
copyFileSync('node_modules/@salusoft89/planegcs/dist/planegcs_dist/planegcs.wasm', 'dist/planegcs.wasm');
console.log('wasm copiati in dist/');
