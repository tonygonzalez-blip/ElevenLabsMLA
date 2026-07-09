// WC-02-06 live walk — Prepaid Books / Vehicles / Retail Customers / Bundles (read-only).
// Digests each list's KPIs + columns, waits for async rows, inspects the Fundraiser href (no navigation).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS } from '../../../../tools/cdp-lib.mjs';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const BASE = 'https://demo.washcentral.com';
const out = (name, data) => fs.writeFileSync(path.join(DIR, name), JSON.stringify(data, null, 1));

const ROWS_READY_JS = `(() => {
  const rows = [...document.querySelectorAll('table tbody tr')];
  const txt = rows.map(r => (r.textContent||'').trim()).join(' ');
  if (/Failed to fetch|Couldn.t load/i.test(txt)) return 'error';
  const dataRows = rows.filter(r => r.querySelectorAll('td').length > 1);
  return dataRows.length > 0 ? 'ready' : 'loading';
})()`;

async function waitForRows(cdp, maxMs = 15000) {
  const t0 = Date.now();
  let state = 'loading';
  while (Date.now() - t0 < maxMs) {
    await dismissIdle(cdp);
    state = await cdp.eval(ROWS_READY_JS);
    if (state !== 'loading') return state;
    await sleep(700);
  }
  return state;
}

// list-header subtitle (record counts) + first rows + KPI values, post-load
const EXTRA_JS = `(() => {
  const txt = el => (el.textContent||'').trim().replace(/\\s+/g,' ');
  const vis = el => { const r = el.getBoundingClientRect(); return r.width>0 && r.height>0; };
  const subs = [...document.querySelectorAll('[class*="card"] [class*="sub"], [class*="list"] [class*="sub"], [class*="header"] p, [class*="card-title"] + *')].filter(vis).map(txt).filter(t => t && t.length < 160);
  const sidebar = [...document.querySelectorAll('[class*="sidebar"] a, [class*="side-nav"] a')].filter(vis).map(a => ({ text: txt(a), href: a.getAttribute('href') }));
  const kpis = [...document.querySelectorAll('[class*="kpi"], [class*="stat"]')].filter(vis).map(txt).filter(t => t && t.length < 80);
  const rows = [...document.querySelectorAll('table tbody tr')].filter(vis).slice(0, 5).map(tr => [...tr.querySelectorAll('td')].map(txt).join(' | ').slice(0, 300));
  const pag = [...document.querySelectorAll('[class*="pagin"], [class*="rows-per"], tfoot')].filter(vis).map(txt).filter(Boolean).slice(0,5);
  return { subs: [...new Set(subs)].slice(0, 25), sidebar, kpis: [...new Set(kpis)].slice(0, 25), rows, pag };
})()`;

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
const results = {};

// Signed-out recovery per brief: go to login.html and click the demo quick-access button. Never type credentials.
async function ensureSignedIn() {
  const where = await cdp.eval('location.pathname');
  if (!/login\.html/.test(where)) return;
  await cdp.navigate(`${BASE}/login.html`, 800);
  await cdp.click('#qa-btn');
  await sleep(2000);
  await dismissIdle(cdp);
  console.log('re-signed-in via #qa-btn ->', await cdp.eval('location.pathname'));
}

async function gotoAuthed(file) {
  let digest = await gotoPage(cdp, `${BASE}/${file}.html`, 1200);
  if (/login\.html/.test(digest.url)) {
    await ensureSignedIn();
    digest = await gotoPage(cdp, `${BASE}/${file}.html`, 1200);
  }
  return digest;
}

const pages = [
  ['crm-prepaid-books', 'prepaid-books'],
  ['crm-vehicles', 'vehicles'],
  ['crm-retail-customers', 'retail-customers'],
  ['crm-bundles', 'bundles'],
];

for (const [file, tag] of pages) {
  const digest = await gotoAuthed(file);
  const rowState = await waitForRows(cdp);
  await dismissIdle(cdp);
  await sleep(400);
  const post = await cdp.eval(DIGEST_JS);
  const extra = await cdp.eval(EXTRA_JS);
  await cdp.screenshot(path.join(DIR, `${tag}.png`));
  results[file] = { rowState, extra };
  out(`digest-${tag}.json`, { initial: digest, post, extra, rowState });
  console.log(`${file}: rows=${rowState} kpis=${JSON.stringify(extra.kpis.slice(0,6))}`);
}

// Fundraiser stub check — inspect href only, never navigate.
const fundraiser = await cdp.eval(`(() => {
  const links = [...document.querySelectorAll('[class*="sidebar"] a, [class*="side-nav"] a, nav a')];
  const el = links.find(a => /fundraiser/i.test(a.textContent || ''));
  if (!el) return { found: false };
  return { found: true, text: (el.textContent||'').trim(), href: el.getAttribute('href'), classes: el.className };
})()`);
results.fundraiser = fundraiser;
console.log('fundraiser:', JSON.stringify(fundraiser));

// Vehicles search demo (allowlisted: typing into a search box only).
const d2 = await gotoAuthed('crm-vehicles');
const vState = await waitForRows(cdp);
if (vState === 'ready') {
  const firstPlate = await cdp.eval(`(() => {
    const tr = [...document.querySelectorAll('table tbody tr')].find(r => r.querySelectorAll('td').length > 1);
    return tr ? (tr.querySelector('td')?.textContent || '').trim() : null;
  })()`);
  if (firstPlate) {
    const q = firstPlate.split(/\s+/)[0];
    await cdp.eval(`(() => {
      const inp = [...document.querySelectorAll('input[placeholder]')].find(i => /plate/i.test(i.placeholder));
      if (!inp) return false;
      const set = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      set.call(inp, ${JSON.stringify(q)});
      inp.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    })()`);
    await sleep(1200);
    await dismissIdle(cdp);
    const searchDigest = await cdp.eval(EXTRA_JS);
    await cdp.screenshot(path.join(DIR, 'vehicles-search.png'));
    results.vehiclesSearch = { query: q, after: searchDigest.rows.slice(0, 3), sub: searchDigest.subs.slice(0, 6) };
    console.log('vehicles search:', q, JSON.stringify(searchDigest.rows.slice(0, 2)));
  }
} else {
  results.vehiclesSearch = { skipped: true, vState };
}

out('walk-results.json', results);
cdp.close();
console.log('WALK DONE');
