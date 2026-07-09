import { CDP, gotoPage, dismissIdle, sleep } from '../../../../tools/cdp-lib.mjs';
const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await gotoPage(cdp, 'https://demo.washcentral.com/crm-customers.html', 1500);
await sleep(1500); await dismissIdle(cdp);
const info = await cdp.eval(`(() => {
  const rows = [...document.querySelectorAll('table tbody tr')];
  const first = rows.slice(0, 4).map(r => ({
    text: (r.textContent || '').trim().replace(/\\s+/g,' ').slice(0, 120),
    onclick: !!r.onclick, cursor: getComputedStyle(r).cursor,
    tdCount: r.querySelectorAll('td').length,
    hasLink: !!r.querySelector('a'),
    linkHref: r.querySelector('a') ? r.querySelector('a').getAttribute('href') : null
  }));
  return { rowCount: rows.length, first };
})()`);
console.log(JSON.stringify(info, null, 1));
cdp.close();
