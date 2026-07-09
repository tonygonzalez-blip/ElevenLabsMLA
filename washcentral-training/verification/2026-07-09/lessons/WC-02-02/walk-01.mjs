// WC-02-02 Customer 360 walk — read-only. Opens customer list, opens one customer row,
// digests header + all nine tabs, opens Actions ▾ to LIST items only, closes it.
// Never touches Messaging compose, never clicks any Actions item.
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const save = (name, obj) => fs.writeFileSync(path.join(DIR, name), JSON.stringify(obj, null, 1));

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);

async function shot(name) { await cdp.screenshot(path.join(DIR, name)); console.log('shot:', name); }
async function digest(name) { const d = await cdp.eval(DIGEST_JS); save(name, d); return d; }

async function clickTab(text) {
  const ok = await cdp.eval(`(() => {
    const want = ${JSON.stringify(text)}.trim().toLowerCase();
    const els = [...document.querySelectorAll('[role="tab"], [class*="tab"] button, button[class*="tab"], a[class*="tab"], li[class*="tab"], .tab')];
    const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    let el = els.find(e => vis(e) && (e.textContent || '').trim().replace(/\\s+/g,' ').toLowerCase() === want);
    if (!el) el = els.find(e => vis(e) && (e.textContent || '').trim().replace(/\\s+/g,' ').toLowerCase().startsWith(want));
    if (!el) return false; el.click(); return true;
  })()`);
  if (!ok) throw new Error('clickTab failed: ' + text);
  await dismissIdle(cdp); await sleep(700);
}

async function scrollTo(y) { await cdp.eval(`window.scrollTo(0, ${y}); 'ok'`); await sleep(400); }

// ---- Sign-in recovery (brief-approved): if redirected to login.html, click #qa-btn. Never type credentials.
async function ensureSignedIn() {
  const u = await cdp.eval('location.pathname');
  if (/login\.html/.test(u)) {
    console.log('signed out — using #qa-btn quick access');
    await cdp.click('#qa-btn');
    await sleep(2500); await dismissIdle(cdp);
  }
}

// ---- Step A: customer list
let d1 = await gotoPage(cdp, 'https://demo.washcentral.com/crm-customers.html', 1500);
await ensureSignedIn();
if (!/crm-customers/.test(await cdp.eval('location.pathname'))) {
  d1 = await gotoPage(cdp, 'https://demo.washcentral.com/crm-customers.html', 1500);
}
await sleep(1500); await dismissIdle(cdp);
d1 = await cdp.eval(DIGEST_JS);
console.log('list url:', d1.url, '| title:', d1.docTitle);
save('digest-01-customer-list.json', d1);
await shot('01-customer-list.png');

// ---- Step B: open a named Active customer row (Lyle, CUST-4433000000098467)
const rowOk = await cdp.eval(`(() => {
  const rows = [...document.querySelectorAll('table tbody tr')];
  const tr = rows.find(r => (r.textContent || '').includes('CUST-4433000000098467'))
          || rows.find(r => /Active/.test(r.textContent || '') && !/Unknown/.test(r.textContent || ''));
  if (!tr) return false;
  // click the name cell, not the checkbox cell
  const cell = tr.querySelectorAll('td')[1] || tr;
  cell.click(); return true;
})()`);
console.log('row clicked:', rowOk);
await sleep(1800); await dismissIdle(cdp);
const d2 = await digest('digest-02-customer-360-overview.json');
console.log('detail url:', d2.url, '| title:', d2.docTitle);
await shot('02-customer-360-header.png');

// Extra: capture header/metric/related-chip zone verbatim
const headerInfo = await cdp.eval(`(() => {
  const t = (document.body.innerText || '').replace(/\\s+/g, ' ');
  return t.slice(0, 2600);
})()`);
save('digest-02b-bodytext-top.json', { text: headerInfo });

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
  const d = await digest(`digest-${base}.json`);
  await shot(`${base}.png`);
  // scrolled variant for evidence of below-the-fold content
  const h = await cdp.eval('document.body.scrollHeight');
  if (h > 1300) { await scrollTo(h); await shot(`${base}-b.png`); await scrollTo(0); }
  // verbatim full text of the page while this tab is active
  const t = await cdp.eval(`(document.body.innerText || '').replace(/\\s+/g, ' ').slice(0, 6000)`);
  save(`text-${base}.json`, { tab: label, text: t });
  console.log('tab done:', label);
}

// ---- Actions ▾ : open, LIST items, close. Never click an item.
await scrollTo(0);
const actOk = await cdp.eval(`(() => {
  const els = [...document.querySelectorAll('button, [role="button"]')];
  const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const el = els.find(e => vis(e) && /^actions/i.test((e.textContent || '').trim()));
  if (!el) return false; el.click(); return true;
})()`);
console.log('actions opened:', actOk);
await sleep(700); await dismissIdle(cdp);
const dAct = await digest('digest-12-actions-menu.json');
await shot('12-actions-menu.png');
// capture the dropdown item texts specifically
const actItems = await cdp.eval(`(() => {
  const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const pools = [...document.querySelectorAll('[class*="dropdown"] a, [class*="dropdown"] button, [class*="dropdown"] li, [class*="menu"] a, [class*="menu"] button, [class*="menu"] li, [role="menu"] *')];
  return [...new Set(pools.filter(vis).map(e => (e.textContent || '').trim().replace(/\\s+/g,' ')).filter(t => t && t.length < 60))];
})()`);
save('digest-12b-actions-items.json', { items: actItems });
console.log('actions items:', JSON.stringify(actItems));
// close without clicking any item
await cdp.pressKey('Escape');
await sleep(500);
let closed = await cdp.eval(`(() => {
  const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const pools = [...document.querySelectorAll('[class*="dropdown"], [role="menu"]')];
  return !pools.some(p => vis(p) && /issue|refund/i.test(p.textContent || ''));
})()`);
if (!closed) { // click the Actions button again to toggle closed
  await cdp.eval(`(() => { const els=[...document.querySelectorAll('button')]; const el=els.find(e=>/^actions/i.test((e.textContent||'').trim())); if(el) el.click(); })()`);
  await sleep(500);
}
await shot('13-actions-closed.png');

console.log('WALK DONE');
cdp.close();
