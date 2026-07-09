// probe-auth.mjs — read the auth-gate logic in command-center.html (read-only fetch)
import { CDP } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';

const cdp = await CDP.connect('new');
await cdp.navigate('https://demo.washcentral.com/login.html', 1000);

const html = await cdp.eval(`fetch('command-center.html').then(r => r.text())`);
fs.writeFileSync('cc-raw.html', html);
// print snippets around auth/login references
const hits = [];
const re = /(auth|login|redirect|sessionStorage|localStorage)/gi;
let m;
while ((m = re.exec(html)) && hits.length < 60) {
  hits.push({ idx: m.index, ctx: html.slice(Math.max(0, m.index - 120), m.index + 180).replace(/\s+/g, ' ') });
}
// dedupe near-identical contexts
const seen = new Set();
for (const h of hits) {
  const key = h.ctx.slice(0, 80);
  if (seen.has(key)) continue;
  seen.add(key);
  console.log('@' + h.idx + ': ' + h.ctx + '\n---');
}
cdp.close();
