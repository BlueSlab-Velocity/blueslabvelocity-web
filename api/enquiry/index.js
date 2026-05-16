// Azure Static Web Apps managed function — enquiry endpoint stub.
// Receives the contact form POST, validates minimally, logs, returns 202.
// No third-party email provider in v1; the direct mailto link is the real channel.

/** @typedef {{ req: { method: string; headers: Record<string, string>; body?: unknown }, log: (...args: unknown[]) => void }} Context */

/**
 * @param {Context} context
 */
module.exports = async function (context) {
  const req = context.req;

  if (req.method !== "POST") {
    context.res = { status: 405, headers: { Allow: "POST" }, body: "Method Not Allowed" };
    return;
  }

  // Same-origin form post check
  const origin = req.headers["origin"] || req.headers["Origin"] || "";
  const referer = req.headers["referer"] || req.headers["Referer"] || "";
  const allowed = ["https://www.blueslabvelocity.com", "https://blueslabvelocity.com"];
  const isAllowed = allowed.some((a) => origin.startsWith(a) || referer.startsWith(a));
  if (!isAllowed && process.env.NODE_ENV === "production") {
    context.res = { status: 403, body: "Forbidden" };
    return;
  }

  /** @type {Record<string, string>} */
  let payload = {};
  const ct = (req.headers["content-type"] || "").toLowerCase();
  if (typeof req.body === "string") {
    if (ct.includes("application/x-www-form-urlencoded")) {
      payload = Object.fromEntries(new URLSearchParams(req.body));
    } else if (ct.includes("application/json")) {
      try { payload = JSON.parse(req.body); } catch { /* noop */ }
    }
  } else if (req.body && typeof req.body === "object") {
    payload = /** @type {Record<string, string>} */ (req.body);
  }

  // Honeypot
  if (payload.company_url && payload.company_url.length > 0) {
    context.res = { status: 202, body: "Accepted" };
    return;
  }

  const name = (payload.name || "").trim().slice(0, 200);
  const email = (payload.email || "").trim().slice(0, 320);
  const pkg = (payload.package || "").trim().slice(0, 50);
  const message = (payload.message || "").trim().slice(0, 2000);

  if (!name || !email || !message || message.length < 20 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    context.res = { status: 400, body: "Invalid submission" };
    return;
  }

  context.log("[bsv-enquiry]", { name, email, pkg, length: message.length, ts: new Date().toISOString() });

  context.res = {
    status: 303,
    headers: { Location: "/contact?sent=1" },
    body: "",
  };
};
