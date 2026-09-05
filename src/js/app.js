/**
 * Global Route: Main Application Module
 * Owns application state and DOM wiring; domain logic lives in modules.
 */

const GlobalRoute = (() => {
  const config = { countriesDataUrl: '/data/countries.json', enableAnalytics: true };
  const appState = { countries: [], currentPage: 'home', isInitialized: false };

  const init = async () => {
    if (appState.isInitialized) return;
    try {
      await loadCountriesData();
      initializeNavigation();
      initializeCalculator();
      initializeSearch();
      if (config.enableAnalytics) loadAnalytics();
      appState.isInitialized = true;
    } catch (error) {
      console.error('Initialization error:', error);
    }
  };

  const loadCountriesData = async () => {
    const response = await fetch(config.countriesDataUrl, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`Failed to load countries data (${response.status})`);
    const data = await response.json();
    if (!Array.isArray(data.countries)) throw new Error('Invalid countries data: countries must be an array');
    appState.countries = data.countries;
    return data;
  };

  const initializeNavigation = () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (!navToggle || !navMenu) return;
    navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
    navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navMenu.classList.remove('active')));
  };

  const initializeSearch = () => {
    if (typeof SearchModule !== 'undefined') SearchModule.init(appState.countries);
  };

  const initializeCalculator = () => {
    const form = document.querySelector('#budget-calculator');
    if (!form || typeof CalculatorModule === 'undefined') return;
    form.addEventListener('submit', event => {
      event.preventDefault();
      const budget = Number(form.querySelector('[name="budget"]')?.value);
      const category = form.querySelector('[name="category"]')?.value;
      const countries = CalculatorModule.getRecommendedCountries(appState.countries, budget, { category: category === 'all' ? undefined : category });
      displayCalculatorResults(countries);
      CalculatorModule.trackUsage({ country_count: countries.length });
    });
  };

  const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));

  const displayCalculatorResults = countries => {
    const container = document.querySelector('#calculator-results');
    if (!container) return;
    if (!countries.length) {
      container.textContent = 'No countries found for this budget. Try increasing it or changing your preference.';
      return;
    }
    container.innerHTML = countries.map(country => `
      <div class="country-result">
        <h3>${escapeHtml(country.flag)} ${escapeHtml(country.name)}</h3>
        <p>True Cost: ${escapeHtml(country.trueCost.currency)} ${escapeHtml(country.trueCost.total)}</p>
        <p>Affordability: ${escapeHtml(country.affordability.rating)}</p>
        <a href="/pages/countries.html#${encodeURIComponent(country.id)}">Learn More →</a>
      </div>
    `).join('');
  };

  const loadAnalytics = () => {
    if (typeof gtag === 'undefined') return;
    gtag('event', 'page_view', { page_title: document.title, page_location: window.location.href });
    document.querySelectorAll('a[target="_blank"]').forEach(link => link.addEventListener('click', () => gtag('event', 'external_link', { link_url: link.href })));
  };

  const getCountryById = id => appState.countries.find(country => country.id === id);
  const getAllCountries = () => appState.countries;
  const trackEvent = (eventName, eventData = {}) => {
    if (config.enableAnalytics && typeof gtag !== 'undefined') gtag('event', eventName, eventData);
  };

  return { init, loadCountriesData, getCountryById, getAllCountries, trackEvent, getState: () => appState };
})();

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => GlobalRoute.init());
else GlobalRoute.init();
