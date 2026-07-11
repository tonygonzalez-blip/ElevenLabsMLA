# WC-12-06 · Users & Security (support-critical)

v1.1 · July 11, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 11, 2026.**

## Purpose

This lesson is a support reference for the four Settings pages that control who can sign in, what they are allowed to do, how long a session lasts, and which plates the wash blocks. You will read four lists: **System Users**, **User Levels**, **Security Levels**, and **Blacklisted**. Every screen here stays read-only for you. By the end you can answer the three tickets that land on these pages most often: a user cannot sign in, a user keeps getting logged out, and a user cannot approve a refund.

## Audience and prerequisites

Internal Micrologic technicians on Tech Support. You should be comfortable opening **Settings** and reading a WashCentral list (columns, search box, KPI tiles) from WC-01-04. Nothing is changed in this lesson. Changing a password, a user level, a security level, or a blacklist entry is production-admin work and is never done in the demo tenant.

## Navigation path

Three of the four pages sit together: `Settings → Users & Security → System Users`, `Settings → Users & Security → Security Level`, and `Settings → Users & Security → Blacklisted`. The fourth page, **User Levels**, is filed under a different group: `Settings → Automation → User Levels`. Knowing that split saves a hunt when a session-timeout ticket comes in.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. This is a read-only reference: locate **+ New Record** on each page but never click it, and never open a row.

1. Open **Settings** and expand the **Users & Security** group in the left sidebar. **Expected:** the group opens to three pages: **System Users**, **Security Level**, and **Blacklisted**. The lock icon marks it as the access-control group.

2. Click **System Users**. **Expected:** the **System Users** page opens with the card **System Users List** and eight columns: **USER NAME**, **USER CODE**, **USER LEVEL**, **EMAIL**, **PHONE**, **ACTIVE**, **SSO**, and **LAST LOGIN**. A **Total Users** tile sits across the top, the search box reads "Search by name, code, or email…", and **+ New Record** is top-right.

3. Read the four columns support leans on: **ACTIVE**, **SSO**, **LAST LOGIN**, and **USER LEVEL**. **Expected:** they answer a login ticket in sequence. **ACTIVE** shows whether the account is switched on. **SSO** shows whether the user signs in through single sign-on, which means the password lives in the identity provider rather than here. **LAST LOGIN** shows when the account last got in, and a blank there means it has never been used. **USER LEVEL** names the role, which is the key into the next two pages. (This is the PB-1 login-failure path.)

4. Note the search box and the count. **Expected:** you find any account with "Search by name, code, or email…". On the July 11, 2026 credentialed pass the **Total Users** tile read **8,022**, integration logins and the Micrologic support account included, and the list rendered live rows (top row **MLADev**, an **Administrator** account with a **2026-07-09 19:32** last login). The July 8 pass had recorded 8,021, so one account was added between passes. Search rather than scroll.

5. Go to **User Levels** through the **Automation** group: `Settings → Automation → User Levels`. **Expected:** the **Automation** group opens to **Task Scheduler**, **Task Parameters**, **Mass SMS Log**, and **User Levels**. **User Levels** is filed here, not under Users & Security, even though it is a security control. The page opens with the card **User Levels List**.

6. Read the **User Levels** columns and tiles. **Expected:** three columns, **NAME**, **SECURITY LEVEL**, and **SESSION TIMEOUT (MIN)**; three tiles, **Total Levels**, **Max Security Level**, and **Longest Timeout (min)**; and the search box "Search user levels…".

7. Read the level values. **Expected:** fourteen levels, shown below, with the tiles reading **Total Levels 14**, **Max Security Level 20**, and **Longest Timeout (min) 120**. The **SESSION TIMEOUT (MIN)** column answers "I keep getting logged out": **Cashiers** time out at 5 minutes, and so do **Managers**, **Sr.Manager**, **Level 00**, and **Level 01**. (Cross-reference PB-2 and WC-01-03.)

   | NAME | SECURITY LEVEL | SESSION TIMEOUT (MIN) |
   |---|---|---|
   | Administrator | 20 | 120 |
   | Anonymous | — | 20 |
   | Cashiers | 3 | 5 |
   | Customer Service | 10 | 120 |
   | Level 00 | 0 | 5 |
   | Level 01 | 5 | 5 |
   | Level 02 | 10 | 120 |
   | Managers | 10 | 5 |
   | MLA ReadOnly | 0 | 120 |
   | MLA Supervisor | 20 | 120 |
   | MLA Support | 0 | 120 |
   | MLAQA | 5 | 100 |
   | ReportOnly | 5 | 120 |
   | Sr.Manager | 10 | 5 |

   Values observed live on the July 11, 2026 credentialed pass; session-timeout figures cross-referenced to PARKED-ITEMS.md #9. Changed since July 8: the tenant then held thirteen levels; a fourteenth, **MLAQA** (security level 5, timeout 100 minutes), appears in the July 11 rows. All thirteen July 8 rows are otherwise unchanged.

8. Return to **Users & Security** and click **Security Level**. **Expected:** the **Security Levels** page opens. The sidebar link reads **Security Level** while the page reads **Security Levels**; same destination. The card is **Security Levels List**, with columns **NAME**, **LEVEL**, and **REFUND APPROVAL REQUIRED**; tiles **Total Levels**, **Require Refund Approval**, and **No Approval Needed**; and the search box "Search security levels…".

9. Read the security-level values and the refund gate. **Expected:** six levels, shown below, with the tiles reading **Total Levels 6**, **Require Refund Approval 3**, and **No Approval Needed 3**. Levels 0, 3, and 5 require refund approval (**Yes**) and levels 8, 10, and 20 do not (**No**). Put plainly: security level 5 or below asks permission to refund; 8 or above does not.

   | NAME | LEVEL | REFUND APPROVAL REQUIRED |
   |---|---|---|
   | Low | 0 | Yes |
   | LowMedium | 3 | Yes |
   | Medium | 5 | Yes |
   | HighMedium | 8 | No |
   | High | 10 | No |
   | SuperAdmin | 20 | No |

   Values observed live on the July 11, 2026 credentialed pass and identical to the July 8 verified pass; refund-approval figures cross-referenced to PARKED-ITEMS.md #5.

10. **[READ-ONLY] exercise:** trace a refund permission across the three pages. **Expected:** a person's role sets their **USER LEVEL** on **System Users**; each **User Level** carries a **SECURITY LEVEL** number on **User Levels**; and that number sets **REFUND APPROVAL REQUIRED** on **Security Levels**. So "why can't this manager approve a refund" is answered by reading the user's level, its security number, and the gate for that number. (Knowledge-check question 1.)

11. Open **Users & Security → Blacklisted**. **Expected:** the **Blacklisted** page opens (page title **Blacklisted**, screen breadcrumb **SETTINGS · BLACKLISTED PLATES**), card **Blacklisted Plates List**, columns **PLATE**, **TERMINAL**, **CREATED BY**, and **CREATED**, a **Total Blacklisted** tile, and the search box "Search blacklisted plates…".

12. **[READ-ONLY] exercise:** read what a Blacklisted row tells you. **Expected:** each row is a blocked plate. **PLATE** is the plate, **TERMINAL** is where the block was recorded, **CREATED BY** is the user who added it, and **CREATED** is when. For a "my plate won't scan" ticket, this is where you confirm whether a plate was deliberately blocked and who blocked it. (Cross-reference PB-6.) On the July 11 pass this demo tenant held no entries: the tile read **Total Blacklisted 0** and the body read "No blacklisted plates found. The POS database may not be configured for this tenant yet." An empty list here is a real state, not an error.

13. Locate the **+ New Record** button and stop. **Expected:** every page here carries **+ New Record**, and an admin can edit each list. For support work you read these pages, you do not change them. Passwords, levels, and blacklist entries are changed by an administrator in production. When an account uses **SSO**, a password reset here does nothing; that fix lives with the identity provider (WC-12-09).

14. Recap the four pages against the tickets they answer. **Expected:** **System Users** answers "can this person sign in" (**ACTIVE**, **SSO**, **LAST LOGIN**). **User Levels** answers "why do they keep getting logged out" (**SESSION TIMEOUT (MIN)**). **Security Levels** answers "why can't they approve a refund" (**REFUND APPROVAL REQUIRED** against their level). **Blacklisted** answers "why won't this plate scan" (**PLATE**, **CREATED BY**).

## Expected results

From Settings you can open the four access-control pages and read them without changing anything. You can find any account on **System Users** and read its **ACTIVE**, **SSO**, and **LAST LOGIN** state. You can read a session timeout off **User Levels**, read a refund-approval requirement off **Security Levels**, and connect the two through the **SECURITY LEVEL** number a user's role carries. And you can check a blocked plate on **Blacklisted** along with who added it and when. Opening or reading any of the four changes nothing.

## Notes and troubleshooting (observed behavior only)

- Row values in this guide were re-observed live on the July 11, 2026 credentialed pass; all four lists returned real rows and populated KPI tiles. (The July 9 sweep had hit an agent-service token issue that returned "Couldn't load … (Failed to fetch)" in place of rows — resolved; see PARKED-ITEMS.md #16.) Two data changes since July 8: **System Users** counts 8,022 accounts (was 8,021), and **User Levels** carries a fourteenth level, **MLAQA** (5 / 100 min).
- **Blacklisted** held zero entries on July 11, with the empty-state line "No blacklisted plates found. The POS database may not be configured for this tenant yet." Read that as an unconfigured/empty POS database for this tenant, not a load failure.
- **User Levels** sits under **Automation** in the sidebar, not under **Users & Security**. The other three pages are under **Users & Security**.
- The sidebar link is **Security Level** (singular); the page it opens is titled **Security Levels**.
- **SSO = Yes** means the password is managed in the identity provider, so a reset on **System Users** will not help. Check the matching SSO integration page instead (WC-12-09).
- Session-timeout values pair with the "Still there?" idle dialog covered in WC-01-03. The firing threshold for the demo credentials is parked (PARKED-ITEMS.md #9).
- Refund-approval values are cross-referenced to PARKED-ITEMS.md #5; running a refund end to end is out of scope and parked there.
- Orientation from the July 8 pass notes that **USER CODE** also serves as the POS login code. Treat that as orientation pending live confirmation, not a verified behavior.
- The **SSO** and **LAST LOGIN** columns, the per-level **SESSION TIMEOUT (MIN)**, and the per-level **REFUND APPROVAL REQUIRED** column are additions over the legacy WashAssist User Guide (project map, DISCREPANCIES.md #21). *Migration note (source: Migration FAQ): migrated WashAssist credentials carry over unchanged, so a migrated user signs in with their existing login.*

## Knowledge check

1. A manager says they cannot approve refunds. Which page and column explain it? **Answer:** **Security Levels**, the **REFUND APPROVAL REQUIRED** column, read against the manager's **SECURITY LEVEL** (found from **System Users → USER LEVEL**, then **User Levels**).
2. A cashier keeps getting logged out. Which page and column? **Answer:** **User Levels**, the **SESSION TIMEOUT (MIN)** column (**Cashiers** = 5 minutes).
3. "Who logged in as this account last?" Which two pages could answer? **Answer:** **System Users** (the **LAST LOGIN** column) and the Audit User Activity log (IT & Support → Audit; see PB-1 and WC-13-02).

## Related lessons

WC-01-03 Session behavior and timeouts · WC-12-09 Integrations (SSO) · WC-13-02 Audit trio · PB-1 Login failures · PB-2 Surprise logouts · PB-6 Tag/plate won't scan · PB-7 Membership changes.

**Verified against demo.washcentral.com on July 11, 2026.**
