/**
 * Global Route: Budget Calculator Module
 * Canonical affordability and planning logic.
 *
 * Safety rule: incomplete/evidence-gated country costs are never treated as
 * actionable affordability data.
 */

const CalculatorModule = (() => {
  const config = {
    // Fallback rates only. Do not present these as live FX rates.
    currencyExchangeRates: {
      USD: 1,
      EUR: 1.08,
      GBP: 1.27,
      CAD: 0.74,
      AUD: 0.67,
      JPY: 0.0067,
      KRW: 0.00073
    },
    tightBudgetThreshold: 0.8
  };

  const convertToUSD = (amount, currency = 'USD') => {
    const numericAmount = Number(amount);
    if (!Number.isFinite(numericAmount) || numericAmount < 0) return 0;
    const rate = config.currencyExchangeRates[String(currency).toUpperCase()];
    if (!Number.isFinite(rate)) throw new Error(`Unsupported currency: ${currency}`);
    return numericAmount * rate;
  };

  const hasPublishableCost = country => Boolean(
    country &&
    country.dataStatus === 'publishable' &&
    country.trueCost &&
    Number.isFinite(Number(country.trueCost.total)) &&
    Number(country.trueCost.total) > 0 &&
    typeof country.trueCost.currency === 'string'
  );

  const calculateAffordability = (userBudget, countryCost) => {
    const budget = Number(userBudget);
    const costInUSD = convertToUSD(countryCost?.total, countryCost?.currency);
    if (!Number.isFinite(budget) || budget < 0 || costInUSD <= 0) {
      return { affordable: false, percentage: 0, shortfall: costInUSD, rating: 'Insufficient Data' };
    }
    const percentage = (budget / costInUSD) * 100;
    const affordable = budget >= costInUSD * config.tightBudgetThreshold;
    return {
      affordable,
      percentage: Math.min(100, percentage),
      shortfall: Math.max(0, costInUSD - budget),
      rating: budget >= costInUSD ? 'Affordable' : affordable ? 'Tight Budget' : 'Not Affordable'
    };
  };

  const getRecommendedCountries = (countries, budget, preferences = {}) => countries
    .filter(hasPublishableCost)
    .map(country => ({ ...country, affordability: calculateAffordability(budget, country.trueCost) }))
    .filter(country => country.affordability.affordable)
    .filter(country => !preferences.category || country.sweetSpot === preferences.category)
    .filter(country => !preferences.region || country.category?.includes(preferences.region))
    .sort((a, b) => convertToUSD(a.trueCost.total, a.trueCost.currency) - convertToUSD(b.trueCost.total, b.trueCost.currency));

  const calculateTimeline = (country) => {
    const values = String(country?.timeline || '').match(/\d+(?:\.\d+)?/g)?.map(Number) || [];
    const minMonths = values[0] || 0;
    const maxMonths = values[1] || minMonths || 12;
    return {
      minMonths,
      maxMonths: Math.max(minMonths, maxMonths),
      recommended: Math.ceil(Math.max(minMonths, maxMonths) * 1.2)
    };
  };

  const generateSavingsPlan = (targetCost, currentSavings, monthlyIncome, monthlyExpenses) => {
    const target = Math.max(0, Number(targetCost) || 0);
    const savings = Math.max(0, Number(currentSavings) || 0);
    const monthlySavings = (Number(monthlyIncome) || 0) - (Number(monthlyExpenses) || 0);
    const remainingAmount = Math.max(0, target - savings);
    if (remainingAmount === 0) {
      return { feasible: true, currentSavings: savings, targetCost: target, remainingAmount: 0, monthlyTarget: Math.max(0, monthlySavings), monthsNeeded: 0, targetDate: new Date() };
    }
    if (monthlySavings <= 0) {
      return { feasible: false, currentSavings: savings, targetCost: target, remainingAmount, monthlyTarget: 0, monthsNeeded: Infinity, targetDate: null };
    }
    const monthsNeeded = Math.ceil(remainingAmount / monthlySavings);
    return {
      feasible: true,
      currentSavings: savings,
      targetCost: target,
      remainingAmount,
      monthlyTarget: monthlySavings,
      monthsNeeded,
      targetDate: new Date(Date.now() + monthsNeeded * 30 * 24 * 60 * 60 * 1000)
    };
  };

  const getCostBreakdown = (country) => {
    const cost = country?.trueCost || {};
    const total = Number(cost.total) || 0;
    const entries = [['Tuition', cost.tuition], ['Blocked Account', cost.blockedAccount], ['Fees', cost.fees]];
    return {
      ...cost,
      total,
      breakdown: entries.map(([label, amount]) => ({
        label,
        amount: Number(amount) || 0,
        percentage: total ? (((Number(amount) || 0) / total) * 100).toFixed(1) : '0.0'
      }))
    };
  };

  const compareCountries = (countryIds, countries) => countryIds.map(id => countries.find(country => country.id === id)).filter(Boolean);

  const getAffordabilityIndex = (country) => {
    if (!hasPublishableCost(country)) return null;
    const costUSD = convertToUSD(country.trueCost.total, country.trueCost.currency);
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

  const trackUsage = (eventData = {}) => {
    if (typeof gtag !== 'undefined') gtag('event', 'calculator_used', eventData);
  };

  // DOM wiring belongs to app.js; this module is the single calculation engine.
  return { calculateAffordability, getRecommendedCountries, calculateTimeline, generateSavingsPlan, getCostBreakdown, compareCountries, getAffordabilityIndex, convertToUSD, trackUsage, hasPublishableCost };
})();
