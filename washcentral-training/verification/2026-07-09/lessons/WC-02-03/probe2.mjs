import { CDP, gotoPage, sleep, closeTarget } from '../../../../tools/cdp-lib.mjs';
const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await gotoPage(cdp, 'https://demo.washcentral.com/crm-customers.html', 1000);
for (let i = 0; i < 20; i++) {
  const n = await cdp.eval(`document.querySelectorAll('table tbody tr').length`);
  const anyRow = await cdp.eval(`document.querySelectorAll('tbody tr, [class*="table"] [class*="row"]').length`);
  console.log(i, 'table tbody tr =', n, '| generic rows =', anyRow);
  if (n > 0) break;
  await sleep(1000);
}
const html = await cdp.eval(`(() => { const t = document.querySelector('table'); return t ? t.outerHTML.slice(0, 800) : (document.querySelector('[class*="list"]')?.outerHTML || '').slice(0, 800); })()`);
console.log(html);
cdp.close(); await closeTarget(cdp.targetId);
