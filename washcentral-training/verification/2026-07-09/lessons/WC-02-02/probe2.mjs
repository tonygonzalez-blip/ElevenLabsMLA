import { CDP, gotoPage, dismissIdle, sleep } from '../../../../tools/cdp-lib.mjs';
const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await gotoPage(cdp, 'https://demo.washcentral.com/crm-customers.html', 1500);
for (let i = 0; i < 6; i++) {
  await sleep(1500); await dismissIdle(cdp);
  const info = await cdp.eval(`(() => ({
    trs: document.querySelectorAll('table tbody tr').length,
    anyTr: document.querySelectorAll('tr').length,
    tables: document.querySelectorAll('table').length,
    custHits: ((document.body.innerText||'').match(/CUST-/g)||[]).length,
    url: location.pathname,
    snippet: (document.body.innerText||'').replace(/\\s+/g,' ').slice(400, 700)
  }))()`);
  console.log(i, JSON.stringify(info));
}
cdp.close();
