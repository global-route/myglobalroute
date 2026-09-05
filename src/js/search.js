/**
 * Global Route: Search Module
 * Canonical country search. Fuse.js is loaded by the page when available.
 */

const SearchModule = (() => {
  const config = { minQueryLength: 2, debounceMs: 300, maxResults: 20 };
  const state = { countries: [], searchIndex: [], fuse: null, debounceTimer: null, lastQuery: '' };

  const init = countries => {
    if (!Array.isArray(countries) || !countries.length) return;
    state.countries = countries;
    state.searchIndex = countries.map(country => ({
      id: country.id,
      name: country.name,
      flag: country.flag,
      keywords: [country.name, country.id, ...(country.sweetSpots || []), ...(country.pros || []), country.category].filter(Boolean).join(' '),
      data: country
    }));
    if (typeof Fuse !== 'undefined') {
      state.fuse = new Fuse(state.searchIndex, {
        includeScore: true,
        threshold: 0.35,
        ignoreLocation: true,
        keys: [
          { name: 'name', weight: 0.5 },
          { name: 'keywords', weight: 0.3 },
          { name: 'id', weight: 0.2 }
        ]
      });
    }
    attachSearchListeners();
  };

  const search = query => {
    const normalizedQuery = String(query || '').trim();
    if (normalizedQuery.length < config.minQueryLength) return [];
    state.lastQuery = normalizedQuery.toLowerCase();

    const matches = state.fuse
      ? state.fuse.search(normalizedQuery, { limit: config.maxResults })
      : state.searchIndex.filter(item => item.keywords.toLowerCase().includes(state.lastQuery)).map(item => ({ item, score: 0.5 }));

    return matches.map(match => ({
      id: match.item.id,
      name: match.item.name,
      flag: match.item.flag,
      category: match.item.data.category,
      africanRate: match.item.data.africanRate,
      sweetSpot: match.item.data.sweetSpot,
      relevance: Math.max(0, 1 - (match.score ?? 0.5))
    }));
  };

  const advancedSearch = (query, filters = {}) => search(query).filter(result =>
    (!filters.category || result.sweetSpot === filters.category) &&
    (!filters.region || String(result.category || '').includes(filters.region)) &&
    (!filters.minApprovalRate || parseInt(result.africanRate, 10) >= Number(filters.minApprovalRate))
  );

  const getSuggestions = (query, limit = 5) => search(query).slice(0, limit).map(result => ({ text: result.name, flag: result.flag, type: 'country' }));

  const attachSearchListeners = () => {
    const searchInput = document.querySelector('input[type="search"]');
    const searchForm = document.querySelector('form[role="search"]');
    if (searchInput) searchInput.addEventListener('input', handleSearchInput);
    if (searchForm) searchForm.addEventListener('submit', handleSearchSubmit);
  };

  const handleSearchInput = event => {
    clearTimeout(state.debounceTimer);
    state.debounceTimer = setTimeout(() => {
      const query = event.target.value;
      const results = search(query);
      displaySearchResults(results);
      trackSearch(query, results.length);
    }, config.debounceMs);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    const input = event.target.querySelector('input[type="search"]');
    const query = input?.value || '';
    const results = search(query);
    displaySearchResults(results);
    trackSearch(query, results.length, true);
  };

  const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));

  const displaySearchResults = results => {
    const container = document.querySelector('[data-search-results]');
    if (!container) return;
    if (!results.length) {
      container.textContent = 'No countries found. Try another search.';
      return;
    }
    container.innerHTML = results.map(result => `
      <div class="search-result">
        <a href="/pages/countries.html#${encodeURIComponent(result.id)}">
          <span class="result-flag">${escapeHtml(result.flag)}</span>
          <span class="result-name">${escapeHtml(result.name)}</span>
          <span class="result-rate">${escapeHtml(result.africanRate)}</span>
        </a>
      </div>
    `).join('');
  };

  const trackSearch = (query, resultCount, submitted = false) => {
    if (typeof gtag !== 'undefined') gtag('event', 'search', { search_term: query, result_count: resultCount, submitted });
  };

  const getPopularSearches = () => ['Germany visa', 'Canada student', 'Italy scholarship', 'US LLC', 'Portugal visa'];

  const clear = () => {
    state.lastQuery = '';
    const input = document.querySelector('input[type="search"]');
    if (input) input.value = '';
  };

  return { init, search, advancedSearch, getSuggestions, getPopularSearches, clear, trackSearch };
})();
