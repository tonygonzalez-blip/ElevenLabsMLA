#!/bin/bash
# produce.sh <LESSON-ID> — run one authored lesson through the full pipeline.
# Locks: app lock (shared for rehearse, exclusive for record) keeps rehearsals off the app while a
# take rolls (same tenant/account); cpu lock serializes record vs composite so captures never drop
# frames on this 4-core box. Exits nonzero on the first failing stage.
set -uo pipefail
cd "$(dirname "$0")/.."
L="$1"
LJ="production/lessons/$L.json"
APP_LOCK=/tmp/wc-app.lock
CPU_LOCK=/tmp/wc-cpu.lock
[ -f "$LJ" ] || { echo "no lesson json: $LJ"; exit 2; }

echo "=== [$L] align ==="
node production/align-narration.mjs "production/lessons/$L-phrases.json" | tail -3 || exit 1

# Resume support: container restarts frequently interrupt the long composite, and the daemon then
# re-runs this whole script. If a clean capture from a prior attempt already exists and is newer
# than the current config (so it reflects the latest lesson), skip the ~6-min rehearse+record AND
# the stage self-heal — the composite is pure CPU and needs no live Chrome, so a captured lesson can
# finish even while the record/rehearse stages are down. The guard is strict: events.json must
# parse, carry ops, and contain no errored op.
CAP="production/out/$L-capture.mkv"
EV="production/out/$L-events.json"
PHR="production/lessons/$L-phrases.json"
if [ -f "$CAP" ] && [ -f "$EV" ] && [ "$EV" -nt "$LJ" ] && [ "$EV" -nt "$PHR" ] \
   && [ "$(stat -c%s "$CAP" 2>/dev/null || echo 0)" -gt 1000000 ] \
   && node -e "const e=require('./$EV');process.exit(e.ops&&e.ops.length&&!e.ops.some(o=>o.error)?0:1)" 2>/dev/null; then
  echo "=== [$L] resume: clean capture+events newer than config — skipping stages + rehearse + record ==="
else
  # A fresh record needs the live stages; heal them (with sign-in retry) or abort this lesson.
  bash production/ensure-stages.sh || { echo "stage self-heal failed"; exit 1; }

  echo "=== [$L] rehearse (stage 2, shared app lock) ==="
  flock -s "$APP_LOCK" env CDP_HTTP=http://127.0.0.1:9223 node production/engine.mjs "$LJ" --rehearse || exit 1

  echo "=== [$L] record (stage 1, exclusive app+cpu locks) ==="
  flock "$APP_LOCK" flock "$CPU_LOCK" env DISPLAY=:99 CDP_HTTP=http://127.0.0.1:9222 node production/engine.mjs "$LJ" --record || exit 1
fi

echo "=== [$L] composite (cpu lock) ==="
flock "$CPU_LOCK" node production/compositor.mjs "$LJ" || exit 1

echo "=== [$L] machine QA ==="
# On QA failure the composite already wrote the final training/<module>/<output>.mp4. That video is
# unshippable (failed a real check) and would otherwise linger untracked until the lesson is fixed.
# Remove it so the tree stays clean; it is regenerated when the lesson is re-authored + re-produced.
if ! node production/qa-verify.mjs "$LJ"; then
  OUT=$(node -e "console.log(require('./$LJ').output||'')" 2>/dev/null)
  [ -n "$OUT" ] && rm -f training/*/"$OUT".mp4
  echo "QA failed; removed unshippable composite ${OUT}.mp4"
  exit 1
fi

echo "=== [$L] contact sheet ==="
node production/contact-sheet.mjs "$LJ" || exit 1

echo "=== [$L] PIPELINE COMPLETE ==="
