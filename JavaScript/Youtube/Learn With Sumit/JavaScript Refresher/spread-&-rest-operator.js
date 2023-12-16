//* spread operator with array
const fruits = ['Banana', 'Orange'];

const result = [...fruits];
console.log(result); // ['Banana', 'Orange']

result.push('Apple');

console.log(result); // ['Banana', 'Orange', 'Apple']
console.log(fruits); // ['Banana', 'Orange']

// Ex: 02
// WARNING: Array of objects এইভাবে copy করা যাবে না।
// const persons = [
//   {
//     name: 'Sumit',
//   },
//   {
//     name: 'Rakib',
//   },
// ];

// const result = [...persons];
// console.log(result);

//* spread operator with object
// const language = {
//   name: 'JavaScript',
//   year: 1995,
//   creator: 'Brendan Eich',
// };

// const result = {
//   ...language,
// };
// console.log(result); // {name: 'JavaScript', year: 1995, creator: 'Brendan Eich'}

//* rest operator
// const sum = (text, ...rest) => {
//   console.log(rest); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//   const total = rest.reduce((finalValue, currentValue) => {
//     return finalValue + currentValue;
//   }, 0);

//   return `${text} ${total}`;
// };

// const result = sum('The sum is:', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(result);
