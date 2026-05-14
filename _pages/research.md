---
layout: page
permalink: /research/
title: Research
description: The publications and manuscripts listed here are those affiliated with CompBioClub. For complete lists, see the members' scholar pages.
nav: true
nav_order: 2
---

<!-- _pages/research.md -->

<div>
    A<sup>*</sup>: A is (co-)corresponding author.
    B<sup>†</sup>: B is (co-)first author.
    <span style="text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 4px;">C</span>: C was a lab member during paper preparation.
</div>
<br>

<!-- Top-level tabs: Peer-reviewed vs Preprints -->
<div class="pub-tabs" role="tablist" aria-label="Publication type">
  <button class="pub-tab-btn active" data-target="pub-peerreviewed" role="tab" aria-selected="true">
    Peer-reviewed
  </button>
  <button class="pub-tab-btn" data-target="pub-preprints" role="tab" aria-selected="false">
    Preprints
  </button>
</div>

<!-- Topic sub-filters (apply to the currently active top panel) -->
<div class="topic-filters" aria-label="Filter by topic">
  <button class="topic-btn active" data-topic="all">All</button>
  <button class="topic-btn" data-topic="cna">CNA</button>
  <button class="topic-btn" data-topic="criticaltransition">Critical Transition</button>
  <button class="topic-btn" data-topic="scrna">scRNA</button>
  <button class="topic-btn" data-topic="st">ST</button>
  <button class="topic-btn" data-topic="ai">AI</button>
  <button class="topic-btn" data-topic="database">Database</button>
  <!-- add more as needed -->
</div>

<!-- Bibsearch Feature -->
{% include bib_search.liquid %}

<!-- Peer-reviewed panel -->
<div id="pub-peerreviewed" class="pub-panel publications" role="tabpanel">
{% bibliography --group_by none --query @*[peerreviewed=true]* %}
</div>

<!-- Preprints panel -->
<div id="pub-preprints" class="pub-panel publications" role="tabpanel" hidden>
{% bibliography --group_by none --query @*[peerreviewed=false]* %}
</div>

<style>
  /* Top-level tabs */
  .pub-tabs {
    display: flex;
    gap: 0.5rem;
    border-bottom: 2px solid var(--global-divider-color, #e5e7eb);
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
  }
  .pub-tab-btn {
    background: transparent;
    border: none;
    padding: 0.55rem 1.1rem;
    font-size: 1rem;
    font-weight: 500;
    color: var(--global-text-color, #333);
    cursor: pointer;
    border-bottom: 3px solid transparent;
    margin-bottom: -2px;
    transition: color .15s ease, border-color .15s ease;
  }
  .pub-tab-btn:hover { color: var(--global-theme-color, #b509ac); }
  .pub-tab-btn.active {
    color: var(--global-theme-color, #b509ac);
    border-bottom-color: var(--global-theme-color, #b509ac);
  }

  /* Topic sub-filter pills */
  .topic-filters {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
    margin: 0.75rem 0 1rem;
  }
  .topic-btn {
    background: transparent;
    border: 1px solid var(--global-divider-color, #d1d5db);
    border-radius: 999px;
    padding: 0.25rem 0.85rem;
    font-size: 0.85rem;
    color: var(--global-text-color, #444);
    cursor: pointer;
    transition: background .15s ease, color .15s ease, border-color .15s ease;
  }
  .topic-btn:hover {
    border-color: var(--global-theme-color, #b509ac);
    color: var(--global-theme-color, #b509ac);
  }
  .topic-btn.active {
    background: var(--global-theme-color, #b509ac);
    color: #fff;
    border-color: var(--global-theme-color, #b509ac);
  }

  .pub-panel[hidden] { display: none !important; }

  /* Hide entries filtered out by topic */
  .publications li.topic-hidden,
  .publications .bib-entry.topic-hidden { display: none !important; }
</style>

<script>
  (function () {
    const tabButtons   = document.querySelectorAll('.pub-tab-btn');
    const topicButtons = document.querySelectorAll('.topic-btn');
    const panels       = document.querySelectorAll('.pub-panel');

    // Map between panel id and the short ?tab= value
    const TAB_MAP = {
      'preprints':    'pub-preprints',
      'peerreviewed': 'pub-peerreviewed'
    };
    const ID_TO_SHORT = {};
    Object.keys(TAB_MAP).forEach(k => { ID_TO_SHORT[TAB_MAP[k]] = k; });

    const selectedTopics = new Set(['all']);

    function activateTab(targetId) {
      tabButtons.forEach(b => {
        const isActive = b.dataset.target === targetId;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      panels.forEach(p => {
        if (p.id === targetId) p.removeAttribute('hidden');
        else p.setAttribute('hidden', '');
      });

      // Update URL: use ?tab=... and make sure no #hash is left behind
      const short = ID_TO_SHORT[targetId];
      if (short && history.replaceState) {
        const url = new URL(window.location.href);
        url.searchParams.set('tab', short);
        url.hash = '';                     // strip any stray hash
        history.replaceState(null, '', url);
      }

      applyTopicFilter();
    }

    function applyTopicFilter() {
      const showAll = selectedTopics.has('all');
      document.querySelectorAll('.publications .bib-entry').forEach(row => {
        const li = row.closest('li') || row.parentElement;
        if (!li) return;

        if (showAll) {
          li.classList.remove('topic-hidden');
          return;
        }
        const topics = (row.dataset.topic || '')
          .split(',').map(t => t.trim()).filter(Boolean);
        const match = topics.some(t => selectedTopics.has(t));
        li.classList.toggle('topic-hidden', !match);
      });
    }

    // Top-level tab clicks
    tabButtons.forEach(b => {
      b.addEventListener('click', () => activateTab(b.dataset.target));
    });

    // Topic pill clicks — multi-select, except "All" which is exclusive
    topicButtons.forEach(b => {
      b.addEventListener('click', () => {
        const t = b.dataset.topic;
        if (t === 'all') {
          selectedTopics.clear();
          selectedTopics.add('all');
        } else {
          selectedTopics.delete('all');
          if (selectedTopics.has(t)) selectedTopics.delete(t);
          else selectedTopics.add(t);
          if (selectedTopics.size === 0) selectedTopics.add('all');
        }
        topicButtons.forEach(btn => {
          btn.classList.toggle('active', selectedTopics.has(btn.dataset.topic));
        });
        applyTopicFilter();
      });
    });

    // --- On initial load: pick tab from ?tab=, then clean up any legacy #hash ---
    const params   = new URLSearchParams(window.location.search);
    const intended = params.get('tab');

    let initialTarget = 'pub-peerreviewed'; // default
    if (intended && TAB_MAP[intended]) {
      initialTarget = TAB_MAP[intended];
    } 

    activateTab(initialTarget);
  })();
</script>