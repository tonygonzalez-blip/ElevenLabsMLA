import { CDP, sleep } from '../../../../tools/cdp-lib.mjs';
import { closeTarget } from '../../../../tools/cdp-lib.mjs';

const cdp = await CDP.connect('new');
try {
  await cdp.setViewport(1920, 1080);
  await cdp.navigate('https://demo.washcentral.com/login.html', 1200);
  const info = await cdp.eval(`(() => {
    const qa = document.querySelector('#qa-btn');
    const chain = [];
    let n = qa;
    while (n && n !== document.body) {
      const s = getComputedStyle(n);
      chain.push({ tag: n.tagName, id: n.id, cls: (n.className||'').toString().slice(0,60), display: s.display, vis: s.visibility, op: s.opacity });
      n = n.parentElement;
    }
    // look for inline handler or script hints
    const scripts = [...document.querySelectorAll('script')].map(s => s.textContent || '').join('\\n');
    const qaIdx = scripts.indexOf('qa-btn');
    return {
      chain,
      onclickAttr: qa.getAttribute('onclick'),
      scriptAround: qaIdx >= 0 ? scripts.slice(Math.max(0, qaIdx - 600), qaIdx + 900) : null
    };
  })()`);
  console.log(JSON.stringify(info, null, 1));
} finally {
  cdp.close(); try { await closeTarget(cdp.targetId); } catch {}
}
