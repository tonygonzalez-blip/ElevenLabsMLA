// restore-session.mjs — recover signed-in state via the demo's built-in quick-access entry (#qa-btn).
// Sanctioned recovery path per the authoring brief. Never types credentials.
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS, closeTarget } from '../../../../tools/cdp-lib.mjs';

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await cdp.navigate('https://demo.washcentral.com/login.html', 1200);

// Inspect the qa button before clicking (read-only).
const info = await cdp.eval(`(() => { const b = document.querySelector('#qa-btn'); return b ? { text: (b.textContent||'').trim(), tag: b.tagName } : null; })()`);
console.log('qa-btn:', info);

await cdp.click('#qa-btn');
await sleep(4000);
await dismissIdle(cdp);
let d = await cdp.eval(DIGEST_JS);
console.log('after qa-btn (4s):', d.url, '|', d.docTitle);

if (d.url.includes('login')) {
  // Maybe the button revealed a quick-access panel — digest it to see next step (no guessing clicks).
  console.log('buttons now:', d.buttons, '| bodySnippet:', d.bodySnippet.slice(0, 500));
}

// Confirm from a fresh load that the session is live again.
const d2 = await gotoPage(cdp, 'https://demo.washcentral.com/command-center.html');
console.log('command-center check:', d2.url, '|', d2.docTitle);

cdp.close();
await closeTarget(cdp.targetId);
console.log('DONE');
