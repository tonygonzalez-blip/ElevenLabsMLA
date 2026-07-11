# WC-15-01 — WashAssist → WashCentral Migration · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and the title-card shot list one-to-one (9 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 9 blocks `WC-15-01-s01.mp3`…`WC-15-01-s09.mp3` + joined `WC-15-01-full-narration-v1.0.mp3` (133.22s ≈ 2:13). Step duration = audio + 0.4 s. Per-step render seconds: s01 14.45 · s02 12.28 · s03 16.59 · s04 9.95 · s05 16.43 · s06 9.4 · s07 15.23 · s08 15.88 · s09 19.41.
- **Voice:** **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`). Never switch without sign-off.
- **Model:** **eleven_v3** — pass explicitly.
- **Output:** 44.1 kHz MP3.
- **Pace target:** 140–150 wpm, professional and precise. This lesson is script-accurate: read the facts exactly.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Each card cue is followed by `<break time="1.4s" />` so the card lands before the explanation.
2. **Varying sentence length.** Short and long lines mixed; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Explain what the fact means for the tech's day; do not just read the card.

### Pronunciation guide

- WashCentral → "Wash Central" · WashAssist → "Wash Assist"
- CSI → "C-S-I" · URL → "U-R-L" · GA → "G-A" (general availability) · Jira → "Jee-rah"

### Scope notes (non-spoken)

- Every fact is sourced from the Migration FAQ. Do not add platform observations. Anything outside the FAQ is parked, not narrated.

## Timed script

[00:00 | Step 1 — Title]
Migration questions come with a client's system on the line, so the answers have to be exact. <break time="0.8s" /> Everything in this lesson comes straight from the Migration FAQ. If a question falls outside it, you park it and ask. You never improvise.

[00:16 | Step 2 — What the client needs]
Here is the whole client-side story. <break time="1.4s" /> To reach WashCentral, they need one thing: the new URL. It comes to them directly, or WashAssist redirects them automatically. That is it.

[00:30 | Step 3 — Credentials & data]
This next part prevents most migration support calls. <break time="1.4s" /> Credentials do not change. Users are not re-created, and data is not copied over. WashCentral runs on the WashAssist data. So a migrated client signs in with the exact login they already had.

[00:48 | Step 4 — Onboarding]
For brand-new clients, nothing about your process changes. <break time="1.2s" /> The Pre-Configuration team onboards them the same way as always. The only difference is the URL they are given.

[01:00 | Step 5 — Performing a switch]
Switching an existing client depends on the phase. <break time="1.4s" /> During beta, you submit a Jira ticket on the CSI board, and Development redirects the URL. Once it reaches general availability, Tech Support makes the switch directly in the Admin Portal, no ticket needed.

[01:18 | Step 6 — After redirection]
One consequence to know. <break time="1.2s" /> After the redirect, the client can no longer reach WashAssist. The only way back is to reverse the switch.

[01:30 | Step 7 — Reversing a switch]
And it does reverse. <break time="1.4s" /> The same path that made the switch undoes it. In beta, that is another Jira ticket on the CSI board to revert the redirection. So when a client asks to move back to WashAssist for month-end, that is your answer.

[01:48 | Step 8 — What happens to WashAssist]
Clients often ask what becomes of the old system. <break time="1.4s" /> WashAssist goes into support mode, critical fixes only, for a period still to be set, and is eventually retired. Their data stays available in WashCentral the whole time, because WashCentral was already using it.

[02:06 | Step 9 — Recap]
So the short version you can say with confidence: <break time="1.0s" /> the login stays the same, only the URL changes, the switch is a CSI Jira ticket in beta or an Admin Portal action at general availability, it is fully reversible, and no data is lost. Anything the FAQ does not answer, you park and confirm.

_(Estimated total: about 4:00 pending render.)_

## Generation log

- Script written to the narration craft standard: visual buffer on each card cue, varied rhythm, meaning over recitation.
- Humanizer pass (per CLAUDE.md §6): spoken prose clear of the listed AI tells; no em or en dashes in the narration; the attributed facts and the CSI/Admin Portal/Jira terms left exact. The only em dashes are in the `[mm:ss | Step N — target]` house-format headers.
- Every fact attributed to the Migration FAQ; no live-platform claims. Items outside the FAQ are parked, not narrated.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**
