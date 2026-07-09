import { CDP, sleep, closeTarget } from '../../../../tools/cdp-lib.mjs';

const cdp = await CDP.connect('new');
try {
  await cdp.setViewport(1920, 1080);
  await cdp.navigate('https://demo.washcentral.com/login.html', 1500);
  const info = await cdp.eval(`(() => {
    const el = document.querySelector('#qa-btn');
    return {
      exists: !!el,
      tag: el ? el.tagName : null,
      text: el ? (el.textContent||'').trim() : null,
      visible: el ? (el.getBoundingClientRect().width > 0) : null,
      idsOnPage: [...document.querySelectorAll('[id]')].map(e => e.id).slice(0, 40)
    };
  })()`);
  console.log(JSON.stringify(info, null, 1));
  if (info.exists) {
    await cdp.click('#qa-btn');
    for (let i = 0; i < 10; i++) {
      await sleep(1000);
      const st = await cdp.eval('({ path: location.pathname, body: (document.body.innerText||"").replace(/\\s+/g," ").slice(0, 300) })');
      console.log(i + 1, JSON.stringify(st));
      if (!/login\.html/.test(st.path)) break;
    }
  }
} finally {
  try { await closeTarget(cdp.targetId); } catch {}
  cdp.close();
}
