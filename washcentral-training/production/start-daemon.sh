#!/bin/bash
# start-daemon.sh — (re)start the factory daemon fully detached in its own session so it survives
# the launching shell exiting or timing out. Idempotent: no-op if a daemon is already running.
cd "$(dirname "$0")/.."
if pgrep -f "bash production/factory-daemon.sh" >/dev/null; then
  echo "daemon already running (pid $(pgrep -f 'bash production/factory-daemon.sh' | head -1))"
  exit 0
fi
setsid bash production/factory-daemon.sh > production/out/daemon.log 2>&1 < /dev/null &
disown 2>/dev/null || true
sleep 2
if pgrep -f "bash production/factory-daemon.sh" >/dev/null; then
  echo "daemon started (pid $(pgrep -f 'bash production/factory-daemon.sh' | head -1))"
else
  echo "daemon FAILED to start"; exit 1
fi
