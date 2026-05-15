---
layout: layouts/base.njk
title: Interviews
description: Interview metadata and external video index. No transcripts in this repo.
permalink: /interviews/
activeSection: media
section: media
---

# Interviews

<span class="archive-status" data-status="shell">shell — metadata records pending</span>

Interview metadata only: title, date, participants, summary, rights notes, and remote-URL references to external video or audio. The repo does not host video, audio, or transcripts. The interview record schema lives in `content/interviews/README.md`.

This section sits inside the broader [Media]({{ '/media/' | url }}) tree alongside Television, Radio, Magazines, and Bibliography. Interview-specific records share the same metadata model as television and radio appearances and are split out here because the corpus is large enough to warrant a dedicated index.

<div class="archive-callout">
<strong>No transcripts.</strong> Interview pages carry attributed metadata (title, date, outlet, interviewer, participants, summary, rights status, remote video URL, archive captures where available), short attributed quotes only, and source citations. Full interview text is never reproduced.
</div>

<div class="archive-group">
  <h2 class="archive-group__title">By outlet type</h2>
  <ul class="archive-index">
    <li><em>Television interviews — index pending.</em></li>
    <li><em>Radio interviews — index pending.</em></li>
    <li><em>Magazine / print interviews — index pending.</em></li>
    <li><em>Podcast / online interviews — index pending.</em></li>
  </ul>
</div>

<div class="archive-group">
  <h2 class="archive-group__title">By era</h2>
  <ul class="archive-index">
    <li class="is-year">Smiths era (1983–1987)</li>
    <li class="is-indent"><em>Index pending.</em></li>
    <li class="is-year">Early solo (1988–1997)</li>
    <li class="is-indent"><em>Index pending.</em></li>
    <li class="is-year">Quarry / Ringleader / Refusal (1998–2009)</li>
    <li class="is-indent"><em>Index pending.</em></li>
    <li class="is-year">Recent (2010–)</li>
    <li class="is-indent"><em>Index pending.</em></li>
  </ul>
</div>

## Schema reference

Per-record fields (from `content/interviews/README.md`): `title`, `slug`, `date`, `outlet_type` (`tv` / `radio` / `print` / `podcast` / `online`), `outlet_name`, `participants`, `interviewer`, `summary`, `transcript_status` (`none_in_repo` is the default), `video_provider`, `video_url`, `audio_url`, `poster_image`, `duration`, `rights_notes`, `source_ids`, `pjlm_authoritative_url`, `authority`.
