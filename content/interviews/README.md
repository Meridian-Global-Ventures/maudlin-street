# content/interviews/

This directory will hold **interview metadata records** - title, date,
participants, summary, rights notes, and references to external video
or audio - **not** full interview transcripts or video files.

Full transcripts and video are not stored in this repo. See
`docs/media-policy.md` for the full no-video-in-repo rule.

## Record schema

Each interview record is a single Markdown file with YAML frontmatter:

```yaml
---
title: "string (canonical interview title)"
slug: "kebab-case-stable-slug"
date: "ISO 8601 date (interview date, when known and verified)"
participants:
  - "string (canonical name)"
summary: "1-3 sentence summary"
transcript_status: "none | partial | external_link | rights_pending"
video_provider: "youtube | vimeo | mgv_server | archive_org | other | none"
video_url: "string | null (canonical external URL; never a local file)"
poster_image: "string | null (relative path to a small, locally-stored or remote thumbnail when rights permit; never a video file)"
duration: "ISO 8601 duration | null (e.g., PT12M34S)"
rights_notes: "string (rights / republication constraints)"
source_ids:
  - "source_id from the knowledge-source-corpus or pjlm"
pjlm_authoritative_url: "string | null"
authority: "primary | secondary"
last_updated: "ISO 8601 date"
---

Body: prose summary, contextual notes, short attributed quotes (with
source-note attribution), and links out to the external video, archive
capture, and any registered source.
```

## What this directory does not store

- Video files. Video lives on an external server or future CDN and is
  referenced by remote URL only.
- Audio files of any kind.
- Full interview transcripts, unless John holds explicit rights and a
  later phase authorizes inclusion.
- Posters or thumbnails that exceed a reasonable size (see
  `docs/media-policy.md` for the size and extension lists).

## Authority field

- `authority: "primary"` indicates the record's central content is
  PJLM-derived (the local reconstruction of archived
  `passionsjustlikemine.com`).
- `authority: "secondary"` indicates the record's central content comes
  from another registered source.

A secondary record may **not** contradict or supersede a primary
interview record about the same interview without John's express
authorization. Conflicts are filed for review, not applied.

## Sample content

This directory is empty at scaffold time. Sample interview records are
deliberately not seeded so future authors do not mistake placeholder
text for canonical interview facts.
