# WC-01-03 · Session behavior and timeouts (Foundations)

v1.1 · July 11, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 11, 2026.**

## Purpose

WashCentral ends a session that sits idle. Before it does, it warns you, and the warning is a countdown you can cancel with one click or a single keypress. This lesson shows that warning in both forms it takes, the **Still there?** dialog and the **⏱ Session expiring soon** toast, and then shows where the length of the idle window is set: the **Session Timeout (min)** column on **Settings › User Levels**. By the end you can recognize the warning, keep a session alive, and answer the most common support call about it, "the system keeps logging me out."

## Audience and prerequisites

Internal Micrologic technicians who are new to WashCentral. You should be signed in and on a dashboard, where WC-01-01 leaves you. WC-01-02 covered the header tools and set this behavior aside as out of scope; it is the subject here. No prior WashCentral experience is assumed.

## Navigation path

Two surfaces. The idle warning appears on top of whatever page you have open, so you can meet it from anywhere; this lesson shows it over **Command Center**. The setting that controls it lives in **Settings**: open Settings from the left rail, then choose **User Levels** in the Settings sidebar. The breadcrumb reads **Settings › User Levels**. In the current build (re-confirmed July 11) the **User Levels** entry sits under the **Automation** group of the sidebar.

## Steps

One action per step. The whole lesson is read-only: nothing here creates, edits, or sends. Hold each new screen for two to three seconds before moving on.

1. Start on **Command Center** and leave the mouse still. **Expected:** the normal dashboard, nothing changed. The idle warning only appears after the session has gone untouched for its timeout window, so in normal use it arrives on its own, over whatever page you left open. **[READ-ONLY]**

2. When the window is nearly up, look at the lower corner for the toast. **Expected:** a toast reading **⏱ Session expiring soon**, with the line **Auto-logout in 2:00** and a **Stay Active** button. This is the compact form of the warning, easy to miss if you are looking away from the corner.

3. At the same point a dialog opens in the center of the screen. **Expected:** a dialog headed **Still there?** with a **2:00 REMAINING** countdown and the line "Your session will end in 2:00 due to inactivity. Move your mouse or press any key to stay logged in." The two minutes tick down while it sits there.

4. Read the two buttons on the dialog. Do not click **Log Out Now**. **Expected:** **Stay Logged In** keeps you signed in and returns you to your work; **Log Out Now** ends the session immediately, without waiting for the countdown. Treat **Log Out Now** as a real logout, not a way to close the dialog.

5. Understand what happens if you do nothing. **Expected:** when the counter reaches **0:00** the session ends and you are sent back to sign in. Any unsaved work in progress is lost. The exact point at which the 2:00 warning starts, meaning how long the session must be idle first, is not timed for the demo credentials in this pass: TBD — parked (PARKED-ITEMS.md #9). **[READ-ONLY]**

6. Keep the session alive without waiting: move the mouse or press any key. **Expected:** the countdown stops, the dialog and toast clear, and you carry on where you were. The dialog spells this out, and **Stay Logged In** and **Stay Active** are shortcuts for the same result. Any real activity resets the clock.

7. Now find where that idle window is set. Open **Settings** from the left rail, then choose **User Levels**. **Expected:** the **User Levels** page, breadcrumb **Settings › User Levels**. This is where each user level's idle limit is configured.

8. Look at the band across the top. **Expected:** three tiles, **Total Levels**, **Max Security Level**, and **Longest Timeout (min)**. On the July 11, 2026 credentialed pass they read **14**, **20**, and **120**: fourteen levels, a top security level of 20, and a longest idle window of two hours. They summarize the table below. **[READ-ONLY]**

9. Read the table's column headers. **Expected:** three columns, **Name**, **Security Level**, and **Session Timeout (min)**. **Session Timeout (min)** is the number that matters here: the minutes of inactivity allowed for everyone at that level before the **Still there?** countdown begins. **[READ-ONLY]**

10. Read the values down the **Session Timeout (min)** column. **Expected:** fourteen rows spread from 5 minutes at the short end to 120 at the long end, observed live on the July 11, 2026 credentialed pass: **Cashiers**, **Managers**, **Sr.Manager**, **Level 00**, and **Level 01** at 5; **Administrator**, **Customer Service**, **Level 02**, and the MLA service and read-only levels at 120; **MLAQA** at 100; and **Anonymous** at 20 (cross-referenced to PARKED-ITEMS.md #9; values match the July 8 pass, plus the new **MLAQA** level). So a cashier on a five-minute limit is logged out after five idle minutes by design, not because anything is broken. **[READ-ONLY]**

11. Tie it back to the support desk. Do not click **+ New Record** or touch any row. **Expected:** when someone reports being logged out every few minutes, this page answers it. Find their level under **Name** and read its **Session Timeout (min)**; a low number is the cause, and it is a configuration choice, not a fault. You are only reading. **[READ-ONLY]**

**Knowledge check.** A site manager says "the system logs me out every few minutes." Which Settings page do you open first, and which two columns tell you why? Answer: **Settings › User Levels**; match the person to their level under **Name**, then read that level's **Session Timeout (min)**. A small timeout value is the whole explanation.

## Expected results

You can recognize the idle warning in both forms, the centered **Still there?** dialog and the corner **⏱ Session expiring soon** toast, and you know the 2:00 countdown is the warning, not the logout itself. You can keep a session alive with a click or a keypress. And you can open **Settings › User Levels** and read a level's **Session Timeout (min)** to explain why a given user is logged out when they are. The exact idle length before the warning fires for the demo credentials is parked (PARKED-ITEMS.md #9).

## Notes and troubleshooting (observed behavior only)

- The warning has two parts that count down together: the centered **Still there?** dialog (buttons **Stay Logged In** and **Log Out Now**) and a corner **⏱ Session expiring soon** toast (button **Stay Active**), both showing 2:00.
- You do not have to click anything to stay in. The dialog says so: "Move your mouse or press any key to stay logged in." **Stay Logged In** and **Stay Active** are shortcuts for the same result.
- **Log Out Now** ends the session on the spot. Treat it as a real logout button, not a way to dismiss the dialog.
- Session length is per user level, not per person. It is read from **Session Timeout (min)** on **Settings › User Levels**, so every user at the same level shares one idle limit.
- The per-level values quoted here were observed live on the July 11, 2026 credentialed pass (range 5 to 120 minutes, Cashiers at 5, Anonymous at 20, plus a new **MLAQA** level at 100), matching the July 8 verified pass; cross-referenced to PARKED-ITEMS.md #9. (The July 9 sweep had hit an agent-service token issue and returned "Couldn't load user levels (Failed to fetch)" instead of rows — resolved.)
- The exact idle time before the 2:00 warning appears for the demo credentials was not measured: TBD — parked (PARKED-ITEMS.md #9).
- Plan versus platform: the learning plan places User Levels under Users & Security; the live sidebar (re-confirmed July 11) shows the **User Levels** entry under the **Automation** group. The page title and its breadcrumb (**Settings › User Levels**) are unchanged.

## Related lessons

WC-01-01 Global navigation · WC-01-02 Search, location scope, and Ask Shyne · WC-12-06 Users & Security · PB-2 Surprise logouts / frozen session.

**Verified against demo.washcentral.com on July 11, 2026.**
