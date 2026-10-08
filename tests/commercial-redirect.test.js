const { execFileSync } = require("node:child_process");

function invoke(url) {
  const script = `import handler from "./netlify/functions/commercial-redirect.mjs";
const response = await handler(new Request(${JSON.stringify(url)}));
console.log(response.status);`;
  return Number(execFileSync(process.execPath, ["--input-type=module", "--eval", script], { encoding: "utf8" }).trim());
}

describe("commercial redirect boundary", () => {
  test("rejects missing entry id", () => {
    expect(invoke("https://example.test/go/commercial")).toBe(400);
  });

  test("rejects unknown or unverified entries", () => {
    expect(invoke("https://example.test/go/commercial?id=unknown")).toBe(404);
  });
});
