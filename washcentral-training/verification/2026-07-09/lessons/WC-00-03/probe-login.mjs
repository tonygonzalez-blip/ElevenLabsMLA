// Probe the quick-access sign-in flow (never types credentials)
import { CDP, dismissIdle, sleep } from '../../../../tools/cdp-lib.mjs';

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await cdp.navigate('https://demo.washcentral.com/login.html', 1200);
console.log('on:', await cdp.eval('location.pathname'));
const hasQa = await cdp.eval(`!!document.querySelector('#qa-btn')`);
console.log('#qa-btn present:', hasQa, '| text:', await cdp.eval(`(document.querySelector('#qa-btn')||{}).textContent || null`));
await cdp.click('#qa-btn');
for (let i = 0; i < 10; i++) {
  await sleep(800);
  const p = await cdp.eval('location.pathname');
  console.log(`t+${(i + 1) * 0.8}s:`, p);
  if (!p.includes('login')) break;
}
await dismissIdle(cdp);
console.log('final:', await cdp.eval('document.title'));
cdp.close();
