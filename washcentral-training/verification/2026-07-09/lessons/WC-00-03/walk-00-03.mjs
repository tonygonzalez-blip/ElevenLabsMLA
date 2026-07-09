// WC-00-03 live walk — account menu & personal setup (read-only; Dark Mode toggled on AND back off per walk instructions)
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS, closeTarget } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const save = (name, obj) => fs.writeFileSync(path.join(DIR, name), JSON.stringify(obj, null, 1));

// Capture the account dropdown/menu state: items, header text, theme
const MENU_JS = `(() => {
  const vis = el => { const r = el.getBoundingClientRect(); if (r.width <= 0 || r.height <= 0) return false; const s = getComputedStyle(el); return s.visibility !== 'hidden' && s.display !== 'none' && s.opacity !== '0'; };
  const txt = el => (el.textContent || '').trim().replace(/\\s+/g, ' ');
  // find candidate dropdown containers
  const cands = [...document.querySelectorAll('[class*="dropdown"], [class*="menu"], [class*="popover"], [class*="account"]')].filter(vis);
  const out = cands.map(c => ({
    cls: c.className.toString().slice(0, 120),
    items: [...c.querySelectorAll('a, button, [role="menuitem"], li, [class*="item"]')].filter(vis).map(e => ({ t: txt(e), tag: e.tagName, href: e.getAttribute('href') || null })).filter(x => x.t && x.t.length < 80),
    text: txt(c).slice(0, 400)
  })).filter(c => c.items.length || c.text);
  return {
    theme: document.documentElement.getAttribute('data-theme') || document.body.getAttribute('data-theme') || document.documentElement.className.toString() + ' | body:' + document.body.className.toString(),
    bodyBg: getComputedStyle(document.body).backgroundColor,
    url: location.pathname,
    menus: out.slice(0, 12)
  };
})()`;

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);

// Step: land on Command Center (sign in via quick-access if redirected to login)
let d0 = await gotoPage(cdp, 'https://demo.washcentral.com/command-center.html');
if (d0.url.includes('login')) {
  console.log('redirected to login — using #qa-btn quick access');
  await cdp.click('#qa-btn');
  await sleep(1500); await dismissIdle(cdp);
  d0 = await gotoPage(cdp, 'https://demo.washcentral.com/command-center.html');
}
save('digest-01-command-center.json', d0);
await cdp.screenshot(path.join(DIR, '01-command-center-baseline.png'));
console.log('landed:', d0.docTitle);

// Step: click the avatar (initials button "MG", top-right)
await cdp.clickByText('MG', 'button, [role=button], [class*="avatar"]');
await sleep(700); await dismissIdle(cdp);
const m1 = await cdp.eval(MENU_JS);
save('menu-01-open.json', m1);
await cdp.screenshot(path.join(DIR, '02-account-menu-open.png'));
console.log('menu after avatar click:', JSON.stringify(m1.menus.map(m => m.items.map(i => i.t)), null, 1).slice(0, 2000));
console.log('theme:', m1.theme, '| bodyBg:', m1.bodyBg);
