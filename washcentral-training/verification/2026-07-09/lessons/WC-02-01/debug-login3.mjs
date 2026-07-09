import { CDP, sleep } from '../../../../tools/cdp-lib.mjs';
import { closeTarget } from '../../../../tools/cdp-lib.mjs';

const cdp = await CDP.connect('new');
try {
  await cdp.setViewport(1920, 1080);
  await cdp.navigate('https://demo.washcentral.com/login.html', 1200);
  const src = await cdp.eval(`typeof wcQuickAccess === 'function' ? wcQuickAccess.toString().slice(0, 1200) : 'NOT DEFINED'`);
  console.log('wcQuickAccess source:\n', src);
  const r = await cdp.eval(`(() => { try { wcQuickAccess(); return 'called'; } catch (e) { return 'ERR ' + e.message; } })()`);
  console.log('call result:', r);
  for (let i = 0; i < 8; i++) {
    await sleep(1200);
    const href = await cdp.eval('location.href').catch(() => '(navigating)');
    console.log('url =', href);
    if (href && !href.includes('login')) break;
  }
} finally {
  cdp.close(); try { await closeTarget(cdp.targetId); } catch {}
}
