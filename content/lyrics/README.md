# content/lyrics/

This directory will hold **lyric notes** - short attributed
annotations, contextual commentary, and source linkage for individual
songs - **not** full lyric bodies.

Full lyrics from third-party rights holders are not republished. Short
attributed excerpts only, with citation back to a registered source.

## Record schema

Each lyric-note record is a single Markdown file with YAML frontmatter:

```yaml
---
slug: "kebab-case-stable-slug"
song_title: "string (canonical title)"
attributed_to: "string (canonical credit)"
release_id: "string | null (matches a discography record id, when applicable)"
song_year: "integer | null (year of the canonical release, when known and verified)"
notes_kind: "annotation | etymology | reception | source_pointer"
source_ids:
  - "source_id from the knowledge-source-corpus or pjlm"
pjlm_authoritative_url: "string | null (canonical PJLM URL, when applicable)"
quotes:
  - source_id: "string"
    excerpt: "short attributed excerpt, never a full body"
authority: "primary | secondary"
last_updated: "ISO 8601 date"
---

Body: prose notes, not a full lyric body. Short attributed excerpts
only, each wrapped in a `<aside class="source-note">` block via the
`source-note.njk` component.
```

## Authority field

- `authority: "primary"` indicates the note's central content is
  PJLM-derived (the local reconstruction of archived
  `passionsjustlikemine.com`).
- `authority: "secondary"` indicates the note's central content comes
  from another registered source. Secondary notes may **not**
  contradict or supersede a primary note about the same song without
  John's express authorization. A conflict between sources is filed as
  a candidate-for-review note, not applied to the primary record.

## What this directory does not store

- Full lyric bodies of copyrighted songs.
- Full interview, review, or article bodies.
- Audio or video.
- Any content extracted by crawling. The first planned future
  ingestion effort (Wayback recovery for retired lyric sources) lands
  metadata + short excerpts only, never full bodies.

## Sample content

This directory is empty at scaffold time. Sample content is
deliberately not seeded so future authors do not mistake placeholder
text for canonical lyric facts. The first authored record will be
added in a later phase.
