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

echo "=== [$L] rehearse (stage 2, shared app lock) ==="
flock -s "$APP_LOCK" env CDP_HTTP=http://127.0.0.1:9223 node production/engine.mjs "$LJ" --rehearse || exit 1

echo "=== [$L] record (stage 1, exclusive app+cpu locks) ==="
flock "$APP_LOCK" flock "$CPU_LOCK" env DISPLAY=:99 CDP_HTTP=http://127.0.0.1:9222 node production/engine.mjs "$LJ" --record || exit 1

echo "=== [$L] composite (cpu lock) ==="
flock "$CPU_LOCK" node production/compositor.mjs "$LJ" || exit 1

echo "=== [$L] machine QA ==="
node production/qa-verify.mjs "$LJ" || exit 1

echo "=== [$L] contact sheet ==="
node production/contact-sheet.mjs "$LJ" || exit 1

echo "=== [$L] PIPELINE COMPLETE ==="
