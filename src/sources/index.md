---
layout: layouts/base.njk
title: Sources
description: Source authority register. PJLM is the definitive source of truth; everything else is additive review material.
permalink: /sources/
activeSection: sources
section: sources
---

# Sources

<span class="archive-status" data-status="shell">shell — register pending Wayback recovery</span>

This section is the source-authority register for Maudlin Street. Every claim on this site traces back to one of the sources catalogued here.

<div class="archive-callout">
The <strong>definitive source of truth</strong> is the local reconstruction of archived <code>passionsjustlikemine.com</code>, maintained in the companion repo <code>passions-just-like-mine</code>. Every other source listed in this section is additive review material — supplemental, never replacing PJLM-derived content. See <a href="{{ '/about/' | url }}">About</a> for the full doctrine and <code>data/source-authority.json</code> for the machine-readable doctrine markers.
</div>

<div class="archive-group">
  <h2 class="archive-group__title">Primary authority</h2>
  <ul class="archive-index">
    <li><strong>Passions Just Like Mine</strong> <span class="authority" data-authority="primary">primary</span> — local reconstruction at <code>passions-just-like-mine</code>; definitive for every fact, page, lyric, asset, and provenance record it covers.</li>
  </ul>
</div>

<div class="archive-group">
  <h2 class="archive-group__title">Secondary candidates (additive review material)</h2>
  <p class="archive-intro">14 external sources are registered in the companion repo's source-corpus registry at <code>_inventory/knowledge-source-corpus/</code>. All carry <code>live_status = unverified</code> until a future network-enabled ingestion phase confirms each one. The grouping below is illustrative; the canonical register is the JSON in the companion repo.</p>
  <ul class="archive-index">
    <li class="is-year">Fan archives</li>
    <li class="is-indent"><em>Records pending.</em></li>
    <li class="is-year">Location references</li>
    <li class="is-indent"><em>Records pending.</em></li>
    <li class="is-year">Review collections</li>
    <li class="is-indent"><em>Records pending.</em></li>
    <li class="is-year">Morrissey fanzine domains</li>
    <li class="is-indent"><em>Records pending.</em></li>
    <li class="is-year">Legacy captures (GeoCities, Tripod)</li>
    <li class="is-indent"><em>Records pending.</em></li>
  </ul>
</div>

## Conflict policy

Conflicts between a secondary source and PJLM are recorded as **candidates for review**, not applied automatically. The conflict-record schema lives in `content/sources/README.md`. No PJLM-derived assertion is overwritten without John's express authorization.

## Schema reference

Per-source fields (from `content/sources/README.md`): `source_id`, `label`, `canonical_url`, `archive_url`, `archive_timestamp`, `last_known_live_check`, `live_status` (`unverified` is the default at scaffold stage), `type` (`fan_archive` / `location` / `review_collection` / `fanzine` / `legacy_capture`), `pjlm_overlap_summary`, `notes`, `authority` (`primary` for PJLM, `secondary` for everything else).
