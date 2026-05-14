# Maudlin Street

A content-first companion website about The Smiths and Morrissey: lyric
notes, discography commentary, interview metadata, source citations,
and archive-derived research.

This repository is the **authoring repo** for the site. It is a static
Eleventy-style scaffold designed to be content-heavy, Markdown-driven,
and friendly to long-form addition over time.

## Publication targets

The repo is designed to be publishable to three target URLs in order:

1. **Initial:** `https://<username>.github.io/maudlin-street/`
   (GitHub Pages project site; base path `/maudlin-street/`)
2. **Custom domain:** `maudlinstreet.mgv.com`
   (CNAME under the `mgv.com` apex; root path `/`)
3. **Longer-term:** `maudlinstreet.com`
   (independent apex; root path `/`)

Publication itself is **out of scope for this scaffold phase.** No
GitHub Pages settings, no DNS, no certificate, no remote, and no
deployment configuration are touched by the scaffold. See
`docs/deployment-notes.md` for the documented (but unperformed)
deployment path.

## Source authority doctrine

Maudlin Street relies on the local reconstruction of archived
`passionsjustlikemine.com` as its **definitive source of truth** for
every fact, page, lyric, asset, and provenance record that
reconstruction covers. That reconstruction lives in the read-only
companion repo at
`/Users/johns-mac-studio/workspace/passions-just-like-mine` and is
**never modified by this repo.**

Secondary sources - including any retired Smiths/Morrissey lyric
sites recovered from the Wayback Machine, any fan-archive captures,
and any external advisor recommendation - are **additive review
material only.** They may supplement but they may not replace
PJLM-derived content. Conflicts between a secondary source and
PJLM are logged as candidates for review, not applied automatically.

**No `passionsjustlikemine.com`-derived page, lyric, fact, asset,
inventory record, or source-of-truth assertion may be overwritten,
normalized, superseded, or weakened by any secondary source, Wayback
lyric candidate, advisor recommendation, or automated workflow without
John's express authorization.**

See `docs/source-authority.md` and `data/source-authority.json` for
the canonical doctrine.

The first planned future ingestion effort that will feed this site is
Wayback Machine recovery from retired Smiths/Morrissey lyric sources.
This scaffold phase performs no crawl, no fetch, no archive lookup,
and no content extraction.

## Media and video policy (no-video-in-repo)

- Pages, metadata, schemas, and source references live in this repo.
- **Large video and audio files do not live in this repo.** They live
  on John's external server or a future CDN and are referenced from
  this repo by remote URL only, in content frontmatter or in
  `data/*.json` manifest files.
- See `docs/media-policy.md` for the full rule, the forbidden
  extension list, and the per-content-record field schema.

## Local-only media symlink policy

The `external-media/` folder is a **local-only authoring workspace.**
On John's Mac, it may contain symlinks pointing at video files mounted
from his external server, for local preview/authoring convenience.

**Symlinks must not be committed.** `external-media/.gitignore`
prevents commit of any contents other than the folder's `README.md`
and `.gitignore`. GitHub Pages documentation states that repositories
containing committed symlinks must publish via GitHub Actions; this
scaffold avoids that complication entirely by keeping symlinks
local-only.

## Layout

```
maudlin-street/
  src/                 - Eleventy-style site source (pages, layouts, data, assets)
  content/             - long-form content directories (schemas in README per type)
  data/                - reference data (media manifest example, source authority)
  external-media/      - local-only media workspace (gitignored except README/.gitignore)
  docs/                - architecture, content model, media policy, deployment, doctrine
  scripts/             - no-dependency validation scripts
```

See `docs/architecture.md` for the rationale, `docs/content-model.md`
for the per-section content schema, and `docs/media-policy.md` for
the no-video-in-repo rule.

## Development (future, not this phase)

`package.json` declares the intended build, serve, and check scripts.
No dependencies have been installed by the scaffold phase. A future
phase will:

- run `npm install` to populate `node_modules/`,
- run `npm run build` to render to `_site/`,
- and (separately) configure GitHub Pages publication.

`scripts/check-repo.mjs` is a no-dependency Node script that validates
the scaffold without needing any installed package.
