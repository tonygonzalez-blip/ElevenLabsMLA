// Observe what wcQuickAccess() does on login.html (demo built-in quick access; no credentials typed).
import { CDP, sleep } from '../../../../tools/cdp-lib.mjs';

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await cdp.navigate('https://demo.washcentral.com/login.html', 1000);

const snap = async (tag) => {
  const s = await cdp.eval(`(() => {
    const vis = el => !!el && el.getBoundingClientRect().width > 0;
    return {
      path: location.pathname,
      mfaVisible: vis(document.querySelector('#mfa-step')),
      mfaDemoCode: (document.querySelector('#mfa-demo-code')?.textContent || '').trim() || null,
      mfaHeading: (document.querySelector('#mfa-heading')?.textContent || '').trim() || null,
      error: (document.querySelector('#lp-error')?.textContent || '').trim() || null
    };
  })()`);
  console.log(tag, JSON.stringify(s));
  return s;
};

await snap('before:');
await cdp.eval(`wcQuickAccess()`);
await sleep(1500);
let s = await snap('after qa:');

// If the demo shows an on-screen MFA code, enter it via the demo's own input and verify.
if (s.mfaVisible && s.mfaDemoCode) {
  const code = s.mfaDemoCode;
  console.log('demo MFA code shown on screen (demo-provided, not a credential):', code);
  await cdp.eval(`(() => {
    const inp = document.querySelector('#mfa-real-input');
    if (!inp) return 'no input';
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    setter.call(inp, ${JSON.stringify('__CODE__')});
    inp.dispatchEvent(new Event('input', { bubbles: true }));
    return inp.value;
  })()`.replace('__CODE__', code));
  await sleep(500);
  await cdp.eval(`(() => { const b = document.querySelector('#mfa-verify-btn'); if (b) b.click(); return true; })()`);
  for (let i = 0; i < 8; i++) {
    await sleep(1000);
    const p = await cdp.eval(`location.pathname`);
    console.log(`t+${i + 1}s:`, p);
    if (!/login\.html/.test(p)) break;
  }
} else if (!/login\.html/.test(s.path)) {
  console.log('quick access signed in directly');
}
cdp.close();
