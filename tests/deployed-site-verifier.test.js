const { spawnSync } = require('node:child_process');
const path = require('node:path');

const verifier = path.join(__dirname, '../scripts/verify-deployed-site.js');

describe('deployed-site verifier origin guard', () => {
  test('requires an explicitly supplied authoritative origin', () => {
    const result = spawnSync(process.execPath, [verifier], {
      encoding: 'utf8',
      env: { ...process.env, PRODUCTION_URL: '' }
    });
    expect(result.status).toBe(2);
    expect(result.stderr).toContain('set PRODUCTION_URL to an authoritative deployed origin');
  });

  test('rejects HTTP origins before making network requests', () => {
    const result = spawnSync(process.execPath, [verifier], {
      encoding: 'utf8',
      env: { ...process.env, PRODUCTION_URL: 'http://example.com' }
    });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('origin must use HTTPS');
  });

  test('rejects origin values that include paths or query strings', () => {
    const result = spawnSync(process.execPath, [verifier], {
      encoding: 'utf8',
      env: { ...process.env, PRODUCTION_URL: 'https://example.com/path?x=1' }
    });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('must be an origin only');
  });
});
