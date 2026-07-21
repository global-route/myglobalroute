/**
 * Global Route: Search Module
 * Client-side semantic search functionality
 */

const SearchModule = (() => {
  // Configuration
  const config = {
    minQueryLength: 2,
    debounceMs: 300,
    maxResults: 20
  };

  // State
  let state = {
    countries: [],
    searchIndex: [],
    debounceTimer: null,
    lastQuery: ''
  };

  /**
   * Initialize search
   */
  const init = async (countries) => {
    if (!countries || countries.length === 0) {
      console.warn('No countries provided for search initialization');
      return;
    }

    state.countries = countries;
    buildSearchIndex();
    attachSearchListeners();
  };

  /**
   * Build search index
   */
  const buildSearchIndex = () => {
    state.searchIndex = state.countries.map(country => ({
      id: country.id,
      name: country.name,
      flag: country.flag,
      keywords: [
        country.name.toLowerCase(),
        country.id.toLowerCase(),
        ...(country.sweetSpots || []).map(s => s.toLowerCase()),
        ...(country.pros || []).map(p => p.toLowerCase()),
        country.category.toLowerCase()
      ].join(' '),
      data: country
    }));
  };

  /**
   * Perform search
   */
  const search = (query) => {
    if (!query || query.length < config.minQueryLength) {
      return [];
    }

    const normalizedQuery = query.toLowerCase();
    state.lastQuery = normalizedQuery;

    return state.searchIndex
      .filter(item => item.keywords.includes(normalizedQuery))
      .map(item => ({
        id: item.id,
        name: item.name,
        flag: item.flag,
        category: item.data.category,
        africanRate: item.data.africanRate,
        sweetSpot: item.data.sweetSpot,
        relevance: calculateRelevance(item.keywords, normalizedQuery)
      }))
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, config.maxResults);
  };

  /**
   * Calculate relevance score
   */
  const calculateRelevance = (keywords, query) => {
    let score = 0;

    // Exact match gets highest score
    if (keywords === query) score += 100;
    
    // Word match
    const words = keywords.split(' ');
    if (words.includes(query)) score += 50;

    // Substring match
    if (keywords.includes(query)) score += 25;

    // Partial word match
    if (words.some(word => word.startsWith(query))) score += 10;

    return score;
  };

  /**
   * Advanced search with filters
   */
  const advancedSearch = (query, filters = {}) => {
    let results = search(query);

    // Apply filters
    if (filters.category) {
      results = results.filter(r => r.sweetSpot === filters.category);
    }

    if (filters.region) {
      results = results.filter(r => r.category.includes(filters.region));
    }

    if (filters.minApprovalRate) {
      results = results.filter(r => {
        const rate = parseInt(r.africanRate);
        return rate >= filters.minApprovalRate;
      });
    }

    return results;
  };

  /**
   * Get search suggestions
   */
  const getSuggestions = (query, limit = 5) => {
    if (!query || query.length < config.minQueryLength) {
      return [];
    }

    const normalizedQuery = query.toLowerCase();

    return state.searchIndex
      .filter(item => 
        item.keywords.includes(normalizedQuery) ||
        item.name.toLowerCase().startsWith(normalizedQuery)
      )
      .map(item => ({
        text: item.name,
        flag: item.flag,
        type: 'country'
      }))
      .slice(0, limit);
  };

  /**
   * Attach search listeners to DOM
   */
  const attachSearchListeners = () => {
    const searchInput = document.querySelector('input[type="search"]');
    const searchForm = document.querySelector('form[role="search"]');

    if (searchInput) {
      searchInput.addEventListener('input', handleSearchInput);
    }

    if (searchForm) {
      searchForm.addEventListener('submit', handleSearchSubmit);
    }
  };

  /**
   * Handle search input with debounce
   */
  const handleSearchInput = (e) => {
    const query = e.target.value;

    // Debounce
    clearTimeout(state.debounceTimer);
    state.debounceTimer = setTimeout(() => {
      const results = search(query);
      displaySearchResults(results);
      trackSearch(query, results.length);
    }, config.debounceMs);
  };

  /**
   * Handle search form submission
   */
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = e.target.querySelector('input[type="search"]').value;
    const results = search(query);
    displaySearchResults(results);
    trackSearch(query, results.length, true);
  };

  /**
   * Display search results in UI
   */
  const displaySearchResults = (results) => {
    const resultsContainer = document.querySelector('[data-search-results]');
    if (!resultsContainer) return;

    if (results.length === 0) {
      resultsContainer.innerHTML = '<p>No countries found. Try another search.</p>';
      return;
    }

    const resultsHTML = results.map(result => `
      <div class="search-result">
        <a href="/pages/countries.html#${result.id}">
          <span class="result-flag">${result.flag}</span>
          <span class="result-name">${result.name}</span>
          <span class="result-rate">${result.africanRate}</span>
        </a>
      </div>
    `).join('');

    resultsContainer.innerHTML = resultsHTML;
  };

  /**
   * Track search analytics
   */
  const trackSearch = (query, resultCount, submitted = false) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'search', {
        search_term: query,
        result_count: resultCount,
        submitted: submitted
      });
    }
  };

  /**
   * Get popular searches
   */
  const getPopularSearches = () => {
    return [
      'Germany visa',
      'Canada student',
      'Italy scholarship',
      'US LLC',
      'Portugal visa'
    ];
  };

  /**
   * Clear search
   */
  const clear = () => {
    state.lastQuery = '';
    const searchInput = document.querySelector('input[type="search"]');
    if (searchInput) {
      searchInput.value = '';
    }
  };

  // Public API
  return {
    init,
    search,
    advancedSearch,
    getSuggestions,
    getPopularSearches,
    clear,
    trackSearch
  };
})();
