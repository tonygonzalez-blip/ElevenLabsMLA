// Inspect login.html script source for the qa-btn wiring (read-only).
import { CDP, sleep } from '../../../../tools/cdp-lib.mjs';

const cdp = await CDP.connect('new');
await cdp.navigate('https://demo.washcentral.com/login.html', 1500);

const src = await cdp.eval(`(() => {
  const scripts = [...document.querySelectorAll('script')].map(s => s.textContent || '');
  const hits = [];
  for (const s of scripts) {
    let idx = 0;
    while ((idx = s.indexOf('qa-', idx)) !== -1) {
      hits.push(s.slice(Math.max(0, idx - 400), idx + 400));
      idx += 400;
    }
  }
  return hits.slice(0, 8);
})()`);
console.log(JSON.stringify(src, null, 1));
cdp.close();
