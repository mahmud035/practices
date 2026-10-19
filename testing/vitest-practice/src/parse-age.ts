export function parseAge(input: string): number {
  const age = Number(input.trim());

  if (Number.isNaN(age) || age < 0 || age > 150) {
    throw new Error(`Invalid age: ${input}`);
  }

  return Math.floor(age);
}
