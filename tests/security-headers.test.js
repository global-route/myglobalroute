const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const edgeHeaders = fs.readFileSync(path.join(root, 'public/_headers'), 'utf8');
const netlify = fs.readFileSync(path.join(root, 'netlify.toml'), 'utf8');

function policyFromHeaders() {
  const line = edgeHeaders.split(/\r?\n/).find(value => value.trim().startsWith('Content-Security-Policy:'));
  return line ? line.slice(line.indexOf(':') + 1).trim() : '';
}

function policyFromNetlify() {
  const match = netlify.match(/Content-Security-Policy\s*=\s*"([^"]+)"/);
  return match ? match[1] : '';
}

describe('deployment security-header configuration', () => {
  test('keeps static edge and Netlify CSP policies identical', () => {
    expect(policyFromHeaders()).not.toBe('');
    expect(policyFromNetlify()).toBe(policyFromHeaders());
  });

  test('disables plugin content and restricts base URI', () => {
    const policy = policyFromHeaders();
    expect(policy).toContain("base-uri 'self'");
    expect(policy).toContain("object-src 'none'");
    expect(policy).toContain('upgrade-insecure-requests');
    expect(policy).toContain("frame-ancestors 'none'");
    expect(policy).toContain("default-src 'self'");
  });
});
