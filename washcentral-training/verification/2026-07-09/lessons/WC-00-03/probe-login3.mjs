// Probe stage 3: trusted mouse click on #qa-btn via Input.dispatchMouseEvent
import { CDP, dismissIdle, sleep } from '../../../../tools/cdp-lib.mjs';

const cdp = await CDP.connect('new');
await cdp.setViewport(1920, 1080);
await cdp.navigate('https://demo.washcentral.com/login.html', 1200);

const box = await cdp.eval(`(() => { const e = document.querySelector('#qa-btn'); if (!e) return null; e.scrollIntoView({block:'center'}); const r = e.getBoundingClientRect(); return { x: r.x + r.width/2, y: r.y + r.height/2 }; })()`);
console.log('qa-btn center:', box);
for (const type of ['mousePressed', 'mouseReleased']) {
  await cdp.send('Input.dispatchMouseEvent', { type, x: box.x, y: box.y, button: 'left', clickCount: 1 });
}
for (let i = 0; i < 12; i++) {
  await sleep(800);
  const p = await cdp.eval('location.pathname');
  if (!p.includes('login')) { console.log(`navigated at t+${((i + 1) * 0.8).toFixed(1)}s:`, p); break; }
  if (i === 11) console.log('still on login');
}
await dismissIdle(cdp);
console.log('final title:', await cdp.eval('document.title'));
// any visible error/toast text?
console.log('snippet:', await cdp.eval(`(document.body.innerText||'').replace(/\\s+/g,' ').slice(0,400)`));
cdp.close();
