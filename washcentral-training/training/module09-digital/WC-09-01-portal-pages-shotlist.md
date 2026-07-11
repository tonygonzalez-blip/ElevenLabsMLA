# WC-09-01 — Portal pages · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-09-01-portal-pages-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one.
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start on the **Digital** module with the **CUSTOMER PORTAL** group visible in the sidebar.
- [ ] Snagit: cursor highlight ON, click animation ON; no on-screen keystroke display needed (this lesson is pointer-only).
- [ ] Nothing open over the page: no command palette, no Ask Shyne modal, no idle prompt.
- [ ] Do NOT open any compose or send flow on **Portal Messages** or **Portal Notifications** (steps 9 and 11), and do NOT click **Export** on **Portal Members** (step 7).
- [ ] Steps 8–11 point to sidebar entries that currently return an HTTP 404 if clicked — hover only, never click. Their contents are TBD — parked (new parked item; see the guide's Notes).

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. Portal Members is a standard list page; the sidebar sits on the left the whole time.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open the **Digital** module on the left rail; slowly move the cursor down the **CUSTOMER PORTAL** sidebar group | Sidebar header reads **Digital**; the **CUSTOMER PORTAL** group lists five entries: **Booking Page (Customer)**, **Portal Members**, **Portal Messages**, **Portal Billing**, **Portal Notifications**; a **MOBILE** group sits below | 3s | Callout ① bracketing the five CUSTOMER PORTAL entries; slow top-to-bottom cursor sweep (about 2s); note MOBILE group is a separate lesson (WC-09-02) |
| 2 | Click **Portal Members** | Page opens: eyebrow **CUSTOMER PORTAL** above title **Portal Members**; breadcrumb `Customer Portal › Portal Members` | 3s | Callout ② on the title + breadcrumb; zoom-in 150% on the eyebrow/title (1.5s) |
| 3 | Point across the KPI strip (do not click) | Four KPIs in a row: **Registered** (1,840), **Active This Month** (1,240), **New This Week** (42), **Mobile Users** (68%) | 3s | Callout ③ bracketing the four KPIs; slow left-to-right cursor sweep (about 2s) |
| 4 | Point to each of the three insight cards in turn | **Member Growth** ("Last 12 months"), **By Plan** ("Plan distribution": Monthly Unlimited, Annual Plan, Monthly Basic, Trial), **Member Status** ("Account health": Active / Inactive / Suspended) | 4s | Callout ④ labelling the three cards; hover each card header ~1s; do not click a bar or segment |
| 5 | Point to the **Member List** card header, then its toolbar | Card labelled **PORTAL · MEMBERS** / **Member List** / "4 records"; toolbar shows **+ New Record**, **Export**, a **Search portal members…** box, **Filters ▾**, and **Search** | 3s | Callout ⑤ on the card title; STOP callout with a red "do not click" ring over **Export**; **+ New Record** hovered but not clicked |
| 6 | Point along the Member List column headers | Six columns: **NAME**, **EMAIL**, **MEMBER SINCE**, **PLAN**, **PORTAL STATUS**, **LAST LOGIN** | 4s | Callout ⑥ on the header row; extra emphasis ring on **PORTAL STATUS** ("check first for portal-login calls"); slow sweep across the headers (about 2.5s) |
| 7 | Point to the pagination row under the list | Footer reads **ROWS PER PAGE** 25 / 50 / 100, counter "1–4 of 4", pager `‹ 1 ›` | 2s | Callout ⑦ "read-only: reading, paging, searching change nothing"; **+ New Record** form and **Export** stay untouched (both parked/forbidden) |
| 8 | Hover **Booking Page (Customer)** in the sidebar — do NOT click | The entry is the customer-facing booking surface; its standalone page returned an HTTP 404 on July 9, so contents are TBD — parked | 2s | Callout ⑧ "entry confirmed; contents parked"; hover only, no click (clicking currently 404s) |
| 9 | Hover **Portal Messages** — do NOT click, do NOT open a compose/send flow | The portal-side messaging surface; a send-type area, never exercised in training; page returned an HTTP 404 on July 9, contents TBD — parked | 2s | Callout ⑨ with a red "no send" ring; hover only; nothing composed or sent |
| 10 | Hover **Portal Billing** — do NOT click | The portal-side billing surface; page returned an HTTP 404 on July 9, contents TBD — parked | 2s | Callout ⑩ "entry confirmed; contents parked"; hover only, no click |
| 11 | Hover **Portal Notifications** — do NOT click, do NOT send a notification | The portal-side notifications surface; a send-type area, never exercised; page returned an HTTP 404 on July 9, contents TBD — parked | 2s | Callout ⑪ with a red "no send" ring; hover only; nothing sent |
| 12 | Slowly sweep the cursor back up the **CUSTOMER PORTAL** group | Recap state: five entries in the group; **Portal Members** reads in full (KPIs + three cards + six-column roster); the other four are named and located with contents parked; nothing sent, edited, or exported | 3s | Callout ⑫ tying the group together; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 3:24 (narration estimate pending render). If any unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. Session-timeout behavior is out of scope here (see WC-01-03). If a sibling portal page is deployed after July 9 and resolves, re-verify and re-roll steps 8–11 before publishing.

## If Claude drives while you record

I can execute steps 1–12 live in the browser with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. No send or export is ever triggered — steps 8–11 hover the sidebar entries only, and step 5 stops at the **Export** guardrail. Say "drive lesson 09-01" when you're rolling.
