import registry from "../../src/data/commercial-registry.json" with { type: "json" };

function isValidDate(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value + "T00:00:00.000Z");
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export function isEligibleEntry(entry, now = new Date()) {
  if (!entry || entry.status !== "verified") return false;
  let destination;
  try {
    destination = new URL(entry.destinationUrl);
  } catch (_) {
    return false;
  }
  if (destination.protocol !== "https:" || !destination.hostname || destination.username || destination.password) return false;
  if (!isValidDate(entry.reviewedAt) || !isValidDate(entry.expiresAt)) return false;
  const reviewedAt = new Date(entry.reviewedAt + "T00:00:00.000Z");
  const expiresAt = new Date(entry.expiresAt + "T23:59:59.999Z");
  if (reviewedAt > now || expiresAt <= now || expiresAt <= reviewedAt) return false;
  return true;
}

export default async (request) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (!id) return new Response("Missing commercial entry", { status: 400, headers: { "cache-control": "no-store" } });

  const entry = (registry.entries || []).find(item => item.id === id);
  if (!isEligibleEntry(entry)) {
    return new Response("Commercial entry unavailable", { status: 404, headers: { "cache-control": "no-store" } });
  }

  return Response.redirect(entry.destinationUrl, 302);
};

export const config = {
  path: "/go/commercial"
};
