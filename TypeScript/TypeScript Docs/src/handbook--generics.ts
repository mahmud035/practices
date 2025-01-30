export {};

//* Hello World of Generics
function identity<Type>(arg: Type): Type {
  return arg;
}

let output = identity(101);
let output2 = identity('101');

//* Working with Generic Type Variables
// “the generic function loggingIdentity takes a type parameter Type, and an argument arg which is an array of Types, and returns an array of Types.”

function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

//* Generic Types
let myIdentity: <Type>(arg: Type) => Type = identity;

let myIdentity2: <Input>(arg: Input) => Input = identity;

let myIdentity3: { <Type>(arg: Type): Type } = identity;

interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

function identity2<Type>(arg: Type): Type {
  return arg;
}

let myIdentity4: GenericIdentityFn = identity2;
