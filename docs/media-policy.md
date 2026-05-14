# Media Policy

This site does not host large media in git. Pages, metadata,
thumbnails (when small and rights-clear), and source references live
in the repo; video and audio live external.

## The rule

- **No video, no audio, no large binary media in this repo.**
- Production pages reference media by remote URL recorded in the
  content record's frontmatter or in a `data/*.json` manifest.
- Local symlinks to media may exist on John's Mac under
  `external-media/`, gitignored, for authoring preview only.
- Production pages **never** reference `external-media/` paths.

## Why

1. **GitHub Pages source-repo and published-site size limits** make
   committing video files an operational dead end.
2. **Pages with committed symbolic links** must publish via GitHub
   Actions rather than the default Pages publisher; keeping all
   symlinks out of git keeps both publisher paths open.
3. **Bandwidth and cost**: Pages is not a CDN. Serving video from
   Pages would be expensive and slow at scale. John's external server
   (and/or a future CDN) is the right surface.

## Forbidden extensions

`scripts/check-repo.mjs` fails if any tracked file in the repo carries
an extension from this list:

```
.mp4 .m4v .mov .webm .avi .mkv .wmv .flv .ogv .3gp
.mp3 .wav .flac .aiff .aif .m4a .ogg .opus .wma
.mxf .prores
```

This is intentionally aggressive. If a small, rights-clear,
truly-needed audio sample or video preview becomes necessary in the
future, the extension list and the check script are amended in a
scoped, reviewed phase - not silently overridden.

## Size cap

`scripts/check-repo.mjs` also fails if any tracked file exceeds 5 MB.
Anything that hits the cap is media or a generated artifact and does
not belong in this repo.

## Symlinks

**No symlinks outside `external-media/`.** `scripts/check-repo.mjs`
fails on any symbolic link whose path is not under that folder.

**Local symlinks under `external-media/` are allowed and expected.**
That folder is the local-only authoring workspace, gitignored except
for its `README.md` and `.gitignore`. The validator treats it as a
permitted symlink surface so John's authoring workflow (symlinking to
server-mounted video for local preview) does not trip the check.
Symlinks placed there are never committed because of
`external-media/.gitignore`, and production pages never reference
`external-media/` paths. See `external-media/README.md`.

## Posters and thumbnails

Small static images that act as posters for an external video may be
committed as raster image files in `src/assets/` **only when** they
are:

1. small (well under the 5 MB cap; typically tens of kilobytes),
2. rights-clear (John's own asset, public-domain, or explicitly
   licensed for republication),
3. attributed in the content record's `rights_notes` field.

When in doubt: do not commit the poster. Reference an external poster
URL or omit the poster entirely.

## What this policy is not

- It is not a license to ignore copyright on short attributed
  excerpts; those rules live in the content/ schema READMEs and the
  source-authority doctrine.
- It is not a deployment policy. Deployment lives in
  `docs/deployment-notes.md`.
- It is not a substitute for a future Rights and Licensing document;
  this is the operational guardrail only.
