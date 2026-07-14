/**
 * Abbreviates a count into a compact, human-readable form (e.g. 1234 → "1.2k",
 * 15400 → "15.4k", 1200000 → "1.2M"). Used for the nav star count.
 */
export function abbreviateCount(value: number): string {
  if (value < 1000) return String(value);
  if (value < 1_000_000) {
    const k = value / 1000;
    return `${trim(k)}k`;
  }
  const m = value / 1_000_000;
  return `${trim(m)}M`;
}

// One decimal place, but drop a trailing ".0" (1.0k reads worse than 1k).
function trim(n: number): string {
  const rounded = Math.round(n * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}
