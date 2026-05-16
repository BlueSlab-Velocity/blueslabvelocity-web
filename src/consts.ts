export const SITE = {
  name: "Blue Slab Velocity",
  shortName: "BSV",
  url: "https://www.blueslabvelocity.com",
  description:
    "Fractional Azure architecture for seed and Series A startups. Enterprise-grade at startup scale. Fixed-price packages, senior-only delivery, no retainers required.",
  email: "enquiries@blueslabvelocity.com",
  locale: "en-GB",
  twitter: "",
} as const;

export const BUILD = {
  id: import.meta.env.PUBLIC_BUILD_ID ?? "dev",
  commit: (import.meta.env.PUBLIC_COMMIT_SHA ?? "local").slice(0, 7),
  version: "0.1.0",
} as const;

export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
