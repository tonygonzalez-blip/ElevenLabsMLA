// WC-01-05 record-pattern walk — READ-ONLY per authoring brief allowlist.
// Allowed here: open list, click a row (view detail), read View buttons, open Edit form,
// change NOTHING, leave via Cancel, open + New Record, leave via Cancel, Stay Logged In.
// NEVER: Delete, Save/Save Changes, any field change.
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const save = (name, obj) => fs.writeFileSync(path.join(DIR, name), JSON.stringify(obj, null, 1));
const log = (...a) => console.log(...a);

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);

// Signed-out recovery per brief: go to login.html and click the built-in quick-access
// entry (#qa-btn). Never type credentials.
async function ensureSignedIn() {
  const where = await cdp.eval('location.pathname');
  if (!where.includes('login')) return;
  log('signed out — using quick-access entry (#qa-btn / wcQuickAccess)');
  await cdp.navigate('https://demo.washcentral.com/login.html', 1200);
  // #qa-btn is display:none on this host; invoke the page's own quick-access
  // function that the button calls. No credentials typed.
  await cdp.eval('wcQuickAccess()');
  await sleep(3000); await dismissIdle(cdp);
  log('after quick access, at:', await cdp.eval('location.pathname'));
}

// ---------- Phase 1: the list ----------
let digest = await gotoPage(cdp, 'https://demo.washcentral.com/settings-cancellation-reasons.html', 1500);
if (digest.url.includes('login')) {
  await ensureSignedIn();
  digest = await gotoPage(cdp, 'https://demo.washcentral.com/settings-cancellation-reasons.html', 1500);
}
await dismissIdle(cdp); await sleep(1500); await dismissIdle(cdp);
digest = await cdp.eval(DIGEST_JS);

// If data failed to fetch (as in today's sweep digest), retry with reloads.
let tries = 0;
while (digest.bodySnippet.includes('Failed to fetch') && tries < 3) {
  tries++;
  log(`fetch failure on list — reload attempt ${tries}`);
  await cdp.navigate('https://demo.washcentral.com/settings-cancellation-reasons.html', 2500);
  await dismissIdle(cdp); await sleep(2000); await dismissIdle(cdp);
  digest = await cdp.eval(DIGEST_JS);
}
save('digest-01-list.json', digest);
await cdp.screenshot(path.join(DIR, '01-list.png'));
log('LIST url:', digest.url);
log('LIST kpi:', JSON.stringify(digest.kpiLabels?.slice(0, 6)));
log('LIST headers:', JSON.stringify(digest.tableHeaders));
log('LIST firstRows:', JSON.stringify(digest.firstRows));
log('LIST buttons:', JSON.stringify(digest.buttons));
log('LIST placeholders:', JSON.stringify(digest.inputPlaceholders));

// Row count + pagination text
const listMeta = await cdp.eval(`(() => {
  const rows = [...document.querySelectorAll('table tbody tr')].filter(r => r.getBoundingClientRect().height > 0);
  const pag = (document.body.innerText.match(/\\d+[–-]\\d+ of [\\d,]+/) || [null])[0];
  return { rowCount: rows.length, pagination: pag,
    firstRowText: rows[0] ? rows[0].innerText.replace(/\\s+/g,' ').trim() : null,
    secondRowText: rows[1] ? rows[1].innerText.replace(/\\s+/g,' ').trim() : null };
})()`);
save('meta-01-list.json', listMeta);
log('LIST meta:', JSON.stringify(listMeta));

// ---------- Phase 2: row click -> detail (View mode) ----------
const clicked = await cdp.eval(`(() => {
  const rows = [...document.querySelectorAll('table tbody tr')].filter(r => r.getBoundingClientRect().height > 0);
  if (!rows.length) return null;
  const t = rows[0].innerText.replace(/\\s+/g,' ').trim();
  rows[0].click();
  return t;
})()`);
log('clicked row:', clicked);
await sleep(1800); await dismissIdle(cdp);
digest = await cdp.eval(DIGEST_JS);
save('digest-02-detail.json', digest);
await cdp.screenshot(path.join(DIR, '02-detail.png'));
log('DETAIL url:', digest.url);
log('DETAIL h1/h2/h3:', JSON.stringify([digest.h1, digest.h2, digest.h3]));
log('DETAIL buttons:', JSON.stringify(digest.buttons));
log('DETAIL labels:', JSON.stringify(digest.labels));
log('DETAIL body:', digest.bodySnippet.slice(0, 900));

// ---------- Phase 3: open Edit form (change NOTHING) ----------
const editBtn = await cdp.eval(`(() => {
  const els = [...document.querySelectorAll('button, a')].filter(e => e.getBoundingClientRect().width > 0);
  const b = els.find(e => /^edit\\b/i.test((e.textContent||'').trim()));
  if (!b) return null;
  const label = (b.textContent||'').trim().replace(/\\s+/g,' ');
  b.click();
  return label;
})()`);
log('clicked Edit button labeled:', editBtn);
await sleep(1800); await dismissIdle(cdp);
digest = await cdp.eval(DIGEST_JS);
save('digest-03-edit.json', digest);
await cdp.screenshot(path.join(DIR, '03-edit.png'));
log('EDIT url:', digest.url);
log('EDIT labels:', JSON.stringify(digest.labels));
log('EDIT buttons:', JSON.stringify(digest.buttons));
log('EDIT placeholders:', JSON.stringify(digest.inputPlaceholders));
log('EDIT body:', digest.bodySnippet.slice(0, 900));

// Field-level detail on the edit form (read-only inspection)
const editMeta = await cdp.eval(`(() => {
  const vis = el => el.getBoundingClientRect().width > 0;
  const fields = [...document.querySelectorAll('input, textarea, select')].filter(vis).map(i => ({
    tag: i.tagName.toLowerCase(), type: i.type || null, value: (i.value||'').slice(0,80),
    checked: i.type === 'checkbox' ? i.checked : undefined, placeholder: i.placeholder || null }));
  const labels = [...document.querySelectorAll('label')].filter(vis).map(l => l.textContent.trim().replace(/\\s+/g,' '));
  const btns = [...document.querySelectorAll('button')].filter(vis).map(b => b.textContent.trim().replace(/\\s+/g,' ')).filter(t => t && t.length < 40);
  return { fields, labels, btns, href: location.pathname + location.search + location.hash };
})()`);
save('meta-03-edit-fields.json', editMeta);
log('EDIT fields:', JSON.stringify(editMeta));

// ---------- Phase 4: leave Edit via Cancel ----------
const cancelled = await cdp.eval(`(() => {
  const els = [...document.querySelectorAll('button, a')].filter(e => e.getBoundingClientRect().width > 0);
  const b = els.find(e => /^cancel$/i.test((e.textContent||'').trim()));
  if (!b) return null;
  b.click(); return (b.textContent||'').trim();
})()`);
log('clicked Cancel:', cancelled);
await sleep(1500); await dismissIdle(cdp);
digest = await cdp.eval(DIGEST_JS);
save('digest-04-after-cancel.json', digest);
await cdp.screenshot(path.join(DIR, '04-after-cancel.png'));
log('AFTER-CANCEL url:', digest.url);
log('AFTER-CANCEL h/body:', JSON.stringify(digest.h2), digest.bodySnippet.slice(0, 400));

// ---------- Phase 5: back to the list, then + New Record -> Cancel ----------
// If Cancel returned us to the detail view, use Back; otherwise go straight to the list.
const backBtn = await cdp.eval(`(() => {
  const els = [...document.querySelectorAll('button, a')].filter(e => e.getBoundingClientRect().width > 0);
  const b = els.find(e => /back/i.test((e.textContent||'').trim()) && (e.textContent||'').trim().length < 20);
  if (!b) return null;
  const label = (b.textContent||'').trim().replace(/\\s+/g,' ');
  b.click(); return label;
})()`);
log('Back button clicked (if present):', backBtn);
await sleep(1500); await dismissIdle(cdp);
digest = await cdp.eval(DIGEST_JS);
save('digest-05-back-to-list.json', digest);
await cdp.screenshot(path.join(DIR, '05-back-to-list.png'));
log('BACK url:', digest.url, '| firstRows:', JSON.stringify(digest.firstRows?.slice(0,2)));

// + New Record (allowed: open a New form to document it, then Cancel; change nothing)
const newBtn = await cdp.eval(`(() => {
  const els = [...document.querySelectorAll('button, a')].filter(e => e.getBoundingClientRect().width > 0);
  const b = els.find(e => /^\\+ ?new/i.test((e.textContent||'').trim()));
  if (!b) return null;
  const label = (b.textContent||'').trim().replace(/\\s+/g,' ');
  b.click(); return label;
})()`);
log('clicked New button labeled:', newBtn);
await sleep(1800); await dismissIdle(cdp);
digest = await cdp.eval(DIGEST_JS);
save('digest-06-new-form.json', digest);
await cdp.screenshot(path.join(DIR, '06-new-form.png'));
log('NEW url:', digest.url);
log('NEW labels:', JSON.stringify(digest.labels));
log('NEW buttons:', JSON.stringify(digest.buttons));
const newMeta = await cdp.eval(`(() => {
  const vis = el => el.getBoundingClientRect().width > 0;
  const fields = [...document.querySelectorAll('input, textarea, select')].filter(vis).map(i => ({
    tag: i.tagName.toLowerCase(), type: i.type || null, value: (i.value||'').slice(0,80),
    checked: i.type === 'checkbox' ? i.checked : undefined, placeholder: i.placeholder || null }));
  return { fields, href: location.pathname + location.search + location.hash,
    heading: (document.querySelector('h1,h2,[class*="page-title"],[class*="form-title"]')||{}).textContent?.trim() || null };
})()`);
save('meta-06-new-fields.json', newMeta);
log('NEW fields:', JSON.stringify(newMeta));

// Cancel out of the New form
const cancelled2 = await cdp.eval(`(() => {
  const els = [...document.querySelectorAll('button, a')].filter(e => e.getBoundingClientRect().width > 0);
  const b = els.find(e => /^cancel$/i.test((e.textContent||'').trim()));
  if (!b) return null;
  b.click(); return (b.textContent||'').trim();
})()`);
log('clicked Cancel on New form:', cancelled2);
await sleep(1500); await dismissIdle(cdp);
digest = await cdp.eval(DIGEST_JS);
save('digest-07-after-new-cancel.json', digest);
await cdp.screenshot(path.join(DIR, '07-after-new-cancel.png'));
log('FINAL url:', digest.url, '| firstRows:', JSON.stringify(digest.firstRows?.slice(0,2)));

cdp.close();
log('WALK COMPLETE');
