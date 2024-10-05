/** Convert the following JavaScript array into a TypeScript tuple*/
const userInfo = [101, 'Ema', 'John', true, , '2023'];

const userInfo2: [number, string, string, boolean, string] = [
  101,
  'Ema',
  'John',
  true,
  '2023',
];
