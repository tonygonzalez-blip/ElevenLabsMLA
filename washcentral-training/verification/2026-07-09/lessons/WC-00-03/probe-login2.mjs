// Probe stage 2: what does #qa-btn do? (values never logged — only empty/non-empty)
import { CDP, dismissIdle, sleep } from '../../../../tools/cdp-lib.mjs';

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await cdp.navigate('https://demo.washcentral.com/login.html', 1200);

const before = await cdp.eval(`[...document.querySelectorAll('input')].map(i => ({ type: i.type, filled: !!i.value }))`);
console.log('inputs before:', JSON.stringify(before));
await cdp.click('#qa-btn');
await sleep(1000);
const after = await cdp.eval(`[...document.querySelectorAll('input')].map(i => ({ type: i.type, filled: !!i.value }))`);
console.log('inputs after :', JSON.stringify(after));

// what buttons exist?
const btns = await cdp.eval(`[...document.querySelectorAll('button, input[type=submit], [role=button]')].map(b => (b.textContent||b.value||'').trim().replace(/\\s+/g,' ')).filter(Boolean)`);
console.log('buttons:', JSON.stringify(btns));

// click the sign-in submit (values were injected by the demo's own quick-access, not typed by us)
const clicked = await cdp.eval(`(() => {
  const els = [...document.querySelectorAll('button, input[type=submit]')];
  const b = els.find(e => /sign in/i.test(e.textContent || e.value || ''));
  if (!b) return false; b.click(); return true;
})()`);
console.log('clicked Sign In:', clicked);
for (let i = 0; i < 10; i++) {
  await sleep(800);
  const p = await cdp.eval('location.pathname');
  console.log(`t+${((i + 1) * 0.8).toFixed(1)}s:`, p);
  if (!p.includes('login')) break;
}
await dismissIdle(cdp);
console.log('final title:', await cdp.eval('document.title'));
cdp.close();
