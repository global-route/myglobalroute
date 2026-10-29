/**
 * ⌘K Search Modal
 * Searches countries, pathways and blog posts from loaded JSON data.
 */
(function () {
  'use strict';

  let countries = [], pathways = [], posts = [];
  let activeIdx = -1;

  function buildIndex(c, p, b) {
    countries = (c.countries || []).map(x => ({
      type: 'country', flag: x.flag || '', name: x.name,
      meta: x.category || '',
      url: `/pages/countries/${x.id}/`
    }));
    pathways = (p.pathways || []).filter(x => x.status === 'publishable').map(x => {
      const country = (c.countries || []).find(cc => cc.id === x.countryId);
      return {
        type: 'pathway', flag: country?.flag || '', name: x.name,
        meta: (country?.name || x.countryId) + ' \u00b7 ' + x.type,
        url: `/pages/pathways/${x.id}/`
      };
    });
    posts = (b || []).map(x => ({
      type: 'post', flag: '\ud83d\udcdd', name: x.title,
      meta: x.category?.replace(/-/g, ' ') || '',
      url: `/blog/${x.category}/${x.slug}/`
    }));
  }

  function search(q) {
    if (!q || q.length < 2) return [];
    const lq = q.toLowerCase();
    const score = item => {
      const n = item.name.toLowerCase();
      if (n.startsWith(lq)) return 3;
      if (n.includes(lq)) return 2;
      if (item.meta.toLowerCase().includes(lq)) return 1;
      return 0;
    };
    return [...countries, ...pathways, ...posts]
      .map(item => ({ item, s: score(item) }))
      .filter(x => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 8)
      .map(x => x.item);
  }

  function renderResults(results, q) {
    const el = document.getElementById('search-modal-results');
    if (!el) return;
    if (!q || q.length < 2) {
      el.innerHTML = '<p class="search-modal-empty">Type to search countries, pathways and posts\u2026</p>';
      activeIdx = -1;
      return;
    }
    if (!results.length) {
      el.innerHTML = '<p class="search-modal-empty">No results for \u201c' + q + '\u201d</p>';
      activeIdx = -1;
      return;
    }
    el.innerHTML = results.map((r, i) => `
      <a class="search-modal-result${i === activeIdx ? ' active' : ''}" href="${r.url}" data-idx="${i}">
        <span class="search-modal-result-flag">${r.flag}</span>
        <span class="search-modal-result-text">
          <span class="search-modal-result-name">${r.name}</span>
          <span class="search-modal-result-meta">${r.meta}</span>
        </span>
      </a>`).join('');
  }

  function open() {
    const overlay = document.getElementById('search-modal-overlay');
    if (!overlay) return;
    overlay.classList.add('open');
    const input = document.getElementById('search-modal-input');
    if (input) { input.value = ''; input.focus(); }
    renderResults([], '');
    activeIdx = -1;
  }

  function close() {
    const overlay = document.getElementById('search-modal-overlay');
    if (overlay) overlay.classList.remove('open');
  }

  function navigate(dir) {
    const q = document.getElementById('search-modal-input')?.value || '';
    const results = search(q);
    if (!results.length) return;
    activeIdx = Math.max(0, Math.min(results.length - 1, activeIdx + dir));
    renderResults(results, q);
    document.querySelector('.search-modal-result.active')?.scrollIntoView({ block: 'nearest' });
  }

  function injectModal() {
    if (document.getElementById('search-modal-overlay')) return;
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="search-modal-overlay" id="search-modal-overlay" role="dialog" aria-modal="true" aria-label="Search">
        <div class="search-modal">
          <div class="search-modal-input-row">
            <span class="search-trigger-icon">\u2395</span>
            <input type="search" id="search-modal-input" placeholder="Search countries, pathways, posts\u2026" autocomplete="off" spellcheck="false">
            <button class="search-modal-close" id="search-modal-close">Esc</button>
          </div>
          <div class="search-modal-results" id="search-modal-results">
            <p class="search-modal-empty">Type to search\u2026</p>
          </div>
          <div class="search-modal-footer">
            <span><kbd>\u2191</kbd><kbd>\u2193</kbd> navigate</span>
            <span><kbd>Enter</kbd> open</span>
            <span><kbd>Esc</kbd> close</span>
          </div>
        </div>
      </div>`;
    document.body.appendChild(div.firstElementChild);

    document.getElementById('search-modal-input').addEventListener('input', e => {
      const q = e.target.value;
      renderResults(search(q), q);
      activeIdx = -1;
    });

    document.getElementById('search-modal-input').addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); navigate(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); navigate(-1); }
      else if (e.key === 'Enter') {
        const active = document.querySelector('.search-modal-result.active');
        if (active) { active.click(); close(); }
      } else if (e.key === 'Escape') close();
    });

    document.getElementById('search-modal-close').addEventListener('click', close);
    document.getElementById('search-modal-overlay').addEventListener('click', e => {
      if (e.target === e.currentTarget) close();
    });
  }

  async function loadData() {
    try {
      const [c, p, b] = await Promise.all([
        fetch('/data/countries.json').then(r => r.json()),
        fetch('/data/pathways.json').then(r => r.json()),
        fetch('/data/blog-posts.json').then(r => r.json())
      ]);
      buildIndex(c, p, b);
    } catch (_) {}
  }

  function init() {
    injectModal();
    loadData();

    document.addEventListener('click', e => {
      if (e.target.closest('#search-trigger')) open();
    });

    document.addEventListener('keydown', e => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const overlay = document.getElementById('search-modal-overlay');
        if (overlay?.classList.contains('open')) close(); else open();
      }
      if (e.key === 'Escape') close();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
