import { describe, expect, it } from 'vitest';
import { calculateAverage, factorial, fizzBuzz, max } from '../src/intro';

// Test suits
describe('max', () => {
  it('should return the first argument if it is greater', () => {
    expect(max(2, 1)).toBe(2);
  });

  it('should return the second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2);
  });

  it('should return the first argument if arguments are equal', () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe('fizzBuzz', () => {
  it(`should return 'FizzBuzz' if number is divisible by 3 and 5`, () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it(`should return 'Fizz' if number is only divisible by 3`, () => {
    expect(fizzBuzz(12)).toBe('Fizz');
  });

  it(`should return 'Buzz' if number is only divisible by 5`, () => {
    expect(fizzBuzz(20)).toBe('Buzz');
  });

  it(`should return the number as a string if the number is not divisible by 3 or 5`, () => {
    expect(fizzBuzz(7)).toBe('7');
  });
});

describe('calculateAverage', () => {
  it('should return NaN if given an empty array', () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it('should calculate the average of an array with a single element', () => {
    expect(calculateAverage([1])).toBe(1);
  });

  it('should calculate the average of an array with two elements', () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });

  it('should calculate the average of an array with three elements', () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe('factorial', () => {
  it('should return 1 if argument is 0 or 1', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });

  it('should calculate the factorial value of the argument', () => {
    expect(factorial(5)).toBe(120);
  });

  it('should return undefined if given a negative argument', () => {
    expect(factorial(-3)).toBeUndefined();
  });
});
