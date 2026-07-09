// walk-wc-00-01-login.mjs — verify the sign-in page's three credential fields (read-only; nothing typed).
// Recovery back to a signed-in state via the demo's built-in quick-access button (#qa-btn), per brief.
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS, closeTarget } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';

const DIR = 'C:/Users/tonyg/Micrologic Claude/Projects/ElevenLabsMLA/washcentral-training/verification/2026-07-09/lessons/WC-00-01';
const save = (name, obj) => fs.writeFileSync(`${DIR}/${name}`, JSON.stringify(obj, null, 2));

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);

const d = await gotoPage(cdp, 'https://demo.washcentral.com/login.html');
save('digest-login.json', d);
await cdp.screenshot(`${DIR}/04-login-page.png`);
console.log('login:', d.docTitle, '| labels:', d.labels, '| placeholders:', d.inputPlaceholders, '| buttons:', d.buttons);

// Restore a signed-in state via the demo's quick-access entry (never type credentials).
await cdp.click('#qa-btn');
await sleep(1500);
await dismissIdle(cdp);
const d2 = await cdp.eval(DIGEST_JS);
console.log('after qa-btn:', d2.url, '|', d2.docTitle);

cdp.close();
await closeTarget(cdp.targetId);
console.log('DONE');
