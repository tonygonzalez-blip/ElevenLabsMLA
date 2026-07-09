// walk-01-04.mjs — live verification walk for WC-01-04 (List conventions)
// Read-only: navigation, opening/closing the Filters panel, pagination clicks, screenshots.
// Never clicks Delete / + Add Customer / + Issue Gift Card / Export / Apply Filters / Clear all.
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS, closeTarget } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const save = (name, obj) => fs.writeFileSync(path.join(DIR, name), JSON.stringify(obj, null, 1));
const shot = (cdp, name) => cdp.screenshot(path.join(DIR, name));

// Targeted extraction for list anatomy (KPI strip, insight cards, list card header, pagination).
const LIST_JS = `(() => {
  const vis = el => { const r = el.getBoundingClientRect(); if (r.width<=0||r.height<=0) return false; const s=getComputedStyle(el); return s.visibility!=='hidden'&&s.display!=='none'&&s.opacity!=='0'; };
  const txt = el => (el.textContent||'').trim().replace(/\\s+/g,' ');
  // KPI tiles: value + label pairs
  const kpis = [...document.querySelectorAll('[class*="kpi"]')].filter(vis).map(txt).filter(t=>t&&t.length<60);
  // insight cards: headings + subtitles near top charts
  const cards = [...document.querySelectorAll('[class*="card"] h3, [class*="card"] h4, [class*="insight"] h3, [class*="chart"] h3')].filter(vis).map(txt);
  // list card header block (eyebrow, title, subtitle, action buttons)
  const listHead = [...document.querySelectorAll('[class*="card-header"], [class*="list-header"], [class*="table-header"]')].filter(vis).map(txt).slice(0,6);
  // search box
  const search = [...document.querySelectorAll('input[placeholder]')].filter(vis).map(i=>i.placeholder);
  // sort affordance on headers
  const ths = [...document.querySelectorAll('th')].filter(vis).map(th => ({t:txt(th), sort:th.getAttribute('aria-sort')||null, cls:th.className.slice(0,60), hasInput: !!th.querySelector('input[type="checkbox"]')}));
  // pagination footer: full text + select options
  const pagEl = [...document.querySelectorAll('[class*="pagination"], [class*="pager"], [class*="table-footer"], [class*="rows-per-page"]')].filter(vis);
  const pagText = pagEl.map(txt).slice(0,4);
  const selects = [...document.querySelectorAll('select')].filter(vis).map(s => ({opts:[...s.options].map(o=>o.text), val:s.value, near: txt(s.closest('div')||s.parentElement).slice(0,120)}));
  // fallback: any element containing 'ROWS PER PAGE'
  const rpp = [...document.querySelectorAll('div,span,label,footer')].filter(vis).filter(e=>/rows per page/i.test(e.textContent||'') && (e.textContent||'').length<200).map(txt).slice(0,3);
  return { kpis, cards, listHead, search, ths, pagText, selects, rpp };
})()`;

// Extract an open Filters panel: heading, field labels, options, buttons.
const FILTER_JS = `(() => {
  const vis = el => { const r = el.getBoundingClientRect(); if (r.width<=0||r.height<=0) return false; const s=getComputedStyle(el); return s.visibility!=='hidden'&&s.display!=='none'&&s.opacity!=='0'; };
  const txt = el => (el.textContent||'').trim().replace(/\\s+/g,' ');
  const panels = [...document.querySelectorAll('[class*="filter"], [class*="popover"], [class*="drawer"], [role="dialog"]')].filter(vis).filter(e => /clear all|apply/i.test(e.textContent||''));
  if (!panels.length) return { open:false };
  const p = panels.sort((a,b)=>a.textContent.length-b.textContent.length)[0];
  return {
    open: true,
    headings: [...p.querySelectorAll('h1,h2,h3,h4,[class*="title"]')].filter(vis).map(txt).slice(0,10),
    labels: [...p.querySelectorAll('label, [class*="label"]')].filter(vis).map(txt).slice(0,30),
    buttons: [...p.querySelectorAll('button, [role="button"]')].filter(vis).map(txt).slice(0,20),
    selects: [...p.querySelectorAll('select')].filter(vis).map(s=>({opts:[...s.options].map(o=>o.text).slice(0,12)})),
    inputs: [...p.querySelectorAll('input[placeholder]')].filter(vis).map(i=>i.placeholder),
    fullText: txt(p).slice(0,900)
  };
})()`;

const BASE = 'https://demo.washcentral.com';
const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);

// Smallest visible element whose text matches the regex — clicks it.
async function clickText(re) {
  const ok = await cdp.eval(`(() => {
    const rx = new RegExp(${JSON.stringify(re)}, 'i');
    const vis = el => { const r = el.getBoundingClientRect(); return r.width>0&&r.height>0; };
    const els = [...document.querySelectorAll('button, a, [role="button"], [class*="btn"], [class*="filter"], [class*="page"]')]
      .filter(vis).filter(e => rx.test((e.textContent||'').trim().replace(/\\s+/g,' ')))
      .sort((a,b)=>(a.textContent||'').length-(b.textContent||'').length);
    if (!els.length) return false; els[0].click(); return true;
  })()`);
  if (!ok) throw new Error('clickText failed: ' + re);
}

// If we landed on the sign-in page, use the demo's quick-access entry (#qa-btn). Never type credentials.
async function ensureSignedIn() {
  const onLogin = await cdp.eval(`/login/.test(location.pathname) || !!document.querySelector('input[placeholder="you@company.com"]')`);
  if (onLogin) {
    await cdp.navigate(`${BASE}/login.html`, 1200);
    await cdp.click('#qa-btn');
    await sleep(2500);
  }
}

try {
  // ---------- 1. Customer List ----------
  let d = await gotoPage(cdp, `${BASE}/crm-customers.html`, 1500);
  await ensureSignedIn();
  d = await gotoPage(cdp, `${BASE}/crm-customers.html`, 1500);
  await dismissIdle(cdp); await sleep(500);
  save('digest-crm-customers.json', d);
  let list = await cdp.eval(LIST_JS);
  save('list-crm-customers.json', list);
  await shot(cdp, '01-customers-list-top.png');

  // sidebar hrefs (to discover Gift Cards filename)
  const sidebar = await cdp.eval(`[...document.querySelectorAll('[class*="sidebar"] a, [class*="side-nav"] a')].map(a=>({t:(a.textContent||'').trim().replace(/\\s+/g,' '),h:a.getAttribute('href')})).filter(x=>x.t)`);
  save('sidebar-crm.json', sidebar);

  // ---------- 2. Open Filters ----------
  await clickText("^Filters"); await sleep(700);
  await dismissIdle(cdp);
  const filt = await cdp.eval(FILTER_JS);
  save('filters-crm-customers.json', filt);
  await shot(cdp, '02-customers-filters-open.png');

  // ---------- 3. Close Filters (toggle same button; fall back to Esc) ----------
  await clickText("^Filters"); await sleep(500);
  let still = await cdp.eval(FILTER_JS);
  if (still.open) { await cdp.pressKey('Escape'); await sleep(400); still = await cdp.eval(FILTER_JS); }
  save('filters-closed-check.json', still);
  await shot(cdp, '03-customers-filters-closed.png');

  // ---------- 4. Pagination area ----------
  await cdp.eval(`(() => { const e=[...document.querySelectorAll('*')].find(x=>/rows per page/i.test(x.textContent||'')&&(x.textContent||'').length<200); if(e) e.scrollIntoView({block:'center'}); return true; })()`);
  await sleep(600); await dismissIdle(cdp);
  const pag1 = await cdp.eval(LIST_JS);
  save('pagination-customers-page1.json', { pagText: pag1.pagText, selects: pag1.selects, rpp: pag1.rpp });
  await shot(cdp, '04-customers-pagination.png');

  // click › (next page) then ‹ back — allowed (pagination)
  await clickText("^›$"); await sleep(900); await dismissIdle(cdp);
  const pag2 = await cdp.eval(LIST_JS);
  save('pagination-customers-page2.json', { pagText: pag2.pagText, rpp: pag2.rpp, firstRow: await cdp.eval(`(()=>{const tr=document.querySelector('table tbody tr'); return tr?tr.innerText.replace(/\\s+/g,' ').slice(0,200):null})()`) });
  await shot(cdp, '05-customers-pagination-page2.png');
  await clickText("^‹$"); await sleep(900); await dismissIdle(cdp);
  const pagBack = await cdp.eval(LIST_JS);
  save('pagination-customers-back.json', { pagText: pagBack.pagText });

  // ---------- 5. Gift Cards (discovered filename) ----------
  const gcHref = (sidebar.find(x => /gift cards/i.test(x.t)) || {}).h || 'crm-gift-cards.html';
  d = await gotoPage(cdp, `${BASE}/${gcHref}`, 2500);
  await dismissIdle(cdp); await sleep(1500); // give the record fetch time
  d = await cdp.eval(DIGEST_JS);
  save('digest-crm-gift-cards.json', d);
  list = await cdp.eval(LIST_JS);
  save('list-crm-gift-cards.json', list);
  await shot(cdp, '06-giftcards-list-top.png');

  // gift cards filters open/close
  await clickText("^Filters"); await sleep(700);
  const gfilt = await cdp.eval(FILTER_JS);
  save('filters-crm-gift-cards.json', gfilt);
  await shot(cdp, '07-giftcards-filters-open.png');
  await clickText("^Filters"); await sleep(500);

  // gift cards pagination
  await cdp.eval(`(() => { const e=[...document.querySelectorAll('*')].find(x=>/rows per page/i.test(x.textContent||'')&&(x.textContent||'').length<200); if(e) e.scrollIntoView({block:'center'}); return true; })()`);
  await sleep(500);
  const gpag = await cdp.eval(LIST_JS);
  save('pagination-gift-cards.json', { pagText: gpag.pagText, selects: gpag.selects, rpp: gpag.rpp });
  await shot(cdp, '08-giftcards-pagination.png');

  // ---------- 6. Sales → Tickets (third list, pattern generalizes) ----------
  d = await gotoPage(cdp, `${BASE}/sales-transactions.html`, 2000);
  await dismissIdle(cdp); await sleep(800);
  d = await cdp.eval(DIGEST_JS);
  save('digest-sales-transactions.json', d);
  list = await cdp.eval(LIST_JS);
  save('list-sales-transactions.json', list);
  await shot(cdp, '09-transactions-list-top.png');
  await cdp.eval(`(() => { const e=[...document.querySelectorAll('*')].find(x=>/rows per page/i.test(x.textContent||'')&&(x.textContent||'').length<200); if(e) e.scrollIntoView({block:'center'}); return true; })()`);
  await sleep(500);
  const tpag = await cdp.eval(LIST_JS);
  save('pagination-transactions.json', { pagText: tpag.pagText, selects: tpag.selects, rpp: tpag.rpp });
  await shot(cdp, '10-transactions-pagination.png');

  console.log('WALK OK');
} finally {
  try { await closeTarget(cdp.targetId); } catch {}
  cdp.close();
}
