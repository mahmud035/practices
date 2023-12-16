// array methods
const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango', 'Apple'];

//* find() & findIndex()
// const result = fruits.find((fruit) => fruit === 'Orange');
// console.log(result); // Orange

// const result = fruits.findIndex((fruit) => fruit === 'Orange');
// console.log(result); // 1

//* filter()
// const result = fruits.filter((fruit) => fruit === 'Apple');
// console.log(result); // ['Apple', 'Apple']

//* map()
// const result = fruits.map((fruit) => `${fruit}-`);
// console.log(result); // ['Banana-', 'Orange-', 'Lemon-', 'Apple-', 'Mango-', 'Apple-']

// const numbers = [10, 20, 30, 40];
// const result = numbers.map((number) => number + 1);
// console.log(result); // [11, 21, 31, 41]

//* forEach()
// const numbers = [10, 20, 30, 40];
// numbers.forEach((number) => {
//   console.log(number + 1);
// });

//* reduce()
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((finalValue, currentValue) => {
//   return finalValue + currentValue;
// }, 0);

// console.log(sum);

//? const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango', 'Apple'];

//* slice()
// const result = fruits.slice(2, 4);
// console.log(result); // ['Lemon', 'Apple']

//* splice()
// WARNING: splice() method will change the original Array.

// const result = fruits.splice(3, 3);
// console.log(result); // ['Apple', 'Mango', 'Apple']
// console.log(fruits); // ['Banana', 'Orange', 'Lemon']

// const result = fruits.splice(3, 3, 'Fruit 1', 'Fruit 2', 'Fruit 3');
// console.log(result); // ['Apple', 'Mango', 'Apple']
// console.log(fruits); // ['Banana', 'Orange', 'Lemon', 'Fruit 1', 'Fruit 2', 'Fruit 3']

//* concat()
// const result = fruits.concat(['Fruit 1', 'Fruit 2']);
// console.log(result); // ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango', 'Apple', 'Fruit 1', 'Fruit 2']

//* push()
// WARNING: push() method will change the original Array.

// const result = fruits.push('Fruit 1');
// console.log(result); // 7 (return new array length)
// console.log(fruits); // ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango', 'Apple', 'Fruit 1']

//* for of loop ("Array & String er jonno ==> which are iterable")
// const numbers = [1, 2, 3, 4, 5];

// for (const number of numbers) {
//   console.log(number);
// }

// const name = 'Sumit';

// for (const character of name) {
//   console.log(character);
// }

//* for in loop (Object er jonno)
// const language = {
//   name: 'JavaScript',
//   year: 1995,
//   creator: 'Brendan Eich',
// };

// for (const key in language) {
//   console.log(key); // name, year, creator

//   console.log(language[key]); // JavaScript, 1995, Brendan Eich
// }
