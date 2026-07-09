import { CDP, sleep, closeTarget } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';

const cdp = await CDP.connect('new');
try {
  await cdp.setViewport(1920, 1080);
  await cdp.navigate('https://demo.washcentral.com/settings.html', 1500);
  const dump = await cdp.eval(`(() => {
    const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    const out = [];
    for (const el of document.querySelectorAll('button, a, [role="button"], li, summary, [class*="group"], [class*="cat"], [class*="accordion"], [class*="collaps"]')) {
      if (!vis(el)) continue;
      const t = (el.textContent || '').trim().replace(/\\s+/g, ' ');
      if (!t || t.length > 80) continue;
      if (/security|automation|user level|general|analytics/i.test(t)) {
        out.push({ tag: el.tagName, cls: (el.className || '').toString().slice(0, 80), text: t, codes: [...t].slice(0,30).map(c => c.charCodeAt(0)) });
      }
    }
    return out.slice(0, 40);
  })()`);
  fs.writeFileSync('debug-sidebar.json', JSON.stringify(dump, null, 1));
  console.log(JSON.stringify(dump, null, 1).slice(0, 4000));
} finally {
  try { await closeTarget(cdp.targetId); } catch {}
  cdp.close();
}
