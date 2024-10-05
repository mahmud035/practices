"use strict";
var _a, _b;
//* Ternary Operator
const age = 20;
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
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : 'Guest';
console.log(userName);
const human1 = {
    name: 'John',
    age: 18,
    address: {
        city: 'Dhaka',
        road: '78/A',
        // home: 'Gopalganj',
    },
};
const home = (_b = (_a = human1 === null || human1 === void 0 ? void 0 : human1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'No Home';
console.log(home); // Output: "No Home"
// Ex-3
const someValue = null;
const defaultValue = 'This is a default value';
const result = someValue !== null && someValue !== void 0 ? someValue : defaultValue;
console.log(result); // Output: "This is a default value"
