import { CDP, gotoPage, sleep, closeTarget } from '../../../../tools/cdp-lib.mjs';
const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await gotoPage(cdp, 'https://demo.washcentral.com/login.html', 1200);
await cdp.click('#qa-btn');
await sleep(2500);
const d = await cdp.eval(`({ path: location.pathname, title: document.title })`);
console.log('after qa:', JSON.stringify(d));
// verify list rows now
await gotoPage(cdp, 'https://demo.washcentral.com/crm-customers.html', 1500);
await sleep(3000);
const s = await cdp.eval(`(() => { const rows=[...document.querySelectorAll('tbody tr')]; return { n: rows.length, first: rows[2] ? (rows[2].textContent||'').trim().replace(/\s+/g,' ').slice(0,140) : (rows[0]?(rows[0].textContent||'').trim().slice(0,140):null) }; })()`);
console.log('list:', JSON.stringify(s));
cdp.close(); await closeTarget(cdp.targetId);
