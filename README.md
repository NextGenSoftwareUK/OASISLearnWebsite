# OASIS Learn

Developer onboarding tutorial series for the [OASIS Omniverse](https://oasisomniverse.one) platform — step-by-step modules covering the WEB4 SDK, Avatar identity, Karma, NFTs, Holons, OAPPs, metaverse integration, and production deployment.

Live site: **[learn.oasisomniverse.one](https://learn.oasisomniverse.one)**

---

## Tutorials

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
├── index.html                   # Tutorial listing / home page
├── tutorials/
│   ├── 01-getting-started.html
│   ├── 02-avatar-identity.html
│   ├── 03-karma-reputation.html
│   ├── 04-nft-wallet.html
│   ├── 05-data-holons.html
│   ├── 06-first-oapp.html
│   ├── 07-metaverse-game.html
│   └── 08-providers-production.html
├── assets/
│   ├── css/style.css
│   └── js/
├── vercel.json                  # Clean URLs, security headers, asset caching
└── package.json
```

---

## Deployment

The site is deployed automatically to Vercel on push to `main`. `vercel.json` configures:

- **Clean URLs** — `/tutorials/01-getting-started` (no `.html` extension)
- **Security headers** — `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`
- **Asset caching** — `assets/**` served with `max-age=31536000, immutable`

---

## Related

- [OASIS API / ONODE WebAPI](https://github.com/NextGenSoftwareUK/OASIS/tree/master/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI) — the backend these tutorials call
- [OASIS Omniverse](https://oasisomniverse.one) — main platform site
