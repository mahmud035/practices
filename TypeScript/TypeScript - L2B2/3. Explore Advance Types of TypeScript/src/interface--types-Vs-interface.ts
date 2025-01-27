/**
 * NOTE: type use korbo primitive type data er jonno(Ex: string, number, boolean, bigInt, symbol etc)
 *
 * NOTE: interface use korbo object type data er jonno(Ex: object, class)
 *  */

type TUser = {
  name: string;
  age: number;
};

type TExtendedUser = TUser & {
  roll: string;
};

interface IUser {
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  roll: string;
}

const userWithTypeAlias: TUser = {
  name: 'Type Alias',
  age: 100,
};

const userWithInterface: IUser = {
  name: 'Interface',
  age: 100,
};

const extendedUserWithInterface: IExtendedUser = {
  name: 'Extended Interface',
  age: 100,
  roll: 'Admin',
};

const extendedUserWithTypeAlias: TExtendedUser = {
  name: 'Extended Type using Intersection (&)',
  age: 100,
  roll: 'Admin',
};

//? More Examples:
// NOTE: "function er parameter and return type" ekbar type diye define kore diyechi, ar-ekbar interface diye define kore diyechi.

// IMP: FUNCTION define korar khetre type define korar somoy "type" babohar korbo. Karon "type" babohar korle code clean thake.

// "function parameter and return type" using type (Recommended)
type addNumbersType = (num1: number, num2: number) => number;

const addNumbers: addNumbersType = (num1, num2) => {
  return num1 + num2;
};

// "function parameter and return type" using interface
interface addNumbersInterface {
  (num1: number, num2: number): number;
}

const addNumbers2: addNumbersInterface = (num1, num2) => {
  return num1 + num2;
};

// Array
// IMP: Array define korar khetre-o type define korar somoy "type" babohar korbo. Karon "type" babohar korle code clean thake.
type TRollNumbers = number[];
const rollNumbers: TRollNumbers = [1, 2, 3, 4, 5]; // index

interface IRollNumbers {
  [index: number]: number; // index signature
}
const rollNumbers2: IRollNumbers = [1, 2, 3, 4, 5];
