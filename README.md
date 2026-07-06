# White Ravens Home Page

[![Website](https://img.shields.io/badge/🌐-whiteravens.net-black)](https://whiteravens.net)
[![Deploy](https://github.com/whiteravens20/whiteravens.net/actions/workflows/deploy.yml/badge.svg)](https://github.com/whiteravens20/whiteravens.net/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support-red?logo=ko-fi)](https://ko-fi.com/whiteravens20)

Source of **[whiteravens.net](https://whiteravens.net)** — the home page of the White Ravens community.

A single-page, English-only promotional site built with [Astro](https://astro.build): static output, no UI framework, ~1 KB of client JavaScript (theme toggle + scroll reveals), all assets self-hosted.

## Editing content

All copy lives in one file — **[`src/content/copy.yml`](src/content/copy.yml)**. Layout and styling never need to be touched to change wording.

Facts (URLs, email, social handles, analytics endpoint) live in **[`src/config/site.ts`](src/config/site.ts)**.

## Development

```bash
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build locally
```

## Project structure

```
public/            served as-is: CNAME, healthz, favicons, manifest, robots.txt
src/
  assets/          raven logo (optimized at build time)
  components/      Hero, Aurora, Pillars, LinksStrip, Footer, ThemeToggle, Seo
  config/site.ts   site facts
  content/copy.yml all copy
  layouts/         Base.astro (head, CSP, theme init)
  pages/           index.astro, 404.astro
  scripts/         reveal.ts (scroll-triggered reveals)
  styles/          tokens.css (design tokens, dark + light), global.css
```

## Branch strategy

| Branch | Purpose                                          |
|--------|--------------------------------------------------|
| `main` | Production — automatic deploy to GitHub Pages    |
| `dev`  | Development — active work, tested locally first  |

Push to `main` triggers the [deploy workflow](.github/workflows/deploy.yml): `npm ci` → `npm run build` → GitHub Pages (OIDC, no tokens). `/healthz` serves `OK` for uptime monitoring.

## Security & privacy

- Strict `Content-Security-Policy` meta tag; the only external origins are [GoatCounter](https://www.goatcounter.com/) (privacy-friendly analytics) and the Ko-fi button image.
- Fonts and icons are self-hosted/inlined — no CDN or Google Fonts requests.
- CI: least-privilege workflow permissions, `npm ci` from the committed lockfile, weekly `npm audit` + signature verification, CodeQL, Dependabot.

See [SECURITY.md](SECURITY.md) for the policy and reporting instructions.

## Accessibility

Dark theme by default with a persistent light-theme toggle, `prefers-reduced-motion` disables all animation, skip-to-content link, AA contrast in both themes.

## History

Until 2026 this site was built on Jekyll, based on [jekyll-theme-minimal-resume](https://github.com/murraco/jekyll-theme-minimal-resume) by [murraco](https://github.com/murraco) — thanks! The Astro rewrite shares no code with it.

## License

[MIT](LICENSE)
