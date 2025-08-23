// function multiply(a, b, c) {
//   return a * b * c;
// }

// console.log(multiply(5, 6, 7));

//* Example: 1
// function curriedMultiply(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }

// let step1 = curriedMultiply(5);
// let step2 = step1(6);
// console.dir(step2);
// let step3 = step2(7);

// console.log(step3);

// console.log(curriedMultiply(5)(6)(7));

//* Example: 2
// function discount(disc) {
//   return function (price) {
//     return price - price * disc;
//   };
// }

// let tenPercentDiscount = discount(0.1); // partial function
// let twentyPercentDiscount = discount(0.2);
// // console.log(tenPercentDiscount, twentyPercentDiscount);

// let customer1D = tenPercentDiscount(600);
// let customer2D = tenPercentDiscount(700);
// let customer3D = tenPercentDiscount(800);
// let customer4D = twentyPercentDiscount(1200);

// console.log(customer1D, customer2D, customer3D, customer4D);

//* Example: 3
// Convert a normal function into curried function
// function curry(func) {
//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }

// function sum(a, b, c) {
//   return a + b + c;
// }

// let curriedSum = curry(sum);

// console.log(curriedSum(1, 2, 3));
// console.log(curriedSum(1)(2, 3));
// console.log(curriedSum(1)(2)(3));

//* Example: 4 (using lodash)
// function sum(a, b, c) {
//   return a + b + c;
// }

// let curriedSum = _.curry(sum);

// console.log(curriedSum(1, 2, 3));
// console.log(curriedSum(1)(2, 3));
// console.log(curriedSum(1)(2)(3));

//* Example: 5 (using lodash)
// function log(date, importance, message) {
//   console.log(
//     `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${importance} : ${message}`
//   );
// }

// let curriedLog = _.curry(log);

// curriedLog(new Date(), 'DEBUG', 'some debug');

// curriedLog(new Date())('DEBUG')('some debug');

// let logNow = curriedLog(new Date());

// logNow('INFO', 'some info');

//* Example: 6 (shortcut curried function)
// const multiply = (a) => (b) => (c) => a * b * c;

// console.log(multiply(5)(6)(7));

//* Example: 7 (shortcut curried function)
// const buildSammy = (ingredient1) => (ingredient2) => (ingredient3) =>
//   `${ingredient1}, ${ingredient2}, ${ingredient3}`;

// const mySammy = buildSammy('turkey')('cheese')('bread');
// console.log(mySammy);
