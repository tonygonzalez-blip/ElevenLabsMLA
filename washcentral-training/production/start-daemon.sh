#!/bin/bash
# start-daemon.sh — (re)start the factory daemon fully detached in its own session so it survives
# the launching shell exiting or timing out. Idempotent: no-op if a healthy daemon is already running.
cd "$(dirname "$0")/.."

# The egress proxy port is ephemeral and rotates on container restarts. It is harness-injected into
# each interactive Bash call but NOT persisted in any profile, so a long-running detached daemon
# freezes whatever HTTPS_PROXY it launched with; after a rotation it relaunches the stages onto the
# dead port and every lesson fails sign-in/UNSTYLED. The session writes the *current* proxy to
# production/out/.proxy on each watchdog pass; adopt it here so a freshly (re)started daemon always
# gets the live proxy, and treat a daemon whose frozen proxy no longer matches as needing a restart.
PROXY_FILE="production/out/.proxy"
if [ -r "$PROXY_FILE" ]; then export HTTPS_PROXY="$(cat "$PROXY_FILE")"; fi

running_pid=$(pgrep -f "bash production/factory-daemon.sh" | head -1)
if [ -n "$running_pid" ]; then
  daemon_proxy=$(tr '\0' '\n' < "/proc/$running_pid/environ" 2>/dev/null | grep '^HTTPS_PROXY=' | cut -d= -f2-)
  if [ -z "$HTTPS_PROXY" ] || [ "$daemon_proxy" = "$HTTPS_PROXY" ]; then
    echo "daemon already running (pid $running_pid)"
    exit 0
  fi
  echo "daemon on stale proxy '$daemon_proxy' (current '$HTTPS_PROXY'); restarting"
  kill "$running_pid" 2>/dev/null
  for pid in $(ps -eo pid,args | grep -E "produce.sh|remote-debugging-port=922[23]" | grep -v grep | awk '{print $1}'); do kill "$pid" 2>/dev/null; done
  sleep 2
fi
setsid bash production/factory-daemon.sh > production/out/daemon.log 2>&1 < /dev/null &
disown 2>/dev/null || true
sleep 2
if pgrep -f "bash production/factory-daemon.sh" >/dev/null; then
  echo "daemon started (pid $(pgrep -f 'bash production/factory-daemon.sh' | head -1))"
else
  echo "daemon FAILED to start"; exit 1
fi
