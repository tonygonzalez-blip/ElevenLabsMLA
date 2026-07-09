// Probe stage 4: inspect #qa-btn visibility chain and handler (no credential values logged)
import { CDP, sleep } from '../../../../tools/cdp-lib.mjs';

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await cdp.navigate('https://demo.washcentral.com/login.html', 1200);

const info = await cdp.eval(`(() => {
  const e = document.querySelector('#qa-btn');
  if (!e) return null;
  const chain = [];
  let n = e;
  while (n && n !== document.body) {
    const s = getComputedStyle(n);
    chain.push({ tag: n.tagName, id: n.id || null, cls: (n.className||'').toString().slice(0,80), display: s.display, visibility: s.visibility, opacity: s.opacity });
    n = n.parentElement;
  }
  return { onclick: (e.getAttribute('onclick')||'').slice(0,200), chain };
})()`);
console.log(JSON.stringify(info, null, 1));

// look for the script that wires qa-btn
const wiring = await cdp.eval(`(() => {
  const out = [];
  for (const s of document.querySelectorAll('script:not([src])')) {
    const t = s.textContent || '';
    let i = t.indexOf('qa-btn');
    while (i !== -1) { out.push(t.slice(Math.max(0, i - 300), i + 300).replace(/\\s+/g,' ')); i = t.indexOf('qa-btn', i + 1); }
  }
  return out.slice(0, 6);
})()`);
console.log('WIRING:', JSON.stringify(wiring, null, 1));
cdp.close();
