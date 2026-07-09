import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS, closeTarget } from '../../../../tools/cdp-lib.mjs';
const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
try {
  await cdp.navigate('https://demo.washcentral.com/login.html', 1500);
  const probe = await cdp.eval(`(() => ({
    url: location.href,
    qa: !!document.querySelector('#qa-btn'),
    qaText: (document.querySelector('#qa-btn')||{}).textContent || null,
    btns: [...document.querySelectorAll('button, a')].map(b=>(b.textContent||'').trim().replace(/\s+/g,' ')).filter(Boolean).slice(0,20)
  }))()`);
  console.log(JSON.stringify(probe, null, 1));
  if (probe.qa) {
    await cdp.click('#qa-btn');
    await sleep(3000);
    console.log('after qa click:', await cdp.eval('location.href'));
    await cdp.navigate('https://demo.washcentral.com/crm-customers.html', 1500);
    await sleep(1000);
    console.log('crm url:', await cdp.eval('location.href'));
    console.log('kpi probe:', await cdp.eval(`(document.body.innerText||'').replace(/\s+/g,' ').slice(0,300)`));
  }
} finally { try { await closeTarget(cdp.targetId); } catch {} cdp.close(); }
