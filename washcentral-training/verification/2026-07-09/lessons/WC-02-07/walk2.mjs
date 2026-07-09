// WC-02-07 phase 2 — close-up shots, assignment-filter toggle (view-only, restored), presence selector inspection.
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const save = (name, obj) => fs.writeFileSync(path.join(DIR, name), JSON.stringify(obj, null, 2));

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await gotoPage(cdp, 'https://demo.washcentral.com/agent-console.html', 1200);
await dismissIdle(cdp);

// Signed-out recovery per brief: login.html + #qa-btn (never type credentials)
let here = await cdp.eval('location.pathname');
if (here.includes('login')) {
  await cdp.navigate('https://demo.washcentral.com/login.html', 1000);
  await cdp.click('#qa-btn');
  await sleep(1500);
  await gotoPage(cdp, 'https://demo.washcentral.com/agent-console.html', 1200);
  await dismissIdle(cdp);
  here = await cdp.eval('location.pathname');
  console.log('RE-LOGIN, now at', here);
  if (here.includes('login')) { console.error('STILL SIGNED OUT'); process.exit(2); }
}

async function clipShot(name, rectExpr, pad = 12) {
  const r = await cdp.eval(`(() => { const el = ${rectExpr}; if (!el) return null; const b = el.getBoundingClientRect(); return { x: b.x, y: b.y, w: b.width, h: b.height }; })()`);
  if (!r) { console.log('clipShot MISS', name); return; }
  const clip = { x: Math.max(0, r.x - pad), y: Math.max(0, r.y - pad), width: r.w + pad * 2, height: r.h + pad * 2, scale: 1 };
  const res = await cdp.send('Page.captureScreenshot', { format: 'png', clip });
  fs.writeFileSync(path.join(DIR, name), Buffer.from(res.data, 'base64'));
  console.log('shot', name, JSON.stringify(clip));
}

// Close-ups of the three panes + header agent bar
await clipShot('02-handoff-queue-pane.png', `[...document.querySelectorAll('h2')].find(h => h.textContent.trim() === 'Handoff Queue')?.closest('aside, section, div[class*="col"], div[class*="pane"]') || (() => { let n = [...document.querySelectorAll('h2')].find(h => h.textContent.trim() === 'Handoff Queue'); while (n && !n.querySelector('input')) n = n.parentElement; return n; })()`);
await clipShot('03-center-empty-state.png', `[...document.querySelectorAll('div.ac-col')].find(d => /Select a handoff/.test(d.textContent))`);
await clipShot('04-customer-panel.png', `(() => { let n = [...document.querySelectorAll('h2')].find(h => h.textContent.trim() === 'Customer'); return n ? n.parentElement : null; })()`);
await clipShot('05-presence-selector-closed.png', `document.querySelector('.ac-agentbar')`, 20);

// Presence selector: native <select>. Options documented from DOM; focus it (no value change).
const presence = await cdp.eval(`(() => {
  const sel = document.querySelector('.ac-presence select') || [...document.querySelectorAll('header select, .ac-agentbar select')][0];
  if (!sel) return null;
  sel.focus();
  const wrap = sel.closest('.ac-presence');
  return { value: sel.value, selectedText: sel.options[sel.selectedIndex]?.textContent.trim(), options: [...sel.options].map(o => ({ value: o.value, text: o.textContent.trim() })), wrapperClass: wrap ? wrap.className : null };
})()`);
save('digest-03-presence.json', presence);
console.log('PRESENCE:', JSON.stringify(presence));
// blur without changing anything
await cdp.eval(`document.activeElement && document.activeElement.blur(), document.querySelector('.ac-presence select')?.value`);
const presenceAfter = await cdp.eval(`document.querySelector('.ac-presence select, .ac-agentbar select')?.value`);
console.log('PRESENCE VALUE AFTER CLOSE (must equal before):', presenceAfter);

// Assignment filter: click Mine (view-only on an empty queue), digest, restore Team (observed default)
await cdp.clickByText('Mine 0');
await sleep(500); await dismissIdle(cdp);
const afterMine = await cdp.eval(`(() => {
  const btns = [...document.querySelectorAll('.ac-vbtn')].map(b => ({ text: b.textContent.trim().replace(/\\s+/g,' '), active: b.className.includes('active') }));
  const chips = [...document.querySelectorAll('.ac-chip')].map(b => ({ text: b.textContent.trim().replace(/\\s+/g,' '), active: b.className.includes('active') }));
  return { btns, chips, showing: (document.body.innerText.match(/showing \\d+/) || [null])[0], empty: /No matching handoffs\\./.test(document.body.innerText) };
})()`);
save('digest-04-filter-mine.json', afterMine);
console.log('AFTER MINE:', JSON.stringify(afterMine));
await clipShot('06-filter-mine-active.png', `(() => { let n = [...document.querySelectorAll('h2')].find(h => h.textContent.trim() === 'Handoff Queue'); while (n && !n.querySelector('input')) n = n.parentElement; return n; })()`);

// restore default
await cdp.clickByText('Team 0');
await sleep(400); await dismissIdle(cdp);
const restored = await cdp.eval(`[...document.querySelectorAll('.ac-vbtn')].map(b => b.textContent.trim().replace(/\\s+/g,' ') + (b.className.includes('active') ? ' [ACTIVE]' : ''))`);
console.log('RESTORED:', JSON.stringify(restored));

// Channel chip: click Voice, digest, restore All
await cdp.clickByText('Voice 0');
await sleep(400); await dismissIdle(cdp);
const afterVoice = await cdp.eval(`(() => ({ chips: [...document.querySelectorAll('.ac-chip')].map(b => ({ text: b.textContent.trim().replace(/\\s+/g,' '), active: b.className.includes('active') })), showing: (document.body.innerText.match(/showing \\d+/) || [null])[0] }))()`);
save('digest-05-chip-voice.json', afterVoice);
console.log('AFTER VOICE:', JSON.stringify(afterVoice));
await cdp.clickByText('All 0');
await sleep(400);
const chipsRestored = await cdp.eval(`[...document.querySelectorAll('.ac-chip')].map(b => b.textContent.trim().replace(/\\s+/g,' ') + (b.className.includes('active') ? ' [ACTIVE]' : ''))`);
console.log('CHIPS RESTORED:', JSON.stringify(chipsRestored));

// Sort select: document displayed value + options (no change)
const sort = await cdp.eval(`(() => { const s = document.querySelector('select.ac-sort'); return s ? { value: s.value, selectedText: s.options[s.selectedIndex]?.textContent.trim(), options: [...s.options].map(o => ({ value: o.value, text: o.textContent.trim() })) } : null; })()`);
save('digest-06-sort.json', sort);
console.log('SORT:', JSON.stringify(sort));

// Search box: type into search (allowed), observe, clear
await cdp.eval(`(() => { const i = document.querySelector('.ac-col input, aside input, input[placeholder*="Search name"]'); i.focus(); const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set; set.call(i, 'smith'); i.dispatchEvent(new Event('input', { bubbles: true })); return i.value; })()`);
await sleep(500);
const afterSearch = await cdp.eval(`(() => ({ showing: (document.body.innerText.match(/showing \\d+/) || [null])[0], empty: /No matching handoffs\\./.test(document.body.innerText) }))()`);
console.log('AFTER SEARCH smith:', JSON.stringify(afterSearch));
await cdp.eval(`(() => { const i = document.querySelector('input[placeholder*="Search name"]'); const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set; set.call(i, ''); i.dispatchEvent(new Event('input', { bubbles: true })); return i.value; })()`);
await sleep(300);

// Final full-page state screenshot (everything restored)
const finalDigest = await cdp.eval(DIGEST_JS);
save('digest-07-final-restored.json', finalDigest);
await cdp.screenshot(path.join(DIR, '07-final-restored.png'));

await dismissIdle(cdp);
cdp.close();
console.log('PHASE 2 DONE');
