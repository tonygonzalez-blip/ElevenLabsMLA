# Lesson authoring contract (for production builders)

You are authoring the two data files that drive one lesson through the production system. Study the
exemplar pair first: `production/lessons/WC-00-03.json` + `WC-00-03-phrases.json` (schema by
example), plus `production/README.md`. The engine/compositor/QA are code you never modify.

## Inputs per lesson (already in the repo)

`training/<moduleFolder>/<LESSON>-*-narration.md` (locked narration; the "Per-step render seconds"
line gives each block's audio length), `<LESSON>-*-shotlist.md`, `<LESSON>-*-guide.md`,
`<LESSON>-s01..sNN.mp3`, `<LESSON>-full-narration-v1.0.mp3`.

## Files you produce

1. `production/lessons/<LESSON>-phrases.json` — verbatim narration phrases in spoken order.
   - Block windows: block N starts at Σ(audio_i + 0.4) of prior blocks; endS = start + audio + 0.4.
     Cross-check the final end against `ffprobe` of the full narration (±0.3s) and put that probed
     duration in the lesson JSON `audioDurationS`.
   - Phrases: split each block's script text at its `<break>` tags and sentence boundaries into
     caption-sized pieces (≤ ~95 chars). NEVER rewrite, summarize, or reorder. Strip the
     `<break/>` tags and stage directions; keep spoken words exactly.
   - Fields: `lesson`, `audioMaster` (repo-relative), `output` (`<LESSON>-<slug>-v1.1`), `blocks[]`.
2. `production/lessons/<LESSON>.json` — the declarative lesson. Fields: `lesson`, `title`,
   `audioMaster`, `audioDurationS`, `tailS: 0.4`, `startUrl`, `viewport`, `output`,
   `orderedMentions` (optional: labels the narration names in order), `neverClick` (always include
   destructive/send controls present on screen, e.g. `["logout","send"]`), `targets`, `predicates`,
   `ops`, `compositor`.

## Ops vocabulary (engine.mjs)

`assert{at,predicate}` · `pointer-enter{at,from:[x,y],to:{target,offset}}` ·
`move{at,to:{target|point,offset,outside}}` ·
`click{target,pressAt,hoverMs,postcondition,timeoutMs,nav?}` ·
`key{pressAt,keys:["ctrl+k"|"ArrowDown"|"Escape",...],gapMs,keyLabel,postcondition?}` ·
`log-rect{at,key,target,requireStableMs?}` · `log-rects{at,key,targets:[...]}` ·
`watch{key,from,to,predicate,everyMs,mustHold}` · `wait-stable{afterNav,key,predicate,settleMs,timeoutMs}`.

Targets: `{selector}` | `{text, scope}` | `{js: "<read-only expression returning an element>"}`
(+`textRect:true` to clamp to text, `clickPoint:[x,y]` only for verified-inert spots). Predicates
are read-only JS expressions. **Never** use DOM `.click()`, never inject/modify the page, never
write page storage.

## Timing rules (the narration is the master clock)

- Run `node production/align-narration.mjs production/lessons/<LESSON>-phrases.json` and read the
  printed phrase times. Anchor actions to them: the learner hears the action cue phrase, the cursor
  then travels, hovers ≥300ms, and the press lands inside the cue's trailing `<break>` so the
  result is on screen when the explanation phrase starts. Never one fixed delay for everything.
- Approach moves start at the cue start, not before (don't reveal the next step early).
- Overlays (palette/dropdown/modal) must be opened by a real click/keystroke BEFORE any phrase that
  describes their contents, verified by a postcondition, and closed by their genuine control.
- If the narration says "open X again", X must genuinely be closed first (a verified real dismiss).

## Compositor block

- `callouts`: one per shot-list callout, `{n, anchor: "<rectKey>"|"group.item"|"screen:x,y",
  place: below-left|left|left-top|right|at, from, to}` — numbered ①.. contiguous from 1; anchor
  every one to a rect you `log-rect`ed. Place badges clear of text.
- `highlights`: `{anchor, from, to, color?}` — attach only to logged rects, only while that UI is
  genuinely present (never past a close/nav), follow the SPOKEN order for enumerations. Use
  `color:"#dc2626"` only for a do-not-click warning (e.g. bracketing a Send guardrail moment).
- `camera`: few, purposeful keyframes `{t,z,cx,cy,ease:true}`. z ≤ 1.55; hold framings for whole
  explanations; pull wide when a full-interface change or a page identity must be shown. Set
  `requiresCloseFraming:false` if the shot list demands no ≥1.45× close-up.
- `completion`: `{text:"<Lesson short name> — Complete", from: ~audioEnd-1.8, fadeOutFrames:10}`;
  `captionsBurnClearAt` ≈ completion.from - 0.3.

## Safety (absolute)

Tenant is live/shared: browse-only unless the shot list says a TRAIN- record is created. NEVER
click Send/Submit/Delete/Approve/Refund/Logout or anything that sends or mutates; for send-type
UIs stop at the guardrail and close via the real Close/✕. If a shot-list step is impossible
truthfully (e.g. names a control that doesn't exist live), do NOT fake it: note it in a
`RESIDUALS` block in your report and choose the closest genuine action.

## Live probing (read-only)

Probe on stage 2: `CDP_HTTP=http://127.0.0.1:9223` and **always** `CDP.connect('new')` (own tab),
`cdp.navigate(...)`, read-only evals, then close your tab (`closeTarget`). Never touch port 9222
(the recording stage). Never navigate to `login.html` (it de-authenticates the profile). Real
input events in your probe tab are allowed for verifying open/close behavior (they only affect
your tab's view) — but never on send/destructive controls.

## Definition of done for a build

`align-narration` runs clean; both JSONs parse; every op's target/predicate was live-probed (paste
probe evidence in your report); ops timeline is monotonic and inside [0, audioDurationS]; callouts/
highlights/camera cover every shot-list step. You do NOT run the engine — the stage runner does.
Return a short report: files written, probe evidence, residuals/blockers.
