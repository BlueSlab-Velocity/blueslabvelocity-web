const GBP = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

export function formatGBP(amount: number): string {
  return GBP.format(amount);
}

const DATE = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "short",
  day: "2-digit",
});

export function formatDate(d: Date): string {
  return DATE.format(d);
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

const WORDS_PER_MINUTE = 220;

export function readingTime(text: string): string {
  const words = text.trim().split(/\s+/u).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}
