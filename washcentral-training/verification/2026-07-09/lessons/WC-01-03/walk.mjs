// WC-01-03 live verification walk — session behavior & timeouts.
// Read-only: navigation, sidebar group expansion, idle-dialog capture + Stay Logged In only.
import { CDP, dismissIdle, sleep, DIGEST_JS, closeTarget } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';

const save = (name, obj) => fs.writeFileSync(name, JSON.stringify(obj, null, 1));
const log = (...a) => console.log(new Date().toISOString().slice(11, 19), ...a);

const IDLE_JS = `(() => {
  const vis = el => { const r = el.getBoundingClientRect(); if (r.width<=0||r.height<=0) return false; const s = getComputedStyle(el); return s.visibility!=='hidden' && s.display!=='none' && s.opacity!=='0'; };
  const shortest = (list) => list.sort((a,b) => (a.textContent||'').length - (b.textContent||'').length)[0] || null;
  const out = { dialogVisible:false, dialogText:null, dialogButtons:[], toastVisible:false, toastText:null, countdown:null };
  const dcands = [...document.querySelectorAll('div,section,[role="dialog"]')].filter(e => vis(e) && /still there\\?/i.test(e.textContent||'') && /stay logged in/i.test(e.textContent||''));
  const d = shortest(dcands);
  if (d) {
    out.dialogVisible = true;
    out.dialogText = (d.innerText||'').replace(/\\s+/g,' ').trim();
    out.dialogButtons = [...d.querySelectorAll('button')].filter(vis).map(b => (b.textContent||'').trim());
    const m = out.dialogText.match(/\\d+:\\d\\d/);
    if (m) out.countdown = m[0];
  }
  const tcands = [...document.querySelectorAll('div,section,aside')].filter(e => vis(e) && /session expiring soon/i.test(e.textContent||'') && !/still there/i.test(e.textContent||''));
  const t = shortest(tcands);
  if (t) {
    out.toastVisible = true;
    out.toastText = (t.innerText||'').replace(/\\s+/g,' ').trim();
  }
  return out;
})()`;

const TABLE_JS = `(() => {
  const txt = e => (e.textContent||'').trim().replace(/\\s+/g,' ');
  const heads = [...document.querySelectorAll('table th')].map(txt);
  const rows = [...document.querySelectorAll('table tbody tr')].map(tr => [...tr.querySelectorAll('td')].map(txt));
  const body = (document.body.innerText||'').replace(/\\s+/g,' ');
  const kpi = {};
  for (const name of ['Total Levels','Max Security Level','Longest Timeout (min)']) {
    const re = new RegExp('([\\\\d,.—-]+)\\\\s*' + name.replace(/[.*+?^$()\\[\\]{}|\\\\]/g, '\\\\$&'));
    const m = body.match(re);
    kpi[name] = m ? m[1] : null;
  }
  const pag = body.match(/(\\d+[–-]\\d+ of [\\d,]+)/);
  return { heads, rowCount: rows.length, rows, kpi, pagination: pag ? pag[1] : null, hasError: /couldn.t load user levels/i.test(body) };
})()`;

const SIDEBAR_JS = `(() => {
  const vis = el => { const r = el.getBoundingClientRect(); if (r.width<=0||r.height<=0) return false; const s = getComputedStyle(el); return s.visibility!=='hidden' && s.display!=='none' && s.opacity!=='0'; };
  const txt = e => (e.textContent||'').trim().replace(/\\s+/g,' ');
  const side = document.querySelector('[class*="sidebar"], [class*="side-nav"], aside, nav.settings-nav');
  if (!side) return { error: 'no sidebar found' };
  return { items: [...side.querySelectorAll('a, button, li')].filter(vis).map(txt).filter(Boolean) };
})()`;

async function idleState(cdp) { return await cdp.eval(IDLE_JS); }

// Robust text clicker: any visible element whose normalized text equals/starts with `want`; picks the tightest match.
async function clickText(cdp, want) {
  const ok = await cdp.eval(`(() => {
    const want = ${JSON.stringify(want)}.trim().replace(/\\s+/g,' ').toLowerCase();
    const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    const norm = e => (e.textContent||'').trim().replace(/\\s+/g,' ').toLowerCase();
    const els = [...document.querySelectorAll('button, a, [role="button"], [class*="btn"], li, [class*="nav"] div, [class*="sidebar"] div, span')].filter(vis);
    let cands = els.filter(e => norm(e) === want);
    if (!cands.length) cands = els.filter(e => norm(e).startsWith(want));
    if (!cands.length) return false;
    cands.sort((a,b) => (a.textContent||'').length - (b.textContent||'').length);
    cands[0].click(); return true;
  })()`);
  if (!ok) throw new Error('clickText: no visible element matching "' + want + '"');
}

async function captureIdleIfVisible(cdp, prefix, notes) {
  const st = await idleState(cdp);
  if (st.dialogVisible || st.toastVisible) {
    await cdp.screenshot(`${prefix}-idle-before-dismiss.png`);
    save(`${prefix}-idle-state.json`, { capturedAt: new Date().toISOString(), note: notes, ...st });
    log(`IDLE captured at ${prefix}:`, st.dialogText || st.toastText);
    await dismissIdle(cdp);   // clicks Stay Logged In (or Stay Active on the toast)
    await sleep(700);
    const after = await idleState(cdp);
    save(`${prefix}-idle-after-dismiss.json`, { capturedAt: new Date().toISOString(), ...after });
    return { seen: true, state: st, after };
  }
  return { seen: false };
}

// Navigate; if redirected to login.html, recover via the demo quick-access button (#qa-btn). Never type credentials.
async function goto(cdp, url, settle = 1500) {
  await cdp.navigate(url, settle);
  let path = await cdp.eval('location.pathname');
  if (/login\.html/.test(path)) {
    log('signed out — recovering via #qa-btn');
    await cdp.navigate('https://demo.washcentral.com/login.html', 1200);
    await cdp.click('#qa-btn');
    for (let i = 0; i < 12; i++) {                      // the quick-access redirect takes ~3s
      await sleep(1000);
      path = await cdp.eval('location.pathname');
      if (!/login\.html/.test(path)) break;
    }
    if (/login\.html/.test(path)) throw new Error('still signed out after #qa-btn');
    await cdp.navigate(url, settle);
    path = await cdp.eval('location.pathname');
    if (/login\.html/.test(path)) throw new Error('signed out again after recovery');
  }
}

const cdp = await CDP.connect('new');
try {
  await cdp.setViewport(1920, 1080);

  // ---- Phase A: Command Center (start page; today's sweep saw the idle dialog here)
  log('A: command-center');
  await goto(cdp, 'https://demo.washcentral.com/command-center.html', 1500);
  let idleA = await captureIdleIfVisible(cdp, '01a', 'on load of command-center');
  const digCC = await cdp.eval(DIGEST_JS);
  save('01-command-center-digest.json', digCC);
  await cdp.screenshot('01-command-center.png');

  // ---- Phase B: Settings hub, sidebar groups
  log('B: settings hub');
  await goto(cdp, 'https://demo.washcentral.com/settings.html', 1500);
  await captureIdleIfVisible(cdp, '02a', 'on load of settings hub');
  const digHub = await cdp.eval(DIGEST_JS);
  save('02-settings-hub-digest.json', digHub);
  await cdp.screenshot('02-settings-hub.png');

  // Expand Users & Security group — record contents
  log('B: expand Users & Security');
  await clickText(cdp, 'Users & Security');
  await sleep(700);
  save('03-sidebar-users-security.json', await cdp.eval(SIDEBAR_JS));
  await cdp.screenshot('03-settings-users-security-open.png');

  // Expand Automation group — record contents
  log('B: expand Automation');
  await clickText(cdp, 'Automation');
  await sleep(700);
  save('04-sidebar-automation.json', await cdp.eval(SIDEBAR_JS));
  await cdp.screenshot('04-settings-automation-open.png');

  // ---- Phase C: User Levels via the real sidebar link
  log('C: click User Levels');
  await clickText(cdp, 'User Levels');
  await sleep(1500);
  await dismissIdle(cdp);
  const digUL = await cdp.eval(DIGEST_JS);
  save('05-user-levels-digest.json', digUL);
  log('landed on', digUL.url);

  // Poll for the table to load (sweep caught a Failed-to-fetch state)
  let table = null;
  for (let i = 0; i < 12; i++) {
    table = await cdp.eval(TABLE_JS);
    if (table.rowCount > 0 && !table.hasError && table.rows[0].length >= 3) break;
    await sleep(2000);
    await dismissIdle(cdp);
  }
  save('06-user-levels-table.json', { capturedAt: new Date().toISOString(), ...table });
  await cdp.screenshot('05-user-levels.png');
  log('table rows:', table.rowCount, 'error:', table.hasError, 'kpi:', JSON.stringify(table.kpi));

  // If paginated beyond 25, note it (do not change page size; pagination clicks are allowed but 25 likely covers all)
  // ---- Phase D: idle wait for the "Still there?" dialog (max ~3 min), capture BEFORE dismissing
  log('D: idle wait for Still there? dialog (max 180s)');
  const idleStart = Date.now();
  let idleCaught = null;
  while (Date.now() - idleStart < 180000) {
    const st = await idleState(cdp);
    if (st.dialogVisible || st.toastVisible) {
      const elapsed = Math.round((Date.now() - idleStart) / 1000);
      await cdp.screenshot('07-idle-dialog-before-dismiss.png');
      const st2 = await idleState(cdp); // re-read for countdown at screenshot moment
      save('07-idle-dialog.json', { capturedAt: new Date().toISOString(), secondsIdleBeforeAppearance: elapsed, atScreenshot: st2, firstDetection: st });
      log(`IDLE dialog after ~${elapsed}s idle:`, st.dialogText);
      // watch the countdown tick once (read-only) to confirm it counts down
      await sleep(3000);
      const st3 = await idleState(cdp);
      save('08-idle-dialog-3s-later.json', { capturedAt: new Date().toISOString(), ...st3 });
      // dismiss via Stay Logged In only
      await cdp.eval(`(() => { const b = [...document.querySelectorAll('button')].find(x => /^stay logged in$/i.test((x.textContent||'').trim())); if (b) { b.click(); return true; } return false; })()`);
      await sleep(800);
      const after = await idleState(cdp);
      save('09-after-stay-logged-in.json', { capturedAt: new Date().toISOString(), ...after });
      await cdp.screenshot('09-after-stay-logged-in.png');
      idleCaught = { elapsed, st };
      break;
    }
    await sleep(5000);
  }
  if (!idleCaught) log('idle dialog did not appear within 180s of inactivity');

  // Confirm we are still on User Levels and signed in
  const digFinal = await cdp.eval(DIGEST_JS);
  save('10-final-state-digest.json', digFinal);
  log('final url:', digFinal.url);
} finally {
  try { await closeTarget(cdp.targetId); } catch {}
  cdp.close();
}
log('walk complete');
