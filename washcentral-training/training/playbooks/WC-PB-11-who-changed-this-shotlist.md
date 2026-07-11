# WC-PB-11 — Who changed this? · Snagit Shot List (operator-ready)

v1.1 · July 11, 2026 · Target output: **WC-PB-11-who-changed-this-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (9 steps).
**Verified against demo.washcentral.com on July 11, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/command-center.html`.
- [ ] Snagit: cursor highlight ON, click animation ON; no on-screen keystroke display needed (this playbook is navigation and reading, no keyboard entry).
- [ ] This is a read-only playbook. Do NOT click **Export** or **+ New Record** on the **Audit Log** (step 3), and never edit or delete an audit entry anywhere.
- [ ] Steps 4–6: reach **Change History** ONLY via the **AUDIT** sidebar group from the **Audit Log** page — never by typing the URL (`audit-changes.html` 404'd on the July 9 direct sweep). The page was captured live July 11: KPI band **84 / 420 / 12 / 408**, **Filters ▾** + **Search change history…**, columns **DATE/TIME · USER · MODULE · FIELD · OLD VALUE · NEW VALUE**, 3 rows led by **Monthly Price $29.99 → $34.99**. The parked title card is retired; record the live page.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then read. This is a diagnostic walk; no audit entry is ever edited.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | None — open on **Command Center** while narration frames the ticket and the read-only rule | Static Command Center; on-screen caption: "who + when + where → Audit Log · old → new values → Change History · never edit an audit entry" | 3s | Callout ① a simple two-page order graphic keyed to steps 3 and 6; no navigation yet |
| 2 | Navigate **IT & Support → Audit** | Lands on the **Audit Log** (breadcrumb **Audit › Audit Log**); the **AUDIT** sidebar group lists **Audit Log · User Activity · Change History** | 3s | Callout ② slow cursor down the three **AUDIT** entries; caption "User Activity is login history — that's PB-1, not this ticket" |
| 3 | Sweep the **Audit Log List** column headers; point to an **Updated** row; hover **Filters ▾** and the **Search audit log…** box (no clicks on action rows) | Columns **DATE/TIME · USER · ACTION · MODULE · RECORD · LOCATION · IP ADDRESS**; actions include **Updated · Created · Deleted · Login**; tiles **Events Today · This Week · Unique Users · Critical Events** and the **Action Types** panel sit above the list | 4s | Callout ③ slow sweep across the seven headers; zoom-in 150% on **USER** and **IP ADDRESS** (1.5s); STOP callout over **Export** and **+ New Record** (do not click); note Settings changes appear with **MODULE** = **Settings** |
| 4 | Click **Change History** in the **AUDIT** sidebar group (in-app navigation only) | Page opens: breadcrumb **Audit › Change History**; KPI tiles **84 Changes Today · 420 This Week · 12 Config Changes · 408 Data Changes**; panels **Change Volume / By Module / Change Types** | 4s | Callout ④ "in-app nav only — direct URL `audit-changes.html` 404'd July 9"; captured live July 11; brief sweep across the four tiles |
| 5 | Point to the **Filters ▾** control and the **Search change history…** box (read only, no edits) | The **Change History List** toolbar shows **Filters ▾**, **Search change history…**, and **Search**; narrowing scopes the list to one module or record | 3s | Callout ⑤ "filter or search — never scroll a busy log"; hover the controls, do not apply a filter on camera unless the take needs it; no edits |
| 6 | Point to the top change row: the field, its old value, its new value | Top row reads **2025-06-01 10:44 · M. Gonzalez · Settings · Monthly Price · $29.99 · $34.99** under columns **DATE/TIME · USER · MODULE · FIELD · OLD VALUE · NEW VALUE** (3 records) | 4s | Callout ⑥ zoom-in on the **$29.99 · $34.99** pair (1.5s); caption "the literal answer to what was it before"; columns confirmed live July 11 (matches DISCREPANCIES #18) |
| 7 | None — hold while narration assembles the answer from both pages | Static screen; on-screen caption: "Change History → field + old + new · Audit Log → USER + DATE/TIME + IP ADDRESS" | 3s | Callout ⑦ the two-page answer graphic; caption "give the exact values, not a paraphrase" |
| 8 | None — hold while narration lists the escalation packet | Static screen; on-screen checklist caption: "record · field · old + new values · user · timestamp · IP address · screenshots — correction in the record's own module, never here" | 3s | Callout ⑧ the packet checklist; STOP reminder "unauthorized-looking change = security escalation; IP ADDRESS + USER go first" |
| 9 | Navigate back to the **Audit Log** (or **Command Center**); slow cursor sweep | Recap state: **Audit Log** for who, when, where, and IP → **Change History** for the field-level old-to-new → exact answer or clean escalation. No audit entry was edited | 3s | Callout ⑨ tying the flow together; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 3:10 (see narration for the block-by-block total, pending render). If any unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. Steps 4–6 are recorded against a Change History page that could not be re-verified in the July 9 corpus; if it is unavailable, hold the parked title card rather than fabricate its layout or values.

## If Claude drives while you record

Once the live tenant is reachable I can execute steps 1–9 with the timings above on request; you run Snagit (or any 1920×1080 MP4 recorder) on the window. No action row is ever triggered: **Export** and **+ New Record** stay read-only holds, no audit entry is touched, and **Change History** is reached only through the **AUDIT** sidebar with any unshowable layout held as TBD — parked. Say "drive playbook PB-11" when you're rolling.
