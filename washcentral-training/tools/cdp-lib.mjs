// cdp-lib.mjs — minimal Chrome DevTools Protocol driver (no dependencies; Node 22+ global WebSocket).
// Used for live verification walks and (later) recording drives against demo.washcentral.com.
// Tenant safety: this library only navigates, evaluates read-only JS, and screenshots.
// Callers must follow CLAUDE.md §2 — read-only exploration, TRAIN- records only, never send/delete.

import fs from 'node:fs';

const CDP_HTTP = process.env.CDP_HTTP || 'http://localhost:9222';

export async function listTargets() {
  const r = await fetch(`${CDP_HTTP}/json/list`);
  return (await r.json()).filter(t => t.type === 'page');
}

export async function createTarget(url = 'about:blank') {
  const r = await fetch(`${CDP_HTTP}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' });
  return await r.json();
}

export async function closeTarget(id) {
  await fetch(`${CDP_HTTP}/json/close/${id}`);
}

export class CDP {
  constructor(ws) { this.ws = ws; this.id = 0; this.pending = new Map(); this.listeners = new Map(); }

  // tab: 'first' | 'new' | target id | url substring to match
  static async connect(tab = 'first') {
    let target;
    if (tab === 'new') {
      target = await createTarget();
    } else {
      const targets = await listTargets();
      if (tab === 'first') target = targets[0];
      else target = targets.find(t => t.id === tab) || targets.find(t => t.url.includes(tab));
      if (!target) throw new Error(`No tab matching "${tab}"`);
    }
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = () => rej(new Error('WS connect failed')); });
    const cdp = new CDP(ws);
    cdp.targetId = target.id;
    ws.onmessage = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id !== undefined && cdp.pending.has(msg.id)) {
        const { res, rej } = cdp.pending.get(msg.id);
        cdp.pending.delete(msg.id);
        msg.error ? rej(new Error(msg.error.message)) : res(msg.result);
      } else if (msg.method && cdp.listeners.has(msg.method)) {
        for (const fn of cdp.listeners.get(msg.method)) fn(msg.params);
      }
    };
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    return cdp;
  }

  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((res, rej) => {
      this.pending.set(id, { res, rej });
      this.ws.send(JSON.stringify({ id, method, params }));
      setTimeout(() => { if (this.pending.has(id)) { this.pending.delete(id); rej(new Error(`CDP timeout: ${method}`)); } }, 30000);
    });
  }

  on(method, fn) {
    if (!this.listeners.has(method)) this.listeners.set(method, []);
    this.listeners.get(method).push(fn);
  }

  once(method, timeoutMs = 15000) {
    return new Promise((res, rej) => {
      const timer = setTimeout(() => rej(new Error(`Timeout waiting for ${method}`)), timeoutMs);
      this.on(method, (p) => { clearTimeout(timer); res(p); });
    });
  }

  async navigate(url, settleMs = 800) {
    const loaded = this.once('Page.loadEventFired').catch(() => null);
    await this.send('Page.navigate', { url });
    await loaded;
    await sleep(settleMs);
  }

  async eval(expression) {
    const r = await this.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error('Page JS error: ' + (r.exceptionDetails.exception?.description || r.exceptionDetails.text));
    return r.result.value;
  }

  async setViewport(width = 1920, height = 1080) {
    await this.send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
  }

  async screenshot(path) {
    const r = await this.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path, Buffer.from(r.data, 'base64'));
    return path;
  }

  // Click an element found by CSS selector, or by exact visible text among candidates of `scopeSelector`.
  async click(selector) {
    const ok = await this.eval(`(() => { const el = document.querySelector(${JSON.stringify(selector)}); if (!el) return false; el.click(); return true; })()`);
    if (!ok) throw new Error(`click: no element for selector ${selector}`);
  }

  async clickByText(text, scopeSelector = 'button, a, [role=button], [role=tab], li, td, .nav-item') {
    const ok = await this.eval(`(() => {
      const want = ${JSON.stringify(text)}.trim().toLowerCase();
      const els = [...document.querySelectorAll(${JSON.stringify(scopeSelector)})];
      const vis = el => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
      const el = els.find(e => vis(e) && (e.textContent || '').trim().replace(/\\s+/g,' ').toLowerCase() === want)
             || els.find(e => vis(e) && (e.getAttribute('aria-label') || '').trim().toLowerCase() === want)
             || els.find(e => vis(e) && (e.textContent || '').trim().replace(/\\s+/g,' ').toLowerCase().startsWith(want));
      if (!el) return false; el.click(); return true;
    })()`);
    if (!ok) throw new Error(`clickByText: no visible element with text "${text}"`);
  }

  async pressKey(key, modifiers = 0) {
    // modifiers: 1=Alt, 2=Ctrl, 4=Meta, 8=Shift
    const defs = { Escape: { code: 'Escape', keyCode: 27 }, Enter: { code: 'Enter', keyCode: 13 }, ArrowDown: { code: 'ArrowDown', keyCode: 40 }, ArrowUp: { code: 'ArrowUp', keyCode: 38 }, k: { code: 'KeyK', keyCode: 75, text: 'k' } };
    const d = defs[key] || { code: key, keyCode: 0 };
    for (const type of ['rawKeyDown', 'keyUp']) {
      await this.send('Input.dispatchKeyEvent', { type, key, code: d.code, windowsVirtualKeyCode: d.keyCode, nativeVirtualKeyCode: d.keyCode, modifiers });
    }
  }

  close() { try { this.ws.close(); } catch {} }
}

export const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// The demo tenant shows a "Still there?" idle dialog with a 2:00 countdown. Dismiss it
// whenever present (click "Stay Logged In") so walks and recordings are never interrupted.
export async function dismissIdle(cdp) {
  try {
    return await cdp.eval(`(() => {
      const btns = [...document.querySelectorAll('button')];
      const b = btns.find(x => /stay logged in|stay active/i.test(x.textContent || ''));
      if (b && b.getBoundingClientRect().width > 0) { b.click(); return true; }
      return false;
    })()`);
  } catch { return false; }
}

// Navigate + settle + dismiss idle dialog + return the page digest.
// Self-healing: the demo's client-side auth flag is shared across all tabs of the profile,
// and visiting login.html clears it — so if we get bounced to the login page while asking
// for a different page, re-enter via the demo quick-access button (#qa-btn) and retry once.
export async function gotoPage(cdp, url, settleMs = 1000) {
  await cdp.navigate(url, settleMs);
  const here = await cdp.eval('location.pathname');
  if (here.endsWith('/login.html') && !url.includes('login.html')) {
    await cdp.eval(`(() => { const b = document.querySelector('#qa-btn'); if (b) b.click(); return !!b; })()`);
    await sleep(2000);
    await cdp.navigate(url, settleMs);
  }
  await dismissIdle(cdp);
  return await cdp.eval(DIGEST_JS);
}

// Harvest same-origin .html links on the current page (for crawl discovery).
export async function harvestLinks(cdp) {
  return await cdp.eval(`(() => {
    const out = new Set();
    for (const a of document.querySelectorAll('a[href]')) {
      const h = a.getAttribute('href') || '';
      if (h.endsWith('.html') && !h.startsWith('http') && !h.startsWith('#')) out.add(h.replace(/^\\.\\//, ''));
    }
    return [...out];
  })()`);
}

// Structured page digest — ground truth for authoring. Extracts visible UI labels only.
export const DIGEST_JS = `(() => {
  const vis = el => { const r = el.getBoundingClientRect(); if (r.width <= 0 || r.height <= 0) return false; const s = getComputedStyle(el); return s.visibility !== 'hidden' && s.display !== 'none' && s.opacity !== '0'; };
  const txt = el => (el.textContent || '').trim().replace(/\\s+/g, ' ');
  const grab = (sel, max = 80) => [...document.querySelectorAll(sel)].filter(vis).map(txt).filter(Boolean).slice(0, max);
  const uniq = a => [...new Set(a)];
  return {
    url: location.pathname + location.search,
    docTitle: document.title,
    h1: uniq(grab('h1', 10)),
    h2: uniq(grab('h2', 40)),
    h3: uniq(grab('h3', 60)),
    breadcrumb: uniq(grab('.breadcrumb, [class*="breadcrumb"], .page-title, [class*="page-header"] h1, [class*="page-header"] .title', 10)),
    railButtons: uniq([...document.querySelectorAll('nav [aria-label], .rail [aria-label], [class*="sidebar"] [aria-label]')].filter(vis).map(e => e.getAttribute('aria-label')).filter(Boolean).slice(0, 30)),
    sidebarItems: uniq(grab('[class*="sidebar"] a, [class*="sidebar"] li, [class*="side-nav"] a, [class*="menu"] a', 80)),
    buttons: uniq([...document.querySelectorAll('button, a.btn, [class*="btn"], [role="button"], input[type="button"], input[type="submit"]')].filter(vis).map(b => txt(b) || b.getAttribute('aria-label') || '').filter(t => t && t.length < 60).slice(0, 100)),
    tabs: uniq(grab('[role="tab"], [class*="tab"] button, .tab, [class*="tabs"] a, [class*="tabs"] li', 40)),
    tableHeaders: uniq(grab('th', 60)),
    kpiLabels: uniq(grab('[class*="kpi"] , [class*="metric"], [class*="stat-"]', 60)).slice(0, 40),
    inputPlaceholders: uniq([...document.querySelectorAll('input[placeholder], textarea[placeholder]')].filter(vis).map(i => i.placeholder).filter(Boolean).slice(0, 20)),
    labels: uniq(grab('label, [class*="field-label"], [class*="form-label"]', 80)),
    chips: uniq(grab('[class*="chip"], [class*="badge"], [class*="pill"], [class*="tag"]', 60)),
    firstRows: [...document.querySelectorAll('table tbody tr')].filter(vis).slice(0, 3).map(tr => [...tr.querySelectorAll('td')].map(txt).join(' | ').slice(0, 300)),
    modals: uniq(grab('[class*="modal"] h1, [class*="modal"] h2, [class*="modal"] h3, [role="dialog"] h1, [role="dialog"] h2, [role="dialog"] h3', 10)),
    bodySnippet: (document.body.innerText || '').replace(/\\s+/g, ' ').slice(0, 1500)
  };
})()`;
