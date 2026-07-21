/**
 * Global Route: Main Application Module
 * Handles initialization and core functionality
 */

const GlobalRoute = (() => {
  // Configuration
  const config = {
    countriesDataUrl: '/src/data/countries.json',
    enableAnalytics: true,
    adDelayMs: 3000
  };

  // State
  let appState = {
    countries: [],
    currentPage: 'home',
    isInitialized: false
  };

  /**
   * Initialize application
   */
  const init = async () => {
    if (appState.isInitialized) return;

    try {
      // Load countries data
      await loadCountriesData();

      // Initialize modules
      initializeNavigation();
      initializeCalculator();
      initializeSearch();

      // Load analytics
      if (config.enableAnalytics) {
        loadAnalytics();
      }

      appState.isInitialized = true;
      console.log('Global Route initialized successfully');
    } catch (error) {
      console.error('Initialization error:', error);
    }
  };

  /**
   * Load countries data
   */
  const loadCountriesData = async () => {
    try {
      const response = await fetch(config.countriesDataUrl);
      if (!response.ok) throw new Error('Failed to load countries data');
      
      const data = await response.json();
      appState.countries = data.countries;
      return data;
    } catch (error) {
      console.error('Error loading countries data:', error);
      return null;
    }
  };

  /**
   * Initialize navigation
   */
  const initializeNavigation = () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });

      // Close menu when link is clicked
      navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
        });
      });
    }
  };

  /**
   * Initialize search functionality
   */
  const initializeSearch = () => {
    const searchInput = document.querySelector('[role="searchbox"]');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const results = appState.countries.filter(country =>
        country.name.toLowerCase().includes(query) ||
        country.id.toLowerCase().includes(query)
      );
      
      // Display results (implementation depends on UI)
      console.log('Search results:', results);
    });
  };

  /**
   * Initialize budget calculator
   */
  const initializeCalculator = () => {
    const calculatorForm = document.querySelector('#budget-calculator');
    if (!calculatorForm) return;

    calculatorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const budget = parseFloat(document.querySelector('input[name="budget"]').value);
      const category = document.querySelector('select[name="category"]').value;

      const affordableCountries = getAffordableCountries(budget, category);
      displayCalculatorResults(affordableCountries);
    });
  };

  /**
   * Get affordable countries for budget
   */
  const getAffordableCountries = (budget, category) => {
    return appState.countries.filter(country => {
      if (category !== 'all' && country.sweetSpot !== category) {
        return false;
      }
      return country.trueCost.total <= budget;
    });
  };

  /**
   * Display calculator results
   */
  const displayCalculatorResults = (countries) => {
    const resultsContainer = document.querySelector('#calculator-results');
    if (!resultsContainer) return;

    if (countries.length === 0) {
      resultsContainer.innerHTML = '<p>No countries found for your budget. Try increasing it!</p>';
      return;
    }

    const resultsHtml = countries.map(country => `
      <div class="country-result">
        <h3>${country.flag} ${country.name}</h3>
        <p>True Cost: ${country.trueCost.currency} ${country.trueCost.total}</p>
        <p>African Approval Rate: ${country.africanRate}</p>
        <a href="/pages/countries.html#${country.id}">Learn More →</a>
      </div>
    `).join('');

    resultsContainer.innerHTML = resultsHtml;
  };

  /**
   * Load analytics
   */
  const loadAnalytics = () => {
    if (typeof gtag === 'undefined') return;

    // Track page view
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href
    });

    // Track external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
      link.addEventListener('click', () => {
        gtag('event', 'external_link', {
          link_url: link.href
        });
      });
    });
  };

  /**
   * Get country by ID
   */
  const getCountryById = (id) => {
    return appState.countries.find(c => c.id === id);
  };

  /**
   * Get all countries
   */
  const getAllCountries = () => {
    return appState.countries;
  };

  /**
   * Track custom event
   */
  const trackEvent = (eventName, eventData = {}) => {
    if (config.enableAnalytics && typeof gtag !== 'undefined') {
      gtag('event', eventName, eventData);
    }
  };

  // Public API
  return {
    init,
    loadCountriesData,
    getCountryById,
    getAllCountries,
    trackEvent,
    getState: () => appState
  };
})();

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    GlobalRoute.init();
  });
} else {
  GlobalRoute.init();
}
