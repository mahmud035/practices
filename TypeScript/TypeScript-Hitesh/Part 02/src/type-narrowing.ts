// Type Narrowing
function detectType(value: number | string) {
  if (typeof value === 'string') {
    return value.toLowerCase();
  }

  return value + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log('Please provide ID');
    return;
  }
  return id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    // NOTE: typeof array is 'object'
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

// The in operator narrowing
function isAdminAccount(account: User | Admin) {
  if ('isAdmin' in account) {
    return account.isAdmin;
  }
}

// Instanceof and Type Predicates
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    console.log(pet); // using 'pet'
    return 'fish food';
  } else {
    console.log(pet); // using 'pet'
    return 'bird food';
  }
}

// Discriminated unions
interface Circle {
  kind: 'circle';
  radius: number;
}
interface Square {
  kind: 'square';
  side: number;
}

interface Rectangle {
  kind: 'rectangle';
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  }
  // return shape.side * shape.side;
}

// Exhaustiveness checking
function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side * shape.side;
    case 'rectangle':
      return shape.length * shape.width;

    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}
