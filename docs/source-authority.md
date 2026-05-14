# Source Authority

This document is the load-bearing doctrine of Maudlin Street.

The machine-readable form lives in `data/source-authority.json`. The
human-readable form is this file.

## The rule

**Archived `passionsjustlikemine.com` is the definitive source of
truth.** The local reconstruction derived from it - maintained in the
companion repo at
`/Users/johns-mac-studio/workspace/passions-just-like-mine` - is
authoritative for every fact, page, lyric, asset, and provenance
record it covers.

Every other source registered in the knowledge-source-corpus (in the
companion repo at
`_inventory/knowledge-source-corpus/sources.json`), and every external
input from the Wayback Machine, fan archives, review collections, or
advisor recommendations, is **additive review material only.**

Conflicts between a secondary source and PJLM are **recorded as
candidates for review,** not applied automatically. The PJLM-derived
content remains in place.

**No `passionsjustlikemine.com`-derived page, lyric, fact, asset,
inventory record, or source-of-truth assertion may be overwritten,
normalized, superseded, or weakened by any secondary source, Wayback
lyric candidate, advisor recommendation, or automated workflow without
John's express authorization.**

## What "express authorization" means

Express authorization is a present-tense, prompt-specific, current-
session statement from John that authorizes a particular change to a
particular piece of PJLM-derived content. Prior conversation, general
project enthusiasm, an advisor's agreement, multi-source consensus,
and "the obvious right answer" do not count as express authorization.

This is the same standard the Mac Studio operating doctrine uses for
its other pause-points (per `infrastructure/mgv-studio-bootstrap`
ADRs). Maudlin Street inherits the standard and applies it to
content-level changes that touch PJLM.

## Where the doctrine is encoded

- `data/source-authority.json` - machine-readable.
- `docs/source-authority.md` - this file.
- `README.md` - root-level summary.
- `src/about.md` - the public-facing About page.
- `src/_data/site.json` - the `definitive_source_of_truth` field
  surfaces in the site footer through `base.njk`.
- Each `content/<section>/README.md` - schema-level reminder.

Any future candidate-merge tool, Wayback ingestion script, or content
generator must read at least `data/source-authority.json` before
applying any change that could touch PJLM-derived content. The
present scaffold performs no such tooling and creates none.

## First planned future ingestion effort

The first network-enabled phase that will feed this site is **Wayback
Machine recovery from retired Smiths/Morrissey lyric sources.** That
phase will:

- operate against archived captures, not live hosts;
- record retrieval metadata per source (`retrieved_at`, archive URL,
  archive timestamp, HTTP status);
- store recovered lyric content as **secondary** candidates only;
- file disagreements with PJLM as **candidates for review,** not as
  replacements;
- perform no overwrite, normalization, or replacement of any
  PJLM-derived page or asset without John's express authorization.

The scaffold performs no part of that work. The corpus seed (in the
companion repo at `_inventory/knowledge-source-corpus/`) is the
substrate.

## What this doctrine is not

- It is not a legal claim or a copyright determination. Rights
  handling is covered (operationally) in `docs/media-policy.md` and
  in the content schema READMEs.
- It is not a constraint on John's own authorship. John may revise
  PJLM-derived content at any time; this doctrine constrains the
  *site's automated and secondary-source pipelines,* not John.
- It is not enforced by tooling at scaffold time. It is enforced by
  reviewer discipline and by the validation checks in
  `scripts/check-repo.mjs`. A future tooling pass may add
  candidate-merge guards that fail closed.
