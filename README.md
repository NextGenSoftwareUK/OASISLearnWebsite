# OASIS Learn

Developer onboarding tutorial series for the [OASIS Omniverse](https://oasisomniverse.one) platform — 17 step-by-step modules covering WEB4, WEB5 STAR API, WEB6 AI Layer, and 6 real-world case studies.

Live site: **[learn.oasisomniverse.one](https://learn.oasisomniverse.one)**

---

## Tutorials

### WEB4 Core
| Module | Title | Description |
|---|---|---|
| 01 | Quick Start | Install the WEB4 SDK and make your first authenticated API call in under 15 minutes |
| 02 | Avatar & Identity | Register, authenticate, and manage avatar profiles and sessions |
| 03 | Karma & Reputation | Award karma, query reputation scores, and integrate into your app |
| 04 | NFTs & Wallets | Mint, transfer, and query NFTs and GeoNFTs via the Wallet API |
| 05 | Data & Holons | Store, load, search, and relate holons using the HyperDrive data layer |
| 06 | Your First OAPP | Scaffold a complete On-Chain Application with the STAR ODK |
| 07 | Metaverse & Game Integration | Embed OASIS avatars, karma, and assets into a Unity or Godot game |
| 08 | Providers & Production | Configure auto-failover, deploy to Railway or Docker, harden for production |

### WEB4 Deep Dives
| Module | Title | Description |
|---|---|---|
| 09 | HyperDrive Storage | Upload/download files across Holochain, IPFS, MongoDB with auto-failover and encryption |
| 10 | ONET & P2P Networking | Peer discovery, direct encrypted messaging, broadcast and live event subscriptions |

### WEB5 STAR API
| Module | Title | Description |
|---|---|---|
| 11 | WEB5 Introduction | The STAR API data model — CelestialBodies, Zomes, OAPPs, Missions, Quests overview |
| 12 | Missions & Quests | Cross-game missions with objectives/karma rewards; quest chains; STARAPIClient C ABI |
| 13 | Celestial Bodies & Spaces | Create planets, solar systems and galaxies as spatial containers for metaverse worlds |
| 14 | GeoNFTs & AR | Anchor NFTs to GPS coordinates, AR hotspots, collect in Unity with ARFoundation |

### WEB6 AI Layer
| Module | Title | Description |
|---|---|---|
| 15 | WEB6 AI Intro | 56 REST endpoints, 250 MCP tools, 20+ AI providers, Karma-Gated tiers |
| 16 | FAHRN Multi-Agent | Serial, Parallel, Debate and Voting orchestration; SkillOpt self-evolving agents |
| 17 | Holonic Memory | Fractal Session→Agent→User→Group memory hierarchy with semantic search |

---

## Case Studies

Six production apps built on the OASIS — each with step-by-step integration walkthroughs.

| Case Study | APIs | Description |
|---|---|---|
| 🏛️ [SovereignTrust](case-studies/trust-site.html) | WEB4 + WEB6 | Legal trust platform — Avatar SSO, Holon storage, Stripe, Leela AI (FAHRN Debate) |
| 🎖️ [Founder NFTs](case-studies/nft-founders.html) | WEB4 | NFT launch site — whitelist gating, on-chain minting, wallet display, karma rewards |
| 🌐 [OPORTAL](case-studies/oportal.html) | WEB4 + WEB5 + WEB6 | Flagship portal — Omniverse map, NFT wallet, quest log, ONET live, AI assistant |
| 🌍 [Our World](case-studies/our-world.html) | WEB4 + WEB5 · Unity | AR geolocation game — GeoNFTs at GPS, missions, cross-game inventory |
| 💀 [ODOOM](case-studies/odoom.html) | WEB4 + WEB5 · C/OGEngine | UZDoom fork — karma for kills, cross-game keys via STARAPIClient C ABI |
| ⚡ [OQuake](case-studies/oquake.html) | WEB4 + WEB5 · Vulkan | vkQuake fork — same OGEngine pattern as ODOOM, Vulkan renderer |

---

## Tech Stack

- Pure HTML/CSS/JS — no build step
- Served via [`serve`](https://www.npmjs.com/package/serve) for local dev
- Deployed on [Vercel](https://vercel.com) with clean URLs and asset caching

---

## Getting Started

```bash
git clone https://github.com/NextGenSoftwareUK/OASIS-LEARN.git
cd OASIS-LEARN
npm install
npm run dev
# → http://localhost:3000
```

---

## Project Structure

```
OASISLearnWebsite/
├── index.html                       # Tutorial listing / home page
├── tutorials/
│   ├── 01-getting-started.html
│   ├── 02-avatar-identity.html
│   ├── 03-karma-reputation.html
│   ├── 04-nft-wallet.html
│   ├── 05-data-holons.html
│   ├── 06-first-oapp.html
│   ├── 07-metaverse-game.html
│   ├── 08-providers-production.html
│   ├── 09-hyperdrive.html           # WEB4 HyperDrive deep dive
│   ├── 10-onet-p2p.html             # WEB4 ONET P2P networking
│   ├── 11-web5-intro.html           # WEB5 STAR API introduction
│   ├── 12-missions-quests.html      # WEB5 Missions & Quests
│   ├── 13-celestial-spaces.html     # WEB5 Celestial Bodies & Spaces
│   ├── 14-geonft-ar.html            # WEB5 GeoNFTs & AR
│   ├── 15-web6-ai-intro.html        # WEB6 AI Abstraction Layer
│   ├── 16-fahrn-agents.html         # WEB6 FAHRN multi-agent orchestration
│   └── 17-holonic-memory.html       # WEB6 Holonic Memory
├── case-studies/
│   ├── trust-site.html              # SovereignTrust (WEB4 + WEB6)
│   ├── nft-founders.html            # Founder NFTs (WEB4)
│   ├── oportal.html                 # OPORTAL (WEB4 + WEB5 + WEB6)
│   ├── our-world.html               # Our World (WEB4 + WEB5, Unity AR)
│   ├── odoom.html                   # ODOOM (C/OGEngine + STARAPIClient)
│   └── oquake.html                  # OQuake (Vulkan/OGEngine + STARAPIClient)
├── assets/
│   ├── css/style.css
│   └── js/
├── vercel.json                      # Clean URLs, security headers, asset caching
└── package.json
```

---

## Deployment

The site is deployed automatically to Vercel on push to `main`. `vercel.json` configures:

- **Clean URLs** — `/tutorials/01-getting-started` and `/case-studies/trust-site` (no `.html`)
- **Security headers** — `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`
- **Asset caching** — `assets/**` served with `max-age=31536000, immutable`

---

## Related

- [OASIS API / ONODE WebAPI](https://github.com/NextGenSoftwareUK/OASIS/tree/master/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI) — the backend these tutorials call
- [WEB4 API Docs](https://github.com/NextGenSoftwareUK/OASIS/tree/master/Docs/Devs/API%20Documentation/WEB4%20OASIS%20API)
- [WEB5 STAR API Docs](https://github.com/NextGenSoftwareUK/OASIS/tree/master/Docs/Devs/API%20Documentation/WEB5%20STAR%20API)
- [WEB6 AI Docs](https://github.com/NextGenSoftwareUK/OASIS/tree/master/Docs/Devs/API%20Documentation/WEB6)
- [OASIS Omniverse](https://oasisomniverse.one) — main platform site
- [@oasisomniverse/web4-api](https://www.npmjs.com/package/@oasisomniverse/web4-api) on npm
- [@oasisomniverse/web5-api](https://www.npmjs.com/package/@oasisomniverse/web5-api) on npm
- [@oasisomniverse/web6-api](https://www.npmjs.com/package/@oasisomniverse/web6-api) on npm
