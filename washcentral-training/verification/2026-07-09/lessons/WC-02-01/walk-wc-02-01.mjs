// WC-02-01 Customer List — live verification walk (read-only).
// Allowlist only: navigation, Filters open/close, Retention Log (read-only page), search typing + clear, pagination inspection.
// Never clicks: Delete, + Add Customer, Save, Send.
import { CDP, gotoPage, dismissIdle, sleep, DIGEST_JS } from '../../../../tools/cdp-lib.mjs';
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
  // KPI tiles: value + label pairs
  out.kpis = [...document.querySelectorAll('[class*="kpi"]')].filter(vis).map(txt).filter(t=>t&&t.length<60);
  // insight cards: title + subtitle
  out.cards = [...document.querySelectorAll('[class*="card"] , section, .panel')].filter(vis).slice(0,30).map(c=>{
    const h = c.querySelector('h1,h2,h3,h4,[class*="title"]');
    const sub = c.querySelector('[class*="subtitle"],[class*="sub"],[class*="desc"]');
    return h ? { title: txt(h), sub: sub?txt(sub):'' } : null;
  }).filter(Boolean);
  // list card header block
  const eyebrow = [...document.querySelectorAll('*')].filter(vis).map(e=>e.childNodes.length===1&&e.firstChild.nodeType===3?txt(e):'').filter(t=>/MEMBER DATABASE/i.test(t));
  out.eyebrow = eyebrow.slice(0,3);
  // Filters button exact rendering
  const fb = [...document.querySelectorAll('button')].filter(vis).find(b=>/filters/i.test(b.textContent||''));
  out.filtersButton = fb ? { text: txt(fb), html: fb.innerHTML.trim().slice(0,300) } : null;
  // action buttons with colors
  out.actionButtons = [...document.querySelectorAll('button')].filter(vis).map(b=>({ t: txt(b), bg: getComputedStyle(b).backgroundColor, color: getComputedStyle(b).color })).filter(b=>b.t&&b.t.length<40);
  // table headers exact + text-transform
  out.ths = [...document.querySelectorAll('th')].filter(vis).map(th=>({ text: txt(th), rendered: (th.innerText||'').trim(), tt: getComputedStyle(th).textTransform, sortable: th.getAttribute('class')||'' }));
  // first header row has checkbox?
  out.headerCheckbox = !!document.querySelector('thead input[type="checkbox"]');
  out.rowCheckboxes = document.querySelectorAll('tbody input[type="checkbox"]').length;
  // status chips distinct
  out.chips = [...new Set([...document.querySelectorAll('[class*="chip"],[class*="badge"],[class*="pill"],[class*="status"]')].filter(vis).map(txt).filter(t=>t&&t.length<40))];
  // pagination area
  const pagTxt = [...document.querySelectorAll('[class*="pagination"],[class*="pager"],[class*="table-footer"],tfoot')].filter(vis).map(txt);
  out.pagination = pagTxt;
  // rows-per-page control
  const rpp = [...document.querySelectorAll('select')].filter(vis).map(s=>({ label: s.getAttribute('aria-label')||'', options: [...s.options].map(o=>o.text), value: s.value }));
  out.selects = rpp;
  // any element containing ROWS PER PAGE
  const rppEl = [...document.querySelectorAll('*')].filter(vis).find(e=>/rows per page/i.test(e.textContent||'') && e.children.length<8 && (e.textContent||'').length<80);
  out.rowsPerPage = rppEl ? txt(rppEl) : null;
  // page buttons
  out.pageButtons = [...document.querySelectorAll('[class*="pagination"] button, [class*="pager"] button')].filter(vis).map(txt);
  // search input
  const si = [...document.querySelectorAll('input[placeholder]')].filter(vis).map(i=>({ ph: i.placeholder, value: i.value }));
  out.searchInputs = si;
  // visible row count + sample rows
  const rows = [...document.querySelectorAll('table tbody tr')].filter(vis);
  out.visibleRows = rows.length;
  out.sampleRows = rows.slice(0,5).map(tr=>[...tr.querySelectorAll('td')].map(txt).join(' | ').slice(0,220));
  // breadcrumb
  out.breadcrumb = [...document.querySelectorAll('[class*="breadcrumb"]')].filter(vis).map(txt).slice(0,3);
  // list-card title/subtitle near "Customer List"
  const lc = [...document.querySelectorAll('*')].filter(vis).filter(e=>e.children.length===0&&/^Customer List$|^Retention Log$/.test(txt(e)));
  out.listTitleContext = lc.slice(0,2).map(e=>txt(e.parentElement?.parentElement||e.parentElement||e).slice(0,200));
  return out;
})()`;

const run = async () => {
  const cdp = await CDP.connect('new');
  try {
    await cdp.setViewport(1920, 1080);

    // ---- 0. Signed-out recovery (per brief): quick-access entry, never credentials
    let d1 = await gotoPage(cdp, 'https://demo.washcentral.com/crm-customers.html', 1400);
    if ((d1.url || '').includes('login')) {
      log('Signed out — using #qa-btn quick access');
      await cdp.click('#qa-btn');
      await sleep(2000); await dismissIdle(cdp);
      d1 = await gotoPage(cdp, 'https://demo.washcentral.com/crm-customers.html', 1400);
    }
    if ((d1.url || '').includes('login')) throw new Error('Still on login after qa-btn');
    // ---- 1. Customer List: initial load
    save('walk-01-customers-digest.json', d1);
    const det1 = await cdp.eval(DETAIL_JS);
    save('walk-01-customers-detail.json', det1);
    await dismissIdle(cdp); await sleep(300);
    await cdp.screenshot(path.join(EV, '01-customers-top.png'));
    log('URL:', d1.url, '| title:', d1.docTitle);

    // ---- 2. Scroll to the list card
    await cdp.eval(`(() => { const el=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&(e.textContent||'').trim()==='Customer List'); if(el) el.scrollIntoView({block:'start'}); window.scrollBy(0,-80); return window.scrollY; })()`);
    await sleep(600); await dismissIdle(cdp);
    await cdp.screenshot(path.join(EV, '02-customers-list-card.png'));

    // ---- 3. Filters open
    await cdp.clickByText('Filters', 'button');
    await sleep(700); await dismissIdle(cdp);
    const d3 = await cdp.eval(DIGEST_JS); save('walk-03-filters-open-digest.json', d3);
    const filtersDetail = await cdp.eval(`(() => {
      const vis = el => { const r = el.getBoundingClientRect(); return r.width>0&&r.height>0; };
      const txt = el => (el.textContent||'').trim().replace(/\\s+/g,' ');
      // grab any panel that appeared: labels, selects+options, inputs
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
    await sleep(500);
    const closedCheck = await cdp.eval(`(() => { const p=[...document.querySelectorAll('[class*="filter-panel"],[class*="filters-panel"],[class*="filter"][class*="open"]')]; return p.map(x=>x.className.toString().slice(0,80)); })()`);
    log('after filters close:', JSON.stringify(closedCheck));
    await cdp.screenshot(path.join(EV, '04-filters-closed.png'));

    // ---- 5. Retention Log (read-only)
    await cdp.clickByText('Retention Log', 'button, a');
    await sleep(1400); await dismissIdle(cdp);
    const d5 = await cdp.eval(DIGEST_JS); save('walk-05-retention-log-digest.json', d5);
    const det5 = await cdp.eval(DETAIL_JS); save('walk-05-retention-log-detail.json', det5);
    await cdp.screenshot(path.join(EV, '05-retention-log.png'));
    log('Retention Log URL:', d5.url, '| title:', d5.docTitle);

    // ---- 6. Return to Customers via sidebar
    await cdp.clickByText('Customers', '[class*="sidebar"] a, [class*="side"] a, a');
    await sleep(1400); await dismissIdle(cdp);
    const d6 = await cdp.eval(DIGEST_JS); save('walk-06-back-customers-digest.json', d6);
    log('Back URL:', d6.url);
    await cdp.screenshot(path.join(EV, '06-back-on-customers.png'));

    // ---- 7. Search: type a name fragment
    const typed = await cdp.eval(`(() => {
      const el=[...document.querySelectorAll('input[placeholder]')].find(i=>/search by name/i.test(i.placeholder));
      if(!el) return null; el.focus(); el.value='PATRICIA';
      el.dispatchEvent(new Event('input',{bubbles:true})); el.dispatchEvent(new Event('keyup',{bubbles:true}));
      return el.value;
    })()`);
    log('typed:', typed);
    await sleep(1000); await dismissIdle(cdp);
    const det7 = await cdp.eval(DETAIL_JS); save('walk-07-search-filtered-detail.json', det7);
    await cdp.eval(`(() => { const el=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&(e.textContent||'').trim()==='Customer List'); if(el) el.scrollIntoView({block:'start'}); window.scrollBy(0,-80); })()`);
    await sleep(400);
    await cdp.screenshot(path.join(EV, '07-search-filtered.png'));
    log('filtered rows:', det7.visibleRows, JSON.stringify(det7.sampleRows));

    // ---- 8. Clear search
    await cdp.eval(`(() => {
      const el=[...document.querySelectorAll('input[placeholder]')].find(i=>/search by name/i.test(i.placeholder));
      if(!el) return null; el.value=''; el.dispatchEvent(new Event('input',{bubbles:true})); el.dispatchEvent(new Event('keyup',{bubbles:true})); return 'cleared';
    })()`);
    await sleep(1000); await dismissIdle(cdp);
    const det8 = await cdp.eval(DETAIL_JS); save('walk-08-search-cleared-detail.json', det8);
    await cdp.screenshot(path.join(EV, '08-search-cleared.png'));
    log('restored rows:', det8.visibleRows);

    // ---- 9. Pagination area
    await cdp.eval(`window.scrollTo(0, document.body.scrollHeight)`);
    await sleep(600); await dismissIdle(cdp);
    const det9 = await cdp.eval(DETAIL_JS); save('walk-09-pagination-detail.json', det9);
    await cdp.screenshot(path.join(EV, '09-pagination.png'));
    log('pagination:', JSON.stringify(det9.pagination), 'rowsPerPage:', det9.rowsPerPage, 'selects:', JSON.stringify(det9.selects), 'pageButtons:', JSON.stringify(det9.pageButtons));

    log('WALK COMPLETE');
  } finally {
    try {
      const { closeTarget } = await import('../../../../tools/cdp-lib.mjs');
      cdp.close(); await closeTarget(cdp.targetId);
    } catch {}
  }
};
run().catch(e => { console.error('WALK FAILED:', e.message); process.exit(1); });
