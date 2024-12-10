import { describe, expect, it } from 'vitest';
import { fizzBuzz, max } from '../src/intro';

describe('max', () => {
  it('should return the first argument if it is greater', () => {
    expect(max(2, 1)).toBe(2);
  });
});

describe('max', () => {
  it('should return the second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2);
  });
});

describe('max', () => {
  it('should return the first argument if arguments are equal', () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe('fizzBuzz', () => {
  it(`should return 'FizzBuzz' if number is divisible by 3 and 5`, () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
});

describe('fizzBuzz', () => {
  it(`should return 'Fizz' if number is only divisible by 3`, () => {
    expect(fizzBuzz(12)).toBe('Fizz');
  });
});

describe('fizzBuzz', () => {
  it(`should return 'Buzz' if number is only divisible by 5`, () => {
    expect(fizzBuzz(20)).toBe('Buzz');
  });
});

describe('fizzBuzz', () => {
  it(`should return the number as a string if the number is not divisible by 3 or 5`, () => {
    expect(fizzBuzz(7)).toBe('7');
  });
});
