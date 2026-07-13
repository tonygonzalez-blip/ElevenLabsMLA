#!/bin/bash
# ensure-stages.sh — self-heal the recording/rehearsal stages. Safe to run repeatedly.
# The session container restarts rotate the egress proxy port and kill Xvfb+Chrome; every
# produce run calls this first so the factory recovers without intervention.
set -u
SCRATCH=/tmp/claude-0/-home-user-ElevenLabsMLA/c863f169-463c-5c4e-816e-9ce248227ccb/scratchpad
CHROME=/opt/pw-browsers/chromium-1194/chrome-linux/chrome
ensure() {
  local disp=$1 port=$2 prof=$3
  curl -s --max-time 3 "http://127.0.0.1:$port/json/version" >/dev/null 2>&1 && return 0
  echo "[stages] $port down; relaunching on display $disp (proxy $HTTPS_PROXY)"
  pgrep -f "remote-debugging-port=$port" >/dev/null && pkill -f "remote-debugging-port=$port" && sleep 1
  # A container restart / egress-proxy rotation can leave an opaque (cross-origin-tagged) styles.css
  # in the profile HTTP cache: the stylesheet then loads but never applies (.app stays display:none)
  # and EVERY lesson fails ensureStyled — a full-queue cascade. Wipe the profile HTTP caches on every
  # relaunch so recovery is always clean. Sign-in state lives in Local Storage (not cleared here) and
  # is re-established by signin-token.mjs below regardless.
  local P="$SCRATCH/chrome-profiles/$prof"
  rm -rf "$P/Default/Cache" "$P/Default/Code Cache" "$P/Default/GPUCache" "$P/GrCache" "$P/ShaderCache" 2>/dev/null
  # Also wipe the PWA Service Worker + its Cache Storage: during a proxy outage the app's SW can cache
  # a failed fetch and then serve its "You're offline" fallback for a page even after connectivity
  # returns. Local Storage (sign-in) is under a different dir and is preserved.
  rm -rf "$P/Default/Service Worker" 2>/dev/null
  rm -f "$P/SingletonLock" "$P/SingletonCookie" "$P/SingletonSocket" 2>/dev/null
  if ! pgrep -f "Xvfb $disp " >/dev/null; then
    Xvfb "$disp" -screen 0 1920x1080x24 -nolisten tcp >/dev/null 2>&1 &
    sleep 2
  fi
  DISPLAY=$disp "$CHROME" --remote-debugging-port=$port --user-data-dir="$SCRATCH/chrome-profiles/$prof" \
    --window-size=1920,1080 --kiosk --no-sandbox --disable-gpu \
    --proxy-server="$HTTPS_PROXY" --ssl-version-max=tls1.2 --no-first-run \
    --disable-features=PasswordManagerEnabled,PasswordLeakDetection --password-store=basic \
    about:blank >/dev/null 2>&1 &
  sleep 5
  # Sign-in can fail transiently (auth endpoint hiccup during a proxy rotation / just-launched
  # Chrome). Retry a few times with backoff before giving up so one flaky attempt doesn't SKIP a
  # whole lesson.
  local ok=0
  for attempt in 1 2 3 4; do
    if CDP_HTTP="http://127.0.0.1:$port" node "$SCRATCH/signin-token.mjs" >/dev/null 2>&1; then ok=1; break; fi
    echo "[stages] sign-in attempt $attempt failed on $port; retrying"
    sleep $((attempt * 3))
  done
  if [ "$ok" != 1 ]; then echo "[stages] sign-in FAILED on $port after retries"; return 1; fi
  echo "[stages] $port relaunched + signed in"
}
ensure :99 9222 rec || exit 1
ensure :100 9223 probe || exit 1
exit 0
