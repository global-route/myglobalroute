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
      initializeSearch();
      initializeCountryDirectory();
      initializeCalculator();
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

  const initializeCountryDirectory = () => {
    const grid = document.querySelector('#countries-grid');
    const tableBody = document.querySelector('#countries-table-body');
    if (!grid && !tableBody) return;

    const groupFilter = document.querySelector('#group-filter');
    const budgetFilter = document.querySelector('#budget-filter');
    const searchInput = document.querySelector('input[type="search"]');

    const render = () => {
      const query = String(searchInput?.value || '').trim().toLowerCase();
      const group = String(groupFilter?.value || '');
      const budget = Number(budgetFilter?.value || 0);
      const filtered = appState.countries.filter(country => {
        const text = `${country.name} ${country.id} ${country.category || ''}`.toLowerCase();
        const matchesQuery = !query || text.includes(query);
        const matchesGroup = !group || country.group === group || String(country.category || '').includes(group);
        const cost = Number(country.trueCost?.total);
        const matchesBudget = !budget || (Number.isFinite(cost) && cost <= budget && country.dataStatus === 'publishable');
        return matchesQuery && matchesGroup && matchesBudget;
      });

      if (grid) {
        grid.innerHTML = filtered.map(country => `
          <article class="country-card" id="${escapeHtml(country.id)}">
            <div class="country-card-header"><span>${escapeHtml(country.flag)}</span><h3>${escapeHtml(country.name)}</h3></div>
            <p>${escapeHtml(country.summary || 'Country pathway intelligence is being verified.')}</p>
            <p><strong>Data status:</strong> ${escapeHtml(country.dataStatus || 'unknown')}</p>
            <p><strong>Approval rate:</strong> ${country.africanRate == null ? 'Not published / not verified' : escapeHtml(country.africanRate)}</p>
            <p><strong>Planning cost:</strong> ${country.trueCost?.total == null ? 'Not yet verified' : `${escapeHtml(country.trueCost.currency)} ${escapeHtml(country.trueCost.total)}`}</p>
          </article>
        `).join('') || '<p>No countries match the selected filters.</p>';
      }

      if (tableBody) {
        tableBody.innerHTML = filtered.map(country => `
          <tr id="${escapeHtml(country.id)}">
            <td>${escapeHtml(country.flag)} ${escapeHtml(country.name)}</td>
            <td>${country.officialRate == null ? 'Not published / not verified' : escapeHtml(country.officialRate)}</td>
            <td>${country.africanRate == null ? 'Not published / not verified' : escapeHtml(country.africanRate)}</td>
            <td>${country.trueCost?.total == null ? 'Not yet verified' : `${escapeHtml(country.trueCost.currency)} ${escapeHtml(country.trueCost.total)}`}</td>
            <td>${escapeHtml(country.sweetSpot || country.sweetSpots?.join(', ') || '—')}</td>
          </tr>
        `).join('');
      }
    };

    [groupFilter, budgetFilter, searchInput].filter(Boolean).forEach(element => element.addEventListener('input', render));
    [groupFilter, budgetFilter].filter(Boolean).forEach(element => element.addEventListener('change', render));
    render();
  };

  const initializeCalculator = () => {
    const form = document.querySelector('#budget-calculator');
    if (!form || typeof CalculatorModule === 'undefined') return;
    form.addEventListener('submit', event => {
      event.preventDefault();
      const savings = Number(form.querySelector('[name="savings"]')?.value) || 0;
      const income = Number(form.querySelector('[name="income"]')?.value) || 0;
      const expenses = Number(form.querySelector('[name="expenses"]')?.value) || 0;
      const category = form.querySelector('[name="category"]')?.value;
      const countries = CalculatorModule.getRecommendedCountries(appState.countries, savings, {
        category: category || undefined
      });
      displayCalculatorResults(countries, savings, income, expenses);
      CalculatorModule.trackUsage({ country_count: countries.length, category: category || 'all' });
    });
  };

  const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));

  const displayCalculatorResults = (countries, savings, income, expenses) => {
    const container = document.querySelector('#calculator-results');
    const list = document.querySelector('#affordable-list');
    if (!container || !list) return;

    const monthlySavings = Math.max(0, income - expenses);
    document.querySelector('#result-savings')?.replaceChildren(document.createTextNode(`$${savings.toLocaleString()}`));
    document.querySelector('#result-monthly-savings')?.replaceChildren(document.createTextNode(`$${monthlySavings.toLocaleString()}`));
    document.querySelector('#result-yearly-savings')?.replaceChildren(document.createTextNode(`$${(monthlySavings * 12).toLocaleString()}`));

    if (!countries.length) {
      list.textContent = 'No evidence-backed country cost currently qualifies for this budget. Incomplete country costs are intentionally excluded until primary-source verification is complete.';
      container.style.display = 'block';
      return;
    }

    list.innerHTML = countries.map(country => `
      <article class="country-result">
        <h4>${escapeHtml(country.flag)} ${escapeHtml(country.name)}</h4>
        <p>Verified planning cost: ${escapeHtml(country.trueCost.currency)} ${escapeHtml(country.trueCost.total)}</p>
        <p>Affordability: ${escapeHtml(country.affordability.rating)}</p>
        <a href="/pages/countries.html#${encodeURIComponent(country.id)}">Learn More →</a>
      </article>
    `).join('');
    container.style.display = 'block';
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
