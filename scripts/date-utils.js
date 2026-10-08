const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function isIsoDate(value) {
  if (typeof value !== 'string' || !DATE_PATTERN.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

function isOnOrBefore(value, upperBound) {
  return isIsoDate(value) && isIsoDate(upperBound) && value <= upperBound;
}

function isOnOrAfter(value, lowerBound) {
  return isIsoDate(value) && isIsoDate(lowerBound) && value >= lowerBound;
}

module.exports = { isIsoDate, isOnOrBefore, isOnOrAfter };
