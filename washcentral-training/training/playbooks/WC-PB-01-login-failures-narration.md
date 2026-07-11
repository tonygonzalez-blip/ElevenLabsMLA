# WC-PB-01 — PB-1 Login failures · Narration Script

**Verified against demo.washcentral.com on July 11, 2026.** v1.1 (block s09 re-authored July 11, 2026; all other spoken lines unchanged and their audio locked) · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (12 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — **s09 re-authored July 11, pending block re-render.** Blocks s01–s08 and s10–s12 are rendered and locked (`WC-PB-01-s01.mp3` … `WC-PB-01-s12.mp3`, durations in `WC-PB-01-durations.json`); regenerate `WC-PB-01-s09.mp3` only, then re-join the full track and refresh the durations file. Voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3. Timestamps below use the rendered per-block durations for the locked blocks and a ~145 wpm estimate (~31.6 s) for the new s09; estimated total ~223 s ≈ 3:43 pending the s09 render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-PB-01-s01.mp3` … `WC-PB-01-s12.mp3`. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a check means for the caller's ticket, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- WashAssist → "Wash Assist"
- SSO → "S-S-O"
- single sign-on → "single sign-on"
- ALPR → "A-L-P-R" · POS → "P-O-S" · Shyne → "Shine"

### Scope notes (non-spoken)

- Troubleshooting playbook: symptom, ordered checks, then resolve or escalate. It reads two surfaces only, **System Users** and the audit **User Activity** log; it never edits a record.
- No password reset is performed. Step 10 describes where a reset would happen (production only) and is a concept beat, not an action.
- **Block s09 re-authored July 11, 2026, pending block re-render.** The July 11 in-app capture of **User Activity** (`verification/2026-07-11/digests/audit-users-inapp.json`) shows **Failed Logins** is a page-level KPI tile (**3**), with no per-user failed-login column (columns: USER · ROLE · LAST LOGIN · LOGINS THIS MONTH · LOCATION · STATUS). The v1.0 block read a per-account failed-login count that does not exist; the new block reads the tenant-level tile plus the caller's own row, and routes the event-by-event trail to the **Audit Log**. Reach User Activity by the AUDIT sidebar link only (the direct URL 404'd July 9). **System Users** loads live rows (Total Users 8,022). All other blocks stand as rendered; only s09 changes.
- Steps 1, 2, 3, 10, 11, and 12 are concept/recap beats held on a clean frame; steps 4–9 are the live read-only walk.

## Timed script

[00:00 | Step 1 — Take the ticket]
A caller says they can't sign in. <break time="0.8s" /> Before you change a thing, fix the order in your head. Cheapest checks first, because two of them clear most of these tickets. And in the demo tenant, you never reset a password.

[00:13 | Step 2 — Check 1, the three fields]
Start with the three fields. <break time="1.4s" /> Every WashCentral sign-in wants an email, a password, and a tenant code. That third one is where logins quietly fail. A wrong tenant code sends a perfectly good account to the wrong company's data, and nothing happens. Confirm the tenant before you ever suspect the password.

[00:32 | Step 3 — Check 2, migrated client]
Now one question. Did this client come from WashAssist? <break time="1.4s" /> If so, their login never changed. Same username, same password, same tenant. A migrated user who can't get in is almost never a credentials problem. Have them try their old login first, and you may have skipped a reset you shouldn't be making.

[00:51 | Step 4 — Open System Users]
Open System Users, under Settings. <break time="1.4s" /> This is the master list of everyone who can sign in. Eight columns, and four of them answer a login ticket by themselves. There's a search across the top, and a New Record button you leave alone. We're only reading here.

[01:07 | Step 5 — Check 3a, does it exist]
First, does the account even exist? <break time="1.2s" /> Search by name, code, or email instead of scrolling a long list. No match usually means the wrong tenant again, or a user who was never finished being set up. And if the rows won't load, that's the data service, not an empty tenant.

[01:25 | Step 6 — Check 3b, ACTIVE]
Read the Active column. <break time="1.2s" /> If it's switched off, the account can't sign in, full stop. And to the caller, a disabled account looks exactly like a bad password. Re-enabling it is an admin's job in production, not yours in the demo.

[01:41 | Step 7 — Check 3c, SSO]
Next column: S-S-O. <break time="1.2s" /> If that reads yes, the password doesn't even live in WashCentral. It's held by the identity provider. Reset it here and nothing changes. So stop the password thread and send it to the single sign-on integration page instead.

[01:57 | Step 8 — Check 3d, LAST LOGIN]
Then Last Login. <break time="1.0s" /> A recent date tells you the account works, so today's failure is probably a typo or the tenant code. A blank tells you it never signed in, which fits a setup that was never finished. One column, and you know whether this ever worked.

[02:14 | Step 9 — Check 4, User Activity]
Last check. Open the Audit menu, then User Activity. <break time="1.4s" /> Failed logins show up as one tile at the top, a count for the whole tenant. There is no per user failure column, so read the caller's own row instead: status, last login, logins this month. A quiet row during a tenant wide spike points back at the tenant code, and the event by event trail lives next door in the Audit Log.

_[Director: reach User Activity from the AUDIT sidebar link (direct URL 404'd July 9). The page renders live: tiles 14 / 28 / 42 min / 3 Failed Logins, columns USER · ROLE · LAST LOGIN · LOGINS THIS MONTH · LOCATION · STATUS. Re-authored July 11 to the page-level tile + per-row read; render WC-PB-01-s09.mp3 fresh before recording this step.]_

[02:46 | Step 10 — Where a reset happens]
By now you know whether a reset is even the fix. <break time="1.0s" /> You don't do it here. In production there are two doors: the user resets themselves with Forgot Password, or an admin resets it from that user's own record. If it's a single sign-on account, it's neither. That fix lives with the identity provider.

_[Director: concept beat, held on the System Users frame. No edit form is opened; no reset is performed. The Edit System User reset layout is parked.]_

[03:05 | Step 11 — Escalate clean]
If none of that lands it, escalate clean. <break time="1.0s" /> Username, tenant, the timestamps of the failures, and screenshots with anything sensitive masked. Never the password. The next tier should be able to reproduce it without calling the customer back.

[03:21 | Step 12 — Recap the order]
That's the whole flow. <break time="0.8s" /> Three fields and the tenant code. The migration question. Then System Users for active, single sign-on, and last login. Then User Activity for the failures. A reset only in production, or a clean escalation. Cheap checks first, every time, and nothing in the demo touched.

_(Total: ~223 s ≈ 3:43 — rendered per-block durations (`WC-PB-01-durations.json`) for the locked blocks plus a ~145 wpm estimate for the re-authored s09; re-measure s09 with ffprobe after its block re-render and refresh these markers.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, and value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice throughout, and no em or en dashes in the spoken lines. Verbatim UI labels, the navigation paths, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and the settings-header notes.
- No password reset is narrated or performed; Step 10 is a concept beat describing production reset paths only. SSO accounts are routed to the identity provider, never reset in-app.
- Corpus states (updated July 11): **User Activity** captured live via the AUDIT sidebar (`audit-users-inapp.json`; direct URL 404'd July 9) — no per-user failed-login column exists. **System Users** rows load live (8,022 Total Users), clearing the July 9 fetch-error state.
- Script v1.1 (July 11, 2026): block s09 re-authored to the live page — the tenant-level **Failed Logins** tile (3), the per-user columns (USER · ROLE · LAST LOGIN · LOGINS THIS MONTH · LOCATION · STATUS), and the Audit Log as the event trail. No other spoken line changed (audio lock respected); timestamps recomputed from the rendered durations, with s09 estimated pending its block re-render.
- Verification stamp current: **Verified against demo.washcentral.com on July 11, 2026.**
