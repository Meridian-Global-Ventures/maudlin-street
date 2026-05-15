---
layout: layouts/base.njk
title: Lyrics
description: Smiths and Morrissey lyric notes. Lyric notes only — full lyric bodies are never republished.
permalink: /lyrics/
activeSection: lyrics
section: lyrics
---

# Lyrics

<span class="archive-status" data-status="shell">shell — first records pending Wayback recovery</span>

This section holds **lyric notes** only: short attributed annotations, contextual commentary, attribution chains, and source linkage. Full lyric bodies from third-party rights holders are not republished here. The lyric-note record schema lives in `content/lyrics/README.md`.

The lyric index is split by primary artist. Within each group, the listing is alphabetical. PJLM-authoritative entries are marked with a <span class="authority" data-authority="primary">primary</span> badge; entries derived from secondary candidate sources carry a <span class="authority" data-authority="secondary">secondary</span> badge until conflict review resolves them.

<div class="archive-callout">
<strong>No full lyric bodies.</strong> Lyric pages on Maudlin Street carry attributed excerpts, songwriter and publisher credits, performance context, and source citations. The full text of a song is never reproduced. Cover-source notations (for songs The Smiths or Morrissey covered from another artist) are preserved in square brackets per PJLM convention.
</div>

<h2 id="smiths">Smiths lyrics</h2>

<p class="archive-intro">Lyric notes for The Smiths' studio catalogue and known additional songs. Alphabetical by title.</p>

<ul class="archive-index">
  <li><em>Index pending. The Smiths corpus on PJLM covers roughly 75 song entries plus covers. Records will be authored in a future content phase.</em></li>
</ul>

<h2 id="morrissey">Morrissey lyrics</h2>

<p class="archive-intro">Lyric notes for Morrissey's solo catalogue. Alphabetical by title within each release cycle.</p>

<ul class="archive-index">
  <li><em>Index pending. Morrissey's solo lyric corpus on PJLM spans 1988 through the most recent recovery snapshot. Records will be authored in a future content phase.</em></li>
</ul>

## Schema reference

Per-record fields (from `content/lyrics/README.md`): `slug`, `song_title`, `attributed_to`, `release_id` (when applicable), `cover_origin` (for covers — credited original artist), `notes`, `quotes` (short attributed excerpts only), `source_ids`, `pjlm_authoritative_url`, `authority` (`primary` for PJLM-derived, `secondary` for candidate-only).
