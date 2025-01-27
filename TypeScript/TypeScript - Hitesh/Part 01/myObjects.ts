/* 

const User = {
  name: 'John',
  email: 'john@gmail.com',
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

const newUser = { name: '', isPaid: false, email: 'john@.com' };

createUser(newUser); // Should be given an Error Here.

// How to return an Object
function createCourse(): {} {
  return {};
}

// How to return an Array
function createVideo(): [] {
  return [];
}

*/

//* Type Aliases

/*

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: 'John', email: '', isActive: false };
}

createUser({ name: 'John', email: '', isActive: false });

type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

*/

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; // Optional property
};

let myUser: User = {
  _id: '12345',
  name: 'John',
  email: 'john@.com',
  isActive: false,
};

myUser.email = 'john@example.com';
// myUser._id = '90000' // Error Here - Because it's readOnly

// Combine Multiple types and create a Single type
type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
