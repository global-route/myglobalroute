describe("commercial redirect boundary", () => {
  let redirect;

  beforeAll(async () => {
    redirect = await import("../netlify/functions/commercial-redirect.mjs");
  });

  test("rejects missing entry id", async () => {
    const response = await redirect.default(new Request("https://example.test/go/commercial"));
    expect(response.status).toBe(400);
  });

  test("rejects unknown or unverified entries", async () => {
    const response = await redirect.default(new Request("https://example.test/go/commercial?id=unknown"));
    expect(response.status).toBe(404);
  });
});
