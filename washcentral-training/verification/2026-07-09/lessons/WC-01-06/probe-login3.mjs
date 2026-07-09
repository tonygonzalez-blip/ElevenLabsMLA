// probe-login3.mjs — understand wcQuickAccess + look for a signed-in tab (read-only)
import { CDP, listTargets, sleep } from '../../../../tools/cdp-lib.mjs';

const targets = await listTargets();
console.log('TABS:', JSON.stringify(targets.map(t => ({ url: t.url, title: t.title })), null, 1));

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await cdp.navigate('https://demo.washcentral.com/login.html', 1500);

const fn = await cdp.eval(`typeof wcQuickAccess === 'function' ? wcQuickAccess.toString() : 'NOT A FUNCTION'`);
console.log('--- wcQuickAccess ---');
console.log(fn);

const storage = await cdp.eval(`(() => {
  const pick = s => { const o = {}; for (let i = 0; i < s.length; i++) { const k = s.key(i); o[k] = String(s.getItem(k)).slice(0, 80); } return o; };
  return { local: pick(localStorage), session: pick(sessionStorage) };
})()`);
console.log('--- storage keys (values truncated) ---');
console.log(JSON.stringify(Object.keys(storage.local)), JSON.stringify(Object.keys(storage.session)));
cdp.close();
