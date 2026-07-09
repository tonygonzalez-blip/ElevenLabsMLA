import { CDP, dismissIdle, sleep } from '../../../../tools/cdp-lib.mjs';
import { closeTarget } from '../../../../tools/cdp-lib.mjs';

const cdp = await CDP.connect('new');
try {
  await cdp.setViewport(1920, 1080);
  await cdp.navigate('https://demo.washcentral.com/login.html', 1200);
  const info = await cdp.eval(`(() => {
    const qa = document.querySelector('#qa-btn');
    return {
      url: location.href,
      qaExists: !!qa,
      qaText: qa ? (qa.textContent||'').trim() : null,
      qaVisible: qa ? (qa.getBoundingClientRect().width > 0) : null,
      buttons: [...document.querySelectorAll('button, a.btn, [role=button]')].map(b => ((b.textContent||'').trim() + ' #' + (b.id||''))).slice(0, 20)
    };
  })()`);
  console.log(JSON.stringify(info, null, 1));
  if (info.qaExists) {
    await cdp.click('#qa-btn');
    await sleep(2500);
    for (let i = 0; i < 6; i++) {
      const href = await cdp.eval('location.href');
      console.log('after qa click, url =', href);
      if (!href.includes('login')) break;
      await sleep(1500);
    }
  }
} finally {
  cdp.close(); try { await closeTarget(cdp.targetId); } catch {}
}
