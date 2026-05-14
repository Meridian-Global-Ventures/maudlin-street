# content/media/

This directory holds **media metadata records** - pointers to external
video and audio - **not** any media file itself.

Media files (video, audio) are never committed to this repo. See
`docs/media-policy.md` for the full rule, including the forbidden
extension list and the size cap enforced by
`scripts/check-repo.mjs`.

## Record schema

Each media-pointer record is a JSON file (so it can be loaded by
Eleventy's `_data` system in a later phase, or referenced directly
from content frontmatter):

```json
{
  "media_id": "kebab-case stable identifier",
  "kind": "video | audio | image",
  "title": "string",
  "provider": "youtube | vimeo | mgv_server | archive_org | other",
  "url": "https://...",
  "poster_image": "string | null (small thumbnail; never a video file)",
  "duration": "ISO 8601 duration | null",
  "rights_notes": "string",
  "source_ids": ["..."],
  "pjlm_authoritative_url": "string | null",
  "last_verified_at": "ISO 8601 date | null"
}
```

## Symlink workspace

For local authoring convenience, John may symlink to video files
mounted from his external server in the top-level `external-media/`
folder. That folder is gitignored except for its `README.md` and
`.gitignore`. See `external-media/README.md` for the local-only
workflow.

Production pages never reference `external-media/` paths. They
reference the remote URL recorded in the media-pointer record.

## Sample content

`data/media-manifest.example.json` at the repo root contains a small
example manifest demonstrating the record shape. No real media is
referenced.
