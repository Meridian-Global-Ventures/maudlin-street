# Deployment Notes

This document describes the **intended** publication path. The local
Pages-prep phase has added a build/deploy workflow at
`.github/workflows/pages.yml`, but no remote service has been touched.
No GitHub repository has been created, no remote is configured, no
push has occurred, no GitHub Pages settings have been changed, no
custom domain has been added, no DNS record has been touched, and no
certificate has been requested. Each of those steps is a separate
authorization gate.

## Three publication targets

| Phase | URL | Base path | Status |
|---|---|---|---|
| Initial (GitHub Pages project site) | `https://Meridian-Global-Ventures.github.io/maudlin-street/` | `/maudlin-street/` | not_configured |
| Custom domain (under mgv.com apex) | `https://maudlinstreet.mgv.com/` | `/` | not_configured |
| Longer-term apex | `https://maudlinstreet.com/` | `/` | not_configured |

The `pathPrefix` is set in `.eleventy.js`. It defaults to
`/maudlin-street/` and can be overridden at build time via the
`SITE_PATH_PREFIX` env var (e.g., `SITE_PATH_PREFIX=/ npx eleventy`
when building for a custom domain).

## Initial GitHub Pages setup (future phase, not yet performed)

When John approves the initial publication phase, the work is:

1. Create a remote GitHub repository named `maudlin-street` under the
   `Meridian-Global-Ventures` GitHub organization.
2. Add it as the `origin` remote of this local repo.
3. Push `main`.
4. Configure GitHub Pages on the repo to use the **GitHub Actions**
   source (Settings -> Pages -> Source -> GitHub Actions). The
   workflow at `.github/workflows/pages.yml` will then run on every
   push to `main`, build the site with `npm ci && npm run build`, and
   deploy `./_site` to Pages using the official Pages actions.
5. Verify the build by visiting
   `https://Meridian-Global-Ventures.github.io/maudlin-street/`.

None of those steps are performed by the scaffold or the Pages-prep
phase. Each is its own authorized step. Creating a remote repo under
the `Meridian-Global-Ventures` organization, adding it as `origin`,
and pushing `main` are external-account / remote actions and are
**pause-points under ADR 0004** that require John's express
in-session authorization at the moment of each step.

## Custom-domain phase (maudlinstreet.mgv.com)

When John approves the custom-domain phase:

1. Switch `SITE_PATH_PREFIX` to `/` for the build.
2. Add a `CNAME` file containing `maudlinstreet.mgv.com` at the
   published root (typically built by Eleventy from a `src/CNAME`
   passthrough).
3. Configure DNS at the `mgv.com` apex: add a `CNAME` record for
   `maudlinstreet` pointing at `Meridian-Global-Ventures.github.io`.
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

**Chosen: GitHub Actions.** Codified by `.github/workflows/pages.yml`
in this repo.

This is the right shape for an Eleventy source repo because the
generated `_site/` output is intentionally gitignored and is therefore
not available to the default Pages publisher (which expects pre-built
HTML at a configured branch path). The Actions publisher runs `npm ci`
and `npm run build` on every push to `main`, then deploys `./_site` as
the Pages artifact. The workflow uses official Pages actions and
carries no project-specific secrets.

By keeping committed symlinks out of the repo (see
`docs/media-policy.md`), the repo would have been eligible for the
default Pages publisher as well, but Actions is the better fit for a
build-required Eleventy site.

For the future custom-domain phases, the workflow will need to:

- override `SITE_PATH_PREFIX=/` so links render at the root path; and
- ship a `CNAME` file (built from a passthrough source) carrying the
  active custom domain.

Both changes are out of scope for the initial Pages publication and
will land in a subsequent custom-domain phase.

## What this document is not

- It is not a deployment runbook. It records intent, not procedure.
- It is not authorization. Each deployment step requires John's
  current-session approval per the pause-points doctrine in the Mac
  Studio CLAUDE.md.
- It is not a DNS record. Actual DNS records live with the DNS
  provider, not in this repo.
