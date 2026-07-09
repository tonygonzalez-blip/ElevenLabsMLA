// walk-wc-00-01.mjs — minimal read-only verification for lesson WC-00-01 (workstation prerequisites).
// Doc-only lesson: this walk only confirms (1) the platform is a plain web app in the browser,
// (2) the in-platform Knowledge Base exists under IT & Support, (3) the Help Desk (Zoho) sidebar item.
// Navigation + digest + screenshot only. Nothing clicked outside the sidebar allowlist.
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS, closeTarget } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';

const DIR = 'C:/Users/tonyg/Micrologic Claude/Projects/ElevenLabsMLA/washcentral-training/verification/2026-07-09/lessons/WC-00-01';
const save = (name, obj) => fs.writeFileSync(`${DIR}/${name}`, JSON.stringify(obj, null, 2));

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);

// 1. Command Center — proves the platform runs in a plain browser tab (signed-in state).
const d1 = await gotoPage(cdp, 'https://demo.washcentral.com/command-center.html');
save('digest-command-center.json', d1);
await cdp.screenshot(`${DIR}/01-command-center.png`);
console.log('command-center:', d1.docTitle, '| h1:', d1.h1);

// 2. IT & Support module home — read the secondary sidebar (Knowledge Base, Help Desk (Zoho)).
const d2 = await gotoPage(cdp, 'https://demo.washcentral.com/support-tickets.html');
save('digest-support-tickets.json', d2);
await cdp.screenshot(`${DIR}/02-it-support-sidebar.png`);
console.log('support-tickets sidebar:', d2.sidebarItems);

// 3. Knowledge Base page itself (sidebar navigation — allowlisted).
await cdp.clickByText('Knowledge Base', '[class*="sidebar"] a, [class*="side-nav"] a, [class*="menu"] a, a');
await sleep(1200);
await dismissIdle(cdp);
const d3 = await cdp.eval(DIGEST_JS);
save('digest-knowledge-base.json', d3);
await cdp.screenshot(`${DIR}/03-knowledge-base.png`);
console.log('kb page:', d3.url, '|', d3.docTitle, '| h1:', d3.h1, '| h2:', d3.h2?.slice(0, 6));

cdp.close();
await closeTarget(cdp.targetId);
console.log('DONE');
