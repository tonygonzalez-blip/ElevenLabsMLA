# WC-13-02 — Audit trio (Audit Log, User Activity, Change History) · Narration Script

**Verified against demo.washcentral.com on July 11, 2026.** v1.0 (spoken script unchanged; non-spoken notes updated July 11, 2026) · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (16 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 16 blocks `WC-13-02-s01.mp3`…`WC-13-02-s16.mp3` + joined `WC-13-02-full-narration-v1.0.mp3` (228.88s ≈ 3:49). Step duration = audio + 0.4 s. Per-step render seconds: s01 13.48 · s02 12.36 · s03 14.37 · s04 11.15 · s05 13.71 · s06 13.71 · s07 18.83 · s08 14.29 · s09 10.45 · s10 13.87 · s11 16.59 · s12 10.45 · s13 11.96 · s14 13.17 · s15 17.32 · s16 16.77.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-13-02-s01.mp3` … `WC-13-02-s16.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Timestamps below are estimates** at ~145 wpm plus break time plus the 0.4 s tail; they will be replaced with measured per-step seconds after render. Estimated total ≈ 4:31; expressive eleven_v3 delivery will likely land nearer 4:50–5:00. Per-step estimates (seconds): s01 15.5 · s02 17.1 · s03 15.5 · s04 13.8 · s05 19.0 · s06 15.5 · s07 23.3 · s08 18.3 · s09 14.2 · s10 16.3 · s11 19.6 · s12 12.6 · s13 15.9 · s14 17.3 · s15 17.5 · s16 19.4.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and page load land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what each page means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- IT & Support → "I-T and Support"
- IP → "I-P" (as in the I-P address column)
- Shyne → "Shine"
- ALPR → "A-L-P-R" · POS → "P-O-S"
- $29.99 → "twenty-nine ninety-nine" · $34.99 → "thirty-four ninety-nine"

### Scope notes (non-spoken)

- Covers the three AUDIT pages under IT & Support: Audit Log, User Activity, Change History. This is a read-only tour; no rows are opened, nothing is exported, nothing is created.
- **Export** and **+ New Record** on the Audit Log are named once as a guardrail and never clicked.
- **User Activity** and **Change History** are reached only from the AUDIT sidebar links (their direct URLs returned HTTP 404 in the July 9 sweep). The July 11 credentialed pass captured both live (`audit-users-inapp.json`, `audit-changes-inapp.json`), so their values and rows are now observed — see the v1.1 guide/shot list. The spoken lines describe what each page is *for* and remain accurate against the July 11 captures; no re-render needed.
- Session-timeout ("Still there?") behavior is out of scope — it belongs to lesson 1.3.

## Timed script

[00:00 | Step 1 — AUDIT group]
Open I-T and Support. <break time="1.4s" /> Down the sidebar, past the support tools, sits a small group called Audit. Three pages. Between them they answer almost every who-did-this question a client will ever send you.

[00:15 | Step 2 — Open Audit Log]
Open the Audit Log. <break time="1.4s" /> This is the master feed. Every meaningful event on the platform lands here in one running list, newest first, with a dashboard on top to read the shape of it before you dig.

[00:32 | Step 3 — KPI band]
Start with the four tiles. <break time="1.0s" /> Events today, events this week, how many different people were active, and how many events tripped a critical flag. One glance tells you whether today looks normal or busy.

[00:48 | Step 4 — Event Volume]
To the left, the yearly trend. <break time="1.0s" /> Twelve months of logged activity in a single line, ticking up. It's context, not an alarm: is the platform getting busier, or holding steady.

[01:01 | Step 5 — Action Types]
Next, the split by action. <break time="1.2s" /> Most of what gets logged is edits and new records. Logins are a chunk. Deletions are the thin slice at the bottom, and on a support ticket, that thin slice is usually the one you came for.

[01:20 | Step 6 — Event Severity]
Beside it, severity. <break time="1.0s" /> Nearly everything is normal. A little is a warning. A sliver is critical, and that sliver is the same three events the top tile just flagged. Two views of one number.

[01:36 | Step 7 — Audit Log List]
Now the list itself. <break time="1.4s" /> Read a row left to right and it tells a whole story: when, who, what they did, in which module, to which record, at which location, and the I-P address it came from. There are Export and New Record buttons up here. Leave them. You're reading, not changing.

_[Director: do not click Export or + New Record; sweep the headers only.]_

[02:00 | Step 8 — Deleted row]
Find the deleted event. <break time="1.4s" /> Here it is: a payment record, removed, tied to a name, a location, and an I-P. That's the power of this page. When something goes missing, you don't guess who touched it. You read the row.

[02:18 | Step 9 — User Activity]
Move to User Activity. <break time="1.4s" /> Where the Audit Log tracks events, this page tracks people at the door. Who's signing in, how often, and who keeps bouncing off the login screen.

_[Director: reach User Activity from the AUDIT sidebar link only; its direct address 404'd on July 9. Page verified live July 11: KPI band 14 / 28 / 42 min / 3, columns USER · ROLE · LAST LOGIN · LOGINS THIS MONTH · LOCATION · STATUS.]_

[02:32 | Step 10 — User Activity KPIs]
Its tiles lead with the sign-in picture. <break time="1.0s" /> Active users, logins today, average session length, and the one you'll reach for most: failed logins. When a cashier says they're locked out, that number is where you start.

[02:48 | Step 11 — User Activity columns]
The table fills in the rest. <break time="1.0s" /> Each person, their role, when they last got in, how many times this month, from where, and whether the account is active. It answers a quiet but common question: is this user actually signing in, and as what.

[03:08 | Step 12 — Change History]
Last page. Change History. <break time="1.4s" /> The Audit Log tells you a record was updated. This one tells you exactly which field moved, and what it was before.

_[Director: reach Change History from the AUDIT sidebar link only; its direct address 404'd on July 9. Page verified live July 11: KPI band 84 / 420 / 12 / 408, columns DATE/TIME · USER · MODULE · FIELD · OLD VALUE · NEW VALUE.]_

[03:20 | Step 13 — Change History KPIs]
The tiles count the churn. <break time="1.0s" /> How many changes today, how many this week, and how the load splits between configuration and everyday data. It's a pulse on how much is being edited under the hood.

[03:36 | Step 14 — Change History columns]
But the columns are the payoff. <break time="1.2s" /> Alongside the usual when and who, this page names the exact field that changed and lays the old value and the new value side by side. No other audit page does that.

[03:53 | Step 15 — Price-change example]
Picture a membership price. <break time="1.0s" /> The plan's example is a monthly rate moving from twenty-nine ninety-nine to thirty-four ninety-nine. One row, before on one side, after on the other. When a client swears their price jumped, this is the receipt.

_[Director: verified live July 11 — the top Change History row IS the example: 2025-06-01 10:44 · M. Gonzalez · Settings · Monthly Price · $29.99 · $34.99. Hold on that row; the spoken "the plan's example is" phrasing stays accurate since the plan's example matches the live row.]_

[04:11 | Step 16 — Recap]
So, three pages, three questions. <break time="0.8s" /> What happened, and from what machine? That's the Audit Log. Who's getting in, and who isn't? User Activity. Who changed which field, and to what? Change History. Match the ticket to the page, and the answer is already waiting.

_(Estimated total ≈ 4:31 at ~145 wpm; measured seconds and the assembled duration will replace these estimates on render.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, column names, the navigation paths, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and inside director notes.
- Corpus-grounding respected: Audit Log lines trace to `verification/2026-07-09/digests/audit-log.json` and the matching screenshot. User Activity and Change History are described at the "what the page is for" level; the July 11 in-app captures (`verification/2026-07-11/digests/audit-users-inapp.json`, `audit-changes-inapp.json`) confirmed every spoken claim, so this script needs no re-render. Spoken lines untouched July 11; only these non-spoken notes were updated.
- Verification stamp current: **Verified against demo.washcentral.com on July 11, 2026.**
