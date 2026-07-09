import { CDP, gotoPage, dismissIdle, sleep } from '../../../../tools/cdp-lib.mjs';
const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await gotoPage(cdp, 'https://demo.washcentral.com/login.html', 1200);
const q = await cdp.eval(`(() => {
  const el = document.querySelector('#qa-btn');
  return { exists: !!el, text: el ? (el.textContent||'').trim() : null, tag: el ? el.tagName : null };
})()`);
console.log('qa-btn:', JSON.stringify(q));
if (q.exists) {
  await cdp.click('#qa-btn');
  for (let i = 0; i < 8; i++) {
    await sleep(1000);
    const st = await cdp.eval(`({ url: location.pathname, snippet: (document.body.innerText||'').replace(/\\s+/g,' ').slice(0,200) })`);
    console.log(i, JSON.stringify(st));
    if (!/login\.html/.test(st.url)) break;
  }
}
cdp.close();
