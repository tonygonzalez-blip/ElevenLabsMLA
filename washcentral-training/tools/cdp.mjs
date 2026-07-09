// cdp.mjs — CLI for quick CDP operations against the debug Chrome (port 9222).
// Usage:
//   node cdp.mjs tabs
//   node cdp.mjs nav <url> [tabMatch]
//   node cdp.mjs eval "<js>" [tabMatch]
//   node cdp.mjs shot <outPath> [tabMatch]
//   node cdp.mjs digest [tabMatch]
//   node cdp.mjs click-text "<visible text>" [tabMatch]
//   node cdp.mjs signin            — demo quick-access entry (no credentials involved)

import { CDP, listTargets, DIGEST_JS, sleep } from './cdp-lib.mjs';

const [cmd, ...args] = process.argv.slice(2);

async function main() {
  if (cmd === 'tabs') {
    for (const t of await listTargets()) console.log(t.id, t.url);
    return;
  }
  const tabArg = { nav: args[1], eval: args[1], shot: args[1], digest: args[0], 'click-text': args[1] }[cmd] || 'first';
  const cdp = await CDP.connect(tabArg || 'first');
  try {
    if (cmd === 'nav') { await cdp.navigate(args[0]); console.log(await cdp.eval('location.href')); }
    else if (cmd === 'eval') { console.log(JSON.stringify(await cdp.eval(args[0]), null, 2)); }
    else if (cmd === 'shot') { await cdp.setViewport(); await sleep(300); console.log(await cdp.screenshot(args[0])); }
    else if (cmd === 'digest') { console.log(JSON.stringify(await cdp.eval(DIGEST_JS), null, 2)); }
    else if (cmd === 'click-text') { await cdp.clickByText(args[0]); await sleep(600); console.log('clicked; now at', await cdp.eval('location.href')); }
    else if (cmd === 'signin') {
      await cdp.navigate('https://demo.washcentral.com/login.html');
      const has = await cdp.eval(`!!document.querySelector('#qa-btn')`);
      if (!has) throw new Error('quick-access button not found on login page');
      await cdp.click('#qa-btn');
      await sleep(2500);
      const state = await cdp.eval(`({ href: location.href, auth: localStorage.getItem('washcentral-auth-v1') })`);
      console.log(JSON.stringify(state));
    }
    else { console.error('unknown command'); process.exit(1); }
  } finally { cdp.close(); }
}

main().catch(e => { console.error(e.message); process.exit(1); });
