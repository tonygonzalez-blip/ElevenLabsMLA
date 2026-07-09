// Retry the House Accounts list rows (read-only) — the records fetch failed on the first walk.
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS, closeTarget } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const DIR = path.dirname(fileURLToPath(import.meta.url));

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
let list = await gotoPage(cdp, 'https://demo.washcentral.com/crm-house-accounts.html', 2500);
for (let i = 0; i < 6; i++) {
  await sleep(2000); await dismissIdle(cdp);
  list = await cdp.eval(DIGEST_JS);
  if (list.firstRows.length && !/Couldn/.test(list.firstRows[0])) break;
  console.log('attempt', i, '->', (list.firstRows[0] || 'no rows').slice(0, 80));
}
console.log('FINAL firstRows:', list.firstRows);
if (list.firstRows.length && !/Couldn/.test(list.firstRows[0])) {
  fs.writeFileSync(path.join(DIR, 'digest-list-retry.json'), JSON.stringify(list, null, 1));
  fs.writeFileSync(path.join(DIR, 'list-retry-innertext.txt'), await cdp.eval('document.body.innerText'));
  await cdp.screenshot(path.join(DIR, '01b-house-accounts-list-rows.png'));
  console.log('ROWS LOADED');
}
try { await closeTarget(cdp.targetId); } catch {}
cdp.close();
