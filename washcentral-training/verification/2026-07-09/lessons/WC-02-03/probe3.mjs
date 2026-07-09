import { CDP, gotoPage, sleep, closeTarget } from '../../../../tools/cdp-lib.mjs';
const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
// try list twice
for (let attempt = 1; attempt <= 2; attempt++) {
  await gotoPage(cdp, 'https://demo.washcentral.com/crm-customers.html', 1500);
  await sleep(3000);
  const s = await cdp.eval(`(() => {
    const rows = [...document.querySelectorAll('tbody tr')];
    return { n: rows.length, first: rows[0] ? (rows[0].textContent||'').trim().replace(/\s+/g,' ').slice(0,120) : null };
  })()`);
  console.log('attempt', attempt, JSON.stringify(s));
  if (s.n > 1) break;
}
// direct detail page
await gotoPage(cdp, 'https://demo.washcentral.com/crm-customer-detail.html', 1500);
await sleep(2000);
const d = await cdp.eval(`(() => ({ path: location.pathname, title: document.title, body: (document.body.innerText||'').replace(/\s+/g,' ').slice(0,700) }))()`);
console.log(JSON.stringify(d, null, 1));
cdp.close(); await closeTarget(cdp.targetId);
