# Content Model

Maudlin Street content is organized into five section types. Each
section has its own schema documented in the matching
`content/<section>/README.md`. This document gives the bird's-eye view
and the cross-cutting fields.

## Section types

| Section | Path | Schema doc | Renders at |
|---|---|---|---|
| Lyric notes | `content/lyrics/` | `content/lyrics/README.md` | `/lyrics/...` |
| Interview metadata | `content/interviews/` | `content/interviews/README.md` | `/interviews/...` |
| Discography commentary | `content/discography/` | `content/discography/README.md` | `/discography/...` |
| Source pages | `content/sources/` | `content/sources/README.md` | `/sources/...` |
| Media pointers | `content/media/` | `content/media/README.md` | (data-level; rendered via interview/lyric pages) |

## Cross-cutting frontmatter fields

Every content record carries:

- `slug` - kebab-case stable identifier inside its section
- `title` - human-readable title
- `last_updated` - ISO 8601 date

Most records also carry:

- `authority` - `primary` (PJLM-derived) or `secondary` (anything else)
- `source_ids` - array of source identifiers matching the
  knowledge-source-corpus, or `pjlm` for the PJLM-derived case
- `pjlm_authoritative_url` - canonical PJLM URL the record draws from,
  when applicable
- `rights_notes` - rights / republication constraints, free text

## The `authority` field

`primary` records reflect the PJLM reconstruction. They are
authoritative for the facts they cover.

`secondary` records reflect a non-PJLM source. They are additive only.
A `secondary` record may **not** contradict or supersede a `primary`
record about the same subject (same song, same release, same
interview, same fact) without John's express authorization. Conflicts
are recorded as candidates for review, not applied.

This is the same doctrine codified in `data/source-authority.json` and
in the source repo's
`_inventory/knowledge-source-corpus/ingestion-policy.md`. It is the
load-bearing rule of the site.

## Quotes and short excerpts

Where a record cites a third-party source by direct quotation, the
quote is **short** and **attributed.** Full lyric bodies, full
interview bodies, and full review bodies are not republished here.

In templates, attributed quotes render via the `source-note.njk`
component (`src/_includes/components/source-note.njk`), which carries
the source_id, the canonical URL, the archive URL when applicable,
and the authority badge (primary vs. secondary).

## Media linkage

Content records that reference media (an interview video, a recorded
performance audio, an external image) carry the media metadata in the
record's frontmatter or reference a record in
`content/media/` / a manifest under `data/`. The repo stores no
media file. See `docs/media-policy.md`.

## What this content model does not encode

- A republication of PJLM page bodies. PJLM remains the canonical
  home for those.
- A duplicate copy of the corpus registry (which lives in the source
  repo under `_inventory/knowledge-source-corpus/`).
- Any fictional or speculative claim that is not clearly marked as
  scaffold placeholder content.
