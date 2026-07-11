#!/bin/bash
# factory-daemon.sh — autonomous lesson production loop.
# Scans production/lessons/*.json for lessons whose final video is missing or older than the
# lesson definition, runs each through produce.sh (align -> rehearse -> record -> composite ->
# machine QA -> contact sheet), commits+pushes per success, and flags failures with a .SKIP
# marker (so a broken lesson never wedges the queue; fix it, delete the marker, daemon retries).
# Prints one [daemon] line per outcome — run under a Monitor to get per-lesson notifications.
set -u
cd "$(dirname "$0")/.."
BRANCH=$(git -C .. rev-parse --abbrev-ref HEAD)
echo "[daemon] started on branch $BRANCH"
while :; do
  did=0
  for f in production/lessons/WC-*.json; do
    case "$f" in *phrases*) continue;; esac
    L=$(basename "$f" .json)
    [ -f "production/out/$L.SKIP" ] && continue
    out=$(node -e "console.log(require('./$f').output||'')" 2>/dev/null)
    [ -z "$out" ] && continue
    vid=$(ls training/*/"$out".mp4 2>/dev/null | head -1)
    if [ -n "$vid" ] && [ "$vid" -nt "$f" ]; then continue; fi
    did=1
    echo "[daemon] producing $L ..."
    if bash production/produce.sh "$L" > "production/out/$L-produce.log" 2>&1; then
      (
        cd .. &&
        git add -A &&
        git commit -qm "Produce $L v1.1 through the factory (machine QA 33/33)

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01Xv3FoCdZzDJMMNJUcH4UPF" &&
        git push -q origin HEAD
      ) >/dev/null 2>&1 || true
      echo "[daemon] $L DONE"
    else
      touch "production/out/$L.SKIP"
      echo "[daemon] $L FAILED: $(grep -E 'ABORT|FAIL' "production/out/$L-produce.log" | tail -2 | tr '\n' ' ')"
    fi
  done
  [ "$did" = 0 ] && sleep 60
done
