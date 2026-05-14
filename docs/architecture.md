# Architecture

Maudlin Street is a content-first static website. The repo is designed
to scale across many years of additions (lyric notes, discography
commentary, interview metadata, source citations, archive-derived
research) without becoming brittle.

## Design constraints

1. **Static.** No server-side runtime dependencies. GitHub Pages is
   the initial publication target and is static-only.
2. **Markdown-first.** Long-form text lives in Markdown with YAML
   frontmatter. Data files (`data/`, `src/_data/`) carry structured
   references. Templates render the two together.
3. **No large media in repo.** Video and audio live external; the repo
   stores metadata, captions, and remote URLs. See
   `docs/media-policy.md`.
4. **Source authority.** Archived `passionsjustlikemine.com` is the
   definitive source of truth. See `docs/source-authority.md`. The
   doctrine is encoded in this scaffold at four surfaces: the root
   README, this docs/ tree, `data/source-authority.json`, and every
   content/ schema README.
5. **Build later.** No dependencies are installed by the scaffold
   phase. `package.json` declares the intended dev dependency set; a
   later phase will `npm install`.
6. **Publish later.** No GitHub Pages settings, no DNS, no remote,
   no certificate, no deployment configuration is touched by the
   scaffold. See `docs/deployment-notes.md`.

## Directory shape

```
.
+-- README.md
+-- .gitignore
+-- package.json                  # scripts only; no installed deps
+-- .eleventy.js                  # Eleventy config; pathPrefix-aware
+-- src/                          # site source
|   +-- index.md
|   +-- about.md
|   +-- lyrics/index.md
|   +-- interviews/index.md
|   +-- sources/index.md
|   +-- _data/site.json
|   +-- _includes/
|   |   +-- layouts/base.njk
|   |   +-- components/source-note.njk
|   +-- assets/css/site.css
+-- content/                      # long-form content directories
|   +-- lyrics/README.md          # schema
|   +-- interviews/README.md      # schema
|   +-- discography/README.md     # schema
|   +-- sources/README.md         # schema
|   +-- media/README.md           # schema
+-- data/                         # structured reference data
|   +-- media-manifest.example.json
|   +-- source-authority.json
+-- external-media/               # local-only authoring workspace
|   +-- README.md
|   +-- .gitignore                # ignores everything except README and itself
+-- docs/                         # this folder
|   +-- architecture.md           # you are here
|   +-- content-model.md
|   +-- media-policy.md
|   +-- deployment-notes.md
|   +-- source-authority.md
+-- scripts/
    +-- check-repo.mjs            # no-dependency validation script
```

## Why Eleventy

The project will be content-heavy, mostly Markdown, with structured
data linking content records to source records. Eleventy renders
Markdown + Nunjucks/Liquid templates with no runtime requirements,
produces static HTML, has a low operational surface, and is compatible
with both default GitHub Pages publishing (when no committed symlinks
exist) and GitHub Actions-based publishing (if a later phase ever
requires it).

The scaffold installs nothing. A later "wire up the build" phase will
run `npm install` and confirm the build produces `_site/` correctly
for each publication target (project base path vs. root path).

## Why three URL targets

- `https://Meridian-Global-Ventures.github.io/maudlin-street/` is the fastest path
  to a public URL John can bookmark. Project base path is
  `/maudlin-street/`.
- `https://maudlinstreet.mgv.com/` is the first custom-domain target,
  under an apex John already owns (`mgv.com`). Root path is `/`.
- `https://maudlinstreet.com/` is the longer-term apex, fully
  independent.

Switching target only changes `pathPrefix` in `.eleventy.js`
(documented in that file). Content and templates are written to work
with either base path via Eleventy's `| url` filter.

## What this scaffold deliberately does not do

- Install dependencies.
- Run a build.
- Configure GitHub Pages settings.
- Configure DNS or any custom domain.
- Add a git remote.
- Commit anything.
- Crawl any external site.
- Copy any content from `passionsjustlikemine.com`.

Those are downstream phases, each scoped separately.
