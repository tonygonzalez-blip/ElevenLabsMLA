// Quick state probe: is the debug Chrome up, do customer rows load, does the detail page resolve?
import { CDP, gotoPage, sleep, closeTarget } from '../../../../tools/cdp-lib.mjs';
const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);

await gotoPage(cdp, 'https://demo.washcentral.com/crm-customers.html', 1500);
await sleep(3000);
const s = await cdp.eval(`(() => {
  const rows = [...document.querySelectorAll('tbody tr')];
  return { path: location.pathname, n: rows.length, first: rows[0] ? (rows[0].textContent||'').trim().replace(/\\s+/g,' ').slice(0,140) : null };
})()`);
console.log('list:', JSON.stringify(s));

await gotoPage(cdp, 'https://demo.washcentral.com/crm-customer-detail.html', 1500);
await sleep(2000);
const d = await cdp.eval(`(() => ({ path: location.pathname, title: document.title, body: (document.body.innerText||'').replace(/\\s+/g,' ').slice(0,500) }))()`);
console.log('detail:', JSON.stringify(d, null, 1));
cdp.close(); await closeTarget(cdp.targetId);
