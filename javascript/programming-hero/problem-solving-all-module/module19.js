'use strict';
// Practice Challenge: 1
// function multiplicationTable(number) {
//   for (let i = 1; i <= 10; i++) {
//     const result = i * number;
//     console.log(`${number} x ${i} = ${result}`);
//   }
// }
// multiplicationTable(13);

// Practice Challenge: 2
// function lowerCaseName(name) {
//   return name.toLowerCase();
// }
// console.log(lowerCaseName('JOHN DOE'));

// Practice Challenge: 3
// const fullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// };
// console.log(fullName('John', 'Doe'));

// Practice Challenge: 4
// function square(num) {
//   return num * num;
// }
// console.log(square(5));

// Practice Challenge: 5
// const pizza = {
//   toppings: ['cheese', 'sauce', 'pepperoni'],
//   crust: 'deep dish',
//   serves: 2,
// };
// console.log(pizza?.toppings?.[2]);

//* Drive Link: https://drive.google.com/file/d/1KFqqs_Nm1T7s3kBA66rDbykpghDxLa47/view

// Practice Tak: 1(recursion)
// function foo() {
//   console.log('foo');
//   bar();
//   foo();
// }
// foo();

// function bar() {
//   console.log('bar');
// }

// Practice Tak: 2
// function calculateAverage(num1, num2, num3) {
//   return (num1 + num2 + num3) / 3;
// }
// console.log(calculateAverage(1, 2, 3));

// Practice Task: 3
// function makeAverage(array, length) {
//   let sum = 0;
//   for (let i = 0; i < length; i++) {
//     sum += array[i];
//   }
//   return sum / length;
// }

// const arrayOfInteger = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numberOfElements = arrayOfInteger.length;
// const averageOutput = makeAverage(arrayOfInteger, numberOfElements);
// console.log(averageOutput);

// Practice Task: 4
// function oddEven(number) {
//   if (number % 2 === 0) {
//     return 'even';
//   } else {
//     return 'odd';
//   }
// }
// console.log(oddEven(2));

// function oddEven2(number) {
//   if (number % 2 === 0) {
//     console.log('even');
//   } else {
//     console.log('odd');
//   }
// }
// oddEven2(2);

// Practice Task: 5
/* Checking the value of the variable signal and printing the result. */
// const signal = 'green';

// switch (signal) {
//   case 'red':
//     console.log('Danger');
//     break;
//   case 'yellow':
//     console.log('Warning');
//     break;
//   case 'green':
//     console.log('Go');
//     break;

//   default:
//     break;
// }

/* Checking the value of the variable signal and printing the result. */
// const signal = 'green';

// if (signal === 'red') {
//   console.log('Danger');
// } else if (signal === 'yellow') {
//   console.log('Warning');
// } else if (signal === 'green') {
//   console.log('Go');
// }
