# Contributing

Maintainer guide for this repo. The site is a single-page Astro build deployed to GitHub Pages.

## Workflow

```
feature/<topic>  →  dev  →  main → deploy
```

- Work happens on topic branches cut from `dev`; test locally before pushing.
- `dev` is the integration/testing branch. CI builds every push and PR.
- Merging `dev` → `main` deploys to production automatically.
- Commits follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `chore:`, `docs:`, `ci:` …).

## Local testing

```bash
npm install
npm run dev        # live-reload dev server
npm run build      # astro check + production build
npm run preview    # exactly what production will serve
```

Before merging to `main`, verify in a real browser:

- both themes (toggle + reload persistence),
- reduced-motion mode (devtools emulation) — nothing should animate,
- no CSP violations in the console (production build only — `npm run preview`),
- `curl -s localhost:4321/healthz` returns `OK`.

## Content vs code

Copy changes: edit `src/content/copy.yml` only.
Link/URL changes: edit `src/config/site.ts` only.
Anything visual: `src/components/` and `src/styles/tokens.css`.
