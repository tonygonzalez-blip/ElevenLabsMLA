import { CDP, sleep, closeTarget } from '../../../../tools/cdp-lib.mjs';
const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
try {
  await cdp.navigate('https://demo.washcentral.com/login.html', 1500);
  await cdp.click('#qa-btn');
  for (let i = 0; i < 12; i++) {
    await sleep(1000);
    const st = await cdp.eval(`({u: location.href, modal: [...document.querySelectorAll('[class*="modal"],[role="dialog"]')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&r.height>0;}).map(e=>(e.textContent||'').trim().replace(/\s+/g,' ').slice(0,150)), store: Object.keys(localStorage).join(',')})`).catch(e=>({err:e.message}));
    console.log(i, JSON.stringify(st));
    if (st.u && !st.u.includes('login')) break;
  }
} finally { try { await closeTarget(cdp.targetId); } catch {} cdp.close(); }
