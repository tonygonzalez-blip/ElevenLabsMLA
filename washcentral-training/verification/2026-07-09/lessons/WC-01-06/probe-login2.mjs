// probe-login2.mjs — deeper inspection of the login QA flow (read-only; never credentials)
import { CDP, sleep } from '../../../../tools/cdp-lib.mjs';

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await cdp.navigate('https://demo.washcentral.com/login.html', 1500);

const state = await cdp.eval(`(() => {
  const el = id => document.getElementById(id);
  const style = id => { const e = el(id); if (!e) return null; const s = getComputedStyle(e); return { display: s.display, visibility: s.visibility, opacity: s.opacity, rect: e.getBoundingClientRect().toJSON() }; };
  return {
    qaWrap: style('qa-wrap'),
    qaBtn: style('qa-btn'),
    mfaStep: style('mfa-step'),
    qaWrapHTML: el('qa-wrap') ? el('qa-wrap').outerHTML.slice(0, 600) : null
  };
})()`);
console.log(JSON.stringify(state, null, 1));

// Try dispatching a real click regardless of visibility, then watch page state
await cdp.eval(`document.getElementById('qa-btn') && document.getElementById('qa-btn').click()`);
await sleep(1500);
const after = await cdp.eval(`(() => {
  const el = id => document.getElementById(id);
  const vis = e => e && (r => r.width>0 && r.height>0)(e.getBoundingClientRect());
  return {
    url: location.pathname,
    mfaVisible: vis(el('mfa-step')),
    mfaHeading: el('mfa-heading') ? el('mfa-heading').textContent.trim() : null,
    mfaSub: el('mfa-sub') ? el('mfa-sub').textContent.trim() : null,
    mfaDemoBoxVisible: vis(el('mfa-demo-box')),
    mfaDemoText: el('mfa-demo-box') ? el('mfa-demo-box').textContent.trim().replace(/\\s+/g,' ') : null,
    loginFormVisible: vis(el('loginForm')),
    errorText: el('lp-error') ? el('lp-error').textContent.trim() : null
  };
})()`);
console.log(JSON.stringify(after, null, 1));
cdp.close();
