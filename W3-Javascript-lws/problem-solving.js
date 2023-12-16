'use strict';

//* -------------Javascript Problem Solving (01)-----------------

/* // print a random number from 1 to 6
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandomNumber(1, 6));

// print all of your classmate names alphabetically
const classMates = ['Rafsun', 'Naim', 'Sadia', 'Akram', 'Pavel', 'Sifat'];
console.log(classMates.sort());

// print all of your classmate roll numbers Ascending Order
const rollNumber = [40, 100, 1, 5, 25, 10, 35, 49];
console.log(
  rollNumber.sort(function (a, b) {
    return a - b;
  })
);

// Check if a year is Leap Year or Not
function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}
isLeapYear(1900);

// find the number of Vowel in a sentence
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence) {
  let count = 0;
  const letters = Array.from(sentence);

  letters.forEach(function (value) {
    if (vowels.includes(value)) {
      count++;
    }
  });

  return count;
}
console.log(countVowels('I love Bangladesh'));

// Find the duplicate numbers from an array
const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];

const duplicates = numbers.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});
console.log(duplicates);


// Convert Fahrenheit to Celsius
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
console.log(toCelsius(101));
 */
