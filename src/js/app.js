/**
 * Global Route: Main Application Module
 * Owns application state and DOM wiring; domain logic lives in modules.
 */

const GlobalRoute = (() => {
  const config = {
    // Eleventy copies src/data to /data in the production output.
    countriesDataUrl: '/data/countries.json',
    enableAnalytics: true
  };

  const appState = {
    countries: [],
    currentPage: 'home',
    isInitialized: false
  };

  const init = async () => {
    if (appState.isInitialized) return;
    try {
      await loadCountriesData();
      initializeNavigation();
      initializeCalculator();
      initializeSearch();
      if (config.enableAnalytics) loadAnalytics();
      appState.isInitialized = true;
      console.log('Global Route initialized successfully');
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
    if (typeof SearchModule === 'undefined') return;
    SearchModule.init(appState.countries);
  };

  const initializeCalculator = () => {
    const calculatorForm = document.querySelector('#budget-calculator');
    if (!calculatorForm || typeof CalculatorModule === 'undefined') return;
    calculatorForm.addFormListener?.(calculatorForm);
  };

  const loadAnalytics = () => {
    if (typeof gtag === 'undefined') return;
    gtag('event', 'page_view', { page_title: document.title, page_location: window.location.href });
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
      link.addEventListener('click', () => gtag('event', 'external_link', { link_url: link.href }));
    });
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
