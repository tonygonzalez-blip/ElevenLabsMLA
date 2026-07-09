// WC-02-04 Gift Cards — live verification walk (read-only).
// Allowlist only: navigation, search-box typing, digests, screenshots. Never clicks Delete or + Issue Gift Card.
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const save = (name, obj) => fs.writeFileSync(path.join(DIR, name), JSON.stringify(obj, null, 1));
const log = (...a) => console.log(...a);

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);

// If signed out, use the demo's built-in quick-access entry (never type credentials).
async function ensureSignedIn() {
  const where = await cdp.eval(`location.pathname`);
  if (/login\.html/.test(where)) {
    log('signed out — using #qa-btn quick access');
    await cdp.click('#qa-btn');
    await sleep(2500);
    await dismissIdle(cdp);
    log('now at:', await cdp.eval(`location.pathname`));
  }
}
await cdp.navigate('https://demo.washcentral.com/login.html', 800);
await ensureSignedIn();

// --- 0. Check the plan's filename (crm-giftcards.html) — expected 404 per today's sweep naming.
await cdp.navigate('https://demo.washcentral.com/crm-giftcards.html', 800);
const probe = await cdp.eval(`({ url: location.pathname, title: document.title, snippet: (document.body.innerText||'').replace(/\\s+/g,' ').slice(0,300) })`);
log('PROBE crm-giftcards.html →', JSON.stringify(probe));
save('00-probe-crm-giftcards.json', probe);
await cdp.screenshot(path.join(DIR, '00-probe-crm-giftcards.png'));

// --- 1. Real page.
await ensureSignedIn();
let digest = await gotoPage(cdp, 'https://demo.washcentral.com/crm-gift-cards.html', 1200);
await ensureSignedIn();
if (!/crm-gift-cards/.test(await cdp.eval(`location.pathname`))) {
  digest = await gotoPage(cdp, 'https://demo.washcentral.com/crm-gift-cards.html', 1200);
}
// Wait for table rows to load (sweep caught "Couldn't load records"). Poll up to ~20s.
for (let i = 0; i < 20; i++) {
  const state = await cdp.eval(`(() => {
    const rows = [...document.querySelectorAll('table tbody tr')];
    const txt = (document.body.innerText||'');
    return { rowCount: rows.length, failed: /Couldn.t load records|Failed to fetch/i.test(txt), loading: /Loading…/.test(txt) };
  })()`);
  if (state.rowCount > 1 && !state.failed) { log('rows loaded:', state.rowCount); break; }
  if (state.failed && i === 8) { log('rows failed to fetch — reloading once'); await cdp.navigate('https://demo.washcentral.com/crm-gift-cards.html', 1200); }
  await sleep(1000);
  await dismissIdle(cdp);
}
await dismissIdle(cdp);
digest = await cdp.eval(DIGEST_JS);
save('01-gift-cards-digest.json', digest);
await cdp.screenshot(path.join(DIR, '01-gift-cards-top.png'));

// --- 2. Structured capture: KPI values, insight cards, list header, columns, first rows.
const detail = await cdp.eval(`(() => {
  const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const txt = el => (el.textContent || '').trim().replace(/\\s+/g, ' ');
  const kpis = [...document.querySelectorAll('[class*="kpi"]')].filter(vis).map(txt).filter(Boolean);
  const cards = [...document.querySelectorAll('[class*="card"] h3, [class*="card"] [class*="title"], [class*="insight"], [class*="chart"]')].filter(vis).map(txt).filter(Boolean).slice(0, 40);
  const listHeader = [...document.querySelectorAll('[class*="list"] [class*="header"], [class*="table-card"] [class*="header"], [class*="eyebrow"], [class*="kicker"]')].filter(vis).map(txt).filter(Boolean).slice(0, 20);
  const ths = [...document.querySelectorAll('th')].filter(vis).map(txt);
  const rows = [...document.querySelectorAll('table tbody tr')].filter(vis).slice(0, 12).map(tr => [...tr.querySelectorAll('td')].map(txt));
  const search = [...document.querySelectorAll('input[placeholder]')].filter(vis).map(i => i.placeholder);
  const btns = [...document.querySelectorAll('button')].filter(vis).map(txt).filter(Boolean);
  const pagination = [...document.querySelectorAll('[class*="pagination"], [class*="rows-per-page"], select')].filter(vis).map(txt).slice(0, 10);
  return { kpis, cards, listHeader, ths, rows, search, btns, pagination, body: (document.body.innerText||'').replace(/\\s+/g,' ').slice(0, 2500) };
})()`);
save('02-gift-cards-detail.json', detail);
log('KPIs:', JSON.stringify(detail.kpis));
log('ROWS(first 3):', JSON.stringify(detail.rows.slice(0, 3)));

// Scroll to the list card and screenshot it.
await cdp.eval(`(() => { const t = document.querySelector('table'); if (t) t.scrollIntoView({ block: 'center' }); })()`);
await sleep(600); await dismissIdle(cdp);
await cdp.screenshot(path.join(DIR, '02-gift-cards-list.png'));

// --- 3. Search a card number visible in the list (first row's card cell).
const cardNo = await cdp.eval(`(() => {
  const tr = document.querySelector('table tbody tr');
  if (!tr) return null;
  const cell = tr.querySelector('td:nth-child(1)') || tr.querySelector('td');
  const m = (cell.textContent || '').match(/[A-Z0-9-]{6,}/i);
  return m ? m[0] : (cell.textContent || '').trim();
})()`);
log('search target card:', cardNo);
if (cardNo) {
  await cdp.eval(`(() => {
    const inp = [...document.querySelectorAll('input[placeholder]')].find(i => /card number/i.test(i.placeholder));
    if (!inp) return false;
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    setter.call(inp, ${JSON.stringify(cardNo)});
    inp.dispatchEvent(new Event('input', { bubbles: true }));
    inp.dispatchEvent(new Event('keyup', { bubbles: true }));
    return true;
  })()`);
  await sleep(1200); await dismissIdle(cdp);
  const searched = await cdp.eval(`(() => {
    const txt = el => (el.textContent || '').trim().replace(/\\s+/g, ' ');
    const ths = [...document.querySelectorAll('th')].map(txt);
    const rows = [...document.querySelectorAll('table tbody tr')].slice(0, 5).map(tr => [...tr.querySelectorAll('td')].map(txt));
    const counter = [...document.querySelectorAll('[class*="subtitle"], [class*="count"], [class*="meta"]')].map(txt).filter(t => /card/i.test(t)).slice(0,5);
    return { ths, rows, counter };
  })()`);
  save('03-search-result.json', { cardNo, ...searched });
  log('SEARCH RESULT rows:', JSON.stringify(searched.rows));
  await cdp.screenshot(path.join(DIR, '03-search-result.png'));

  // Clear the search box back to full list.
  await cdp.eval(`(() => {
    const inp = [...document.querySelectorAll('input[placeholder]')].find(i => /card number/i.test(i.placeholder));
    if (!inp) return false;
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    setter.call(inp, '');
    inp.dispatchEvent(new Event('input', { bubbles: true }));
    return true;
  })()`);
  await sleep(900); await dismissIdle(cdp);
  const cleared = await cdp.eval(`(() => ({ rows: document.querySelectorAll('table tbody tr').length }))()`);
  log('cleared, rows:', cleared.rows);
  await cdp.screenshot(path.join(DIR, '04-search-cleared.png'));
}

// --- 4. Scroll back to top for KPI screenshot with values loaded.
await cdp.eval(`window.scrollTo(0, 0)`);
await sleep(500); await dismissIdle(cdp);
await cdp.screenshot(path.join(DIR, '05-kpis-insights.png'));

const final = await cdp.eval(DIGEST_JS);
save('06-final-digest.json', final);
log('DONE');
cdp.close();
