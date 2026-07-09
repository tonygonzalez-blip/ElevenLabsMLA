// probe-login.mjs — inspect login.html for the QA quick-access entry (no credentials ever)
import { CDP, sleep } from '../../../../tools/cdp-lib.mjs';

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await cdp.navigate('https://demo.washcentral.com/login.html', 1500);

const info = await cdp.eval(`(() => {
  const qa = document.querySelector('#qa-btn');
  return {
    url: location.pathname,
    qaExists: !!qa,
    qaVisible: qa ? (r => r.width>0 && r.height>0)(qa.getBoundingClientRect()) : null,
    qaText: qa ? (qa.textContent||'').trim() : null,
    idsOnPage: [...document.querySelectorAll('[id]')].map(e => e.id).slice(0, 40)
  };
})()`);
console.log(JSON.stringify(info, null, 1));

if (info.qaExists) {
  await cdp.click('#qa-btn');
  for (let i = 0; i < 10; i++) {
    await sleep(1000);
    const where = await cdp.eval('location.pathname');
    console.log('after qa click, t+' + (i+1) + 's:', where);
    if (!where.includes('login')) break;
  }
}
cdp.close();
