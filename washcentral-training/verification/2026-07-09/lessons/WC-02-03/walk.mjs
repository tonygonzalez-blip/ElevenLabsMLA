// WC-02-03 live verification walk — Edit Customer / New Customer forms.
// Read-only: opens forms to document layout, changes nothing, leaves via Cancel.
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS, closeTarget } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const BASE = 'https://demo.washcentral.com';
const out = {};
const save = () => fs.writeFileSync(path.join(DIR, 'digests.json'), JSON.stringify(out, null, 1));

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);

async function digestShot(key, shot) {
  await dismissIdle(cdp);
  await sleep(400);
  out[key] = await cdp.eval(DIGEST_JS);
  await cdp.screenshot(path.join(DIR, shot));
  save();
  console.log(`[${key}] url=${out[key].url} title=${out[key].docTitle}`);
}

// Click a tab strictly inside the tab strip (avoid sidebar links with same text, e.g. Vehicles).
async function clickTab(name) {
  const ok = await cdp.eval(`(() => {
    const want = ${JSON.stringify(name)}.trim().toLowerCase();
    const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    const cands = [...document.querySelectorAll('[role=tab], [class*="tab"] button, main button, .tab')];
    const el = cands.find(e => vis(e) && (e.textContent || '').trim().replace(/\\s+/g,' ').toLowerCase() === want);
    if (!el) return false; el.click(); return true;
  })()`);
  if (!ok) throw new Error('clickTab: not found ' + name);
  await sleep(700);
}

// ---- Phase A: Customer List -> row -> Customer 360 ----
await gotoPage(cdp, `${BASE}/crm-customers.html`, 1200);
await digestShot('customers-list', '01-customer-list.png');

// Click the first ACTIVE customer row (capture its name first, to test the fixed-record quirk).
const clickedRow = await cdp.eval(`(() => {
  const rows = [...document.querySelectorAll('table tbody tr')];
  const row = rows.find(r => /Active/.test(r.textContent || '') && !/Inactive/.test(r.textContent || ''));
  if (!row) return null;
  const label = (row.textContent || '').trim().replace(/\\s+/g,' ').slice(0, 120);
  row.click();
  return label;
})()`);
console.log('clicked row:', clickedRow);
out.clickedRowLabel = clickedRow;
await sleep(1500);
await digestShot('customer-360', '02-customer-360.png');

// ---- Phase B: Edit Customer ----
await cdp.clickByText('Edit Customer');
await sleep(1500);
await digestShot('edit-contact', '03-edit-contact-tab.png');

// Walk the edit tabs (read-only; no field changes).
const tabs = ['Membership', 'Payments', 'Vehicles', 'Communication', 'Comments'];
let n = 4;
for (const t of tabs) {
  await clickTab(t);
  await digestShot(`edit-${t.toLowerCase()}`, `${String(n).padStart(2, '0')}-edit-${t.toLowerCase()}-tab.png`);
  n++;
}
// Back to Contact so we cancel from the canonical first tab.
await clickTab('Contact');
await sleep(500);

// Cancel out — observe where it lands.
await cdp.clickByText('Cancel');
await sleep(1500);
await digestShot('after-edit-cancel', '09-after-edit-cancel.png');

// ---- Phase C: + Add Customer (blank form) ----
const curUrl = await cdp.eval('location.pathname');
if (!/crm-customers\.html/.test(curUrl)) await gotoPage(cdp, `${BASE}/crm-customers.html`, 1200);
await cdp.clickByText('+ Add Customer');
await sleep(1500);
await digestShot('add-customer-blank', '10-add-customer-blank.png');

// Capture current input VALUES on the blank form (prove it is blank / what's prefilled).
out.addCustomerFieldValues = await cdp.eval(`(() => {
  const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  return [...document.querySelectorAll('main input, main select, [class*="form"] input, [class*="form"] select')]
    .filter(vis).slice(0, 40)
    .map(i => ({ tag: i.tagName, type: i.type || '', placeholder: i.placeholder || '', value: i.value || '' }));
})()`);
save();

// Cancel out of the blank form.
await cdp.clickByText('Cancel');
await sleep(1500);
await digestShot('after-add-cancel', '11-after-add-cancel.png');

cdp.close();
await closeTarget(cdp.targetId);
console.log('WALK COMPLETE');
