# WC-01-01 narration — rename production render (voice: WashCentral New, model: eleven_v3, July 8 2026)
# Run in PowerShell. Renames the 16 per-step files in your ElevenLabsMLA folder to shot-list numbering.
$dir = "$env:USERPROFILE\OneDrive\Desktop\ElevenLabsMLA"
$map = @{
  "tts_2026-07-08T17-04-16-367Z.mp3" = "WC-01-01-s01.mp3"
  "tts_2026-07-08T17-04-28-994Z.mp3" = "WC-01-01-s02.mp3"
  "tts_2026-07-08T17-04-44-464Z.mp3" = "WC-01-01-s03.mp3"
  "tts_2026-07-08T17-04-55-995Z.mp3" = "WC-01-01-s04.mp3"
  "tts_2026-07-08T17-05-53-532Z.mp3" = "WC-01-01-s05.mp3"
  "tts_2026-07-08T17-06-07-288Z.mp3" = "WC-01-01-s06.mp3"
  "tts_2026-07-08T17-06-18-807Z.mp3" = "WC-01-01-s07.mp3"
  "tts_2026-07-08T17-06-31-176Z.mp3" = "WC-01-01-s08.mp3"
  "tts_2026-07-08T17-06-42-392Z.mp3" = "WC-01-01-s09.mp3"
  "tts_2026-07-08T17-06-53-770Z.mp3" = "WC-01-01-s10.mp3"
  "tts_2026-07-08T17-07-06-028Z.mp3" = "WC-01-01-s11.mp3"
  "tts_2026-07-08T17-07-18-647Z.mp3" = "WC-01-01-s12.mp3"
  "tts_2026-07-08T17-07-29-196Z.mp3" = "WC-01-01-s13.mp3"
  "tts_2026-07-08T17-07-38-945Z.mp3" = "WC-01-01-s14.mp3"
  "tts_2026-07-08T17-07-53-334Z.mp3" = "WC-01-01-s15.mp3"
  "tts_2026-07-08T17-08-08-996Z.mp3" = "WC-01-01-s16.mp3"
}
foreach ($k in $map.Keys) {
  $src = Join-Path $dir $k
  if (Test-Path $src) { Rename-Item -Path $src -NewName $map[$k]; Write-Host "OK  $k -> $($map[$k])" }
  else { Write-Host "MISSING  $k" -ForegroundColor Yellow }
}
Write-Host "`nDone. Drop WC-01-01-s01..s16 onto the timeline at each step's marker (shot list holds)."
