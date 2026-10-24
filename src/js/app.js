/**
 * Global Route: Main Application Module
 * Owns application state and DOM wiring; domain logic lives in modules.
 */

const GlobalRoute = (() => {
  const config = { countriesDataUrl: '/data/countries.json', enableAnalytics: true };
  const appState = { countries: [], currentPage: 'home', isInitialized: false };

  const init = async () => {
    if (appState.isInitialized) return;
    if (config.enableAnalytics) {
      loadAnalytics();
      window.GlobalRoute?.Analytics?.initConsentUI();
      // Mount only eligible placeholders; no provider scripts are activated here.
      window.GlobalRoute?.Monetization?.init?.();
    }
    try {
      await loadCountriesData();
      initializeNavigation();
      initializeSearch();
      initializeCountryDirectory();
      initializeCalculator();
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
    // Active state: match current path to nav links
    const path = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
    navMenu.querySelectorAll('a').forEach(link => {
      const href = link.getAttribute('href').replace(/\.html$/, '').replace(/\/$/, '') || '/';
      const current = path.replace(/\/$/, '') || '/';
      if (href === current || (href !== '/' && current.startsWith(href))) {
        link.classList.add('active');
      }
    });
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
        grid.innerHTML = filtered.length ? filtered.map(country => {
          const cost = country.trueCost?.total != null
            ? `${escapeHtml(country.trueCost.currency)} ${escapeHtml(String(country.trueCost.total))}`
            : '<span style="color:var(--color-neutral-400)">Not yet verified</span>';
          const rate = country.africanRate != null
            ? escapeHtml(country.africanRate)
            : '<span style="color:var(--color-neutral-400)">Not published</span>';
          const statusColour = country.dataStatus === 'publishable' ? 'var(--color-secondary)' : 'var(--color-warning)';
          return `
          <article class="country-card" id="${escapeHtml(country.id)}">
            <div class="country-card-header">
              <span style="font-size:1.75rem;line-height:1;" aria-hidden="true">${escapeHtml(country.flag)}</span>
              <h3 style="margin-bottom:0;"><a href="/pages/countries/${encodeURIComponent(country.id)}/">${escapeHtml(country.name)}</a></h3>
              <span style="margin-left:auto;font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:${statusColour};">${escapeHtml(country.dataStatus || 'unknown')}</span>
            </div>
            <p style="font-size:0.875rem;color:var(--color-neutral-600);margin:0.5rem 0 0.75rem;">${escapeHtml(country.summary || 'Country pathway intelligence is being verified.')}</p>
            <dl style="display:grid;grid-template-columns:auto 1fr;gap:0.2rem 0.75rem;font-size:0.8rem;margin:0;">
              <dt style="color:var(--color-neutral-500);font-weight:600;">African rate</dt><dd style="margin:0;">${rate}</dd>
              <dt style="color:var(--color-neutral-500);font-weight:600;">Planning cost</dt><dd style="margin:0;">${cost}</dd>
            </dl>
          </article>`;
        }).join('') : '<p style="grid-column:1/-1;color:var(--color-neutral-500);">No countries match the selected filters.</p>';
      }

      if (tableBody) {
        tableBody.innerHTML = filtered.map(country => `
          <tr id="country-row-${escapeHtml(country.id)}">
            <td>${escapeHtml(country.flag)} <a href="/pages/countries/${encodeURIComponent(country.id)}/">${escapeHtml(country.name)}</a></td>
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
      trackEvent('calculator_started', { page_type: 'calculator' });
      const countries = CalculatorModule.getRecommendedCountries(appState.countries, savings, {
        category: category || undefined
      });
      displayCalculatorResults(countries, savings, income, expenses);
      trackEvent('calculator_completed', { page_type: 'calculator' });
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
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
          <span style="font-size:1.5rem;" aria-hidden="true">${escapeHtml(country.flag)}</span>
          <h4 style="margin:0;">${escapeHtml(country.name)}</h4>
          <span style="margin-left:auto;font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:var(--color-secondary);">${escapeHtml(country.affordability.rating)}</span>
        </div>
        <p style="font-size:0.875rem;color:var(--color-neutral-600);margin:0 0 0.5rem;">Verified planning cost: <strong>${escapeHtml(country.trueCost.currency)} ${escapeHtml(String(country.trueCost.total))}</strong></p>
        <a href="/pages/countries/${encodeURIComponent(country.id)}/" style="font-size:0.875rem;font-weight:600;">View country evidence &rarr;</a>
      </article>
    `).join('');
    container.style.display = 'block';
  };

  const loadAnalytics = () => {
    if (typeof window.GlobalRoute?.Analytics === 'undefined') return;
    const provider = window.GlobalRoute.Analytics.createGA4Provider(
      typeof gtag === 'function' ? gtag : null
    );
    if (provider) window.GlobalRoute.Analytics.setProvider(provider);
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
      link.addEventListener('click', () => {
        trackEvent('official_source_clicked', {
          page_type: document.body?.dataset?.pageType || 'unknown',
          source_id: link.dataset.sourceId || 'external'
        });
      });
    });
  };

  const getCountryById = id => appState.countries.find(country => country.id === id);
  const getAllCountries = () => appState.countries;
  const trackEvent = (eventName, eventData = {}) => {
    if (!config.enableAnalytics || typeof GlobalRoute.Analytics === 'undefined') return { accepted: false, reason: 'analytics_unavailable' };
    return window.GlobalRoute.Analytics.track(eventName, eventData);
  };

  return { init, loadCountriesData, getCountryById, getAllCountries, trackEvent, getState: () => appState };
})();

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => GlobalRoute.init());
else GlobalRoute.init();
