import { CDP, gotoPage, dismissIdle, sleep } from '../../../../tools/cdp-lib.mjs';
const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await gotoPage(cdp, 'https://demo.washcentral.com/login.html', 1200);
await cdp.click('#qa-btn');
await sleep(1200);
const panel = await cdp.eval(`(() => {
  const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const links = [...document.querySelectorAll('a[href], button')].filter(vis)
    .map(e => ({ t: (e.textContent||'').trim().replace(/\\s+/g,' ').slice(0,80), href: e.getAttribute('href')||null, id: e.id||null }))
    .filter(x => x.t);
  return links.slice(0, 40);
})()`);
console.log(JSON.stringify(panel, null, 1));
cdp.close();
