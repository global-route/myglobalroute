import registry from "../../src/data/commercial-registry.json" with { type: "json" };

export default async (request) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (!id) return new Response("Missing commercial entry", { status: 400, headers: { "cache-control": "no-store" } });

  const entry = (registry.entries || []).find(item => item.id === id && item.status === "verified");
  if (!entry || !/^https:\/\//i.test(entry.destinationUrl || "")) {
    return new Response("Commercial entry unavailable", { status: 404, headers: { "cache-control": "no-store" } });
  }

  return Response.redirect(entry.destinationUrl, 302);
};

export const config = {
  path: "/go/commercial"
};
