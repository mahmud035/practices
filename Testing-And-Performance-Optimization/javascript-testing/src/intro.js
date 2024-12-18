// Lesson: Writing your first tests
export function max(a, b) {
  return a > b ? a : a === b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

// Lesson
export function calculateAverage(numbers) {
  if (numbers.length === 0) return NaN;
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

// 0! = 1
// 1! = 1
// 2! = 1 * 2 = 2
// 3! = 1 * 2 * 3 = 6
// 4! = 1 * 2 * 3 * 4 = 24
// 5! = 1 * 2 * 3 * 4 * 5 = 120
// Exercise
export function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}
