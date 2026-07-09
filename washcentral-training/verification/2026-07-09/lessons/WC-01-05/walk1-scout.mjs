// WC-01-05 walk, stage 1: scout the Cancellation Reasons list.
// Read-only: navigate, wait for rows, digest, screenshot. No clicks on records yet.
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS, closeTarget } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const DIR = fileURLToPath(new URL('.', import.meta.url));
const save = (name, obj) => fs.writeFileSync(DIR + name, JSON.stringify(obj, null, 1));

const cdp = await CDP.connect('new');
try {
  await cdp.setViewport(1920, 1080);
  let digest = await gotoPage(cdp, 'https://demo.washcentral.com/settings-cancellation-reasons.html', 1200);

  // The sweep digest caught this list mid-load / failed-fetch. Wait for rows (poll up to ~15s).
  let rows = 0;
  for (let i = 0; i < 15; i++) {
    await dismissIdle(cdp);
    rows = await cdp.eval(`document.querySelectorAll('table tbody tr').length`);
    const bodyTxt = await cdp.eval(`(document.body.innerText||'').includes('Loading…')`);
    if (rows > 1 && !bodyTxt) break;
    await sleep(1000);
  }
  await dismissIdle(cdp);
  await sleep(500);
  digest = await cdp.eval(DIGEST_JS);
  save('digest-01-list.json', digest);
  await cdp.screenshot(DIR + '01-list.png');

  // Extra ground truth: KPI values, pagination text, first 5 row cell texts, row tag/attrs.
  const extra = await cdp.eval(`(() => {
    const txt = el => (el.textContent||'').trim().replace(/\\s+/g,' ');
    const rows = [...document.querySelectorAll('table tbody tr')].slice(0, 6).map(tr => ({
      cells: [...tr.querySelectorAll('td')].map(txt),
      hasOnclick: !!tr.onclick || tr.hasAttribute('onclick'),
      cls: tr.className, style_cursor: getComputedStyle(tr).cursor
    }));
    const pag = [...document.querySelectorAll('[class*="pagination"], [class*="pager"], tfoot')].map(txt);
    const kpis = [...document.querySelectorAll('[class*="kpi"], [class*="stat"], [class*="metric"]')].map(txt).slice(0,12);
    const bodyTail = (document.body.innerText||'').replace(/\\s+/g,' ').slice(0, 2500);
    return { rowCount: document.querySelectorAll('table tbody tr').length, rows, pag, kpis, bodyTail };
  })()`);
  save('extra-01-list.json', extra);
  console.log(JSON.stringify(extra, null, 1));
} finally {
  cdp.close();
  // keep the tab open for later stages? No — each stage opens fresh. Close it.
  await closeTarget(cdp.targetId).catch(() => {});
}
