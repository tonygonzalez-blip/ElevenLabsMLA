# WC-PB-02 · PB-2 Surprise logouts / frozen session (Troubleshooting playbook)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

"The system keeps logging me out." "My screen froze." Both land on the support desk as surprise logouts, and most of them are the idle timeout working as configured. This playbook is the ordered check for that ticket: recognize the idle warning, read the user's level on **System Users**, read that level's **SESSION TIMEOUT (MIN)** on **User Levels**, and decide whether the logout is a configuration choice you explain or a fault you escalate. By the end you can settle the common case in two page reads and know exactly what to capture when it is genuinely wrong.

## Audience and prerequisites

Internal Micrologic technicians on Tech Support. You should be comfortable opening **Settings** and reading a WashCentral list (columns, search box, KPI tiles) from WC-01-04, and you should have seen the idle behavior in WC-01-03. Everything in this playbook is read-only. Changing a user level or a level's timeout is production-admin work and is never done in the demo tenant.

## Navigation path

This playbook works two Settings pages that sit in different sidebar groups. Open **Settings** from the left rail. **System Users** is under **Users & Security** (`Settings → Users & Security → System Users`). **User Levels** is filed under **Automation** (`Settings → Automation → User Levels`), not with the other access pages, so knowing the split saves a hunt when a timeout ticket comes in. The idle warning that drives most of these tickets appears over whatever page is open; this playbook meets it on **Command Center**.

## Steps

Ordered checks: symptom first, then the two page reads, then resolve or escalate. The whole playbook is read-only. Hold each new screen for two to three seconds before moving on.

1. Read the symptom before you read a setting. **Expected:** the ticket arrives in one of two shapes. "It keeps logging me out" is almost always the idle timeout ending an untouched session. "It froze" or "it went blank" is a different animal and can be a data-service connection, not a timeout at all. Decide which one you are chasing before you open anything. **[READ-ONLY]**

2. Recognize the idle warning so you can tell a normal logout from a fault. **Expected:** when a session sits idle, two things count down together. A centered dialog headed **Still there?** shows **2:00 REMAINING** and the line "Your session will end in 2:00 due to inactivity. Move your mouse or press any key to stay logged in.", with buttons **Stay Logged In** and **Log Out Now**. A corner toast reads **⏱ Session expiring soon** with "Auto-logout in 2:00" and a **Stay Active** button. If the user saw this, walked away, and let it reach 0:00, the logout is the platform doing its job, not a bug. Any real activity resets the clock. (Full behavior in WC-01-03.) **[READ-ONLY]**

3. Check one: find the user's level. Open `Settings → Users & Security → System Users` and find the account with the search box "Search by name, code, or email…". Read its **USER LEVEL**. **Expected:** the **System Users** page with the card **System Users List**, columns **USER NAME**, **USER CODE**, **USER LEVEL**, **EMAIL**, **PHONE**, **ACTIVE**, **SSO**, and **LAST LOGIN**, a **Total Users** tile, and **+ New Record** top-right. The **USER LEVEL** value is the key into the timeout table on the next page. Search rather than scroll. **[READ-ONLY]**

4. Note the page's load state before you trust a blank. **Expected:** in the July 9 capture the list showed "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." in place of rows, and the **Total Users** tile read "—". Row data on this page loads from the agent service, so that banner is a data-service connection problem, not an empty user list. This is also your "frozen screen" branch: if the user's own screen shows this exact banner rather than a logout, their issue is the data service, and it routes differently from a timeout. **[READ-ONLY]**

5. Check two: read the level's timeout. Go to `Settings → Automation → User Levels`. **Expected:** the **Automation** group opens to **Task Scheduler**, **Task Parameters**, **Mass SMS Log**, and **User Levels**. The **User Levels** page shows the card **User Levels List** with three columns, **NAME**, **SECURITY LEVEL**, and **SESSION TIMEOUT (MIN)**, three tiles, **Total Levels**, **Max Security Level**, and **Longest Timeout (min)**, and the search box "Search user levels…". **SESSION TIMEOUT (MIN)** is the minutes of inactivity a level allows before the **Still there?** countdown starts. **[READ-ONLY]**

6. Interpret the number against the level from step 3. **Expected:** timeouts run from 5 minutes at the short end to 120 at the long end. The five short-timeout levels, **Cashiers**, **Managers**, **Sr.Manager**, **Level 00**, and **Level 01**, are set to 5 minutes and log out fast by design; **Anonymous** is 20; **Administrator** and the service and read-only levels are 120. So a cashier idle for five minutes gets the **Still there?** dialog, and two minutes later the logout, which is configuration and not a fault. (Values recorded on the July 8, 2026 verified pass; session-timeout figures cross-referenced to PARKED-ITEMS.md #9 and the full table in WC-12-06. In the July 9 corpus the rows did not load and the page showed "Couldn't load user levels (Failed to fetch). Check your connection to the AI agent service." with the top tiles blank.) **[READ-ONLY]**

7. Resolve the common case. **Expected:** if the observed logout timing matches the level's **SESSION TIMEOUT (MIN)**, the timeout is your answer and there is nothing to escalate. Tell the user the number is a setting for their level, show them how to stay in, and note that an administrator can raise that level's timeout in production if the role genuinely needs longer. To keep a session alive without waiting, move the mouse or press any key, or click **Stay Logged In** or **Stay Active**. Treat **Log Out Now** as a real logout, not a way to dismiss the dialog. **[READ-ONLY]**

8. Escalate a genuine contradiction. Do not click **Log Out Now** and do not touch **+ New Record**. **Expected:** escalate when the behavior fights the configured timeout, such as a user logged out well before their level's window, or a frozen session with no **Still there?** dialog at all. First rule out a device or browser switch: sessions are device- and browser-bound, so a user who moves browsers or machines re-authenticates by design *(per Micrologic platform documentation)*. Then capture the user's **USER LEVEL**, the configured **SESSION TIMEOUT (MIN)**, and the observed time-to-logout, plus their device and browser, and log a support ticket to IT & Support with the username (never a password), the tenant, and timestamps. The exact idle length before the 2:00 warning fires for the demo credentials was not measured: TBD — parked (PARKED-ITEMS.md #9). **[READ-ONLY]**

**Knowledge check.** A site manager reports being logged out every few minutes. Which two pages and which two columns settle it, and what would turn it from an explanation into an escalation? Answer: **System Users** for their **USER LEVEL**, then **User Levels** for that level's **SESSION TIMEOUT (MIN)**. A small value is the whole explanation. It becomes an escalation only if the logout happens well before that configured window, or the session freezes with no **Still there?** warning at all; capture the level, the configured timeout, and the observed timing first.

## Expected results

You can separate a "surprise logout" into the idle timeout, a data-service freeze, and a genuine fault. You can read a user's **USER LEVEL** on **System Users**, read that level's **SESSION TIMEOUT (MIN)** on **User Levels**, and decide in two page reads whether the logout is expected. When it is expected you explain the setting and show how to stay in; when it contradicts the configured timeout you capture the level, the configured timeout, and the observed timing and escalate. The exact idle length before the 2:00 warning fires for the demo credentials is parked (PARKED-ITEMS.md #9).

## Notes and troubleshooting (observed behavior only)

- The idle warning has two parts that count down together: the centered **Still there?** dialog (buttons **Stay Logged In** and **Log Out Now**) and the corner **⏱ Session expiring soon** toast (button **Stay Active**), both showing 2:00. Moving the mouse or pressing any key resets the clock; the dialog says so.
- **Log Out Now** ends the session on the spot. Treat it as a real logout button, not a way to close the dialog.
- Session length is per user level, not per person. It is read from **SESSION TIMEOUT (MIN)** on **User Levels**, so every user at the same level shares one idle limit.
- **User Levels** sits under **Automation** in the sidebar, not under **Users & Security** with **System Users**. The page title and breadcrumb (**Settings › User Levels**) are unchanged.
- During the July 9 capture both pages showed a "Failed to fetch. Check your connection to the AI agent service." banner in place of rows, and their KPI tiles read "—". Row data loads from the agent service, so that message signals a data-service connection problem, not an empty list. A user seeing that banner has a data-service issue, which is a different ticket from an idle logout. The column structure and layout were captured intact.
- Per-level timeout values (range 5 to 120 minutes; **Cashiers**, **Managers**, **Sr.Manager**, **Level 00**, **Level 01** at 5; **Anonymous** at 20) come from the July 8, 2026 verified pass and are cross-referenced to PARKED-ITEMS.md #9 and the full table in WC-12-06. The July 9 corpus confirms the three **User Levels** column headers only.
- The exact idle time before the 2:00 warning appears for the demo credentials was not measured: TBD — parked (PARKED-ITEMS.md #9).
- Sessions being device- and browser-bound is an attributed architecture statement *(per Micrologic platform documentation)*, not observed behavior; rule a device or browser switch in or out before escalating.
- Escalation for this playbook is a support ticket to IT & Support per your team's process, carrying the user's level, the configured timeout, the observed timing, and masked identifiers. Migration-related sign-in questions route to Jira per the Migration FAQ, not here.

## Related lessons

WC-01-03 Session behavior and timeouts · WC-12-06 Users & Security · PB-1 Login failures.

**Verified against demo.washcentral.com on July 9, 2026.**
