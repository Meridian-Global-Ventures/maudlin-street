# Deployment Notes

This document describes the **intended** publication path. The
scaffold phase performs none of it. No GitHub Pages settings, no DNS,
no certificate, no remote, no deployment configuration has been
touched by the scaffold.

## Three publication targets

| Phase | URL | Base path | Status |
|---|---|---|---|
| Initial (GitHub Pages project site) | `https://<username>.github.io/maudlin-street/` | `/maudlin-street/` | not_configured |
| Custom domain (under mgv.com apex) | `https://maudlinstreet.mgv.com/` | `/` | not_configured |
| Longer-term apex | `https://maudlinstreet.com/` | `/` | not_configured |

The `pathPrefix` is set in `.eleventy.js`. It defaults to
`/maudlin-street/` and can be overridden at build time via the
`SITE_PATH_PREFIX` env var (e.g., `SITE_PATH_PREFIX=/ npx eleventy`
when building for a custom domain).

## Initial GitHub Pages setup (future phase, not yet performed)

When John approves the initial publication phase, the work is:

1. Create a remote GitHub repository named `maudlin-street` under the
   chosen GitHub account.
2. Add it as the `origin` remote of this local repo.
3. Push `main`.
4. Configure GitHub Pages on the repo to publish from `main` /
   `/docs` or (more likely) from a built `gh-pages` branch produced
   by a GitHub Actions workflow.
5. Verify the build by visiting
   `https://<username>.github.io/maudlin-street/`.

None of those steps are performed by the scaffold. Each is its own
authorized step. Note that creating a GitHub remote requires John's
explicit authorization regardless of whether the repo is public or
private (it is an external account change).

## Custom-domain phase (maudlinstreet.mgv.com)

When John approves the custom-domain phase:

1. Switch `SITE_PATH_PREFIX` to `/` for the build.
2. Add a `CNAME` file containing `maudlinstreet.mgv.com` at the
   published root (typically built by Eleventy from a `src/CNAME`
   passthrough).
3. Configure DNS at the `mgv.com` apex: add a `CNAME` record for
   `maudlinstreet` pointing at `<username>.github.io`.
4. Confirm Pages enforces HTTPS for the custom domain.
5. Verify reachability and certificate.

This is DNS work. Any DNS change is its own authorization moment
under the source-of-truth boundary; this scaffold does not encode
the DNS state.

## Apex phase (maudlinstreet.com)

Out of scope for this scaffold. Two paths are possible: keep Pages as
the host and update the apex DNS to GitHub's apex `A` records (or
`ALIAS`/`ANAME` at a DNS provider that supports them), or migrate to a
different host. Either path is its own scoped phase.

## Pages publisher choice

By keeping committed symlinks out of the repo (see
`docs/media-policy.md`), this site is eligible for either:

- **Default GitHub Pages publisher.** Requires the source to be a
  built static site at a configured branch path.
- **GitHub Actions publisher.** Strictly required when committed
  symlinks exist; optional otherwise. The Actions path is more
  flexible (custom build steps) but adds CI surface.

The scaffold does not pick. The initial deployment phase will pick.

## What this document is not

- It is not a deployment runbook. It records intent, not procedure.
- It is not authorization. Each deployment step requires John's
  current-session approval per the pause-points doctrine in the Mac
  Studio CLAUDE.md.
- It is not a DNS record. Actual DNS records live with the DNS
  provider, not in this repo.
