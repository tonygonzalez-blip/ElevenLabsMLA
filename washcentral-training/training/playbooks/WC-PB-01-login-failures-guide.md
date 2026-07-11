# WC-PB-01 · PB-1 Login failures (Troubleshooting playbook)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This is a troubleshooting playbook, not a feature tour. A caller says "I can't log in," and you work a fixed sequence: read the symptom, run the checks in order, then resolve or escalate. The whole point of the order is to rule out the cheap causes before you touch anything. A wrong tenant code and a migrated login look identical to the caller and cost you nothing to check. An inactive account or a single sign-on account tells you the password is not even the problem. By the end you can take a login ticket from first question to escalation packet without ever performing a reset in the demo tenant.

## Audience and prerequisites

Internal Micrologic technicians on Tech Support. You should already know the three sign-in fields from WC-00-02 and be comfortable reading a WashCentral list from WC-01-04. Two Settings and audit pages carry this playbook: **System Users** and the audit **User Activity** log. You never change a password, flip an **ACTIVE** flag, or edit a user record in the demo tenant. Where a reset would happen is described in Step 10, but it is never done here.

## Navigation path

The playbook works across three surfaces. The caller's sign-in problem starts on the sign-in page, `login.html` (WC-00-02). The account itself is read at `Settings → Users & Security → System Users`. The login history is read at `IT & Support → Audit → User Activity`.

## Steps

One action per step. This is a read-only diagnostic sequence: locate controls, read columns, and never edit a record or perform a reset.

1. Take the ticket and set the order. **Expected:** you have the caller's username or email and their tenant, never their password. State the rule up front: you run the checks below in order, and you do not reset anything in the demo tenant. The reason the order matters is that the first two checks cost nothing and clear most tickets.

2. Check 1: the three sign-in fields. **Expected:** WashCentral asks for three values at sign-in, **Email**, **Password**, and **Tenant / Customer Code** (WC-00-02). Have the caller confirm all three. A wrong **Tenant / Customer Code** is the classic multi-tenant miss: the account is fine, but the login is being routed to the wrong company's data, so it goes nowhere. Confirm the tenant before you assume the password is wrong.

3. Check 2: is this a migrated client? **Expected:** if the client moved from WashAssist, their login did not change. *Migration note (source: Migration FAQ): credentials carry over from WashAssist unchanged, and WashCentral runs on the WashAssist data.* So a migrated "can't log in" is usually not a credential problem at all. Have them try their existing WashAssist username, password, and tenant code before you go near a reset. This one check saves a reset you should not be making.

4. Open **System Users**. **Expected:** from **Settings**, expand the **Users & Security** group in the left sidebar (**System Users**, **Security Level**, **Blacklisted**) and click **System Users**. The page opens with the card **System Users List**, a **Total Users** tile across the top, the search box "Search by name, code, or email…", and eight columns: **USER NAME**, **USER CODE**, **USER LEVEL**, **EMAIL**, **PHONE**, **ACTIVE**, **SSO**, and **LAST LOGIN**. **+ New Record** sits top-right; you do not click it.

5. Check 3a: does the account exist? **Expected:** search the caller with "Search by name, code, or email…" rather than scrolling. If nothing matches the username, email, or user code they gave you, the account may not exist in this tenant, which points back to Check 1 (wrong tenant) or a provisioning gap. *(July 9 note: in today's corpus the list showed "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." and the **Total Users** tile read "—". Row data loads from the agent service, so that message is a data-service problem, not an empty user list. The column structure is intact and is what this playbook reads.)*

6. Check 3b: read the **ACTIVE** column. **Expected:** **ACTIVE** shows whether the account is switched on. A disabled account cannot sign in no matter how correct the password is, and to the caller that looks exactly like a bad password. If **ACTIVE** is not **Yes**, you have your answer, and re-enabling it is an administrator action in production.

7. Check 3c: read the **SSO** column. **Expected:** **SSO** shows whether the user signs in through single sign-on. If **SSO = Yes**, the password lives in the identity provider, not in WashCentral, so a reset on this page does nothing. Stop the password thread and move to the matching single sign-on integration page instead (WC-12-09). If **SSO = No**, a WashCentral password reset is a valid fix path.

8. Check 3d: read the **LAST LOGIN** column. **Expected:** **LAST LOGIN** shows when the account last got in. A recent value means the account works and the current failure is probably a typo, a caps-lock, or the tenant code. A blank means the account has never signed in, which fits a new user who was never finished being set up. The value orients you toward "used to work" versus "never worked."

9. Check 4: the audit **User Activity** log. **Expected:** open `IT & Support → Audit → User Activity`. The **AUDIT** group lists three pages: **Audit Log**, **User Activity**, and **Change History**. The audit module records sign-in events (on the **Audit Log** page, the activity breakdown includes a **Login / Logout** category and a **Login** action appears in the rows), and **User Activity** is the per-user view of that history. Read the failed-login count for the account you are working: a run of failures points at a password or caps-lock problem, while zero attempts points at the caller never reaching the sign-in step, which sends you back to Check 1. Per the project's verified audit map, **User Activity** reports each user's logins, failed logins, and roles (DISCREPANCIES.md #18). *(July 9 note: the direct page URL returned an HTTP 404 in today's corpus, so the exact on-page column labels could not be re-confirmed today; where those labels would be read: TBD — parked, see the structured return.)*

10. Resolution: where a reset happens, described only. **Expected:** you now know whether a password reset is even the right fix. It is not performed in the demo tenant. In production there are two reset paths. Self-service: the caller uses **Forgot password?** on the sign-in page, which opens a **Reset password** panel and emails a reset link (WC-00-02). Administrator-side: an administrator resets the password from the user's own record in **System Users**. The exact edit-form layout for that reset is not observable in this corpus, so its controls are TBD — parked (see the structured return); the legacy path is described as opening the user's record, setting a new password, and saving. If **SSO = Yes** (Step 7), skip both: the reset lives with the identity provider.

11. Escalate with a clean packet. **Expected:** if the checks do not resolve it, escalate with the username, the tenant, the timestamps of the failed attempts, and screenshots. Never include the password, and mask any sensitive value in a screenshot. The packet lets the next tier reproduce the failure without re-interviewing the caller.

12. Recap the order. **Expected:** you ran it in sequence: three fields and the tenant code, the migration question, then **System Users** for **ACTIVE**, **SSO**, and **LAST LOGIN**, then **User Activity** for failed logins, and only then a reset in production or an escalation. The cheap checks come first on purpose, and nothing in the demo tenant was changed.

## Expected results

You can take a "can't log in" ticket and work it in order without guessing. You rule out a wrong **Tenant / Customer Code** and a migrated login before anything else, then read **System Users** to see whether the account is **ACTIVE**, whether it is an **SSO** account whose password lives elsewhere, and when it last signed in. You read the audit **User Activity** log for the failed-login count, and you decide between a production reset and an escalation. You never reset a password or change a record in the demo tenant, and your escalation packet carries the username, tenant, timestamps, and masked screenshots but never the password.

## Notes and troubleshooting (observed behavior only)

- A wrong **Tenant / Customer Code** is the single most common cause of a sign-in that goes nowhere. It is invisible to the caller because the account itself is healthy. Confirm it before you touch a password (WC-00-02).
- *Migration note (source: Migration FAQ):* migrated WashAssist credentials carry over unchanged. Treat a migrated client's "can't log in" as a not-a-credential problem first, and have them use their existing login. Working PB-1 in order is faster than resetting something that was never broken.
- **SSO = Yes** means the password is held by the identity provider. A reset in **System Users** will not help. Route it to the single sign-on integration page (WC-12-09).
- **ACTIVE** not equal to **Yes** is a full stop: a disabled account cannot sign in, and it reads to the caller like a bad password. Re-enabling is an administrator action in production.
- During the July 9 capture, **System Users** showed "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." in place of rows and the **Total Users** tile read "—". This is the same agent-service data state reported for the Users & Security lists in WC-12-06, not an empty tenant. Column structure and page layout were captured intact.
- The audit **User Activity** page (`audit-users.html`) returned an HTTP 404 on its direct URL in the July 9 corpus, while its sidebar entry renders as a live nav item on the working **Audit Log** page. Its column set (logins, failed logins, roles) is carried from the project's July 8 verified audit map (DISCREPANCIES.md #18) and is flagged for a re-walk.
- No password reset is performed anywhere in this playbook. The reset locations in Step 10 are described for production only. The **Edit System User** reset-form layout is not confirmed in this corpus and is parked.
- Surprise logouts that feel like a login failure are usually a session timeout, which is a different playbook (PB-2) and lesson (WC-01-03), not a credential problem.

## Knowledge check

1. A caller says their password stopped working, and you can see **SSO = Yes** on their **System Users** row. Should you reset the password in WashCentral? **Answer:** No. With **SSO = Yes** the password lives in the identity provider; a reset here does nothing. Route it to the single sign-on integration page (WC-12-09).
2. A migrated WashAssist client says they can no longer log in. What do you rule out first, and why? **Answer:** A credential-migration problem. *Migration note (source: Migration FAQ):* credentials carry over unchanged, so have them use their existing WashAssist login before considering a reset.
3. Which two surfaces answer "has this account ever signed in, and is it failing at the password step"? **Answer:** **System Users** (**LAST LOGIN**) for whether it ever got in, and the audit **User Activity** log for the failed-login count.

## Related lessons

WC-00-02 Signing in · WC-12-06 Users & Security · WC-13-02 Audit trio · WC-12-09 Integrations (SSO) · WC-01-03 Session behavior and timeouts · PB-2 Surprise logouts · WC-15-01 Migration.

**Verified against demo.washcentral.com on July 9, 2026.**
