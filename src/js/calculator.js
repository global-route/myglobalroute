/**
 * Global Route: Budget Calculator Module
 * Interactive visa affordability calculator
 */

const CalculatorModule = (() => {
  // Configuration
  const config = {
    currencyExchangeRates: {
      'EUR': 1.08,
      'GBP': 1.27,
      'CAD': 0.74,
      'AUD': 0.67,
      'JPY': 0.0067,
      'KRW': 0.00073
    }
  };

  /**
   * Convert currency to USD
   */
  const convertToUSD = (amount, currency) => {
    const rate = config.currencyExchangeRates[currency] || 1;
    return amount * rate;
  };

  /**
   * Calculate affordability score
   */
  const calculateAffordability = (userBudget, countryCost) => {
    const costInUSD = convertToUSD(countryCost.total, countryCost.currency);
    
    if (userBudget >= costInUSD) {
      return {
        affordable: true,
        percentage: 100,
        shortfall: 0,
        rating: 'Affordable'
      };
    } else if (userBudget >= costInUSD * 0.8) {
      return {
        affordable: true,
        percentage: (userBudget / costInUSD) * 100,
        shortfall: costInUSD - userBudget,
        rating: 'Tight Budget'
      };
    } else {
      return {
        affordable: false,
        percentage: (userBudget / costInUSD) * 100,
        shortfall: costInUSD - userBudget,
        rating: 'Not Affordable'
      };
    }
  };

  /**
   * Get recommended countries by budget
   */
  const getRecommendedCountries = (countries, budget, preferences = {}) => {
    return countries
      .map(country => ({
        ...country,
        affordability: calculateAffordability(budget, country.trueCost)
      }))
      .filter(country => country.affordability.affordable)
      .filter(country => {
        // Filter by preferences if provided
        if (preferences.category && country.sweetSpot !== preferences.category) {
          return false;
        }
        if (preferences.region && country.category !== preferences.region) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        // Sort by true cost (cheapest first)
        const aCost = convertToUSD(a.trueCost.total, a.trueCost.currency);
        const bCost = convertToUSD(b.trueCost.total, b.trueCost.currency);
        return aCost - bCost;
      });
  };

  /**
   * Calculate timeline
   */
  const calculateTimeline = (country) => {
    const timelineString = country.timeline;
    const months = parseInt(timelineString) || 12;
    
    return {
      minMonths: months / 2,
      maxMonths: months,
      recommended: Math.ceil(months * 1.2) // Add buffer
    };
  };

  /**
   * Generate savings plan
   */
  const generateSavingsPlan = (targetCost, currentSavings, monthlyIncome, monthlyExpenses) => {
    const monthlySavings = monthlyIncome - monthlyExpenses;
    
    if (monthlySavings <= 0) {
      return {
        feasible: false,
        message: 'Current expenses exceed income. Cannot save.',
        monthsNeeded: Infinity
      };
    }

    const remainingAmount = targetCost - currentSavings;
    const monthsNeeded = Math.ceil(remainingAmount / monthlySavings);

    return {
      feasible: true,
      currentSavings,
      targetCost,
      remainingAmount,
      monthlyTarget: monthlySavings,
      monthsNeeded,
      targetDate: new Date(Date.now() + monthsNeeded * 30 * 24 * 60 * 60 * 1000)
    };
  };

  /**
   * Calculate true cost breakdown
   */
  const getCostBreakdown = (country) => {
    const cost = country.trueCost;
    return {
      tuition: cost.tuition || 0,
      blockedAccount: cost.blockedAccount || 0,
      fees: cost.fees || 0,
      total: cost.total,
      breakdown: [
        { label: 'Tuition', amount: cost.tuition || 0, percentage: ((cost.tuition || 0) / cost.total * 100).toFixed(1) },
        { label: 'Blocked Account', amount: cost.blockedAccount || 0, percentage: ((cost.blockedAccount || 0) / cost.total * 100).toFixed(1) },
        { label: 'Fees', amount: cost.fees || 0, percentage: ((cost.fees || 0) / cost.total * 100).toFixed(1) }
      ]
    };
  };

  /**
   * Compare countries
   */
  const compareCountries = (countryIds, countries) => {
    return countryIds.map(id => 
      countries.find(c => c.id === id)
    ).filter(Boolean);
  };

  /**
   * Get visa affordability index (1-10)
   */
  const getAffordabilityIndex = (country) => {
    const costUSD = convertToUSD(country.trueCost.total, country.trueCost.currency);
    
    // Scale: 1-10 where 10 is most affordable
    if (costUSD < 5000) return 10;
    if (costUSD < 10000) return 9;
    if (costUSD < 15000) return 8;
    if (costUSD < 20000) return 7;
    if (costUSD < 25000) return 6;
    if (costUSD < 30000) return 5;
    if (costUSD < 40000) return 4;
    if (costUSD < 50000) return 3;
    if (costUSD < 60000) return 2;
    return 1;
  };

  /**
   * Track calculator usage
   */
  const trackUsage = (eventData = {}) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'calculator_used', eventData);
    }
  };

  // Public API
  return {
    calculateAffordability,
    getRecommendedCountries,
    calculateTimeline,
    generateSavingsPlan,
    getCostBreakdown,
    compareCountries,
    getAffordabilityIndex,
    convertToUSD,
    trackUsage
  };
})();
