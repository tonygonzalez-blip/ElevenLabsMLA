// Inspect login.html for the quick-access entry (#qa-btn). Read-only probe.
import { CDP, sleep } from '../../../../tools/cdp-lib.mjs';

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await cdp.navigate('https://demo.washcentral.com/login.html', 1000);

const info = await cdp.eval(`(() => {
  const el = document.querySelector('#qa-btn');
  const ids = [...document.querySelectorAll('[id]')].map(e => e.id).slice(0, 40);
  return {
    qaBtnExists: !!el,
    qaBtnTag: el ? el.tagName : null,
    qaBtnText: el ? (el.textContent||'').trim() : null,
    qaBtnVisible: el ? (el.getBoundingClientRect().width > 0) : null,
    qaBtnOnclick: el ? (el.getAttribute('onclick') || null) : null,
    ids
  };
})()`);
console.log(JSON.stringify(info, null, 1));

if (info.qaBtnExists) {
  await cdp.click('#qa-btn');
  for (let i = 0; i < 10; i++) {
    await sleep(1000);
    const p = await cdp.eval(`location.pathname`);
    console.log(`t+${i + 1}s:`, p);
    if (!/login\.html/.test(p)) break;
  }
}
cdp.close();
