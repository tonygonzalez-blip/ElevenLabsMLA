# WC-12-06 — Users & Security (support-critical) · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (14 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 14 blocks `WC-12-06-s01.mp3`…`WC-12-06-s14.mp3` + joined `WC-12-06-full-narration-v1.0.mp3`. Audio is rendered later once the ElevenLabs key is available in the environment; timestamps below are estimates at ~145 wpm plus break time, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-12-06-s01.mp3` … `WC-12-06-s14.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a page means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- SSO → "S-S-O"
- POS → "P-O-S"
- MLA → "M-L-A"
- Micrologic → "Micro-logic"
- Sr.Manager → "Senior Manager"
- Shyne → "Shine"
- ALPR → "A-L-P-R"

### Scope notes (non-spoken)

- Covers the four Settings access-control pages: System Users, User Levels, Security Levels, Blacklisted. Read-only throughout; no row is opened and **+ New Record** is never clicked.
- Row values (user-level timeouts, security-level refund gates) are from the July 8, 2026 verified pass; session-timeout figures cross-reference PARKED-ITEMS.md #9 and refund-approval figures cross-reference #5. The July 9 corpus confirms column structure only; the lists showed a "Couldn't load records" agent-service error at capture.
- Session idle timeout ("Still there?") firing threshold is out of scope and parked (#9); its behavior lesson is 1.3.

## Timed script

[00:00 | Step 1 — Settings / Users & Security]
Open Settings, and look at the left rail. <break time="1.2s" /> Four pages control who gets into Wash Central and what they can do once they're in. Three of them sit together under Users and Security. The fourth is filed somewhere you wouldn't guess, and we'll go find it.

[00:20 | Step 2 — System Users]
Open System Users. <break time="1.4s" /> This is the master list of everyone with an account. Eight columns, and four carry the support work: is the account active, does it use single sign-on, when did it last sign in, and what role does it hold. Email and phone are there to reach the person, not to fix the ticket.

[00:45 | Step 3 — Support columns]
Read those four in order. <break time="1.2s" /> Active tells you the account is switched on. S-S-O tells you the password lives with the identity provider, not here. Last Login tells you when they last got in, and a blank there means the account has never been used. User Level is the thread you pull into the next two pages.

[01:10 | Step 4 — Search & count]
You won't scroll this list. <break time="1.2s" /> Search by name, code, or email instead. On the July verified pass the tenant carried more than eight thousand accounts, integration logins and the Micrologic support account included. The search box earns its keep here.

[01:29 | Step 5 — User Levels via Automation]
Now the page that hides. <break time="1.2s" /> User Levels controls how long a session lasts, so you'd expect it under Users and Security. It isn't. It's filed under Automation, a few groups down the rail. Open it there, and remember the spot, because every surprise-logout ticket ends here.

[01:49 | Step 6 — User Levels columns]
Three columns here. <break time="1.0s" /> A name, a security level number, and a session timeout in minutes. Hold onto that number, it drives refunds on the next page. The minutes are the answer for anyone who keeps getting kicked out.

[02:06 | Step 7 — Session timeout values]
Read the timeout column. <break time="1.4s" /> Cashiers get five minutes. So do Managers, Senior Managers, and the entry-level roles. Customer Service and the back-office levels get two full hours. So a cashier dropping out mid-shift isn't a bug, it's the level doing exactly what it was set to do.

[02:28 | Step 8 — Security Levels]
Back under Users and Security, open Security Level. <break time="1.4s" /> The link says Security Level, the page says Security Levels, same destination. Three columns: a name, a level number, and the one support cares about, Refund Approval Required.

[02:44 | Step 9 — Refund gate]
Here's the gate. <break time="1.2s" /> On the verified pass, levels zero, three, and five needed approval before a refund could go through. Eight and above did not. The rule underneath is plain: level five or below asks permission, eight or over just refunds. One column settles most of these disputes.

[03:06 | Step 10 — Tie the pages together]
Now tie the pages together. <break time="1.2s" /> A person's role sets their user level. Their user level carries a security number. That security number decides whether they can approve a refund. So a manager who can't refund isn't being blocked at random, their level maps to a security number that requires sign-off. Trace it in that order every time.

[03:31 | Step 11 — Blacklisted]
Last page. Open Blacklisted. <break time="1.4s" /> These are plates the system refuses at the wash. Four columns: the plate itself, the terminal where the block was set, who added it, and when.

[03:45 | Step 12 — Reading a blocked plate]
This page answers one specific call. <break time="1.2s" /> When a customer swears their plate won't scan, look here before anything else. If the plate's on the list, you can see who blocked it and when, which turns a mystery into a two-minute answer.

_[Director: read the row; do not open it. Locate + New Record on every page but do not click it.]_

[04:04 | Step 13 — Read-only rule]
One rule covers all four pages. <break time="1.2s" /> Each has a New Record button, and an admin can edit every list. You only read them. Passwords, levels, and blocks are changed by an administrator in production, never from a support seat. And when the account uses single sign-on, a password reset here does nothing; that fix lives with the identity provider.

[04:30 | Step 14 — Recap]
So, four pages, four questions. <break time="0.8s" /> Can they sign in: System Users. Why do they keep dropping: User Levels. Why can't they refund: Security Levels. Why won't the plate scan: Blacklisted. Learn where each one lives, and half your access tickets start answering themselves.

_(Estimated narration total: ~289s ≈ 04:49 at ~145 wpm plus break time. Actual per-step seconds to be measured with ffprobe at render; step duration = audio + 0.4 s.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, the navigation paths, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and in the generation-log lines noting the standard.
- Read-only throughout: no row opened, **+ New Record** never clicked. Row values attributed to the July 8, 2026 verified pass (session timeout → PARKED-ITEMS.md #9; refund approval → #5).
- Status: **READY FOR GENERATION** — audio renders once `ELEVENLABS_API_KEY` is set. Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
