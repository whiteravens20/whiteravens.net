# Security Policy

## Reporting a vulnerability

Email **kontakt@whiteravens.net** or use
[GitHub private vulnerability reporting](https://github.com/whiteravens20/whiteravens.net/security/advisories/new).
You should receive a response within a few days. Please do not open public
issues for security reports.

## Scope

This repository contains a fully static website (no backend, no forms, no
cookies, no user input). The production deployment is
[whiteravens.net](https://whiteravens.net) on GitHub Pages. Only the latest
deployed version (built from `main`) is supported.

## Hardening in place

- **Content-Security-Policy** meta tag (GitHub Pages cannot send headers):
  `default-src 'self'`; the only allowed external origins are GoatCounter
  (analytics) and the Ko-fi button image. The single inline script is
  hash-allowlisted, with the hash computed at build time.
- **Referrer-Policy**: `strict-origin-when-cross-origin`.
- **Self-hosted assets** — fonts and icons ship from the same origin; no CDN
  scripts, no Google Fonts.
- **Supply chain**: all npm dependencies are build-time only; CI installs with
  `npm ci` from the committed lockfile; weekly `npm audit` +
  `npm audit signatures`; Dependabot for npm and GitHub Actions; CodeQL
  analysis on every push.
- **CI/CD**: least-privilege per-job workflow `permissions:`; deploys use
  GitHub's OIDC-based Pages deployment (no long-lived tokens or PATs); only
  first-party `actions/*` and `github/*` actions plus
  `actions/dependency-review-action`.
