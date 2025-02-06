type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific
let a: One = 'hello';
let b = a as Two; // less specific
let c = a as Three; // more specific

const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): number | string => {
  if (c === 'add') return a + b;
  return '' + a + b;
};

let myVal: string = addOrConcat(2, 2, 'concat') as string;

// The DOM
const img = document.querySelector('img')!; // Non-null assertion operator
const myImg = document.getElementById('#img') as HTMLImageElement; // Type Assertion

const nextImg = <HTMLImageElement>document.getElementById('#img');

img.src;
myImg.src;
