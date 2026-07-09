# QA-LOG.md

## July 8, 2026 — Learning plan v1.1 (document-level QA, Cowork phase)

- Fresh re-execution: all platform claims captured live July 8, 2026; ~50 screens walked read-only across 13 modules + Settings.
- Trace audit (5 random factual claims re-executed at end of session): User Levels "Cashiers · 3 · 5" PASS · "Administrator · 20 · 120" + header "SESSION TIMEOUT (MIN)" PASS · Settings counter "16 categories · 92 pages" + AI Agent/LogicPOS cards PASS · Customer 360 nine tabs PASS · Actions ▾ = Issue Wash/Refund Customer traces to opened-menu screenshot.
- Asset check: no credentials or tenant code values in any deliverable; no customer PII reproduced; masked gateway values not copied.
- Result: **PASS** at plan level.

## July 8, 2026 — WC-01-01 assembled video v1.0 (Cowork phase)

- WC-01-01-global-navigation-v1.0.mp4: 1920×1080, 30 fps, H.264/AAC, 171.1s, narration muxed (voice WashCentral New, eleven_v3, per-step render).
- Method: 16 settled frames captured live from the tenant, cursor/click overlays, per-step timing = audio + 0.4s. QA probes at 0:30 (step 3 Executive Dashboard) and 2:00 (step 11 Support Tickets) confirmed screen↔narration sync.
- Limitation (disclosed): frame-based — no live motion between clicks. Superseded by v2.0 true recording when produced.
- Result: PASS as pilot draft; **v2.0 live recording pending (first Claude Code deliverable).**

## July 8, 2026 — WC-01-01 global navigation v2.0 (Claude Code — true live recording)

- **Deliverable:** `training/module01-foundations/WC-01-01-global-navigation-v2.0.mp4`
- Fresh re-execution: all 16 steps driven live on demo.washcentral.com the same session (explore + two rehearsals + record), targets resolved by accessible name, ended on Command Center.
- Method: CDP drive (clicks by accessible name, injected cursor + caption overlay, cumulative scheduler locked to the 171.05s narration timeline); **captured via the `mcpmarket-me:screencast` skill** (patched for Windows — see note below), real-time 30fps, lead trimmed, narration muxed from `WC-01-01-full-narration-v1.0.mp3`.
- **Screencast skill Windows patches** (`~/.claude/plugins/marketplaces/local-desktop-app-uploads/mcpmarket-me/skills/screencast/scripts/screencast.js`; backup `.bak`): added `-draw_mouse 0` (skill omitted it → would burn in the OS cursor); added constant `-r <fps>` (skill relied on gdigrab VFR → dropped frames compressed the timeline and desynced narration); added `-g <fps>` + fragmented-MP4 `movflags` (skill's stop is `taskkill /F` which never finalizes the moov atom → corrupt file; 1s fragments make a force-kill lose ≤1s, recovered via `-fflags +discardcorrupt` remux). Without these the skill cannot produce a valid, synced recording on Windows.
- Asset check (ffprobe): **1920×1080, 30/1 fps, H.264 + AAC stereo, 171.05s** — matches narration exactly. No credentials on screen (address bar only), no OS cursor (synthetic cursor only).
- Sync check (spot-checked at steps 3 / 11 / 16): screen, caption, and cursor all match the narration block — Analytis→Executive Dashboard @37s, Support Tickets @117s, Command Center "Back home" @164s. PASS.
- Tenant safety: read-only rail navigation only; no records created/edited/deleted (RECORDS-CREATED.md still nil).
- Result: **PASS** — supersedes the v1.0 frame-assembled draft. Validates the recording pipeline for the remaining lessons.

## July 8, 2026 — WC-01-02 Search / Location scope / Ask Shyne v1.0 (screencast)

- **Deliverable:** `training/module01-foundations/WC-01-02-search-location-shyne-v1.0.mp4` (+ guide, shot list, narration, 13 per-step mp3s, `WC-01-02-full-narration-v1.0.mp3`).
- **Authoring:** workflow (spec → guide/shotlist/narration → humanize guide → adversarial verify) PASS.
- **Narration:** 13 blocks rendered via ElevenLabs, voice WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz; full track 182.56s (each block + 0.4s tail).
- **Method:** CDP human-cursor drive (Ctrl+K, arrow keys, Esc, modal opens; eased glide + settle-before-click) captured via the patched `mcpmarket-me:screencast` skill (`-r 30` real-time, `-draw_mouse 0`, kill-safe fragmented MP4); lead trimmed, narration muxed.
- **Asset check (ffprobe):** 1920×1080, 30 fps, H.264 + AAC, 182.56s. One cursor only (no OS cursor). No credentials on screen.
- **Sync check (steps 2 / 6 / 9 / 11):** Search palette @20s, location dropdown @68s, Ask Shyne @112s, guardrail @145s — screen + caption + cursor all match. PASS.
- **Tenant safety:** read-only; Ask Shyne **never sent** (Send shown, never clicked; no answer rendered — parked #8). No records created/edited.
- **Live-verification catch:** Esc does NOT close the location scope dropdown (contrary to the drafted step 8). Corrected guide/shotlist/narration, re-rendered s08, logged **DISCREPANCIES #24**. Platform wins (§3.1).
- **Result: PASS.**

## Template — per-lesson entry (fill for every lesson)

### <date> — WC-<mm>-<ll> <title> v<x.y>
- Fresh re-execution within 48h of final recording: PASS/FAIL
- Sync check (guide ↔ video ↔ narration, one-to-one): PASS/FAIL
- Trace audit (5 random sentences → observed screens): PASS/FAIL
- Asset check (1920×1080/30fps MP4 by ffprobe; audio present/level-consistent; no credentials/OS cursor): PASS/FAIL
- Logs current (curriculum, discrepancies, parked, records): PASS/FAIL
- Verification stamp updated: PASS/FAIL
- Result + notes:
