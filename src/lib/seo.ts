import { SITE } from "~/consts";

export interface SeoProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
}

export function canonical(path: string): string {
  const trimmed = path.replace(/\/+$/u, "");
  return `${SITE.url}${trimmed === "" ? "" : trimmed}`;
}

export function organisationJsonLd(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    areaServed: ["GB", "EU"],
    serviceType: "Azure cloud architecture and fractional CTO services",
  });
}
