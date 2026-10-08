const { execFileSync } = require("node:child_process");

function invoke(url) {
  const script = `import handler from "./netlify/functions/commercial-redirect.mjs";
const response = await handler(new Request(${JSON.stringify(url)}));
console.log(response.status);`;
  return Number(execFileSync(process.execPath, ["--input-type=module", "--eval", script], { encoding: "utf8" }).trim());
}

function eligible(entry) {
  const script = `import { isEligibleEntry } from "./netlify/functions/commercial-redirect.mjs";
const entry = ${JSON.stringify(entry)};
console.log(isEligibleEntry(entry));`;
  return execFileSync(process.execPath, ["--input-type=module", "--eval", script], { encoding: "utf8" }).trim() === "true";
}

const validEntry = {
  id: "partner-one",
  status: "verified",
  destinationUrl: "https://partner.example/apply",
  reviewedAt: "2026-10-01",
  expiresAt: "2026-12-01"
};

describe("commercial redirect boundary", () => {
  test("rejects missing entry id", () => {
    expect(invoke("https://example.test/go/commercial")).toBe(400);
  });

  test("rejects unknown or unverified entries", () => {
    expect(invoke("https://example.test/go/commercial?id=unknown")).toBe(404);
  });

  test("accepts only current verified entries with safe HTTPS destinations", () => {
    expect(eligible(validEntry)).toBe(true);
    expect(eligible({ ...validEntry, status: "pending" })).toBe(false);
    expect(eligible({ ...validEntry, destinationUrl: "http://partner.example" })).toBe(false);
    expect(eligible({ ...validEntry, destinationUrl: "https://user:pass@partner.example" })).toBe(false);
    expect(eligible({ ...validEntry, expiresAt: "2026-10-01" })).toBe(false);
    expect(eligible({ ...validEntry, reviewedAt: "not-a-date" })).toBe(false);
  });
});
