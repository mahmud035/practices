const { getWords } = require('../src/getWords');

test('should throw an if it not a string', () => {
  expect(() => getWords(100)).toThrow();
  expect(() => getWords(true)).toThrow();
  expect(() => getWords(false)).toThrow();
  expect(() => getWords(['words'])).toThrow();
  expect(() => getWords({ name: 'mahmud' })).toThrow();
});

test('should return the same string if the arguments is a word', () => {
  expect(getWords('mahmud')).toBe('mahmud');
  expect(getWords('VSCode')).toBe('VSCode');
  expect(getWords('JEST')).toBe('JEST');
});

test('should return the array of string ', () => {
  const words1 = getWords('Mahmudul Hasan');
  expect(words1).toHaveLength(2);
  expect(words1).toContain('Mahmudul');

  const words2 = getWords('Test Driven Development');
  expect(words2).toHaveLength(3);
  expect(words2).toContain('Test');
});
