// WC-00-02 walk 3 — restore session via #qa-btn (fresh load), confirm landing + avatar initials.
import { CDP, dismissIdle, sleep } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await cdp.navigate('https://demo.washcentral.com/login.html', 1500);
await cdp.click('#qa-btn');
await sleep(3500);
await dismissIdle(cdp);
await sleep(600);
let landing = await cdp.eval('location.href');
if (landing.includes('login.html')) { // one retry
  await cdp.click('#qa-btn');
  await sleep(4000);
  await dismissIdle(cdp);
  landing = await cdp.eval('location.href');
}
const avatars = await cdp.eval(`(() => {
  const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const all = [...document.querySelectorAll('[class*="avatar"]')].filter(vis).map(e => {
    const r = e.getBoundingClientRect();
    return { text: (e.textContent||'').trim().slice(0, 10), cls: String(e.className).slice(0, 60), x: Math.round(r.left), y: Math.round(r.top) };
  });
  return all;
})()`);
fs.writeFileSync(path.join(DIR, 'avatars-post-qa.json'), JSON.stringify({ landing, avatars }, null, 2));
await cdp.screenshot(path.join(DIR, '03-post-qa-landing.png'));
console.log(JSON.stringify({ landing, avatars }, null, 2));
cdp.close();
