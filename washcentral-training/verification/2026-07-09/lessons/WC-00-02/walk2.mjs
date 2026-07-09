// WC-00-02 walk 2 — sanitize autofill before screenshot (no credentials in evidence),
// probe #qa-btn visibility, Sign In arrow, eye-toggle aria states; restore session via #qa-btn.
import { CDP, dismissIdle, sleep } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const save = (name, obj) => fs.writeFileSync(path.join(DIR, name), JSON.stringify(obj, null, 2));

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await cdp.navigate('https://demo.washcentral.com/login.html', 1500);

// Clear any browser-remembered values so no credential appears in evidence (not typing; removing).
await cdp.eval(`(() => {
  for (const id of ['lp-username','lp-password','lp-code']) { const el = document.getElementById(id); if (el) el.value = ''; }
  return true;
})()`);
await sleep(300);

const probes = await cdp.eval(`(() => {
  const vis = el => { if (!el) return null; const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return { w: r.width, h: r.height, top: r.top, left: r.left, display: s.display, visibility: s.visibility, opacity: s.opacity }; };
  const qa = document.getElementById('qa-btn');
  const signin = document.querySelector('button.lp-btn[type=submit], .lp-btn');
  const after = signin ? getComputedStyle(signin, '::after').content : null;
  const arrowSpan = signin ? [...signin.querySelectorAll('span, i, svg')].map(x => (x.textContent||'').trim() || x.tagName) : [];
  const eye = document.getElementById('lp-pw-btn') || document.querySelector('.lp-pw-btn');
  const remember = [...document.querySelectorAll('input[type=checkbox]')].map(c => ({ checked: c.checked }));
  const fp = [...document.querySelectorAll('a')].map(a => (a.textContent||'').trim()).filter(t => /forgot/i.test(t));
  const small = [...document.querySelectorAll('div, p, span')].map(e => (e.textContent||'').trim()).filter(t => /^v\\d|Powered by/i.test(t)).slice(0,6);
  return { qaVisible: vis(qa), qaText: qa ? (qa.textContent||'').trim() : null,
    signInText: signin ? (signin.textContent||'').trim() : null, signInAfterContent: after, arrowSpan,
    eyeAria: eye ? eye.getAttribute('aria-label') : null, remember, forgotLink: fp, smallPrint: small };
})()`);

// Eye toggle aria flip (empty field; observe aria-label change), then restore.
const eyeFlip = await cdp.eval(`(() => {
  const eye = document.querySelector('.lp-pw-btn'); const pw = document.getElementById('lp-password');
  const before = { aria: eye.getAttribute('aria-label'), type: pw.type };
  eye.click();
  const mid = { aria: eye.getAttribute('aria-label'), type: pw.type };
  eye.click();
  const after = { aria: eye.getAttribute('aria-label'), type: pw.type };
  return { before, mid, after };
})()`);
save('probes-login.json', { probes, eyeFlip });

await cdp.screenshot(path.join(DIR, '01-login-anatomy.png')); // sanitized overwrite

// Restore session: demo quick-access entry.
await cdp.click('#qa-btn');
await sleep(2200);
await dismissIdle(cdp);
await sleep(400);
const landing = await cdp.eval('location.href');
const avatars = await cdp.eval(`(() => {
  const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const headerAv = [...document.querySelectorAll('header [class*="avatar"], [class*="topbar"] [class*="avatar"], [class*="header"] [class*="avatar"]')].filter(vis).map(e => ({ text: (e.textContent||'').trim(), cls: e.className, rect: e.getBoundingClientRect().left }));
  const railAv = [...document.querySelectorAll('[class*="rail-avatar"]')].filter(vis).map(e => ({ text: (e.textContent||'').trim(), cls: e.className }));
  return { headerAv, railAv };
})()`);
save('avatars-post-qa.json', { landing, avatars });
await cdp.screenshot(path.join(DIR, '03-post-qa-landing.png')); // refresh landing evidence

console.log(JSON.stringify({ probes, eyeFlip, landing, avatars }, null, 2));
cdp.close();
