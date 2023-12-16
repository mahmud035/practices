import { myFunction } from './myModule';

jest.mock('./myModule.js', () => {
  const originalModule = jest.requireActual('./myModule');

  return {
    __esModule: true,
    ...originalModule,
    add: jest.fn((a, b) => a + b),
  };
});

describe('Mocking my module to test myFunction', () => {
  it(`should return 'Big' when the sum is 10 or greater'`, () => {
    const result = myFunction(3, 50);
    expect(result).toEqual('Big');
  });

  it(`should return 'Small' when the sum is less than 10'`, () => {
    const result = myFunction(3, 5);
    expect(result).toEqual('Small');
  });
});
