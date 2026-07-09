// walk-1.mjs — WC-01-06 Command Center deep-dive verification walk (read-only)
// Run from the evidence dir: node walk-1.mjs
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';

const save = (name, data) => fs.writeFileSync(name, typeof data === 'string' ? data : JSON.stringify(data, null, 1));

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);

let digest = await gotoPage(cdp, 'https://demo.washcentral.com/command-center.html', 1500);
if (digest.url.includes('login')) {
  // signed out: use the demo's built-in quick-access entry (per brief; never type credentials)
  await cdp.navigate('https://demo.washcentral.com/login.html', 1200);
  await cdp.click('#qa-btn');
  await sleep(2500);
  digest = await gotoPage(cdp, 'https://demo.washcentral.com/command-center.html', 1500);
  if (digest.url.includes('login')) throw new Error('QA login failed — still on login.html');
}
save('cc-digest-initial.json', digest);
await dismissIdle(cdp);
await cdp.screenshot('cc-01-top.png');

// Full visible text
const fullText = await cdp.eval(`document.body.innerText`);
save('cc-fulltext.txt', fullText);

// All anchors with hrefs + text (deep-link discovery, no clicking)
const links = await cdp.eval(`(() => {
  const txt = el => (el.textContent||'').trim().replace(/\\s+/g,' ');
  return [...document.querySelectorAll('a[href]')].map(a => ({
    text: txt(a).slice(0,140), href: a.getAttribute('href'), target: a.getAttribute('target')||null,
    vis: (r => r.width>0 && r.height>0)(a.getBoundingClientRect())
  }));
})()`);
save('cc-links.json', links);

// Panel/section structure: headers + their classes
const structure = await cdp.eval(`(() => {
  const txt = el => (el.textContent||'').trim().replace(/\\s+/g,' ');
  const heads = [...document.querySelectorAll('h1,h2,h3,h4,[class*="section-title"],[class*="panel-title"],[class*="card-title"]')]
    .filter(el => { const r = el.getBoundingClientRect(); return r.width>0; })
    .map(el => ({ tag: el.tagName, cls: el.className && el.className.toString().slice(0,80), text: txt(el).slice(0,160) }));
  return heads;
})()`);
save('cc-structure.json', structure);

// Toggle button states (Full USA / Active States)
const toggleState = await cdp.eval(`(() => {
  const txt = el => (el.textContent||'').trim();
  return [...document.querySelectorAll('button')].filter(b => /full usa|active states/i.test(b.textContent||''))
    .map(b => ({ text: txt(b), cls: b.className.toString(), pressed: b.getAttribute('aria-pressed'), disabled: b.disabled }));
})()`);
save('cc-toggle-initial.json', toggleState);

// Scroll through panels, screenshotting each
const scrollTo = async (needle, name) => {
  const ok = await cdp.eval(`(() => {
    const all = [...document.querySelectorAll('h1,h2,h3,h4,div,span')];
    const el = all.find(e => (e.textContent||'').trim().replace(/\\s+/g,' ').toUpperCase().startsWith(${JSON.stringify(needle)}) && e.children.length < 6);
    if (!el) return false;
    el.scrollIntoView({ block: 'start' }); window.scrollBy(0, -80); return true;
  })()`);
  await sleep(700); await dismissIdle(cdp);
  await cdp.screenshot(name);
  return ok;
};

console.log('PI:', await scrollTo('PRIORITY INTELLIGENCE', 'cc-02-priority-intelligence.png'));
console.log('AO:', await scrollTo('ACTION OWNERSHIP', 'cc-03-action-ownership.png'));
console.log('MAIA:', await scrollTo('ASK MAIA', 'cc-04-ask-maia.png'));

// Extract Priority Intelligence groups + rows in DOM order
const pi = await cdp.eval(`(() => {
  const txt = el => (el.textContent||'').trim().replace(/\\s+/g,' ');
  // find the group headers CRITICAL / HIGH PRIORITY / REVENUE PLAYS / AUTOMATIONS and rows between
  const body = document.body.innerText;
  const idx = body.indexOf('PRIORITY INTELLIGENCE');
  const end = body.indexOf('ACTION OWNERSHIP');
  return body.slice(idx, end > idx ? end : idx + 4000);
})()`);
save('cc-pi-text.txt', pi);

const ao = await cdp.eval(`(() => {
  const body = document.body.innerText;
  const idx = body.indexOf('ACTION OWNERSHIP');
  const end = body.indexOf('ASK MAIA');
  return body.slice(idx, end > idx ? end : idx + 4000);
})()`);
save('cc-ao-text.txt', ao);

const maia = await cdp.eval(`(() => {
  const body = document.body.innerText;
  const idx = body.indexOf('ASK MAIA');
  return idx >= 0 ? body.slice(idx, idx + 2500) : 'NOT FOUND';
})()`);
save('cc-maia-text.txt', maia);

// Back to top, then click the map toggle: Active States (view-only), screenshot, then Full USA back
await cdp.eval(`window.scrollTo(0,0)`); await sleep(400);
await cdp.eval(`(() => {
  const el = [...document.querySelectorAll('h1,h2,h3,h4,div,span')].find(e => (e.textContent||'').trim().toUpperCase().startsWith('LOCATION NETWORK') && e.children.length < 6);
  if (el) { el.scrollIntoView({block:'start'}); window.scrollBy(0,-80); }
})()`);
await sleep(500); await dismissIdle(cdp);
await cdp.screenshot('cc-05-map-default.png');

await cdp.clickByText('Active States');
await sleep(900); await dismissIdle(cdp);
const toggleAfter = await cdp.eval(`(() => {
  return [...document.querySelectorAll('button')].filter(b => /full usa|active states/i.test(b.textContent||''))
    .map(b => ({ text: (b.textContent||'').trim(), cls: b.className.toString() }));
})()`);
save('cc-toggle-after-active.json', toggleAfter);
const mapTextActive = await cdp.eval(`(() => {
  const body = document.body.innerText;
  const idx = body.indexOf('LOCATION NETWORK');
  const end = body.indexOf('PRIORITY INTELLIGENCE');
  return body.slice(idx, end > idx ? end : idx + 3000);
})()`);
save('cc-map-active-states.txt', mapTextActive);
await cdp.screenshot('cc-06-map-active-states.png');

await cdp.clickByText('Full USA');
await sleep(900); await dismissIdle(cdp);
const toggleBack = await cdp.eval(`(() => {
  return [...document.querySelectorAll('button')].filter(b => /full usa|active states/i.test(b.textContent||''))
    .map(b => ({ text: (b.textContent||'').trim(), cls: b.className.toString() }));
})()`);
save('cc-toggle-back-fullusa.json', toggleBack);
await cdp.screenshot('cc-07-map-back-full-usa.png');

console.log('walk-1 done');
cdp.close();
