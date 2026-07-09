// Probe login.html for the demo quick-access entry (#qa-btn per brief). Read-only inspection.
import { CDP, dismissIdle, sleep } from '../../../../tools/cdp-lib.mjs';

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await cdp.navigate('https://demo.washcentral.com/login.html', 1500);

const probe = await cdp.eval(`(() => {
  const qa = document.querySelector('#qa-btn');
  const idsWithQa = [...document.querySelectorAll('[id*="qa" i]')].map(e => ({ id: e.id, tag: e.tagName, text: (e.textContent||'').trim().slice(0,60), visible: e.getBoundingClientRect().width > 0 }));
  const allButtons = [...document.querySelectorAll('button, a, [role=button]')].map(e => ({ tag: e.tagName, id: e.id || null, cls: (e.className||'').toString().slice(0,60), text: (e.textContent||'').trim().replace(/\\s+/g,' ').slice(0,60), visible: e.getBoundingClientRect().width > 0 }));
  return { qaExists: !!qa, qaInfo: qa ? { tag: qa.tagName, text: (qa.textContent||'').trim(), visible: qa.getBoundingClientRect().width > 0 } : null, idsWithQa, allButtons };
})()`);
console.log(JSON.stringify(probe, null, 1));

// If #qa-btn exists, click it and watch where we land.
if (probe.qaExists) {
  await cdp.click('#qa-btn');
  await sleep(3000);
  await dismissIdle(cdp);
  console.log('after click:', await cdp.eval('location.pathname'));
  await sleep(2000);
  console.log('after wait:', await cdp.eval('location.pathname'));
}
cdp.close();
