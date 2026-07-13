#!/bin/bash
# supervise-daemon.sh — keep the factory daemon alive with 30s granularity. The daemon process
# dies periodically (container churn / process cleanup) far faster than the hourly watchdog can
# react, and a self-matching pgrep in ad-hoc checks hides it. This loop simply calls the idempotent
# start-daemon.sh every 30s: it no-ops when the daemon is running and restarts it when it's gone.
# start-daemon.sh's internal liveness check does NOT self-match (this script's args don't contain
# "factory-daemon.sh"). Run detached: setsid bash production/supervise-daemon.sh &
cd "$(dirname "$0")/.."
echo "[supervise] started $(date -u +%H:%M:%S)"
while true; do
  bash production/start-daemon.sh >/dev/null 2>&1
  sleep 30
done
