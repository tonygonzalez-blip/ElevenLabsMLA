# ElevenLabs Narration Instructions — WashCentral Technician Training

> Companion to `WashCentral-Training-Cowork-Instructions.md`. That document's §3 ground rules (observe, never assume; ask or park, never guess) apply in full here. This file governs everything narration: scripts, voice, generation, and QA.

---

## 1. What narration is for

One narrator, one voice, walking a technician through exactly what is on screen in the paired Snagit recording. The audio never carries information the video cannot show. If a fact is not in the lesson's verified guide, it does not go in the script.

## 2. Ground rules for narration

- Scripts describe observed platform behavior only. Every spoken claim traces to a numbered step in the verified guide.
- Never in any script, prompt, sample, or audio file: credentials, the tenant/account identifier, customer-identifiable demo data (names, phone numbers, emails, addresses, plates, card digits), pricing, contract terms, or release dates.
- Backend and migration statements are allowed only as attributed context lines, spoken with their source: "Per Micrologic platform documentation, WashCentral runs on AWS." Nothing backend is presented as observed.
- Do not hard-code ElevenLabs model names, tag syntax, or API parameters from memory. Confirm them in the ElevenLabs dashboard or API reference at production time. What you cannot confirm, park.
- Unsure of a pronunciation, a pause length, or a voice setting? Ask or park it in `PARKED-ITEMS.md`. Never ship a guess.

## 3. Voice

- **One voice for the whole curriculum**, chosen by the user at kickoff. Narration production stays parked until the voice is confirmed.
- If asked to propose options: select three library voices (clear, neutral accent, professional register, mid pace), generate the same 20-second sample script with each, deliver the labeled samples, and let the user choose.
- Never use a cloned voice of a real person unless the user supplies it with documented consent.
- Lock the choice in **`VOICE-SETTINGS.md`** at the repo root: voice name, voice ID, model, stability/similarity/style values, output format, loudness target. Every lesson generates from this file and nothing else.
- Changing anything in `VOICE-SETTINGS.md` requires user approval, and previously shipped lessons are re-generated so the curriculum stays consistent.
- If the locked voice becomes unavailable, stop and ask. Do not substitute.

## 4. Script files

One script per lesson: `WC-<module##>-<lesson##>-<slug>-narration.md`, containing, in order: settings header · pronunciation guide · timed script blocks.

Settings header template:

```
---
Lesson:   WC-05-01 Customer 360 walkthrough
Video:    WC-05-01-customer-360-v1.0.mp4 (dry-run duration 4:12)
Voice:    <locked name + ID from VOICE-SETTINGS.md>
Model:    <confirm current recommended model at production time>
Output:   44.1 kHz MP3 (mono) · loudness target −16 LUFS (confirm LMS spec at kickoff)
Status:   DRAFT | READY FOR GENERATION | GENERATED v1.0
Verified against demo.washcentral.com on <date>
---
```

## 5. Writing for the ear

- Short sentences. Present tense. Imperative for actions: "Click **Save Changes**."
- Second person, professional trainer register. No jokes, no filler, no "simply," no "as you can see."
- Pace to 140–150 words per minute. Budget roughly 2.4 words per second of shot time, and leave air: a block fills no more than about 80% of its shot's dry-run duration.
- Speak labels exactly as the guide prints them. If the button says **+ Add Customer**, the script says "Add Customer," never "the new customer button."
- Read numbers and symbols out: `$4` → "four dollars"; `1920×1080` → "nineteen twenty by ten eighty"; `v1.0` → "version one point zero."
- One idea per block. The step number in each block header must match the guide and the shot list.

## 6. Pronunciation guide (starting lexicon)

Every script carries this table at the top. Extend it as new terms appear on screen; park any term whose spoken form you are unsure of.

| Written | Spoken |
|---|---|
| WashCentral | "Wash Central" |
| WashAssist | "Wash Assist" |
| demo.washcentral.com | "demo dot wash central dot com" |
| ALPR | "A-L-P-R" |
| POS | "P-O-S" |
| OTP | "O-T-P" |
| CRM | "C-R-M" |
| KPI | "K-P-I" |
| SMS | "S-M-S" |
| GL (codes) | "G-L" |
| PWA | "P-W-A" |
| Jira | "JEER-uh" |
| SKU | parked — confirm "skew" vs "S-K-U" with the user |

## 7. Timing and pause markup

- Block header format: `[mm:ss | Step n — <nav path or action>]`. The timecode is where the block starts in the final video, taken from the dry run and corrected after the recording exists.
- Pauses: `<break time="0.8s" />` where the platform loads or the viewer should look. Verify the break syntax the chosen model supports at production time; if unsupported, replace with sentence spacing and note the substitution in the settings header.
- Default beats: 0.6 s after announcing a click · 1.0–1.5 s on each new screen · 2 s before a section change.
- The bracketed headers are alignment cues for editing. They are never sent to the generator and never spoken.

## 8. Example blocks

```
[00:00 | Step 0 — Title]
WashCentral technician training. Module five, lesson one: the Customer 360 view. <break time="1.0s" />

[00:42 | Step 4 — CRM → Customers → TRAIN-Jane Example]
Open the customer record. The Customer 360 view loads with the Overview tab selected. <break time="0.6s" />

[03:10 | Step 11 — Delete confirmation]
The platform asks you to confirm, and warns that this action cannot be undone. For this demonstration, select **No, Keep** to cancel. <break time="0.8s" />
```

The third block is the standard pattern for destructive or send-type steps: narrate the warning, cancel on camera, and never speak an instruction to execute the final click.

## 9. Producing the audio

1. **Preconditions.** The lesson passed its Phase 3 dry run; final shot durations are measured; the voice is locked in `VOICE-SETTINGS.md`; the script status is `READY FOR GENERATION`.
2. **Check capability at that moment.** Look for an ElevenLabs connector or MCP app in the workspace, or an API key the user provides. Do not assume either exists, and do not create accounts, agents, or keys to obtain one.
3. **Generate.** Strip the bracketed block headers, feed only the narration sentences and break tags, and use only the locked settings. One audio file per lesson: `WC-<module##>-<lesson##>-<slug>-narration-v<major.minor>.mp3`, version-matched to the video and script.
4. **Listen end to end** before attaching (QA in §10). Fix a bad block by editing the script, regenerating that block, and splicing at matching levels; if timing drifts, regenerate the whole file.
5. **No capability?** Deliver the script flagged `READY FOR GENERATION` plus the operator handoff in §12.
6. **Bulk runs.** Before generating more than five lessons in one pass, state the total to the user and get confirmation; quota and cost live on their account.
7. **Input hygiene.** Nothing outside the approved script text is ever sent to the generator. No test lines containing credentials or tenant data, ever.

## 10. Narration QA (logged in `QA-LOG.md` with the lesson)

1. **Parity.** The audio matches the approved script word for word. No dropped words, invented words, or TTS artifacts.
2. **Sync.** Played against the video, every block lands on its step; no marker drifts more than about one second.
3. **Pronunciation.** Every lexicon term is spoken as specified; new on-screen terms were added to the lexicon.
4. **Levels.** Loudness is consistent within the lesson and against previously shipped lessons.
5. **Content.** No credentials, no customer-identifiable demo data spoken aloud, no unattributed backend or roadmap claims.
6. **Header.** Settings header status set to `GENERATED` with version and date.

## 11. Versioning and change management

- Script and audio carry the video's version number. When re-verification changes the guide's steps, all three bump together: guide, recording, narration.
- Every script stays in the repo; audio is regenerable. When the platform changes, re-verify the lesson first (master Phases 1 and 3), update the script, then regenerate.
- Log every generated file in **`NARRATION-LOG.md`** (repo root, joining the master §12 tracking set): lesson, version, date, voice, model used, generation path (connector / API / operator).

## 12. Operator handoff (when no connector or API is available)

Deliver the script with this exact sequence for the human operator:

1. Open the ElevenLabs workspace in a browser and sign in with the project's own account.
2. Open the text-to-speech tool. Select the voice named in the script's settings header and match every setting listed there. If the dashboard shows an option the header does not cover, stop and report it back; do not choose for the project.
3. Paste only the narration sentences and break tags. The settings header, pronunciation table, and bracketed `[mm:ss | Step n]` headers are not pasted and not spoken.
4. Generate, listen once against the video, then download as MP3.
5. Name the file per §9.3 and place it in the lesson folder beside the video.
6. Report back anything that sounded wrong and any setting you had to decide yourself.

## 13. What never happens

- No voice cloning of a real person without documented consent supplied by the user.
- No music or sound effects by default. If the user wants branding audio, they choose it and it lives outside the narration files.
- No account, workspace, agent, or billing changes inside ElevenLabs.
- No narration produced for a lesson that has not passed its dry run.
- No credentials, tenant identifiers, or customer-identifiable demo data in any script, prompt, sample, file name, or generated audio.
