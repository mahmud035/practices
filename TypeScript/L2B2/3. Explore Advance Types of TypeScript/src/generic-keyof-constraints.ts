/**
 * NOTE: The keyof operator takes an object type and produces a string or numeric literal(fixed values) union of its keys.
 * */

type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = 'name' | 'age' | 'address'; // manually korchi

type newTypeUsingKeyOf = keyof PersonType; // using keyof operator

const a: newType = 'age'; // OK
const b: newTypeUsingKeyOf = 'age'; // OK

// Ex: real life example
function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  // here Y = 'name' | 'age'
  obj[key];
}

const properties = getProperty({ name: 'Mr. X', age: 100 }, 'age');
const properties2 = getProperty(
  { salary: 100000, profession: 'Developer' },
  'salary'
);

// WARN Error Here
// const properties3 = getProperty(
//   { husband: 'John', wife: 'Alexa' },
//   'je kono kichu other than husband or wife'
// );
