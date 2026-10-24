# Mobile responsiveness resource and cleanup ledger

Date: 2026-10-23. Owner: current Codex session. Task: repair Learn site mobile layout and push.

| Resource | Version / size | Purpose / provenance | Process / ports | Lifecycle / cleanup |
| --- | --- | --- | --- | --- |
| C:/Source/OASISLearnWebsite | Existing checkout, main; size unmeasured | Reused source, historical ownership unknown | No server | Reusable; preserve source |
| C:/Program Files/nodejs/node.exe | v24.19.0; size unmeasured | Reused runtime for editing and verification | Bounded Node process | Shared reusable; preserve |
| C:/Windows/System32/WindowsPowerShell/v1.0/powershell.exe | Version/size unmeasured | Reused shell | No persistent service | Shared reusable; preserve |
| C:/Source/Web6Site/node_modules | Puppeteer ^25.3.0; size unmeasured | Reused shared browser tooling; no dependency restore | Bounded browser test | Preserve; recreate from that project's lockfile if necessary |
| C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe | Installed version/size unmeasured | Reused browser | Temporary headless processes; closed after tests | Shared reusable; preserve |
| C:/Source/OASISLearnWebsite/Docs/WIP/mobile-responsive | Size unmeasured | Created ledger and planned screenshot evidence | None | Retained evidence; regenerate browser screenshot if needed |
| C:/Users/david/Downloads/Telegram Desktop/photo_2026-10-23_20-59-04.jpg | Size unmeasured | User-owned screenshot reference, viewed in conversation | None | Preserve user data |

No installations, downloads, builds or new environments planned. Browser checks use file URLs without test services.

## Completion

Verified all 24 HTML pages at 320, 390, 780, 1024 and 1440 CSS pixels: no horizontal document overflow, content column stays inside viewport. Mobile menu opens and closes. Visually reviewed home-mobile.png at 390px. External network requests were blocked for bounded local verification; screenshot uses fallback fonts, so hosted font rendering was not verified. Git diff whitespace checks passed.

Retained screenshot: C:/Source/OASISLearnWebsite/Docs/WIP/mobile-responsive/home-mobile.png. Recreate with Puppeteer page screenshot at 390x900. Browser closed in finally; no persistent services, downloads, dependency restores, build outputs or disposable datasets were created. Shared runtime and browser remain owned by their existing installations; checkout and task evidence retained. Tests used in-memory scripts through stdin; no script files remain.
Screenshot measured size: 33024 bytes.

## Live cache correction — 2026-10-23

Live Vercel production deployment dpl_D7N49xzeNRjcrg6UXJCmeJPbnc63 served commit 05968149c8709e67b63db573701af52ce65ba08f. Live HTML and CSS matched local source. Found /assets cache rule: one-year immutable caching at unchanged file paths. Updated all 24 stylesheet links with a version query and changed asset cache policy to revalidate. Reused existing checkout, Node, Puppeteer and Edge listed above; no downloads or installations. Live responses inspected in memory only, no stored payloads or secrets. Verification uses live site and retained evidence; browser processes close after checks.
