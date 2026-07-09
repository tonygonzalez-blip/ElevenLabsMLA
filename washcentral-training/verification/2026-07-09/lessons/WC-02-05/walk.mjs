// WC-02-05 live verification walk — House Accounts list + detail (read-only).
// Tenant safety: navigation, tab clicks, one row click, digests, screenshots only.
// NEVER clicks Delete / Generate Invoices / + New House Account / Edit Account / Statement.
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS, harvestLinks, closeTarget } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const save = (name, obj) => fs.writeFileSync(path.join(DIR, name), typeof obj === 'string' ? obj : JSON.stringify(obj, null, 1));

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);

// ---------- 1) House Accounts list ----------
let list = await gotoPage(cdp, 'https://demo.washcentral.com/crm-house-accounts.html', 1500);
// rows load async (sweep saw a fetch failure) — wait and re-digest up to 3 times
for (let i = 0; i < 3; i++) {
  await sleep(1500); await dismissIdle(cdp);
  list = await cdp.eval(DIGEST_JS);
  if (list.firstRows.length && !/Couldn/.test(list.firstRows[0])) break;
}
save('digest-list.json', list);
save('list-innertext.txt', await cdp.eval('document.body.innerText'));
const sidebarLinks = await harvestLinks(cdp);
save('sidebar-links.json', sidebarLinks);
await cdp.screenshot(path.join(DIR, '01-house-accounts-list.png'));
console.log('LIST rows:', list.firstRows);
console.log('LIST buttons:', list.buttons.join(' | '));
console.log('SIDEBAR LINKS:', sidebarLinks.join(' | '));

// scroll to the table so the list card + Generate Invoices button are in frame
await cdp.eval(`(() => { const el=[...document.querySelectorAll('button')].find(b=>/Generate Invoices/.test(b.textContent||'')); if(el) el.scrollIntoView({block:'center'}); })()`);
await sleep(600); await dismissIdle(cdp);
await cdp.screenshot(path.join(DIR, '02-house-accounts-listcard.png'));

// ---------- 2) open a detail via row click ----------
const rowInfo = await cdp.eval(`(() => {
  const tr = document.querySelector('table tbody tr');
  if (!tr) return null;
  const cells = [...tr.querySelectorAll('td')].map(td => (td.textContent||'').trim().replace(/\\s+/g,' '));
  tr.click();
  return cells;
})()`);
console.log('CLICKED ROW:', rowInfo);
await sleep(1800); await dismissIdle(cdp);
let detail = await cdp.eval(DIGEST_JS);
if (!/house-account-detail/.test(detail.url)) {
  console.log('Row click did not navigate (url=' + detail.url + '); trying direct nav');
  detail = await gotoPage(cdp, 'https://demo.washcentral.com/crm-house-account-detail.html', 1800);
}
await sleep(1200); await dismissIdle(cdp);
detail = await cdp.eval(DIGEST_JS);
save('digest-detail-overview.json', detail);
save('detail-overview-innertext.txt', await cdp.eval('document.body.innerText'));
await cdp.screenshot(path.join(DIR, '03-detail-overview.png'));
console.log('DETAIL url:', detail.url);
console.log('DETAIL h1/h2:', detail.h1, detail.h2.slice(0,6));
console.log('DETAIL tabs:', detail.tabs.join(' | '));
console.log('DETAIL buttons:', detail.buttons.join(' | '));
console.log('DETAIL chips:', detail.chips.join(' | '));
console.log('DETAIL kpi:', detail.kpiLabels.slice(0,14).join(' | '));

// ---------- 3) walk ALL tabs ----------
const clickTab = async (name) => cdp.eval(`(() => {
  const vis = el => { const r = el.getBoundingClientRect(); return r.width>0 && r.height>0; };
  const cands = [...document.querySelectorAll('[role="tab"], [class*="tab"] button, [class*="tabs"] button, [class*="tab"] a, [class*="tabs"] li, .tab')];
  const el = cands.find(e => vis(e) && (e.textContent||'').trim().replace(/\\s+/g,' ').toLowerCase() === ${JSON.stringify(name.toLowerCase())});
  if (!el) return false; el.click(); return true;
})()`);

const tabs = ['Overview','Details','Contacts','Vehicles','Invoices','Payments','Activity','Documents','Notes','Audit Trail'];
const shotTabs = new Set(['Invoices','Payments']);
for (const t of tabs) {
  if (t !== 'Overview') {
    const ok = await clickTab(t);
    console.log('TAB', t, ok ? 'clicked' : 'NOT FOUND');
    if (!ok) continue;
    await sleep(900); await dismissIdle(cdp);
  }
  const d = await cdp.eval(DIGEST_JS);
  const slug = t.toLowerCase().replace(/\s+/g,'-');
  save(`digest-detail-tab-${slug}.json`, d);
  save(`detail-tab-${slug}-innertext.txt`, await cdp.eval('document.body.innerText'));
  if (shotTabs.has(t)) await cdp.screenshot(path.join(DIR, `0${t==='Invoices'?4:5}-detail-${slug}.png`));
}

// extra: back to Overview for the AR Aging close-up
await clickTab('Overview'); await sleep(900); await dismissIdle(cdp);
await cdp.eval(`(() => { const els=[...document.querySelectorAll('h3,h2,[class*="card"] ,[class*="panel"]')]; const el=els.find(e=>/AR Aging/i.test(e.textContent||'')); if(el) el.scrollIntoView({block:'center'}); })()`);
await sleep(600); await dismissIdle(cdp);
await cdp.screenshot(path.join(DIR, '06-detail-ar-aging.png'));

console.log('WALK DONE');
try { await closeTarget(cdp.targetId); } catch {}
cdp.close();
