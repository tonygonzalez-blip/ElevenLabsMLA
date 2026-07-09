import { CDP, gotoPage, sleep } from '../../../../tools/cdp-lib.mjs';
import { closeTarget } from '../../../../tools/cdp-lib.mjs';
const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await gotoPage(cdp, 'https://demo.washcentral.com/crm-customers.html', 1500);
await sleep(2000);
const info = await cdp.eval(`(() => {
  const rows = [...document.querySelectorAll('table tbody tr')];
  return {
    rowCount: rows.length,
    first3: rows.slice(0,3).map(r => ({
      text: (r.textContent||'').trim().replace(/\s+/g,' ').slice(0,140),
      hasOnclick: !!r.onclick, cls: r.className,
      tdCount: r.querySelectorAll('td').length,
      linkInRow: [...r.querySelectorAll('a')].map(a => a.getAttribute('href')).slice(0,3)
    })),
    activeIdx: rows.findIndex(r => /\bActive\b/.test(r.textContent||'') && !/Inactive/.test(r.textContent||''))
  };
})()`);
console.log(JSON.stringify(info, null, 1));
cdp.close(); await closeTarget(cdp.targetId);
