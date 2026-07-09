# WC-PB-01 — PB-1 Login failures · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (12 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — audio is rendered later once the ElevenLabs key is available (not set in this session). Voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3. 12 blocks `WC-PB-01-s01.mp3` … `WC-PB-01-s12.mp3`, assembled at each step's marker. Timestamps below are estimates at ~145 wpm plus break time and a 0.4 s tail; they are confirmed against ffprobe after render.
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
- July 9 corpus states to expect while recording: **System Users** may show "Couldn't load records (Failed to fetch)…" with **Total Users** = "—", and the audit **User Activity** page returned a 404 on its direct URL. The **User Activity** column set (logins, failed logins, roles) is carried from the project's verified audit map (DISCREPANCIES.md #18). Do not depict fabricated rows.
- Steps 1, 2, 3, 10, 11, and 12 are concept/recap beats held on a clean frame; steps 4–9 are the live read-only walk.

## Timed script

[00:00 | Step 1 — Take the ticket]
A caller says they can't sign in. <break time="0.8s" /> Before you change a thing, fix the order in your head. Cheapest checks first, because two of them clear most of these tickets. And in the demo tenant, you never reset a password.

[00:18 | Step 2 — Check 1, the three fields]
Start with the three fields. <break time="1.4s" /> Every WashCentral sign-in wants an email, a password, and a tenant code. That third one is where logins quietly fail. A wrong tenant code sends a perfectly good account to the wrong company's data, and nothing happens. Confirm the tenant before you ever suspect the password.

[00:41 | Step 3 — Check 2, migrated client]
Now one question. Did this client come from WashAssist? <break time="1.4s" /> If so, their login never changed. Same username, same password, same tenant. A migrated user who can't get in is almost never a credentials problem. Have them try their old login first, and you may have skipped a reset you shouldn't be making.

[01:05 | Step 4 — Open System Users]
Open System Users, under Settings. <break time="1.4s" /> This is the master list of everyone who can sign in. Eight columns, and four of them answer a login ticket by themselves. There's a search across the top, and a New Record button you leave alone. We're only reading here.

[01:25 | Step 5 — Check 3a, does it exist]
First, does the account even exist? <break time="1.2s" /> Search by name, code, or email instead of scrolling a long list. No match usually means the wrong tenant again, or a user who was never finished being set up. And if the rows won't load, that's the data service, not an empty tenant.

[01:46 | Step 6 — Check 3b, ACTIVE]
Read the Active column. <break time="1.2s" /> If it's switched off, the account can't sign in, full stop. And to the caller, a disabled account looks exactly like a bad password. Re-enabling it is an admin's job in production, not yours in the demo.

[02:05 | Step 7 — Check 3c, SSO]
Next column: S-S-O. <break time="1.2s" /> If that reads yes, the password doesn't even live in WashCentral. It's held by the identity provider. Reset it here and nothing changes. So stop the password thread and send it to the single sign-on integration page instead.

[02:24 | Step 8 — Check 3d, LAST LOGIN]
Then Last Login. <break time="1.0s" /> A recent date tells you the account works, so today's failure is probably a typo or the tenant code. A blank tells you it never signed in, which fits a setup that was never finished. One column, and you know whether this ever worked.

[02:44 | Step 9 — Check 4, User Activity]
Last check. Open the Audit menu, then User Activity. <break time="1.4s" /> The platform logs every sign-in and every failure. A run of failed attempts points at the password. Zero attempts points the other way, back to the tenant code. Read the failed-login count and let it steer you.

_[Director: if User Activity returns a 404 in the recording tenant, hold on the Audit sidebar showing Audit Log, User Activity, and Change History; do not fabricate rows. Column set per DISCREPANCIES.md #18.]_

[03:05 | Step 10 — Where a reset happens]
By now you know whether a reset is even the fix. <break time="1.0s" /> You don't do it here. In production there are two doors: the user resets themselves with Forgot Password, or an admin resets it from that user's own record. If it's a single sign-on account, it's neither. That fix lives with the identity provider.

_[Director: concept beat, held on the System Users frame. No edit form is opened; no reset is performed. The Edit System User reset layout is parked.]_

[03:29 | Step 11 — Escalate clean]
If none of that lands it, escalate clean. <break time="1.0s" /> Username, tenant, the timestamps of the failures, and screenshots with anything sensitive masked. Never the password. The next tier should be able to reproduce it without calling the customer back.

[03:46 | Step 12 — Recap the order]
That's the whole flow. <break time="0.8s" /> Three fields and the tenant code. The migration question. Then System Users for active, single sign-on, and last login. Then User Activity for the failures. A reset only in production, or a clean escalation. Cheap checks first, every time, and nothing in the demo touched.

_(Estimated narration total: about 248 s ≈ 4:08 at ~145 wpm; confirmed against ffprobe after render.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, and value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice throughout, and no em or en dashes in the spoken lines. Verbatim UI labels, the navigation paths, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and the settings-header notes.
- No password reset is narrated or performed; Step 10 is a concept beat describing production reset paths only. SSO accounts are routed to the identity provider, never reset in-app.
- Corpus states honored: the audit **User Activity** page 404'd on its direct URL in the July 9 corpus (column set carried from DISCREPANCIES.md #18); **System Users** rows failed to fetch. Neither is depicted with fabricated data.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
