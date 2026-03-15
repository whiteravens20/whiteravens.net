# White Ravens Home Page

[![Discord](https://img.shields.io/badge/Discord_PL-White%20Ravens-blue?logo=discord&labelColor=lightgrey)](https://discord.gg/5JMk8Z4)
[![Website](https://img.shields.io/badge/🌐-whiteravens.net-black)](https://whiteravens.net)
[![Status](https://img.shields.io/badge/Status-Services-green)](https://status.wrservices.link)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support-red?logo=ko-fi)](https://ko-fi.com/whiteravens20)

## About

Source code for the **[whiteravens.net](https://whiteravens.net)** landing page — the home of the White Ravens community.

Built with [Jekyll](https://jekyllrb.com/) using the [Jekyll Resume Theme](https://github.com/murraco/jekyll-theme-minimal-resume) by [murraco](https://github.com/murraco).

> **Note:** The website content is in Polish.

## Stack

![](https://img.shields.io/badge/jekyll-✓-blue.svg)
![](https://img.shields.io/badge/html5-✓-blue.svg)
![](https://img.shields.io/badge/sass-✓-blue.svg)
![](https://img.shields.io/badge/gulp-✓-blue.svg)
![](https://img.shields.io/badge/particle.js-✓-blue.svg)
![](https://img.shields.io/badge/font--awesome_v6-✓-blue.svg)
![](https://img.shields.io/badge/github_actions-✓-blue.svg)

## Branch Strategy

| Branch          | Purpose                                                           |
|-----------------|-------------------------------------------------------------------|
| `master`        | Production — automatic deploy to GitHub Pages                     |
| `dev`           | Development — active work on the site                             |
| `upstream-sync` | Clean upstream copy — automatic weekly sync (Monday 06:00 UTC)    |

### How does upstream sync work?

```
upstream (murraco/jekyll-theme-minimal-resume)
    │
    ▼  (GitHub Actions – weekly sync)
upstream-sync
    │
    ▼  (automatic PR for review)
   dev
    │
    ▼  (manual merge after review)
  master  →  GitHub Pages (whiteravens.net)
```

1. **GitHub Actions** (`upstream-sync.yml`) fetches changes from the original repository weekly
2. If there are new commits, the `upstream-sync` branch is updated
3. A **PR** is automatically created from `upstream-sync` → `dev`
4. A notification **issue** is created to alert about new changes
5. You decide whether and when to merge into `master`

The workflow can also be triggered manually (workflow_dispatch) from the Actions tab.

## Running Locally

```bash
# Install dependencies
gem install jekyll bundler
bundle install
npm install

# Build assets (SCSS → CSS, JS)
npx gulp

# Build Jekyll
bundle exec jekyll build

# Local preview
bundle exec jekyll serve
```

## CI/CD

| Workflow            | Trigger                             | Description                             |
|---------------------|-------------------------------------|-----------------------------------------|
| `deploy.yml`        | Push to `master`                    | Build Jekyll + deploy to GitHub Pages   |
| `upstream-sync.yml` | Cron (Mon 06:00 UTC) / manual       | Sync from upstream + PR + notification  |

### Comparison with Jenkins

This project uses **GitHub Actions** — GitHub's native CI/CD. For comparison:

| Feature             | GitHub Actions                        | Jenkins                                  |
|---------------------|---------------------------------------|------------------------------------------|
| Hosting             | Managed by GitHub (cloud)             | Self-hosted (open source, you install it)|
| Configuration       | YAML in `.github/workflows/`          | Jenkinsfile (Groovy) or GUI              |
| Cost                | Free for public repos                 | Free (open source), but you pay for the server |
| Ecosystem           | GitHub Marketplace (Actions)          | 1800+ plugins                            |
| Scalability         | Automatic                             | Manual (you add agents/nodes)            |
| Control             | Limited to GitHub API                 | Full — your server, your rules           |

**Jenkins** ([jenkins.io](https://www.jenkins.io/)) is an open-source automation server written in Java. It runs on your own server and supports CI/CD pipelines defined in a `Jenkinsfile` (Groovy syntax). Key features:
- **Full control** — install on your server, configure however you want
- **Pipeline as Code** — `Jenkinsfile` in the repository defines the entire pipeline
- **Master-agent architecture** — master manages, agents execute tasks (scaling)
- **Huge plugin ecosystem** — supports virtually every language/tool
- **For this project** it would be overkill — GitHub Actions is simpler and sufficient

## Links

- 🌐 [whiteravens.net](https://whiteravens.net) — homepage
- 📊 [Service Status](https://status.wrservices.link)
- 📖 [Documentation](https://wrservices.link)
- 💬 [Discord](https://discord.gg/5JMk8Z4)

---

## Credits

Based on [Jekyll Resume Theme](https://github.com/murraco/jekyll-theme-minimal-resume) by **[Mauricio Urraco](https://github.com/murraco)**.

Additional thanks:
- [Nathan Randecker](https://github.com/nrandecker) — original contribution to the theme

> Original theme README available in the upstream repository: [murraco/jekyll-theme-minimal-resume](https://github.com/murraco/jekyll-theme-minimal-resume)

## License

[MIT](LICENSE)