const arrayOfNumbers = [1, 2, 3];
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfStrings);

type AreaNumber = {
  width: number;
  height: number;
};

type AreaString = {
  width: string;
  height: string;
};

type AreaReadOnly = {
  readonly width: number;
  height: number;
};

const rectangularArea: AreaReadOnly = {
  width: 10,
  height: 12,
};
// rectangularArea.width = 30; // Error Here

type B = AreaNumber['width']; // look up types
type C = keyof AreaNumber; // 'width' | 'height'

// const obj = {
//   name: 'Persian',
// };
// console.log(obj.name);
// console.log(obj['name']);

//* Ex: 2 (Mapped type)
type Volume = {
  width: number;
  height: number;
  depth: number;
};

type Area = {
  // [key]: type
  [key in keyof Volume]: Volume[key];

  // Volume['width'] ==> number type; (type dynamically define hobe)
};

//* create GENERIC mapped type

type AreaGeneric<T> = {
  [key in keyof T]: T[key];
};

const name1: AreaGeneric<{ name: string }> = { name: 'Persian' };
const area1: AreaGeneric<{ width: number; height: number }> = {
  width: 10,
  height: 20,
};
const volume: AreaGeneric<{ width: string; height: number; depth: string }> = {
  width: '10',
  height: 20,
  depth: '30',
};
