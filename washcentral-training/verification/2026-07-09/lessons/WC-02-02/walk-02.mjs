// WC-02-02 Customer 360 walk v2 — read-only, with per-step login recovery.
// The demo's client-side auth flag is shared across tabs and cleared whenever any tab
// visits login.html (sibling sessions can race us) — so EVERY step checks for a bounce
// and recovers via the approved #qa-btn quick access, then re-navigates + re-clicks.
// Allowlist only: navigation, row open, tab clicks, Actions ▾ open/close (list items, click none).
// NEVER: Messaging compose, Send, Delete, Edit Customer save, any Actions item.
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS, closeTarget } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const save = (name, obj) => fs.writeFileSync(path.join(DIR, name), JSON.stringify(obj, null, 1));
const log = (...a) => console.log(...a);

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);

let detailHref = null; // captured after first successful Customer 360 load

async function where() { return await cdp.eval('location.pathname + location.search'); }

async function recoverIfBounced(currentTab = null) {
  const u = await where();
  if (!/login\.html/.test(u)) return false;
  log('  !! bounced to login — recovering via #qa-btn');
  await cdp.eval(`(() => { const b = document.querySelector('#qa-btn'); if (b) b.click(); return !!b; })()`);
  await sleep(2500);
  if (detailHref) {
    await cdp.navigate(detailHref, 1200);
    await dismissIdle(cdp);
    if (currentTab) { await rawClickTab(currentTab); await sleep(800); }
  }
  return true;
}

async function rawClickTab(text) {
  return await cdp.eval(`(() => {
    const want = ${JSON.stringify(text)}.trim().toLowerCase();
    const els = [...document.querySelectorAll('[role="tab"], [class*="tab"] button, button[class*="tab"], a[class*="tab"], li[class*="tab"], .tab')];
    const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    let el = els.find(e => vis(e) && (e.textContent || '').trim().replace(/\\s+/g,' ').toLowerCase() === want);
    if (!el) el = els.find(e => vis(e) && (e.textContent || '').trim().replace(/\\s+/g,' ').toLowerCase().startsWith(want));
    if (!el) return false; el.click(); return true;
  })()`);
}

async function clickTab(text) {
  const ok = await rawClickTab(text);
  if (!ok) throw new Error('clickTab failed: ' + text);
  await sleep(800); await dismissIdle(cdp);
  await recoverIfBounced(text);
}

async function shot(name) { await cdp.screenshot(path.join(DIR, name)); log('  shot:', name); }
async function digest(name) { const d = await cdp.eval(DIGEST_JS); save(name, d); return d; }
async function scrollTo(y) { await cdp.eval(`window.scrollTo(0, ${y}); 'ok'`); await sleep(450); }

// Targeted header extraction for the Customer 360 page
const HEADER_JS = `(() => {
  const vis = el => { const r = el.getBoundingClientRect(); if (r.width<=0||r.height<=0) return false; const s=getComputedStyle(el); return s.visibility!=='hidden'&&s.display!=='none'&&s.opacity!=='0'; };
  const txt = el => (el.textContent||'').trim().replace(/\\s+/g,' ');
  const out = {};
  out.h1 = [...document.querySelectorAll('h1')].filter(vis).map(txt);
  out.headerButtons = [...document.querySelectorAll('button, a[class*="btn"]')].filter(vis)
    .filter(b => b.getBoundingClientRect().top < 260)
    .map(b => txt(b) || b.getAttribute('aria-label') || '').filter(t => t && t.length < 50);
  out.chips = [...new Set([...document.querySelectorAll('[class*="chip"],[class*="badge"],[class*="pill"],[class*="tag"]')].filter(vis).filter(e=>e.getBoundingClientRect().top<340).map(txt).filter(t=>t&&t.length<60))];
  out.metricBand = [...document.querySelectorAll('[class*="metric"],[class*="stat"],[class*="kpi"]')].filter(vis).filter(e=>e.getBoundingClientRect().top<620).map(txt).filter(t=>t&&t.length<70);
  out.tabs = [...document.querySelectorAll('[role="tab"], [class*="tab"] button, button[class*="tab"], .tab')].filter(vis).map(txt).filter(t=>t&&t.length<40);
  out.topText = (document.body.innerText||'').replace(/\\s+/g,' ').slice(0, 2800);
  return out;
})()`;

try {
  // ---- Step A: customer list
  let d1 = await gotoPage(cdp, 'https://demo.washcentral.com/crm-customers.html', 1500);
  await recoverIfBounced();
  if (!/crm-customers/.test(await where())) {
    d1 = await gotoPage(cdp, 'https://demo.washcentral.com/crm-customers.html', 1500);
  }
  await sleep(1200); await dismissIdle(cdp);
  d1 = await digest('digest-01-customer-list.json');
  log('list:', d1.url, '|', d1.docTitle);
  await shot('01-customer-list.png');

  // ---- Step B: open a named Active customer row (prefer Lyle CUST-4433000000098467)
  const rowInfo = await cdp.eval(`(() => {
    const rows = [...document.querySelectorAll('table tbody tr')];
    const tr = rows.find(r => (r.textContent || '').includes('CUST-4433000000098467'))
            || rows.find(r => /Active/.test(r.textContent || '') && !/Unknown/.test(r.textContent || ''));
    if (!tr) return null;
    const cell = tr.querySelectorAll('td')[1] || tr;
    const label = (tr.textContent||'').trim().replace(/\\s+/g,' ').slice(0,120);
    cell.click();
    return label;
  })()`);
  log('row clicked:', rowInfo);
  await sleep(2000); await dismissIdle(cdp);
  await recoverIfBounced();
  let here = await where();
  if (!/customer-detail/.test(here)) {
    log('  row click did not land on detail (at', here, ') — navigating directly');
    await gotoPage(cdp, 'https://demo.washcentral.com/crm-customer-detail.html', 1500);
    here = await where();
  }
  detailHref = await cdp.eval('location.href');
  log('detail href:', detailHref);
  const d2 = await digest('digest-02-customer-360-initial.json');
  log('detail:', d2.url, '|', d2.docTitle);
  await scrollTo(0);
  await shot('02-customer-360-header.png');
  const hdr = await cdp.eval(HEADER_JS);
  save('digest-02b-header-band.json', hdr);
  log('tabs seen:', JSON.stringify(hdr.tabs));

  // ---- Nine tabs
  const tabs = [
    ['Overview', '03-tab-overview'],
    ['Contact', '04-tab-contact'],
    ['Membership', '05-tab-membership'],
    ['Payments', '06-tab-payments'],
    ['Vehicles', '07-tab-vehicles'],
    ['Linked Accounts', '08-tab-linked-accounts'],
    ['Activity', '09-tab-activity'],
    ['Messaging', '10-tab-messaging'],
    ['Notes', '11-tab-notes'],
  ];
  for (const [label, base] of tabs) {
    await clickTab(label);
    await scrollTo(0);
    await digest(`digest-${base}.json`);
    await shot(`${base}.png`);
    const h = await cdp.eval('document.body.scrollHeight');
    if (h > 1250) { await scrollTo(h); await shot(`${base}-b.png`); await scrollTo(0); }
    const t = await cdp.eval(`(document.body.innerText || '').replace(/\\s+/g, ' ').slice(0, 8000)`);
    save(`text-${base}.json`, { tab: label, text: t });
    log('tab done:', label);
  }

  // ---- Actions ▾ : open, LIST items, close. Click no item.
  await scrollTo(0);
  const actOk = await cdp.eval(`(() => {
    const els = [...document.querySelectorAll('button, [role="button"]')];
    const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    const el = els.find(e => vis(e) && /^actions/i.test((e.textContent || '').trim()));
    if (!el) return false; el.click(); return true;
  })()`);
  log('actions opened:', actOk);
  await sleep(800); await dismissIdle(cdp);
  await digest('digest-12-actions-menu.json');
  await shot('12-actions-menu.png');
  const actItems = await cdp.eval(`(() => {
    const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    const pools = [...document.querySelectorAll('[class*="dropdown"] a, [class*="dropdown"] button, [class*="dropdown"] li, [class*="menu"] a, [class*="menu"] button, [class*="menu"] li, [role="menu"] *')];
    return [...new Set(pools.filter(vis).map(e => (e.textContent || '').trim().replace(/\\s+/g,' ')).filter(t => t && t.length < 60))];
  })()`);
  save('digest-12b-actions-items.json', { items: actItems });
  log('actions items:', JSON.stringify(actItems));
  await cdp.pressKey('Escape');
  await sleep(600);
  const stillOpen = await cdp.eval(`(() => {
    const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    return [...document.querySelectorAll('[class*="dropdown"], [role="menu"]')].some(p => vis(p) && /issue|refund/i.test(p.textContent || ''));
  })()`);
  if (stillOpen) {
    log('  Esc did not close Actions — toggling button');
    await cdp.eval(`(() => { const els=[...document.querySelectorAll('button')]; const el=els.find(e=>/^actions/i.test((e.textContent||'').trim())); if(el) el.click(); })()`);
    await sleep(600);
  }
  const nowOpen = await cdp.eval(`(() => {
    const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    return [...document.querySelectorAll('[class*="dropdown"], [role="menu"]')].some(p => vis(p) && /issue|refund/i.test(p.textContent || ''));
  })()`);
  log('actions closed (esc worked:', !stillOpen, '| open now:', nowOpen, ')');
  await shot('13-actions-closed.png');

  log('WALK DONE');
} catch (e) {
  console.error('WALK FAILED:', e.message);
  try { await cdp.screenshot(path.join(DIR, 'zz-failure-state.png')); } catch {}
  process.exitCode = 1;
} finally {
  try { cdp.close(); await closeTarget(cdp.targetId); } catch {}
}
