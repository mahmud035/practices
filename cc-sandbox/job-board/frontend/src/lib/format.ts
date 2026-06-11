/** Formats a salary range as compact USD, e.g. "$70k – $100k". */
export const formatSalary = (min: number, max: number): string => {
  const fmt = (n: number) =>
    n >= 1000 ? `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : `$${n}`;
  return `${fmt(min)} – ${fmt(max)}`;
};

/** Formats an ISO date string as a short local date, e.g. "Dec 31, 2026". */
export const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
