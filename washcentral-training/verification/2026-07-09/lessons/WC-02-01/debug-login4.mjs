import { CDP, sleep } from '../../../../tools/cdp-lib.mjs';
import { closeTarget } from '../../../../tools/cdp-lib.mjs';

const cdp = await CDP.connect('new');
try {
  await cdp.setViewport(1920, 1080);
  await cdp.navigate('https://demo.washcentral.com/login.html', 1200);
  // What auth flags exist right now?
  const before = await cdp.eval(`JSON.stringify({ ls: {...localStorage}, ss: {...sessionStorage} })`);
  console.log('storage before:', before.slice(0, 800));
  // Fetch the crm page source and find its auth-guard script
  const guard = await cdp.eval(`fetch('crm-customers.html').then(r => r.text()).then(t => {
    const i = t.indexOf('washcentral-auth');
    return i >= 0 ? t.slice(Math.max(0, i - 500), i + 500) : 'no washcentral-auth string; login idx: ' + t.indexOf('login.html') + ' :: ' + t.slice(Math.max(0, t.indexOf('login.html') - 400), t.indexOf('login.html') + 100);
  })`);
  console.log('GUARD SNIPPET:\n', guard);
} finally {
  cdp.close(); try { await closeTarget(cdp.targetId); } catch {}
}
