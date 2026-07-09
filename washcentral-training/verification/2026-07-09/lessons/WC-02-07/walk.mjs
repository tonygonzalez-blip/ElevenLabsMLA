// WC-02-07 Agent Console live walk — read-only per authoring brief.
// Digests the three panes, inspects the presence selector, opens/closes it without persisting.
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const save = (name, obj) => fs.writeFileSync(path.join(DIR, name), JSON.stringify(obj, null, 2));

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);

// 1. Load the page, full digest, overview screenshot
const digest = await gotoPage(cdp, 'https://demo.washcentral.com/agent-console.html', 1200);
save('digest-01-page-load.json', digest);
await dismissIdle(cdp);
await cdp.screenshot(path.join(DIR, '01-agent-console-overview.png'));

// 2. Pane-by-pane structural digest (read-only DOM inspection)
const panes = await cdp.eval(`(() => {
  const vis = el => { const r = el.getBoundingClientRect(); if (r.width <= 0 || r.height <= 0) return false; const s = getComputedStyle(el); return s.visibility !== 'hidden' && s.display !== 'none'; };
  const txt = el => (el.textContent || '').trim().replace(/\\s+/g, ' ');
  const out = {};

  // Handoff Queue pane: locate via its h2
  const h2s = [...document.querySelectorAll('h2')].filter(vis);
  const queueH2 = h2s.find(h => txt(h) === 'Handoff Queue');
  if (queueH2) {
    let pane = queueH2.closest('aside, section, div[class*="queue"], div[class*="pane"], div[class*="panel"], div[class*="col"]');
    // walk up until the pane contains the search input
    let node = queueH2.parentElement;
    while (node && !node.querySelector('input')) node = node.parentElement;
    pane = node || pane;
    out.queue = {
      heading: txt(queueH2),
      statsLine: (pane.innerText.match(/\\d+ waiting[^\\n]*/) || [null])[0],
      searchPlaceholder: pane.querySelector('input') ? pane.querySelector('input').placeholder : null,
      buttons: [...pane.querySelectorAll('button')].filter(vis).map(b => ({ text: txt(b), classes: b.className, ariaPressed: b.getAttribute('aria-pressed') })),
      selects: [...pane.querySelectorAll('select')].filter(vis).map(s => ({ classes: s.className, value: s.value, options: [...s.options].map(o => o.textContent.trim()) })),
      innerText: pane.innerText.replace(/\\s*\\n\\s*/g, ' | ').slice(0, 600)
    };
  }

  // Center console: find the empty-state text
  const centerText = [...document.querySelectorAll('main *')].filter(vis).find(e => /Select a handoff/.test(txt(e)) && txt(e).length < 120);
  out.center = centerText ? { emptyState: txt(centerText), containerClass: centerText.className } : null;

  // Customer context pane
  const custH2 = h2s.find(h => txt(h) === 'Customer');
  if (custH2) {
    let node = custH2.parentElement;
    while (node && node.innerText.trim().split('\\n').length < 2 && node.parentElement) node = node.parentElement;
    out.customer = { heading: txt(custH2), innerText: node.innerText.replace(/\\s*\\n\\s*/g, ' | ').slice(0, 300) };
  }

  // Presence selector in the header: find element containing Available/Away/Busy/Offline
  const selects = [...document.querySelectorAll('select')].filter(vis).map(s => ({ tag: 'select', classes: s.className, value: s.value, options: [...s.options].map(o => o.textContent.trim()), inHeader: !!s.closest('header, [class*="topbar"], [class*="header"]') }));
  out.allSelects = selects;
  const presenceCustom = [...document.querySelectorAll('header *, [class*="topbar"] *')].filter(vis).filter(e => /presence|status|agent/i.test(e.className || '') && e.children.length);
  out.presenceCustomCandidates = presenceCustom.slice(0, 5).map(e => ({ tag: e.tagName, classes: e.className, text: txt(e).slice(0, 120) }));

  // sort control: element whose text includes "Longest wait first"
  const sortEl = [...document.querySelectorAll('select, button, div')].filter(vis).find(e => /Longest wait first/.test(txt(e)) && txt(e).length < 90);
  out.sortControl = sortEl ? { tag: sortEl.tagName, classes: sortEl.className, text: txt(sortEl).slice(0, 120), options: sortEl.tagName === 'SELECT' ? [...sortEl.options].map(o => o.textContent.trim()) : null, value: sortEl.tagName === 'SELECT' ? sortEl.value : null } : null;

  // desktop notifications button
  const notif = [...document.querySelectorAll('button')].filter(vis).find(b => /notification/i.test(b.getAttribute('aria-label') || '') || /notification/i.test(b.title || ''));
  out.notifButton = notif ? { text: txt(notif), ariaLabel: notif.getAttribute('aria-label'), title: notif.title } : null;

  // showing count + empty queue text
  out.queueFooter = (document.body.innerText.match(/showing \\d+/) || [null])[0];
  out.noMatch = /No matching handoffs\\./.test(document.body.innerText);

  // breadcrumb
  const bc = document.querySelector('[class*="breadcrumb"]');
  out.breadcrumb = bc ? txt(bc) : null;

  return out;
})()`);
save('digest-02-panes.json', panes);
console.log('PANES:', JSON.stringify(panes, null, 2));

await dismissIdle(cdp);
cdp.close();
console.log('PHASE 1 DONE');
