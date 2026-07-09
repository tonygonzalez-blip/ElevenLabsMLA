// WC-00-02 walk — login.html anatomy (observe only; NO typing; restore session via #qa-btn at end).
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const save = (name, obj) => fs.writeFileSync(path.join(DIR, name), JSON.stringify(obj, null, 2));

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);

// 1. Login page anatomy
const loginDigest = await gotoPage(cdp, 'https://demo.washcentral.com/login.html', 1200);
save('digest-login.json', loginDigest);
await cdp.screenshot(path.join(DIR, '01-login-anatomy.png'));

// 2. Detailed anatomy extraction (read-only DOM inspection)
const anatomy = await cdp.eval(`(() => {
  const txt = el => (el ? (el.textContent || '').trim().replace(/\\s+/g, ' ') : null);
  const inputs = [...document.querySelectorAll('input')].map(i => ({
    id: i.id, type: i.type, name: i.name, placeholder: i.placeholder,
    labelText: (() => { const l = i.labels && i.labels[0] ? i.labels[0] : document.querySelector('label[for="' + i.id + '"]'); return l ? (l.textContent || '').trim().replace(/\\s+/g,' ') : null; })(),
    autocomplete: i.getAttribute('autocomplete'), value: i.value ? '(non-empty)' : ''
  }));
  const links = [...document.querySelectorAll('a')].map(a => ({ text: txt(a), href: a.getAttribute('href') }));
  const buttons = [...document.querySelectorAll('button, [role=button], input[type=submit]')].map(b => ({
    id: b.id, text: txt(b) || b.getAttribute('aria-label'), type: b.type || null, title: b.getAttribute('title'), aria: b.getAttribute('aria-label'), cls: b.className
  }));
  const logo = document.querySelector('[class*="logo"], img[alt]');
  const qa = document.querySelector('#qa-btn');
  const eye = document.querySelector('[class*="eye"], [class*="toggle-password"], [class*="show-password"], [aria-label*="password" i]');
  const headings = [...document.querySelectorAll('h1,h2,h3,h4')].map(h => ({ tag: h.tagName, text: txt(h) }));
  const cards = [...document.querySelectorAll('[class*="card"], [class*="feature"]')].map(c => txt(c)).slice(0, 12);
  const checkboxLabels = [...document.querySelectorAll('input[type=checkbox]')].map(c => {
    const l = c.closest('label') || (c.labels && c.labels[0]);
    return { id: c.id, label: l ? (l.textContent || '').trim().replace(/\\s+/g,' ') : null, checked: c.checked };
  });
  return { title: document.title, url: location.href,
    logo: logo ? { tag: logo.tagName, text: txt(logo), alt: logo.getAttribute && logo.getAttribute('alt') } : null,
    headings, inputs, checkboxLabels, links, buttons, cards,
    qaBtn: qa ? { id: qa.id, text: txt(qa), title: qa.getAttribute('title') } : null,
    eyeToggle: eye ? { tag: eye.tagName, cls: eye.className, aria: eye.getAttribute('aria-label'), title: eye.getAttribute('title'), text: txt(eye) } : null,
    bodyText: (document.body.innerText || '').replace(/\\s+/g, ' ').slice(0, 3000)
  };
})()`);
save('anatomy-login.json', anatomy);

// 3. Show-password eye toggle: click once, read input type, click again to restore (no typing).
const eyeSelectorProbe = await cdp.eval(`(() => {
  const pw = document.querySelector('input[type=password]');
  if (!pw) return { found: false };
  const wrap = pw.closest('div') || pw.parentElement;
  const btn = wrap ? wrap.querySelector('button, [role=button], span[class*="eye"], i, svg') : null;
  return { found: !!btn, pwId: pw.id, before: pw.type, btnDesc: btn ? { tag: btn.tagName, cls: btn.className && btn.className.baseVal ? btn.className.baseVal : btn.className, aria: btn.getAttribute && btn.getAttribute('aria-label'), title: btn.getAttribute && btn.getAttribute('title') } : null };
})()`);
let toggleResult = { probe: eyeSelectorProbe };
if (eyeSelectorProbe.found) {
  const after = await cdp.eval(`(() => {
    const pw = document.querySelector('#${eyeSelectorProbe.pwId}') || document.querySelector('input[type=password], input[type=text][id*="pass" i]');
    const wrap = pw.closest('div') || pw.parentElement;
    const btn = wrap.querySelector('button, [role=button], span[class*="eye"], i, svg');
    btn.click();
    return { afterFirstClick: pw.type };
  })()`);
  await sleep(400);
  await cdp.screenshot(path.join(DIR, '02-show-password-toggled.png'));
  const restored = await cdp.eval(`(() => {
    const pw = document.querySelector('#${eyeSelectorProbe.pwId}');
    const wrap = pw.closest('div') || pw.parentElement;
    const btn = wrap.querySelector('button, [role=button], span[class*="eye"], i, svg');
    btn.click();
    return { afterSecondClick: pw.type };
  })()`);
  toggleResult = { ...toggleResult, ...after, ...restored };
}
save('eye-toggle-result.json', toggleResult);

// 4. Root redirect check (session likely cleared by visiting login.html)
await cdp.navigate('https://demo.washcentral.com/', 1200);
const rootLanding = await cdp.eval('location.href');
save('root-redirect.json', { landedAt: rootLanding });

// 5. Restore session via #qa-btn (demo quick-access) and confirm landing + avatar initials
if (!rootLanding.includes('login.html')) {
  await cdp.navigate('https://demo.washcentral.com/login.html', 1200);
}
const qaInfo = await cdp.eval(`(() => { const b = document.querySelector('#qa-btn'); return b ? { text: (b.textContent||'').trim().replace(/\\s+/g,' '), title: b.getAttribute('title') } : null; })()`);
await cdp.click('#qa-btn');
await sleep(2000);
await dismissIdle(cdp);
const landing = await cdp.eval('location.href');
const avatar = await cdp.eval(`(() => {
  const cands = [...document.querySelectorAll('[class*="avatar"], [class*="account"], [class*="user-initials"], header [class*="initials"]')];
  const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const el = cands.find(vis);
  return el ? { text: (el.textContent || '').trim().replace(/\\s+/g,' ').slice(0, 40), cls: el.className } : null;
})()`);
const landingDigest = await cdp.eval(DIGEST_JS);
save('digest-post-qa-landing.json', { landing, qaInfo, avatar, digest: landingDigest });
await cdp.screenshot(path.join(DIR, '03-post-qa-landing.png'));

console.log(JSON.stringify({ loginUrl: loginDigest.url, rootLanding, landing, qaInfo, avatar, toggleResult }, null, 2));
cdp.close();
