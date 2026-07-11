#!/usr/bin/env bash
# render-all.sh — batch-render narration for every lesson in priority order.
# Skips WC-01-01 / WC-01-02 (approved audio, never regenerate). Safe to re-run:
# render-narration.mjs keeps existing sNN.mp3 blocks unless --force is passed.
set -u
cd "$(dirname "$0")/.."

ORDER=(
  training/module00-setup
  training/module01-foundations
  training/module02-crm
  training/module03-sales
  training/module12-settings
  training/playbooks
  training/module04-inventory
  training/module05-marketing
  training/module06-analytics
  training/module07-team
  training/module08-operations
  training/module09-digital
  training/module10-it-support
  training/module11-billing
  training/module13-reports-audit
  training/module14-academy
  training/module15-migration
)

ok=0; fail=0
for d in "${ORDER[@]}"; do
  for f in "$d"/*-narration.md; do
    [ -e "$f" ] || continue
    case "$f" in *WC-01-01*|*WC-01-02*) echo "SKIP (approved audio): $f"; continue;; esac
    echo "=== $f"
    if node tools/render-narration.mjs "$f" > /tmp/render-last.log 2>&1; then
      tail -2 /tmp/render-last.log | head -1
      ok=$((ok+1))
    else
      echo "RENDER FAIL: $f"; tail -5 /tmp/render-last.log; fail=$((fail+1))
      # 401/429 style failures should stop the run rather than burn the queue
      if grep -qE 'TTS (401|403|429)' /tmp/render-last.log; then echo "Stopping: API auth/rate error."; exit 2; fi
    fi
  done
done
echo "DONE. rendered=$ok failed=$fail"
