// Types by Inference
let helloWord = 'hello world';

//* Interface
interface IUser {
  id: number;
  name: string;
}

const user: IUser = {
  id: 1,
  name: 'John',
};

//* Classes
// Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:
class UserAccount {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const user2: IUser = new UserAccount(1, 'Murphy');

// Composing Types

//* Unions
type MyBool = true | false;
type WindowStates = 'open' | 'closed' | 'minimized';
type LockStates = 'locked' | 'unlocked';
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(arg: string | string[]) {
  return arg.length;
}

function wrapInArray(arg: string | string[]) {
  if (typeof arg === 'string') return [arg];
  return arg;
}

//* Generics
// Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// You can declare your own types that use generics:
interface IBackpack<T> {
  add: (obj: T) => void;
  get: () => T;
}

//* Structural Type System
interface IPoint {
  x: number;
  y: number;
}

function logPoint(pt: IPoint) {
  console.log(`X: ${pt.x}, Y: ${pt.y}`);
}

const point = { x: 12, y: 26 };
logPoint(point); // X: 12, Y: 26

const point2 = { x: 12, y: 26, z: 89 };
logPoint(point2); // X: 12, Y: 26

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // X: 33, Y: 3

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // X: 13, Y: 56
