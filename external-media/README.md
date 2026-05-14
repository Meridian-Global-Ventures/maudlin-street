# external-media/ (local-only authoring workspace)

This folder is a **local-only authoring workspace.** It is **not** a
production media surface and its contents are not published.

## What lives here on John's Mac

Symlinks to media files (typically video) mounted from John's external
server. The symlinks let local Eleventy previews resolve a video for
visual sanity-checking during authoring without ever committing the
video itself.

## What never lives here in git

**Everything except this `README.md` and the `.gitignore` is ignored.**

`external-media/.gitignore` enforces the rule:

```
*
!.gitignore
!README.md
```

Symlinks, video files, audio files, thumbnails, scratch files, and
authoring temp output are all ignored. The folder is intentionally
empty in any clean checkout.

## Why this folder exists at all

Two reasons:

1. **Authoring convenience.** Local previews can resolve media paths
   for sanity-checking duration, framing, or layout without spinning
   up the production CDN.
2. **GitHub Pages constraint avoidance.** GitHub Pages documentation
   states that repositories containing committed symlinks must
   publish via GitHub Actions rather than the default Pages publisher.
   By keeping every symlink out of git, the repo stays eligible for
   either publisher and the deploy story remains simple.

## Production media references

Production pages reference media by **remote URL** recorded in
content frontmatter or in a `data/*.json` manifest record. They never
reference an `external-media/` path. See `docs/media-policy.md`.

## How to use the workspace locally

```sh
# Example local symlink creation (NOT committed):
ln -s /Volumes/server-mount/interviews/example-clip.mp4 \
      external-media/example-clip.mp4
```

The `external-media/.gitignore` will ignore the symlink. `git status`
will not report it. Removing the symlink later is `rm
external-media/example-clip.mp4`. The underlying file on the server
is untouched.

## Validator behavior

`scripts/check-repo.mjs` permits symlinks whose relative path is under
`external-media/`. Symlinks anywhere else in the repository fail the
check. The validator runs locally with no installed dependencies and
is safe to run after creating or removing local symlinks here.
