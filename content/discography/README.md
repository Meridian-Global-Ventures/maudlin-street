# content/discography/

This directory will hold **discography commentary** - per-release
notes, contextual essays, and source linkage - **not** copies of
discography pages from external sources.

The local PJLM reconstruction is the definitive source of truth for
discography facts (256 detail pages restored under `disc/`, plus the
two master-list pages `discog-moz.htm` and `discog-smiths.htm`).
Commentary in this directory **references** those PJLM pages by
canonical URL; it does not replace them.

## Record schema

Each discography record is a single Markdown file with YAML
frontmatter:

```yaml
---
release_id: "kebab-case stable identifier"
title: "string (canonical release title)"
attributed_to: "string (canonical credit)"
format: "single | ep | album | compilation | live | other"
release_date: "ISO 8601 date | YYYY | null"
pjlm_authoritative_url: "string | null (canonical PJLM disc page URL)"
source_ids:
  - "source_id from the knowledge-source-corpus or pjlm"
authority: "primary | secondary"
last_updated: "ISO 8601 date"
---

Body: prose commentary, contextual notes, short attributed quotes
(with source-note attribution). Track lists are referenced from the
PJLM page rather than reprinted here unless John explicitly approves
republication for a specific record.
```

## Authority field

`authority: "primary"` for PJLM-derived commentary; `"secondary"` for
notes that come from another registered source. Secondary discography
commentary may **not** overwrite a primary record's facts without
John's express authorization.

## Sample content

Empty at scaffold time. Per-release records will be authored in later
phases.
