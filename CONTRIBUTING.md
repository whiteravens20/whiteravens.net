# Development & Sync Guide

> Quick reference for maintaining this fork and syncing with upstream.

## Branch Overview

```
upstream (murraco/jekyll-theme-minimal-resume)
    │
    ▼  (auto or manual sync)
upstream-sync          ← clean mirror of upstream
    │
    ▼  (merge into dev)
   dev                 ← your working branch
    │
    ▼  (merge when ready)
  master → deploy      ← production (GitHub Pages)
```

---

## 1. Sync upstream-sync with upstream (fetch latest)

This happens **automatically** every Monday (GitHub Actions), but you can do it manually:

### Option A: Trigger from GitHub UI

1. Go to **Actions** tab → **Sync Upstream** workflow
2. Click **Run workflow** → **Run workflow**
3. If there are changes, a PR and notification issue will be created automatically

### Option B: Manual via terminal

```bash
# Make sure you're on upstream-sync
git checkout upstream-sync

# Fetch and merge upstream
git fetch upstream
git merge upstream/master --no-edit

# Push updated upstream-sync
git push origin upstream-sync

# Go back to dev
git checkout dev
```

---

## 2. Merge upstream-sync into dev

```bash
# Make sure you're on dev with clean working tree
git checkout dev
git status                    # check for uncommitted changes

# If you have uncommitted changes, stash them first
git stash                     # optional, only if dirty

# Merge upstream-sync into dev
git merge upstream-sync --no-edit

# If there are conflicts:
#   - For package-lock.json: usually take theirs (upstream version)
#     git checkout --theirs package-lock.json && git add package-lock.json
#
#   - For your custom files (_config.yml, _includes/, etc.): keep yours
#     git checkout --ours _config.yml && git add _config.yml
#
#   - Then complete the merge:
#     git commit --no-edit

# Restore stashed changes if needed
git stash pop                 # optional, only if you stashed

# Push
git push origin dev
```

### Conflict resolution cheat sheet

| File                  | Usually take  | Why                                |
|-----------------------|---------------|------------------------------------|
| `package-lock.json`   | **theirs**    | Security updates from upstream     |
| `package.json`        | **theirs**    | Dependency version bumps           |
| `_config.yml`         | **ours**      | Your site configuration            |
| `_includes/*.html`    | **ours**      | Your custom content                |
| `README.md`           | **ours**      | Your custom README                 |
| `CNAME`               | **ours**      | Your domain                        |
| `src/styles/*.scss`   | **review**    | May contain both fixes and your customizations |
| `gulpfile.js`         | **review**    | May contain build improvements     |

```bash
# Take their version of a file
git checkout --theirs <file> && git add <file>

# Keep your version of a file
git checkout --ours <file> && git add <file>

# After resolving all conflicts
git commit --no-edit
```

---

## 3. Deploy to production (dev → master)

```bash
# Make sure dev is clean and tested
git checkout master
git merge dev --no-edit
git push origin master
# GitHub Actions will auto-deploy to GitHub Pages
```

---

## 4. Full sync from scratch (all steps combined)

```bash
# 1. Update upstream-sync
git checkout upstream-sync
git fetch upstream
git merge upstream/master --no-edit
git push origin upstream-sync

# 2. Merge into dev
git checkout dev
git merge upstream-sync --no-edit
# resolve conflicts if any (see cheat sheet above)
git push origin dev

# 3. Deploy when ready
git checkout master
git merge dev --no-edit
git push origin master
```

---

## 5. Testing the site locally

Prerequisites: Ruby, Bundler, Node.js, npm.

### First time setup

```bash
# Install Ruby dependencies
bundle install

# Install Node dependencies
npm install
```

### Build & preview

```bash
# 1. Compile assets (SCSS → CSS, JS → minified JS)
npx gulp js sass fonts

# 2. Build the Jekyll site
bundle exec jekyll build

# 3. Serve locally with live reload
bundle exec jekyll serve
# Site is now at http://localhost:4000
```

Or use `jekyll serve --watch` to auto-rebuild on file changes:

```bash
bundle exec jekyll serve --watch
```

### Rebuilding after changes

| Changed file          | What to run                |
|-----------------------|----------------------------|
| `src/styles/*.scss`   | `npx gulp sass`            |
| `src/js/*.js`         | `npx gulp js`              |
| `src/fonts/`          | `npx gulp fonts`           |
| `_includes/*.html`, `_layouts/*.html`, `_config.yml` | Jekyll rebuilds automatically with `--watch` |

### Quick one-liner (build everything then serve)

```bash
npx gulp js sass fonts && bundle exec jekyll serve --watch
```

---

## Useful commands

```bash
# See what upstream has that you don't
git log --oneline dev..upstream-sync

# See file-level differences
git diff dev..upstream-sync --stat

# Check all branches
git branch -a

# Fetch everything
git fetch --all
```
