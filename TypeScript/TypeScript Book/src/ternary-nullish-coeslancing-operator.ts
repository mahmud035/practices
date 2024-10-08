//* Ternary Operator
const age: number = 20;

// if (age > 18) {
//   console.log('Adult');
// } else {
//   console.log('Minor');
// }

// NOTE: Syntax: condition ? trueValue : falseValue;

const isAdult = age >= 18 ? 'Yes' : 'No';

//* Nullish Coeslancing Operator
/* null and undefined */

/**
 * IMPORTANT: - এটাকে double question mark (??) দিয়ে লিখতে হয়। (??) এর বামপাশে যদি `null / undefined` থাকে, তাহলে (??) এর ডানপাশের code execute হবে।
 *  আর যদি (??) এর বামপাশে `null / undefined` ছাড়া অন্য কোন value থাকে, তাহলে ডানপাশের code execute হবে না। তখন বামপাশের ঐ value টা ই variable এর value হিসেবে বসবে।
 */

// Ex-1
const isAuthenticatedUser = null; // userName will be Guest
// const isAuthenticatedUser = undefined; // userName will be Guest
// const isAuthenticatedUser = 'John'; // userName will be John

const userName = isAuthenticatedUser ?? 'Guest';
console.log(userName);

// Ex-2:
type Human = {
  name: string;
  age: number;
  address: {
    city: string;
    road: string;
    home?: string; // optional property
  };
};

const human1: Human = {
  name: 'John',
  age: 18,
  address: {
    city: 'Dhaka',
    road: '78/A',
    // home: 'Gopalganj',
  },
};

const home = human1?.address?.home ?? 'No Home';
console.log(home); // Output: "No Home"

// Ex-3
const someValue = null;
const defaultValue = 'This is a default value';

const result = someValue ?? defaultValue;
console.log(result); // Output: "This is a default value"
