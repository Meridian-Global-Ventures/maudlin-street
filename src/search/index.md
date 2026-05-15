---
layout: layouts/base.njk
title: Search
description: Placeholder. Static-search wiring is a future, separately authorized phase.
permalink: /search/
activeSection: search
section: search
---

# Search

<span class="archive-status" data-status="shell">placeholder</span>

Site-wide search is a placeholder section. The archive is index-first by design: browse entry points are documented under each section's index page, and the [Songs]({{ '/songs/' | url }}) tree provides the broadest flat alphabetical fan-out across both catalogues.

<div class="archive-callout">
A static-search implementation (e.g., a pre-built JSON index plus a small client-side search component) is a future, separately authorized phase. Live-server search and any third-party search SaaS are out of scope for an archive site of this shape.
</div>

<div class="archive-group">
  <h2 class="archive-group__title">Browse entry points</h2>
  <ul class="archive-index">
    <li><a href="{{ '/songs/' | url }}">Songs</a> — alphabetical song index across both catalogues.</li>
    <li><a href="{{ '/releases/' | url }}">Releases</a> — chronological discography.</li>
    <li><a href="{{ '/live/' | url }}">Live</a> — concert chronology by tour.</li>
    <li><a href="{{ '/media/' | url }}">Media</a> — TV / radio / magazines / bibliography.</li>
    <li><a href="{{ '/interviews/' | url }}">Interviews</a> — long-form interview metadata.</li>
    <li><a href="{{ '/sources/' | url }}">Sources</a> — source-authority register.</li>
  </ul>
</div>
