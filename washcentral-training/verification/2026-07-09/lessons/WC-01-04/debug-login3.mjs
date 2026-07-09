import { CDP, sleep, closeTarget } from '../../../../tools/cdp-lib.mjs';
const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
try {
  await cdp.navigate('https://demo.washcentral.com/login.html', 1500);
  const expr = "(() => {" +
    "const b = document.querySelector('#qa-btn');" +
    "const src = Array.from(document.querySelectorAll('script')).map(s=>s.textContent).join(String.fromCharCode(10));" +
    "const qaIdx = src.indexOf('qa-btn');" +
    "return {" +
    "outer: b ? b.outerHTML.slice(0,400) : null," +
    "onclick: b ? String(b.onclick).slice(0,300) : null," +
    "scriptAround: qaIdx >= 0 ? src.slice(Math.max(0,qaIdx-500), qaIdx+1500) : null," +
    "session: Object.keys(sessionStorage)," +
    "auth: (localStorage.getItem('washcentral-auth-v1')||'').slice(0,300)" +
    "}; })()";
  const info = await cdp.eval(expr);
  console.log(JSON.stringify(info, null, 1));
} finally { try { await closeTarget(cdp.targetId); } catch {} cdp.close(); }
