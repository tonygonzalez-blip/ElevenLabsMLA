#!/bin/bash
# ensure-stages.sh — self-heal the recording/rehearsal stages. Safe to run repeatedly.
# The session container restarts rotate the egress proxy port and kill Xvfb+Chrome; every
# produce run calls this first so the factory recovers without intervention.
set -u
SCRATCH=/tmp/claude-0/-home-user-ElevenLabsMLA/c863f169-463c-5c4e-816e-9ce248227ccb/scratchpad
CHROME=/opt/pw-browsers/chromium-1194/chrome-linux/chrome
# The scratchpad is ephemeral — a container restart wipes it, so the sign-in helper must NOT live
# there. SIGNIN points at the git-tracked copy (production/signin-token.mjs), whose relative import
# '../tools/cdp-lib.mjs' resolves correctly from this directory. HERE resolves regardless of PWD.
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SIGNIN="$HERE/signin-token.mjs"
mkdir -p "$SCRATCH"
ensure() {
  local disp=$1 port=$2 prof=$3
  # A stage whose debug port answers can still be DEAD for egress: a container restart rotates the
  # egress proxy port, but the already-running Chrome keeps its launch-time --proxy-server=<oldport>.
  # Its /json endpoint (local, no egress) still answers, so a naive up-check skips it — then every
  # site fetch fails and EVERY lesson dies UNSTYLED (styles.css never loads). So the up-check must
  # also confirm the running Chrome's proxy matches the CURRENT $HTTPS_PROXY; a stale-proxy stage is
  # treated as down and relaunched fresh below (which also rewrites --proxy-server to the live port).
  if curl -s --max-time 3 "http://127.0.0.1:$port/json/version" >/dev/null 2>&1; then
    local running_proxy
    running_proxy=$(ps -eo args | grep "remote-debugging-port=$port" | grep -v grep | grep -oE 'proxy-server=[^ ]+' | head -1 | cut -d= -f2-)
    if [ "$running_proxy" = "$HTTPS_PROXY" ]; then
      # Up + correct proxy, but the SHARED demo profile can still be signed OUT: a session timeout,
      # an idle "Still there?" lapse, or a stray login-tab navigation de-auths it, and the app then
      # bounces every page to login.html — the lesson records/rehearses a login screen or dies
      # UNSTYLED. Verify the session is live (command-center stays put, does not bounce to login) and
      # re-sign IN PLACE if it dropped, without relaunching Chrome (localStorage survives the re-auth).
      # Reuse the EXISTING tab (connect 'first'), never 'new': cdp-lib.close() only closes the
      # WebSocket, not the browser tab, so a per-produce connect('new') leaks a tab every run —
      # dozens accumulate, the daemon's connect('first') rehearse/record tab gets backgrounded, and
      # visibility-gated app pages (CRM sidebar, LMS dashboard) never build → mass rehearse failures.
      if CDP_HTTP="http://127.0.0.1:$port" node -e '
        import("'"$PWD"'/tools/cdp-lib.mjs").then(async ({CDP,sleep})=>{
          const c=await CDP.connect("first",process.env.CDP_HTTP);
          await c.navigate("https://demo.washcentral.com/command-center.html",1200); await sleep(800);
          const p=await c.eval("location.pathname"); await c.close();
          process.exit(/command-center/.test(p)?0:1);
        }).catch(()=>process.exit(1));' >/dev/null 2>&1; then
        return 0
      fi
      echo "[stages] $port up but signed OUT; re-signing in place"
      for a in 1 2 3; do CDP_HTTP="http://127.0.0.1:$port" node "$SIGNIN" >/dev/null 2>&1 && { echo "[stages] $port re-signed"; return 0; }; sleep $((a*2)); done
      echo "[stages] $port re-sign FAILED; relaunching"
    else
      echo "[stages] $port up but on stale proxy '$running_proxy' (current '$HTTPS_PROXY'); relaunching"
    fi
  fi
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
    if CDP_HTTP="http://127.0.0.1:$port" node "$SIGNIN" >/dev/null 2>&1; then ok=1; break; fi
    echo "[stages] sign-in attempt $attempt failed on $port; retrying"
    sleep $((attempt * 3))
  done
  if [ "$ok" != 1 ]; then echo "[stages] sign-in FAILED on $port after retries"; return 1; fi
  echo "[stages] $port relaunched + signed in"
}
ensure :99 9222 rec || exit 1
ensure :100 9223 probe || exit 1
exit 0
