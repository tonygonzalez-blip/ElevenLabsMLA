// signin-token.mjs — sign the shared demo profile IN PLACE via the demo's built-in quick-access
// button (#qa-btn on login.html). Never types credentials (CLAUDE.md §2). Token/session are set by
// the app itself when qa-btn's client-side auth succeeds and are persisted in Local Storage, which
// survives across produce runs on the same Chrome profile.
//
// Caller contract (see production/ensure-stages.sh):
//   CDP_HTTP=http://127.0.0.1:<port> node production/signin-token.mjs
// CDP_HTTP selects which stage's Chrome to drive (cdp-lib reads it). Connects to the EXISTING first
// tab ('first', never 'new' — connect('new') leaks a tab every run). Exit 0 = signed in, 1 = failed
// (so ensure-stages can retry/relaunch).
import { CDP, dismissIdle, sleep } from '../tools/cdp-lib.mjs';

const LOGIN = 'https://demo.washcentral.com/login.html';
const HOME  = 'https://demo.washcentral.com/command-center.html';

const fail = (msg) => { console.error('[signin]', msg); process.exit(1); };

let cdp;
try {
  cdp = await CDP.connect('first');
} catch (e) {
  fail(`connect failed: ${e.message}`);
}

try {
  await cdp.setViewport(1920, 1080);
  await cdp.navigate(LOGIN, 1200);
  await sleep(400);

  const hasQa = await cdp.eval(`!!document.querySelector('#qa-btn')`);
  if (!hasQa) fail('#qa-btn not present on login page (page unstyled or app down)');

  await cdp.click('#qa-btn');

  // Wait for the app to leave the login screen (client-side auth completed + redirect).
  let left = false;
  for (let i = 0; i < 12; i++) {
    await sleep(800);
    const p = await cdp.eval('location.pathname');
    if (!/login/.test(p)) { left = true; break; }
  }
  if (!left) fail('still on login after qa-btn (auth rejected — demo tenant may be down)');

  await dismissIdle(cdp);

  // Confirm the session actually holds: command-center must stay put, not bounce back to login.
  await cdp.navigate(HOME, 1200);
  await sleep(800);
  const path = await cdp.eval('location.pathname');
  if (/login/.test(path)) fail('bounced to login on command-center (session did not persist)');

  console.log('[signin] OK — signed in, command-center holds');
  cdp.close();
  process.exit(0);
} catch (e) {
  try { cdp && cdp.close(); } catch {}
  fail(`error: ${e.message}`);
}
