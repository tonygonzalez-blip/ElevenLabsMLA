# Remote Authoring Contract — WashCentral lesson packages (corpus-grounded)

This addendum adapts `tools/authoring-brief.md` for a **remote session with no live browser access**. Read `tools/authoring-brief.md` first; this file overrides only the ground-truth source and stamp date. Everything else in the brief (artifact structure, sections, standards, tenant-safety language, humanizer, output contract) still binds.

## Ground truth in this session (READ THIS)

The live demo now gates every interior page behind a real credentialed login (a `wc-staff-token` JWT). Those credentials are not available in this session, so **no live walk is possible**. You author entirely from the committed, authenticated July 9 verification corpus, which the brief authorizes as ground-truth source (b):

- **Page label digests:** `verification/2026-07-09/digests/<page>.json` — captured signed-in on July 9. Each digest has: `docTitle`, `h1/h2/h3`, `breadcrumb`, `sidebarItems`, `buttons`, `tabs`, `tableHeaders`, `kpiLabels`, `inputPlaceholders`, `labels`, `chips`, `firstRows`, `modals`, `bodySnippet`. These are your primary source for every bold UI label.
- **Screenshots:** `verification/2026-07-09/shots/<page>.png` — 1920×1080, signed-in. **Read the screenshot image** for your lesson's pages to confirm layout, KPI values, panel names, and any label the digest heuristic missed. Prefer the screenshot when the digest is ambiguous.
- **Per-lesson evidence (may be partial):** `verification/2026-07-09/lessons/<code>/` exists for some early lessons; some probes there bounced to login (`"url":"/login.html"`) and are unreliable — ignore any evidence file whose `url` is `/login.html`.

The digest/screenshot filename is the page's slug (e.g. `crm-customers`, `settings-user-levels`, `emp-employees`). Detail/edit forms are usually `<page>-edit`. Your lesson's pages are listed in `tools/lesson-map.json` under your lesson's `pages` and `walk`.

## Hard rules for grounding (violations fail the package)

1. **Every bold UI label, tab, button, column, KPI, placeholder, chip, and nav path must appear in your lesson's digest(s) or be legible in the screenshot.** If you cannot find it in the corpus, do NOT write it as observed. Either omit it or mark `TBD — parked (PARKED-ITEMS.md #n)` if an existing parked item covers it (see `PARKED-ITEMS.md`), or flag it as a NEW parked item in your structured return.
2. **Corpus gaps you WILL hit:** row-click VIEW detail pages that need a URL parameter (e.g. the 9-tab Customer 360 view `crm-customer-detail.html`, `sales-ticket-view.html`) were not all captured, and inactive-tab field content on multi-tab pages is often absent (the digest captures the default tab plus all tab *names*). When the plan calls for content you cannot observe in the corpus, author the structure you CAN observe (tab names, the default tab, list columns) and explicitly mark the unobservable parts `TBD — parked`. Never invent field contents, dialog contents, or values.
3. **Discrepancies:** when the learning plan (`WC-technician-learning-plan-v1.0.md`) or a legacy claim disagrees with what the digest/screenshot shows, the corpus wins. Report it in your structured return (where, plan says, corpus shows).
4. Attributed-source content, no-credentials, and all tenant-safety language from the brief still apply verbatim. Since you are not driving a browser, "do not click" steps are authored as recording-time directions (for the operator), exactly as the WC-01-02 exemplar does.

## Stamp & version (this session)

- Stamp every artifact: `**Verified against demo.washcentral.com on July 9, 2026.**` (top and bottom of guide, top of shot list and narration).
- Version line: `v1.0 · July 9, 2026 · Author: Claude — Micrologic training project`.

## Exemplars (match structure/tone/section layout exactly)

- `training/module01-foundations/WC-01-02-search-location-shyne-guide.md`
- `training/module01-foundations/WC-01-02-search-location-shyne-shotlist.md`
- `training/module01-foundations/WC-01-02-search-location-shyne-narration.md`

## Narration status in this session

Set the narration Settings header **Status: READY FOR GENERATION** (audio is rendered later once the ElevenLabs key is available — it is not set in this session). Keep all other narration standards from the brief: voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz, block-by-block, one TTS call per step, files `WC-<mm>-<ll>-sNN.mp3`, step duration = audio + 0.4s, estimated timestamps at ~145 wpm.

## Doc-only / doc-sourced lessons

- `docOnly` (flags in lesson-map): produce the **guide only** — no shot list, no narration. (WC-00-01 workstation prerequisites; WC-CERT-01 certification.)
- `docSourced` (WC-15-01, WC-15-02): guide + a **title-card** shot list + narration (document-over/title-card format, not platform recording). All facts attributed to the Migration FAQ / Features doc per the plan; no live-UI claims.

## Output contract

Return a structured summary: files written (full paths), step count, which pages' digests/screenshots you used, every label you could NOT ground (and what you did instead), NEW discrepancies, NEW parked items, existing parked items referenced, and a one-line status `complete` or `parked-partial`.
