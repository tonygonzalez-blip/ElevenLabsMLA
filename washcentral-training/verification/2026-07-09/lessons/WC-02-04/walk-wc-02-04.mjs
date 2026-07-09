// WC-02-04 Gift Cards — live verification walk (read-only).
// Allowlist only: navigation, search typing + clear, Filters open/close, pagination inspection.
// Never clicks: Delete, + Issue Gift Card, Save, Send.
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS, closeTarget } from '../../../../tools/cdp-lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const EV = path.dirname(fileURLToPath(import.meta.url));
const save = (name, obj) => fs.writeFileSync(path.join(EV, name), JSON.stringify(obj, null, 1));
const log = (...a) => console.log(...a);

const DETAIL_JS = `(() => {
  const vis = el => { const r = el.getBoundingClientRect(); if (r.width<=0||r.height<=0) return false; const s=getComputedStyle(el); return s.visibility!=='hidden'&&s.display!=='none'&&s.opacity!=='0'; };
  const txt = el => (el.textContent||'').trim().replace(/\\s+/g,' ');
  const out = {};
  // KPI tiles: full tile text (value + label)
  out.kpis = [...document.querySelectorAll('[class*="kpi"]')].filter(vis).map(txt).filter(t=>t&&t.length<80);
  // insight cards: title + subtitle + visible text
  out.cards = [...document.querySelectorAll('[class*="card"], section, .panel')].filter(vis).slice(0,30).map(c=>{
    const h = c.querySelector('h1,h2,h3,h4,[class*="title"]');
    const sub = c.querySelector('[class*="subtitle"],[class*="sub"],[class*="desc"]');
    return h ? { title: txt(h), sub: sub?txt(sub):'', body: txt(c).slice(0,300) } : null;
  }).filter(Boolean);
  // list card eyebrow (CRM · GIFT CARDS)
  const eyebrow = [...document.querySelectorAll('*')].filter(vis).map(e=>e.childNodes.length===1&&e.firstChild&&e.firstChild.nodeType===3?txt(e):'').filter(t=>/GIFT CARDS/i.test(t)&&t.length<40);
  out.eyebrow = eyebrow.slice(0,3);
  // list card title + subtitle context
  const lc = [...document.querySelectorAll('*')].filter(vis).filter(e=>e.children.length===0&&/^Gift Card List$/.test(txt(e)));
  out.listTitleContext = lc.slice(0,2).map(e=>txt(e.parentElement?.parentElement||e.parentElement||e).slice(0,220));
  // Filters button exact rendering
  const fb = [...document.querySelectorAll('button')].filter(vis).find(b=>/filters/i.test(b.textContent||''));
  out.filtersButton = fb ? { text: txt(fb), html: fb.innerHTML.trim().slice(0,300) } : null;
  // action buttons with colors
  out.actionButtons = [...document.querySelectorAll('button')].filter(vis).map(b=>({ t: txt(b), bg: getComputedStyle(b).backgroundColor, color: getComputedStyle(b).color })).filter(b=>b.t&&b.t.length<40);
  // table headers exact + text-transform
  out.ths = [...document.querySelectorAll('th')].filter(vis).map(th=>({ text: txt(th), rendered: (th.innerText||'').trim(), tt: getComputedStyle(th).textTransform }));
  out.headerCheckbox = !!document.querySelector('thead input[type="checkbox"]');
  out.rowCheckboxes = document.querySelectorAll('tbody input[type="checkbox"]').length;
  // status chips distinct
  out.chips = [...new Set([...document.querySelectorAll('[class*="chip"],[class*="badge"],[class*="pill"],[class*="status"]')].filter(vis).map(txt).filter(t=>t&&t.length<40))];
  // pagination area
  out.pagination = [...document.querySelectorAll('[class*="pagination"],[class*="pager"],[class*="table-footer"],tfoot')].filter(vis).map(txt);
  const rppEl = [...document.querySelectorAll('*')].filter(vis).find(e=>/rows per page/i.test(e.textContent||'') && e.children.length<8 && (e.textContent||'').length<90);
  out.rowsPerPage = rppEl ? txt(rppEl) : null;
  out.selects = [...document.querySelectorAll('select')].filter(vis).map(s=>({ label: s.getAttribute('aria-label')||'', options: [...s.options].map(o=>o.text), value: s.value }));
  out.pageButtons = [...document.querySelectorAll('[class*="pagination"] button, [class*="pager"] button')].filter(vis).map(txt);
  // search input
  out.searchInputs = [...document.querySelectorAll('input[placeholder]')].filter(vis).map(i=>({ ph: i.placeholder, value: i.value }));
  // visible row count + sample rows
  const rows = [...document.querySelectorAll('table tbody tr')].filter(vis);
  out.visibleRows = rows.length;
  out.sampleRows = rows.slice(0,6).map(tr=>[...tr.querySelectorAll('td')].map(txt).join(' | ').slice(0,260));
  out.breadcrumb = [...document.querySelectorAll('[class*="breadcrumb"]')].filter(vis).map(txt).slice(0,3);
  // sidebar hrefs (for filename discovery)
  out.sidebarLinks = [...document.querySelectorAll('[class*="sidebar"] a')].filter(vis).map(a=>({ t: txt(a), href: a.getAttribute('href') })).slice(0,20);
  return out;
})()`;

const run = async () => {
  const cdp = await CDP.connect('new');
  try {
    await cdp.setViewport(1920, 1080);

    // ---- 0. Filename check: the task sheet said crm-giftcards.html; verify what it does
    await cdp.navigate('https://demo.washcentral.com/crm-giftcards.html', 1200);
    const probe = await cdp.eval(`({ path: location.pathname, title: document.title, is404: /404|not found/i.test(document.title + ' ' + (document.body ? document.body.innerText.slice(0,300) : '')) })`);
    log('probe crm-giftcards.html →', JSON.stringify(probe));
    save('walk-00-filename-probe.json', probe);

    // ---- 1. Real page via sidebar-verified filename crm-gift-cards.html
    let d1 = await gotoPage(cdp, 'https://demo.washcentral.com/crm-gift-cards.html', 1600);
    if ((d1.url || '').includes('login')) {
      log('Signed out — using #qa-btn quick access');
      await cdp.click('#qa-btn');
      await sleep(2000); await dismissIdle(cdp);
      d1 = await gotoPage(cdp, 'https://demo.washcentral.com/crm-gift-cards.html', 1600);
    }
    if ((d1.url || '').includes('login')) throw new Error('Still on login after qa-btn');
    // wait for rows (sweep digest saw a Failed-to-fetch state); retry reload once if empty
    let det1 = await cdp.eval(DETAIL_JS);
    if (det1.visibleRows === 0) {
      log('rows not loaded yet — waiting 3s');
      await sleep(3000); await dismissIdle(cdp);
      det1 = await cdp.eval(DETAIL_JS);
      if (det1.visibleRows === 0) {
        log('still empty — one reload');
        d1 = await gotoPage(cdp, 'https://demo.washcentral.com/crm-gift-cards.html', 2500);
        await sleep(2000); await dismissIdle(cdp);
        det1 = await cdp.eval(DETAIL_JS);
      }
    }
    save('walk-01-giftcards-digest.json', d1);
    save('walk-01-giftcards-detail.json', det1);
    await dismissIdle(cdp); await sleep(300);
    await cdp.screenshot(path.join(EV, '01-giftcards-top.png'));
    log('URL:', d1.url, '| title:', d1.docTitle, '| rows:', det1.visibleRows);
    log('kpis:', JSON.stringify(det1.kpis));
    log('sampleRows:', JSON.stringify(det1.sampleRows, null, 1));

    // ---- 2. Scroll to the list card
    await cdp.eval(`(() => { const el=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&(e.textContent||'').trim()==='Gift Card List'); if(el) el.scrollIntoView({block:'start'}); window.scrollBy(0,-80); return window.scrollY; })()`);
    await sleep(600); await dismissIdle(cdp);
    await cdp.screenshot(path.join(EV, '02-giftcards-list-card.png'));

    // ---- 3. Filters open (allowlisted: open/close only)
    await cdp.clickByText('Filters', 'button');
    await sleep(700); await dismissIdle(cdp);
    const filtersDetail = await cdp.eval(`(() => {
      const vis = el => { const r = el.getBoundingClientRect(); return r.width>0&&r.height>0; };
      const txt = el => (el.textContent||'').trim().replace(/\\s+/g,' ');
      const panels = [...document.querySelectorAll('[class*="filter"],[class*="popover"],[class*="panel"],[class*="dropdown"]')].filter(vis);
      return panels.slice(0,10).map(p=>({
        cls: p.className.toString().slice(0,80),
        text: txt(p).slice(0,500),
        labels: [...p.querySelectorAll('label')].filter(vis).map(txt),
        selects: [...p.querySelectorAll('select')].filter(vis).map(s=>({opts:[...s.options].map(o=>o.text)})),
        buttons: [...p.querySelectorAll('button')].filter(vis).map(txt)
      }));
    })()`);
    save('walk-03-filters-detail.json', filtersDetail);
    await cdp.screenshot(path.join(EV, '03-filters-open.png'));

    // ---- 4. Filters close (toggle again)
    await cdp.clickByText('Filters', 'button');
    await sleep(500); await dismissIdle(cdp);
    await cdp.screenshot(path.join(EV, '04-filters-closed.png'));

    // ---- 5. Search a card number taken from a visible row
    const det5pre = await cdp.eval(DETAIL_JS);
    const firstRow = (det5pre.sampleRows && det5pre.sampleRows[0]) || '';
    const cardNo = (firstRow.match(/GC[-\w]*\d+|\b\d{4}[- ]?\d{4}[- ]?\d{4}\b|[A-Z]{2,4}-\d{3,}/) || [null])[0];
    log('card number candidate from row 1:', JSON.stringify(cardNo), '| row:', firstRow);
    if (!cardNo) throw new Error('No card number pattern found in first row: ' + firstRow);
    const typed = await cdp.eval(`(() => {
      const el=[...document.querySelectorAll('input[placeholder]')].find(i=>/search by card number/i.test(i.placeholder));
      if(!el) return null; el.focus(); el.value=${JSON.stringify(cardNo)};
      el.dispatchEvent(new Event('input',{bubbles:true})); el.dispatchEvent(new Event('keyup',{bubbles:true}));
      return el.value;
    })()`);
    log('typed:', typed);
    await sleep(1200); await dismissIdle(cdp);
    const det5 = await cdp.eval(DETAIL_JS); save('walk-05-search-filtered-detail.json', det5);
    await cdp.eval(`(() => { const el=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&(e.textContent||'').trim()==='Gift Card List'); if(el) el.scrollIntoView({block:'start'}); window.scrollBy(0,-80); })()`);
    await sleep(400);
    await cdp.screenshot(path.join(EV, '05-search-filtered.png'));
    log('filtered rows:', det5.visibleRows, JSON.stringify(det5.sampleRows));

    // ---- 6. Clear search
    await cdp.eval(`(() => {
      const el=[...document.querySelectorAll('input[placeholder]')].find(i=>/search by card number/i.test(i.placeholder));
      if(!el) return null; el.value=''; el.dispatchEvent(new Event('input',{bubbles:true})); el.dispatchEvent(new Event('keyup',{bubbles:true})); return 'cleared';
    })()`);
    await sleep(1200); await dismissIdle(cdp);
    const det6 = await cdp.eval(DETAIL_JS); save('walk-06-search-cleared-detail.json', det6);
    await cdp.screenshot(path.join(EV, '06-search-cleared.png'));
    log('restored rows:', det6.visibleRows);

    // ---- 7. Pagination area
    await cdp.eval(`window.scrollTo(0, document.body.scrollHeight)`);
    await sleep(600); await dismissIdle(cdp);
    const det7 = await cdp.eval(DETAIL_JS); save('walk-07-pagination-detail.json', det7);
    await cdp.screenshot(path.join(EV, '07-pagination.png'));
    log('pagination:', JSON.stringify(det7.pagination), 'rowsPerPage:', det7.rowsPerPage, 'pageButtons:', JSON.stringify(det7.pageButtons));

    // ---- 8. Does clicking a row open a detail view? Check row cursor/handlers WITHOUT clicking.
    const rowProbe = await cdp.eval(`(() => {
      const tr = document.querySelector('table tbody tr');
      if (!tr) return null;
      return { cursor: getComputedStyle(tr).cursor, hasOnclick: !!tr.onclick, cls: tr.className.toString().slice(0,80), linkInRow: !!tr.querySelector('a') };
    })()`);
    save('walk-08-row-probe.json', rowProbe);
    log('row probe:', JSON.stringify(rowProbe));

    log('WALK COMPLETE');
  } finally {
    try { cdp.close(); await closeTarget(cdp.targetId); } catch {}
  }
};
run().catch(e => { console.error('WALK FAILED:', e.message); process.exit(1); });
