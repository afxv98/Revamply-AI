// ============================================================
// Capture 150 cinematic frames using Puppeteer + local server
// ============================================================
const puppeteer = require('puppeteer');
const http  = require('http');
const fs    = require('fs');
const path  = require('path');

const FRAMES     = 300;
const WIDTH      = 1440;
const HEIGHT     = 810;
const QUALITY    = 88;
const PORT       = 7331;
const OUTPUT_DIR = path.resolve(__dirname, '../frames');
const SERVE_DIR  = path.resolve(__dirname);

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// ── Minimal static file server ──────────────────────────────
const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.jpg':  'image/jpeg',
  '.png':  'image/png',
};

function startServer() {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      const file = path.join(SERVE_DIR, req.url === '/' ? '/animation-scene.html' : req.url);
      const ext  = path.extname(file);
      fs.readFile(file, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
        res.end(data);
      });
    });
    server.listen(PORT, '127.0.0.1', () => resolve(server));
  });
}

function bar(n, total, width = 40) {
  const filled = Math.round((n / total) * width);
  return '[' + '█'.repeat(filled) + '░'.repeat(width - filled) + ']';
}

(async () => {
  console.log('\n  Revamply — Frame Capture\n');

  const server = await startServer();
  console.log(`  Server running at http://127.0.0.1:${PORT}`);

  const browser = await puppeteer.launch({
    headless: false, // visible window — required for WebGL on Windows
    defaultViewport: null,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--enable-webgl',
      '--use-gl=angle',
      '--use-angle=swiftshader',
      '--enable-gpu-rasterization',
      '--ignore-gpu-blocklist',
      '--window-size=1440,810',
    ],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 });

  // Log any page errors for debugging
  page.on('console', m => { if (m.type() === 'error') console.error('\n  Page error:', m.text()); });

  console.log('  Loading scene…');
  await page.goto(`http://127.0.0.1:${PORT}/animation-scene.html`, {
    waitUntil: 'networkidle0',
    timeout: 60000,
  });

  await page.waitForFunction('window.isReady === true', { timeout: 30000 });
  await new Promise(r => setTimeout(r, 1000));
  console.log('  Scene ready. Capturing frames…\n');

  const start = Date.now();

  for (let i = 0; i < FRAMES; i++) {
    await page.evaluate((n, total) => window.setFrame(n, total), i, FRAMES);
    await page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))));

    const file = path.join(OUTPUT_DIR, `frame_${String(i).padStart(3, '0')}.jpg`);
    await page.screenshot({ path: file, type: 'jpeg', quality: QUALITY });

    const pct = Math.round(((i + 1) / FRAMES) * 100);
    const eta = i > 0 ? Math.round(((Date.now() - start) / i) * (FRAMES - i - 1) / 1000) : '?';
    process.stdout.write(`\r  ${bar(i + 1, FRAMES)} ${pct}%  frame ${i + 1}/${FRAMES}  ETA ${eta}s   `);
  }

  const total = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`\n\n  Done! ${FRAMES} frames saved to /frames  (${total}s)\n`);

  await browser.close();
  server.close();
})().catch(err => {
  console.error('\n  Error:', err.message);
  process.exit(1);
});
