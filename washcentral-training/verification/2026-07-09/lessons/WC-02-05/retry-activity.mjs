// Retry the detail Activity tab (read-only) — it showed "Loading…" on the first pass.
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS, closeTarget } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const DIR = path.dirname(fileURLToPath(import.meta.url));

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await gotoPage(cdp, 'https://demo.washcentral.com/crm-house-account-detail.html', 2000);
const clickTab = async (name) => cdp.eval(`(() => {
  const vis = el => { const r = el.getBoundingClientRect(); return r.width>0 && r.height>0; };
  const cands = [...document.querySelectorAll('[role="tab"], [class*="tab"] button, [class*="tabs"] button, [class*="tab"] a, [class*="tabs"] li, .tab')];
  const el = cands.find(e => vis(e) && (e.textContent||'').trim().replace(/\\s+/g,' ').toLowerCase() === ${JSON.stringify(name.toLowerCase())});
  if (!el) return false; el.click(); return true;
})()`);
let clicked = false;
for (let i = 0; i < 6 && !clicked; i++) {
  await sleep(1500); await dismissIdle(cdp);
  clicked = await clickTab('Activity');
  console.log('click attempt', i, '->', clicked);
}
if (!clicked) { console.log('ACTIVITY TAB NEVER CLICKABLE'); try { await closeTarget(cdp.targetId); } catch {}; cdp.close(); process.exit(0); }
for (let i = 0; i < 8; i++) {
  await sleep(2000); await dismissIdle(cdp);
  const txt = await cdp.eval('document.body.innerText');
  if (/Activity Feed/.test(txt) && !/Activity Feed\s*\n\s*Loading/.test(txt)) {
    fs.writeFileSync(path.join(DIR, 'detail-tab-activity-innertext-retry.txt'), txt);
    fs.writeFileSync(path.join(DIR, 'digest-detail-tab-activity-retry.json'), JSON.stringify(await cdp.eval(DIGEST_JS), null, 1));
    await cdp.screenshot(path.join(DIR, '07-detail-activity.png'));
    console.log('ACTIVITY LOADED');
    break;
  }
  console.log('attempt', i, 'still loading');
}
try { await closeTarget(cdp.targetId); } catch {}
cdp.close();
