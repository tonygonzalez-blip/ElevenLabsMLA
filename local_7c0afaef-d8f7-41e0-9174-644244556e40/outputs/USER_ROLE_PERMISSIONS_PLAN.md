# AMG Portal — Role Permissions System: Implementation Plan

**Goal:** An admin-editable permission matrix controlling what each role (client, crew, admin, partner, super_admin) can **View/List/Search**, **Add/Copy**, **Edit**, and **Delete** in every portal module — changeable from a settings page without code deploys.

---

## 1. Current State (verified against the repo & live database)

| Layer | Today | File |
|---|---|---|
| Roles | `client, crew, admin, partner, super_admin` hard-coded | `lib/portal/constants.ts` (`PORTAL_ROLES`) |
| Page guards | `requireUser` / `requireRole` / `requireSuperAdmin` | `lib/portal/session.ts` |
| Server action guards | `actor(roles?: PortalRole[])` — every action file calls it (e.g. `actor(["admin"])` in `quotes.ts`) | `app/portal/actions/_helpers.ts` |
| Navigation | `DECK_NAV` per role, static | `lib/portal/constants.ts` |
| Database | 60+ tables, RLS enabled, role stored on `profiles` — **no permissions table exists** | Supabase project `AMG Aviation Portal` |
| Audit | `audit_events` table (in use) | `lib/portal/audit.ts` |

Everything funnels through two choke points (`actor()` for writes, layout guards for pages). That makes this a clean retrofit: we swap hard-coded role lists for a database-backed lookup **at those same choke points**.

---

## 2. Data Model (Supabase migration)

```sql
create table public.role_permissions (
  id uuid primary key default gen_random_uuid(),
  role text not null check (role in ('client','crew','admin','partner','super_admin')),
  module text not null,          -- e.g. 'quotes', 'missions', 'documents'
  action text not null check (action in ('view','add','edit','delete')),
  allowed boolean not null default false,
  updated_by uuid references public.profiles(id),
  updated_at timestamptz not null default now(),
  unique (role, module, action)
);

alter table public.role_permissions enable row level security;
-- SELECT: any authenticated portal user (needed to render their own UI)
create policy "read permissions" on public.role_permissions
  for select to authenticated using (true);
-- Writes only via service-role server actions (no insert/update/delete policies)
```

Notes:
- **`copy` maps to `add`** — duplicating a record is creating one. (Keep a separate `copy` action only if you ever want "can duplicate but not create from scratch.")
- **`view` covers list, search, and detail view** — one switch, as you described.
- Missing row = **deny** (with code-level defaults as fallback, below).
- Every change writes an `audit_events` entry (who changed what permission, old → new).

## 3. Permission Catalog (code)

New file `lib/portal/permissions.ts`:

- `PERMISSION_MODULES` — the registry of controllable modules, grouped to mirror `DECK_NAV`:
  - **Operations:** missions (mission control / trips / support requests), calendar, tasks
  - **Directory:** clients, crew, aircraft, partners, users, passengers
  - **Billing:** quotes, invoices, payments, receivables, subscriptions
  - **Finance:** expenses, receipts, financial-analytics
  - **Pipeline:** crm, form-submissions, network-applications, user-approvals, waitlist
  - **Comms & Files:** documents, messages, emails, notifications
  - **Governance:** compliance, security-review, audit-log, system-health
  - **System:** settings, website-editor (super_admin)
- `DEFAULT_PERMISSIONS` — a matrix that exactly reproduces today's behavior (seeded into the table; also the fallback if a row is missing).
- `can(user, module, action): Promise<boolean>` — the single lookup used everywhere. **`super_admin` always returns true** (cannot be locked out).
- Per-request memoization + short-TTL cache, invalidated when the matrix is saved (`revalidateTag('role-permissions')`).

## 4. Enforcement (three layers, same source of truth)

1. **Server actions (the security boundary).** Extend `actor()` in `app/portal/actions/_helpers.ts`:
   ```ts
   actor(roles?: PortalRole[], perm?: { module: Module; action: Action })
   ```
   Existing role check stays; when `perm` is passed it additionally checks `can()`. Then update call sites file-by-file (~25 action files, mechanical change, e.g. `actor(["admin"], { module: "quotes", action: "add" })` in `createQuote`).

2. **Pages.** Role-section layouts (`app/portal/{client,crew,admin,partner}/...`) already gate by role; add a `requirePermission(module, 'view')` guard on module pages → redirect to dashboard with a "no access" notice.

3. **UI visibility (UX, not security).**
   - Filter `DECK_NAV` items by `view` permission when rendering `portal-shell.tsx` (each nav item gets an optional `module` key).
   - A server-provided `permissions` object for the session user flows into pages so Add/Edit/Delete/Copy buttons and bulk-action toolbars render only when allowed.

## 5. Admin UI — `/portal/admin/settings/permissions`

Lives beside the existing settings pages (`app/portal/admin/settings/`), built from the existing kit (`SectionCard`, `FilterTabs`, `DataTable`, `StatusBadge`).

- **Editing is super_admin only.** The page and its save action are guarded with `requireSuperAdmin()` from `lib/portal/session.ts`; admins can view the matrix read-only (or not see it at all — default: hidden from admins entirely).
- **Role tabs** across the top (Client, Crew, Admin, Partner — super_admin is not editable, always full access).
- **Module rows grouped by section** (Operations, Billing, …) with four toggles per row: View · Add/Copy · Edit · Delete.
- Dependency logic: turning off **View** disables the other three; turning on Edit/Delete auto-enables View.
- **Save** (server action guarded by `requireSuperAdmin()`, service-role write), **Reset to defaults**, and a **change history** panel reading from `audit_events`.
- Guard rail: since super_admin always has full access by design, there is no way to lock yourself out.

## 6. Phased Rollout

| Phase | Work | Risk |
|---|---|---|
| **1. Foundation** | Migration + seed from `DEFAULT_PERMISSIONS` + `lib/portal/permissions.ts` + tests. **Zero behavior change.** | None |
| **2. Admin UI** | Permissions matrix page + save action + audit logging. Editable but not yet enforced. | None |
| **3. Enforcement** | Extend `actor()`; wire call sites module-by-module (start: quotes → invoices → missions → documents → the rest); add page `view` guards. | Test each module per role |
| **4. UI polish** | Nav filtering, button visibility, "no access" states. | Low |
| **5. QA & ship** | Per-role sweep of all routes (repo already has a 69-route QA precedent), `npm run lint && npm run typecheck && npm run test && npm run build`, deploy preview → production. | — |

Each phase is a separate PR; the system stays deployable at every step because seeds mirror current behavior.

## 7. Decisions

1. **Who can edit the matrix** — ✅ Decided: **super_admin only**. Admins are governed by the matrix like every other role but cannot change it.
2. **Notifications / messages / own settings** — leave always-on per role (recommended) or matrix-controlled too?
3. **Future roles** — this design keeps the five fixed roles. Creating brand-new custom roles from the UI is a bigger lift (role column checks, RLS policies, nav, routing) — recommend deferring.
4. **Finer actions later** — the model extends cleanly to actions like `approve`, `send`, `export` per module if you want them (e.g. "crew can add expenses but not send quotes" already falls out of module separation).
