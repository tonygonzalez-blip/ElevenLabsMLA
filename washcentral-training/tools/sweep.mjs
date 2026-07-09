// sweep.mjs — full read-only verification sweep of demo.washcentral.com.
// BFS crawl seeded with the rail modules + Settings; harvests sidebar links as it goes.
// Per page: digest JSON + 1920×1080 screenshot. Never clicks anything except the idle dialog.
// Output: ../verification/2026-07-09/{digests/*.json, shots/*.png, sweep-index.json}

import fs from 'node:fs';
import path from 'node:path';
import { CDP, gotoPage, harvestLinks, sleep } from './cdp-lib.mjs';

const BASE = 'https://demo.washcentral.com/';
const OUT = path.resolve(import.meta.dirname, '../verification/2026-07-09');
fs.mkdirSync(path.join(OUT, 'digests'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'shots'), { recursive: true });

const SEEDS = [
  'command-center.html', 'dashboard-executive.html', 'mkt-campaigns.html', 'crm-customers.html',
  'sales-transactions.html', 'inv-items.html', 'emp-employees.html', 'maint-issues.html',
  'portal-members.html', 'support-tickets.html', 'billing-usage.html', 'lms-home.html',
  'reports.html', 'settings.html', 'forecast-overview.html', 'payments-reconciliation.html',
  'agent-console.html', 'ml-command-center.html', 'site-detail.html', 'audit-log.html',
  // Settings inventory (Appendix 2) — included explicitly in case a hub page hides links
  'settings-account-info.html','settings-account-types.html','settings-profile-types.html','settings-profit-centers.html','settings-departments.html','settings-categories.html','settings-dashboard-settings.html','settings-dayforce-settings.html','settings-policy-category.html','settings-forms-category.html',
  'settings-locations.html','settings-location-groups.html','settings-location-sub-brand.html','settings-location-payment-approval.html',
  'settings-services.html','settings-service-types.html','settings-service-groups.html','settings-detail-types.html','settings-rewards.html','settings-loyalty-discount-types.html',
  'settings-payment-types.html','settings-discounts.html','settings-discount-types.html','settings-surcharges.html','settings-surcharge-types.html','settings-payout-percentage.html','settings-tax-rates.html','settings-gl-codes.html','settings-gl-account-codes.html',
  'settings-hardware-terminals.html','settings-screen-layout.html','settings-system-types.html','settings-lube-buttons.html','settings-lube-checklists.html',
  'settings-button-groups.html','settings-button-types.html','settings-cashier-buttons.html','settings-greeter-buttons.html','settings-image-design.html','settings-colors.html','settings-templates.html','settings-macros.html','settings-macro-types.html','settings-macro-detail-types.html','settings-kiosk-flows.html',
  'settings-system-users.html','settings-user-levels.html','settings-security-level.html','settings-blacklisted.html',
  'settings-cancellation-reasons.html','settings-refund-reasons.html','settings-rewash-reasons.html','settings-event-types.html','settings-transaction-types.html','settings-issue-status-types.html','settings-prepaid-book-types.html','settings-prepaid-book-type-types.html',
  'settings-vip-types.html','settings-vip-monthly-types.html','settings-vip-charge-frequency.html','settings-vip-account-service.html','settings-vip-loyalty-discounts.html','settings-unlimited-promotions.html','settings-promotional-upgrades.html',
  'settings-task-scheduler.html','settings-task-parameters.html','settings-mass-sms-log.html',
  'settings-customer-portal.html','settings-customer-portal-branding.html','settings-customer-portal-features.html','settings-customer-portal-access.html','settings-customer-portal-content.html',
  'settings-ai-agent.html','settings-ai-agent-config.html','settings-ai-agent-knowledge.html','settings-ai-agent-channels.html','settings-ai-agent-conversations.html','settings-ai-agent-escalations.html','settings-ai-agent-analytics.html',
  'settings-mobile-branding.html','settings-mobile-features.html','settings-mobile-content.html','settings-mobile-push.html',
  'mkt-referral-program.html',
  'settings-integrations-entra.html','settings-integrations-google.html','settings-integrations-okta.html','settings-integrations-cognito.html','settings-integrations-scim.html','settings-integrations-sage.html','settings-integrations-quickbooks.html','settings-integrations-zoho.html',
];

const SKIP = new Set(['login.html', 'index.html', 'logout.html']);
const MAX_PAGES = 260;

const slug = (p) => p.replace(/\.html$/, '').replace(/[^a-z0-9-]/gi, '_');

async function main() {
  const cdp = await CDP.connect('first');
  await cdp.setViewport(1920, 1080);
  const queue = [...SEEDS];
  const seen = new Set(SEEDS);
  const index = [];
  let n = 0;

  while (queue.length && n < MAX_PAGES) {
    const page = queue.shift();
    if (SKIP.has(page)) continue;
    n++;
    let entry = { page, ok: false };
    try {
      const digest = await gotoPage(cdp, BASE + page, 1100);
      const is404 = /404|file or directory not found/i.test(digest.docTitle + ' ' + (digest.h1.join(' ')));
      entry = { page, ok: true, is404, docTitle: digest.docTitle };
      fs.writeFileSync(path.join(OUT, 'digests', slug(page) + '.json'), JSON.stringify(digest, null, 1));
      if (!is404) {
        await cdp.screenshot(path.join(OUT, 'shots', slug(page) + '.png'));
        for (const link of await harvestLinks(cdp)) {
          const clean = link.split('?')[0];
          if (!seen.has(clean) && !SKIP.has(clean) && !clean.includes('/')) { seen.add(clean); queue.push(clean); }
        }
      }
    } catch (e) {
      entry.error = e.message;
    }
    index.push(entry);
    console.log(`[${n}] ${entry.ok ? (entry.is404 ? '404' : 'OK ') : 'ERR'} ${page}`);
  }
  fs.writeFileSync(path.join(OUT, 'sweep-index.json'), JSON.stringify(index, null, 1));
  console.log(`DONE: ${index.length} pages, ${index.filter(e => e.is404).length} 404s, ${index.filter(e => !e.ok).length} errors`);
  cdp.close();
}

main().catch(e => { console.error('SWEEP FAILED:', e); process.exit(1); });
