const { add, isEven } = require('../app');

// NOTE: add() Function
test('should return correct addition value ', () => {
  expect(add(2, 3)).toEqual(5);
  expect(add(5, 10)).toEqual(15);
  expect(add(10, 20)).toEqual(30);
});

test('should throw an error if arguments are not numbers', () => {
  expect(() => add('A', 10)).toThrow();
});

// NOTE: isEven() Function

test('isEven() should return true', () => {
  expect(isEven(10)).toBeTruthy();
  expect(isEven(40)).toBeTruthy();
  expect(isEven(22)).toBeTruthy();
});

test('isEven() should return false', () => {
  expect(isEven(1)).toBeFalsy();
  expect(isEven(15)).toBeFalsy();
  expect(isEven(45)).toBeFalsy();
});

test('should throw an error if arguments is not numbers', () => {
  expect(() => isEven('A')).toThrow();
  expect(() => isEven('10')).toThrow();
  expect(() => isEven(true)).toThrow();
  expect(() => isEven(false)).toThrow();
  expect(() => isEven(null)).toThrow();
  expect(() => isEven(undefined)).toThrow();
  expect(() => isEven([])).toThrow();
  expect(() => isEven({})).toThrow();
});
