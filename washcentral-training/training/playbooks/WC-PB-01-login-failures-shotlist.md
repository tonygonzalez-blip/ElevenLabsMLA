# WC-PB-01 — PB-1 Login failures · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-PB-01-login-failures-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (12 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/command-center.html`.
- [ ] Snagit: cursor highlight ON, click animation ON; no keystroke display needed (this playbook is navigation and reading only).
- [ ] This is a read-only diagnostic walk. Do NOT click **+ New Record**, do NOT open a user row's edit form, do NOT perform any password reset. Step 10 is described in narration only; nothing is reset on camera.
- [ ] Corpus states to expect: on the July 9 capture, **System Users** showed "Couldn't load records (Failed to fetch)…" with **Total Users** reading "—", and the audit **User Activity** page returned a 404 on its direct URL. If the recording tenant shows either state, hold on it and let the narration carry the point (see Steps 5 and 9); if it shows live rows, keep every caller-identifiable value masked or scrolled past.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. This walk reads two pages; it never edits a record.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | None — open on Command Center; hold a clean frame while the playbook is framed | Command Center, nothing open; the header shows **Search ⌘K**, **Ask Shyne**, and the avatar top-right | 3s | Callout ① "Symptom: I can't log in — run the checks in order"; title-card overlay listing the surfaces used; no click |
| 2 | None on platform — hold the frame while Check 1 is explained; optionally cut to a still of the sign-in page's three fields | Concept beat: the three sign-in values **Email**, **Password**, **Tenant / Customer Code**; a wrong tenant code routes the login to the wrong company | 3s | Callout ② "Check 1: three fields — wrong Tenant / Customer Code is the classic miss"; if a login-page still is used, it must be a WC-00-02 asset with no credentials on it |
| 3 | None on platform — hold the frame while Check 2 is explained | Concept beat: migrated WashAssist clients keep their login unchanged | 3s | Callout ③ "Check 2: migrated? Credentials carry over — Migration FAQ"; footer source line "Source: Migration FAQ"; no platform data shown |
| 4 | Open **Settings**; expand **Users & Security**; click **System Users** | The **System Users** page opens: card **System Users List**, **Total Users** tile top, search box "Search by name, code, or email…", columns **USER NAME · USER CODE · USER LEVEL · EMAIL · PHONE · ACTIVE · SSO · LAST LOGIN**, **+ New Record** top-right | 3s | Callout ④ bracketing the eight column headers; STOP callout with a red "do not click" ring over **+ New Record**; slow left-to-right sweep across the header row (about 2s) |
| 5 | Click the search box "Search by name, code, or email…" and point to it (do not type a real caller's value on camera) | Search field focused; the list state renders below. On the July 9 capture this is "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." with **Total Users** = "—" | 3s | Callout ⑤ "Check 3a: does the account exist? Search, don't scroll"; if the failed-fetch banner shows, callout "data-service state, not an empty tenant"; keep any typed fragment non-identifiable, then clear it |
| 6 | Point to the **ACTIVE** column header (do not open a row) | **ACTIVE** column highlighted; a disabled account cannot sign in | 3s | Callout ⑥ "Check 3b: ACTIVE = Yes?"; zoom-in 150% on the **ACTIVE** header (1.5s); do not click any cell |
| 7 | Point to the **SSO** column header | **SSO** column highlighted; **SSO = Yes** means the password lives in the identity provider | 3s | Callout ⑦ "Check 3c: SSO = Yes → reset lives at the identity provider, not here (WC-12-09)"; zoom-in 150% on the **SSO** header (1.5s) |
| 8 | Point to the **LAST LOGIN** column header | **LAST LOGIN** column highlighted; recent value = account works, blank = never signed in | 3s | Callout ⑧ "Check 3d: LAST LOGIN — used to work vs never worked"; zoom-in 150% on the **LAST LOGIN** header (1.5s) |
| 9 | Navigate `IT & Support → Audit → User Activity` (via the **AUDIT** sidebar group) | The **AUDIT** group shows **Audit Log · User Activity · Change History**; **User Activity** is the per-user login history. Note: on the July 9 capture the direct **User Activity** URL returned a 404; the **Audit Log** page's activity breakdown includes a **Login / Logout** category and a **Login** action row | 4s | Callout ⑨ "Check 4: User Activity — failed-login count"; if User Activity 404s in the recording tenant, hold on the sidebar showing the three audit pages and let narration carry it; do not fabricate rows; parked note on-screen "User Activity columns — verified map DISCREPANCIES #18" |
| 10 | None — hold the **System Users** frame while the reset paths are described | Concept beat: reset is production-only. Self-service **Forgot password?** (WC-00-02) or an administrator from the user's own **System Users** record; SSO users go to the identity provider | 4s | Callout ⑩ "Where a reset happens — never in demo"; second STOP callout reinforcing no edit-form is opened; the **Edit System User** reset form is not shown (parked) |
| 11 | None — hold a clean frame while the escalation packet is listed | Concept beat: escalate with username, tenant, failed-attempt timestamps, and masked screenshots; never the password | 3s | Callout ⑪ "Escalate: username, tenant, timestamps, masked screenshots — never the password"; ensure nothing sensitive is visible in frame |
| 12 | None — return to a clean Command Center frame for the recap | Recap state: three fields and tenant → migration question → System Users (ACTIVE / SSO / LAST LOGIN) → User Activity (failed logins) → reset in production or escalate | 3s | Callout ⑫ tying the ordered checks together; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 4:08 (estimated narration total ~248s at ~145 wpm; final figure pending render). If any unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. Never open a user record's edit form and never perform a reset while recording; Step 10 is narration only.

## If Claude drives while you record

I can execute the read-only steps 4–9 live (open **System Users**, sweep the columns, then the audit **User Activity** navigation) with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. No record is edited, **+ New Record** is never clicked, and no password reset is performed — Steps 2, 3, 10, 11, and 12 are concept/recap beats held on a clean frame. Say "drive playbook PB-1" when you're rolling.
