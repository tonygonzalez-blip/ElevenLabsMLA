// WC-01-06 walk script 1 — explore Command Center panels top to bottom (read-only).
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS, closeTarget } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const DIR = fileURLToPath(new URL('.', import.meta.url));
const save = (name, data) => fs.writeFileSync(`${DIR}/${name}`, typeof data === 'string' ? data : JSON.stringify(data, null, 1));

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
const digest = await gotoPage(cdp, 'https://demo.washcentral.com/command-center.html');
save('digest-command-center-initial.json', digest);

// Full page text, top to bottom
const fullText = await cdp.eval('document.body.innerText');
save('fulltext-command-center.txt', fullText);

// Panel structure: dump each top-level section/panel heading + class names
const structure = await cdp.eval(`(() => {
  const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const out = [];
  for (const el of document.querySelectorAll('section, [class*="panel"], [class*="card"], [class*="section"]')) {
    if (!vis(el)) continue;
    const r = el.getBoundingClientRect();
    if (r.height < 100) continue;
    const h = el.querySelector('h1,h2,h3,h4,[class*="title"],[class*="header"]');
    out.push({ tag: el.tagName, cls: (el.className||'').toString().slice(0,120), top: Math.round(r.top + scrollY), h: Math.round(r.height), heading: h ? (h.textContent||'').trim().replace(/\\s+/g,' ').slice(0,120) : null });
  }
  return out.slice(0, 60);
})()`);
save('structure-panels.json', structure);

// Priority Intelligence panel HTML (for affordance/deep-link inspection)
const piHtml = await cdp.eval(`(() => {
  const els = [...document.querySelectorAll('div,section')];
  const el = els.find(e => /PRIORITY INTELLIGENCE/i.test(e.textContent||'') && e.querySelectorAll('a,button').length > 3 && !els.some(o => o !== e && e.contains(o) && /PRIORITY INTELLIGENCE/i.test(o.textContent||'') && o.querySelectorAll('a,button').length > 3 && o.getBoundingClientRect().height < e.getBoundingClientRect().height));
  // simpler: find the smallest element containing the heading text 'PRIORITY INTELLIGENCE'
  let best = null;
  for (const e of els) {
    const t = e.textContent || '';
    if (t.includes('PRIORITY INTELLIGENCE') || /Priority Intelligence/.test(t)) {
      if (!best || e.getBoundingClientRect().height < best.getBoundingClientRect().height) {
        if (e.getBoundingClientRect().height > 300) best = e;
      }
    }
  }
  return best ? best.outerHTML.slice(0, 30000) : 'NOT FOUND';
})()`);
save('html-priority-intelligence.txt', piHtml);

// Action Ownership panel HTML
const aoHtml = await cdp.eval(`(() => {
  const els = [...document.querySelectorAll('div,section')];
  let best = null;
  for (const e of els) {
    const t = e.textContent || '';
    if (/ACTION OWNERSHIP/i.test(t)) {
      if (!best || e.getBoundingClientRect().height < best.getBoundingClientRect().height) {
        if (e.getBoundingClientRect().height > 150) best = e;
      }
    }
  }
  return best ? best.outerHTML.slice(0, 30000) : 'NOT FOUND';
})()`);
save('html-action-ownership.txt', aoHtml);

// Ask MAIA panel HTML
const maiaHtml = await cdp.eval(`(() => {
  const els = [...document.querySelectorAll('div,section')];
  let best = null;
  for (const e of els) {
    const t = e.textContent || '';
    if (/MAIA/.test(t)) {
      if (!best || e.getBoundingClientRect().height < best.getBoundingClientRect().height) {
        if (e.getBoundingClientRect().height > 150) best = e;
      }
    }
  }
  return best ? best.outerHTML.slice(0, 20000) : 'NOT FOUND';
})()`);
save('html-ask-maia.txt', maiaHtml);

// Mobile App panel HTML
const mobHtml = await cdp.eval(`(() => {
  const els = [...document.querySelectorAll('div,section')];
  let best = null;
  for (const e of els) {
    const t = e.textContent || '';
    if (/Member app engagement/i.test(t)) {
      if (!best || e.getBoundingClientRect().height < best.getBoundingClientRect().height) {
        if (e.getBoundingClientRect().height > 100) best = e;
      }
    }
  }
  return best ? best.outerHTML.slice(0, 20000) : 'NOT FOUND';
})()`);
save('html-mobile-app.txt', mobHtml);

// Location network header/legend/toggle detail
const mapHtml = await cdp.eval(`(() => {
  const els = [...document.querySelectorAll('div,section')];
  let best = null;
  for (const e of els) {
    const t = e.textContent || '';
    if (/LOCATION NETWORK/i.test(t) && /Full USA/.test(t)) {
      if (!best || e.getBoundingClientRect().height < best.getBoundingClientRect().height) {
        if (e.getBoundingClientRect().height > 200) best = e;
      }
    }
  }
  if (!best) return 'NOT FOUND';
  // strip SVG bulk
  const clone = best.cloneNode(true);
  clone.querySelectorAll('svg').forEach(s => s.replaceWith(document.createTextNode('[SVG MAP]')));
  return clone.outerHTML.slice(0, 25000);
})()`);
save('html-location-network.txt', mapHtml);

// Screenshots: top, then scroll through panels
await cdp.eval('window.scrollTo(0,0)'); await sleep(400);
await dismissIdle(cdp);
await cdp.screenshot(`${DIR}/01-top-mobile-app.png`);

// Full-page capture
const metrics = await cdp.send('Page.getLayoutMetrics');
const fullH = Math.min(Math.ceil(metrics.contentSize.height), 8000);
await cdp.send('Emulation.setDeviceMetricsOverride', { width: 1920, height: fullH, deviceScaleFactor: 1, mobile: false });
await sleep(500);
const shot = await cdp.send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(`${DIR}/00-fullpage.png`, Buffer.from(shot.data, 'base64'));
await cdp.setViewport(1920, 1080);
await sleep(400);

console.log('scrollHeight', fullH);
console.log('DONE explore');
cdp.close();
await closeTarget(cdp.targetId);
