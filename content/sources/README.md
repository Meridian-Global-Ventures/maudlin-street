# content/sources/

This directory will hold **per-source pages** - human-readable pages
introducing each external knowledge source that Maudlin Street draws
from.

The canonical machine-readable source registry lives in the companion
repo `passions-just-like-mine` at
`_inventory/knowledge-source-corpus/sources.json`. Per-source pages in
this directory **reference** that registry; they do not duplicate or
replace it.

## Record schema

Each per-source page is a single Markdown file with YAML frontmatter:

```yaml
---
source_id: "must match a source_id in PJLM/_inventory/knowledge-source-corpus/sources.json"
label: "human-readable source name"
domain: "host portion of the source URL"
category: "matches the corpus record's category"
canonical_url: "string (matches the corpus record's url)"
authority: "secondary"     # all entries here are secondary by definition
live_status_at_authoring: "unverified | live | archive_only | repurposed_or_unrelated | parked | unknown"
archive_url: "string | null (Wayback or other archive capture URL, when used)"
rights_notes: "string (republication constraints)"
last_updated: "ISO 8601 date"
---

Body: prose introduction to the source. What it covers, what it does
not cover, why Maudlin Street draws from it, and how its relationship
to the PJLM definitive source is treated.
```

## Authority field

Every record in `content/sources/` is **`authority: "secondary"`** by
definition. PJLM is the primary source and is documented separately
(see the source repo's `docs/reconstruction-inventory.md`). Per-source
pages here describe the additive review material the site uses
alongside PJLM.

## Sample content

Empty at scaffold time. Per-source pages will be authored as part of
the future Wayback ingestion phase, or earlier per a separately-scoped
phase.
