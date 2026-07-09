# AMG1 — 2-Hour Multi-Agent Review & Fix Loop

Plan for Claude Code, run from the root of the `amg1` repo. Companion file required: `USER_ROLE_PERMISSIONS_PLAN.md` (the primary implementation task, §1b).

**Order of work:** Setup (§1) → implement role permissions system (§1b) → single review pass of it (§4b) → audit loop (§4) with remaining time → Wind-Down (§6) at T+120.
Stack context (verified): Next.js on Vercel (Node 22), production domains `amgaviationgroup.com` / `www.amgaviationgroup.com`. Portal = **AMG Connect** (`/connect`, `/login`), backed by Supabase project `AMG Aviation Portal` (`vsynqnqlouvphiniqaiy`) with missions, quotes, invoices, CRM leads/activities, communications, subscriptions, Stripe webhooks, compliance/consent, and crew-network tables — all RLS-enabled.

---

## 0. Hard Rules (read first, apply always)

1. **Time budget: 120 minutes.** At session start run `date +%s` and store as `START_TS` in `reports/loop-state.md`. Before starting ANY new cycle or task, run `date +%s` again. If elapsed ≥ 120 minutes: do NOT start anything new — finish only the task currently in progress, then go straight to §6 (Wind-Down) and stop.
2. **Public website feature freeze.** No new features, sections, pages, or content changes on the public-facing website. Public-site changes are allowed ONLY if they optimize (performance/Core Web Vitals), secure (headers, auth, input validation, dependency vulns), or speed up the site. Anything else agents suggest for the public site goes to `reports/BACKLOG.md` marked `OUT-OF-SCOPE (public site)` — never implemented.
3. **Portal:** bug fixes and low-risk improvements may be implemented. New portal features are RECORDED in the backlog, not built, unless they are trivially small (< ~30 lines, no schema change) and clearly safe.
4. **Never:** run destructive commands, modify or delete production data, run Supabase schema migrations, change pricing numbers, legal pages, or SLA language, touch `.env`/secrets, or force-push. Database access is read-only (advisors, `EXPLAIN`, `SELECT`). **Exception:** the `role_permissions` migration defined in `USER_ROLE_PERMISSIONS_PLAN.md` is pre-approved (additive table + seed only; no changes to existing tables).
5. **Every code change must pass** `lint`, `typecheck` (if configured), and `next build` before commit. One commit per cycle, message: `loop: cycle N — <summary>`. If the build breaks and can't be fixed in 10 minutes, revert the offending change and log it.
6. All agent output goes to `reports/loop-run-$(date +%Y%m%d)/`. Nothing is reported only in chat.

---

## 1. Setup (~10 min)

1. Create `reports/loop-run-<date>/` with: `FINDINGS.md` (triaged issues), `BACKLOG.md` (feature suggestions), `CHANGELOG.md` (fixes applied), `loop-state.md` (START_TS, cycle log, elapsed checks).
2. Repo discovery (orchestrator, quick): map the app — `package.json` scripts, `app/` or `pages/` routes, which routes are public site vs portal (`/connect`, `/login`, portal dashboard), API routes/server actions, Supabase client usage, middleware/auth, Stripe webhook handler. Write a short `REPO_MAP.md` so agents don't re-discover it.
3. Confirm the app runs locally (`npm install` if needed, `npm run dev` or use `next build` output). If a local dev server isn't possible, agents review code statically and against the production URLs.

---

## 1b. PRIMARY TASK — Implement the Role Permissions System (do this FIRST)

Implement `USER_ROLE_PERMISSIONS_PLAN.md` (must be present in the repo alongside this file). Follow its phases in order:

1. **Foundation:** `role_permissions` migration + seed from `DEFAULT_PERMISSIONS` + `lib/portal/permissions.ts` (`can()`, catalog, cache). Zero behavior change.
2. **Admin UI:** `/portal/admin/settings/permissions` matrix page + super_admin-guarded save action + audit logging.
3. **Enforcement:** extend `actor()` with the optional `perm` argument; wire call sites module-by-module (quotes → invoices → missions → documents → rest); add `requirePermission(module, 'view')` page guards.
4. **UI polish:** nav filtering by `view` permission, button visibility, "no access" states.

Rules for this task:
- Honor the plan's decided points: super_admin always full access and cannot be locked out; editing the matrix is super_admin only; `copy` maps to `add`; `view` covers list/search/detail; missing row = deny with code defaults as fallback.
- Verify after each phase: `npm run lint && npm run typecheck && npm run test && npm run build`. Commit per phase to the `loop/<date>` branch.
- **Review ONCE, not in a loop.** When implementation is complete, run a SINGLE review pass (§4b) over the permissions work. Apply P0/P1 fixes from that pass, re-verify, and then report the permissions task as done in SUMMARY.md. Do not re-review it in later cycles.
- Time awareness: this task takes priority over the audit loop. If it consumes the whole window, that's acceptable — the Wind-Down rule (§6) still applies: past T+120, finish the in-progress phase, run the single review pass only if it fits within finishing "in progress" work reasonably (otherwise log `DEFERRED: permissions review pass`), and stop.
- If time remains after the single review pass, proceed to the audit loop (§4) for the remainder of the window.

---

## 2. The Five Agents

Dispatch all five in parallel each cycle (Task tool subagents). Each agent gets `REPO_MAP.md`, its charter below, and writes its report to `reports/loop-run-<date>/agent-<name>-cycle<N>.md` using the report format in §3.

### Agent A — Speed & Optimization (website + portal)
Audit bundle size, code splitting, `next/image` usage, font loading, render-blocking resources, unnecessary client components (`"use client"` where server would do), data-fetching waterfalls, missing caching/revalidation, duplicated Supabase queries, N+1 patterns in portal pages, middleware overhead, large dependencies. Run `next build` and read the route-size output. Check Core Web Vitals risks on `/`, `/pricing`, `/request`, `/how-it-works` and the heaviest portal views (missions list, quotes, invoices, CRM). Also flag security-adjacent speed items: security headers, image domains config, dependency vulnerabilities (`npm audit`).

### Agent B — Functionality & Ease of Use
Trace the core flows end to end in code: quote request (`/request` → `public_support_requests`), contact form, portal login/access request, mission lifecycle (request → quote → acceptance → crew assignment → closeout), invoicing, messaging threads, notifications, subscription/Stripe flow. Find: broken/dead paths, unhandled errors, missing loading/empty/error states, forms without validation or success feedback, race conditions, states a record can get stuck in, permission/RLS mismatches between UI and backend, confusing multi-step flows that could be fewer steps.

### Agent C — Regular User Simulation
Act as three personas against the running app (or production URLs read-only): (1) an aircraft owner requesting a maintenance ferry quote for the first time, (2) a returning portal member checking mission status, messages, and an invoice, (3) a pilot applying to join the network. Walk every step a real person would, on desktop and mobile viewport. Report anything confusing, surprising, slow, mislabeled, or broken — including copy that assumes knowledge a first-time visitor doesn't have. Do NOT submit real forms against production; stop at the submit step or use a local instance.

### Agent D — UI / Layout / Formatting Expert
Review visual consistency: spacing/typography scale, alignment, component consistency between public site and portal, responsive breakpoints (375px, 768px, 1440px), dark theme contrast (site theme `#050B14`), truncation/overflow with long tail numbers and names, table formatting in portal (missions, quotes, invoices, CRM), form layout, focus states, accessibility (contrast, alt text, labels, keyboard nav). Flag CSS dead code and inconsistent utility usage. Suggestions must be fixes/polish — for the public site, layout fixes are fine; redesigns are backlog.

### Agent E — Business / Operations Domain Expert
(business, tax, financial, accounting, operations, aviation, CRM, communications, marketing, analytics, data)
Review PORTAL features only against how the business actually runs:
- **Financial/accounting:** quotes vs invoices line-item mirroring, `billing_documents` numbering/sequences, payments state, pass-through-at-cost + flat coordination fee logic, subscription plan tiers/credits, SLA-miss plan-fee credit handling, expense capture, sales-tax fields on invoices, revenue recognition data quality, audit trail completeness.
- **Aviation/ops:** mission state machine correctness (insurance confirmed before movement — the "insurance gate"), crew credential/currency tracking and expiry reminders, aircraft records, closeout file completeness (agreement + invoice + receipts), pilot payment within 7 days tracking.
- **CRM/comms/marketing:** `crm_leads`/`crm_activities` pipeline stages and follow-up hygiene, communication templates coverage, notification delivery gaps, marketing consent/compliance events, lead-source attribution.
- **Analytics/data:** missing metrics the owner needs (quote turnaround vs SLA, win rate, margin per mission, pilot utilization, plan credit liability), data integrity issues (orphans, missing FKs in practice, stale statuses).
Report concrete fixes AND feature additions for the portal (features go to BACKLOG with business justification and rough effort).

---

## 3. Report Format (all agents)

Each finding, one block:
```
[ID] AGENT-CYCLE-SEQ (e.g. A-1-03)
Severity: P0 blocker | P1 bug | P2 improvement | P3 nice-to-have
Area: public-site | portal | api | db | infra
Where: file/route/table
Issue: <what and why it matters>
Proposed fix: <specific>
Type: bug | fix | feature-suggestion
```
Feature suggestions for the public site MUST be marked `OUT-OF-SCOPE (public site)` unless they optimize/secure/speed up.

---

## 4. The Loop (repeat until time is up)

Each cycle (~35–45 min):
1. **Time check** (Rule 1). Log elapsed in `loop-state.md`.
2. **Dispatch** all five agents in parallel. Cycle 1 = broad sweep; later cycles = agents go deeper on areas that produced P0/P1s, and verify previously applied fixes.
3. **Collect & triage** reports into `FINDINGS.md`: dedupe, order P0 → P3.
4. **Implement** in priority order, respecting Rules 2–4:
   - P0/P1 bugs: fix now.
   - P2 perf/security/UX fixes: fix if low-risk.
   - Feature suggestions: append to `BACKLOG.md` with justification — do not build.
5. **Verify:** lint, typecheck, `next build`; spot-check the changed routes. Log each applied fix in `CHANGELOG.md` with the finding ID.
6. **Commit** (`loop: cycle N — ...`). Do not push to `main`/production without explicit instruction — commit to a branch `loop/<date>`.
7. Time check → next cycle or Wind-Down.

Expected: with the primary task first, ~0–1 audit cycles will fit; without it, ~2–3.

---

## 4b. Single Review Pass — Role Permissions Implementation (runs ONCE)

Immediately after the primary task (§1b) is implemented, dispatch the five agents in parallel ONE time with this focused charter (in addition to nothing else — this pass is permissions-only):

- **A (Speed):** `can()` lookup cost per request, cache/`revalidateTag` correctness, no extra DB round-trips on hot portal pages.
- **B (Functionality):** every module × role × action behaves per `DEFAULT_PERMISSIONS`; deny paths redirect cleanly; no action file missed the `perm` argument; missing-row = deny actually holds.
- **C (User simulation):** log in mentally as client, crew, partner, admin — nav shows only permitted modules; no dead buttons; "no access" notice is clear, not an error page.
- **D (UI):** matrix page layout, toggle dependency logic (View off disables others; Edit/Delete on enables View), responsive, consistent with existing settings pages/kit.
- **E (Business/ops):** defaults make business sense (e.g. crew can't see invoices/CRM; partners scoped correctly); audit trail records old → new; no way for super_admin lockout; flag any module missing from the catalog.

Triage the five reports, fix P0/P1 immediately, log P2/P3 to FINDINGS.md/BACKLOG.md, re-run verification, commit. **This pass does not repeat.** Mark `permissions: reviewed ✓` in `loop-state.md`, then report the permissions task done in SUMMARY.md.

---

## 5. Optional deeper checks (only if time remains within budget)

- `EXPLAIN` the heaviest portal queries (missions list joins, invoice + line items) read-only against Supabase.
- Supabase advisors (security + performance) — read-only; log findings, do not apply migrations.
- Lighthouse/`next build --profile` comparison before vs after fixes.

---

## 6. Wind-Down (mandatory, ~10 min, triggered at T+120 or when finishing the in-progress task after T+120)

1. Finish ONLY the task in progress; abandon anything not started (log it as `DEFERRED` in FINDINGS.md).
2. Ensure the working tree builds; commit final state to `loop/<date>`.
3. Write `reports/loop-run-<date>/SUMMARY.md`:
   - Role permissions system: phases completed, single review pass done ✓/deferred, open items
   - Fixes applied (count by severity, with finding IDs)
   - Open bugs not fixed, in priority order
   - Portal feature suggestions (from BACKLOG, top 10 by business value)
   - Public-site out-of-scope suggestions (listed separately, untouched)
   - Recommended next run focus
4. Stop. Do not start a new cycle under any circumstance.
