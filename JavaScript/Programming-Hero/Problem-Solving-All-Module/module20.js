'use strict';

/* // ----------Practice Challenge-(1)----------
function leapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(leapYear(2024));

// ----------Practice Challenge-(2)----------
function ageEvenOrOddNumber(age) {
  if (age % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(ageEvenOrOddNumber(25));

// ----------Practice Challenge-(3)----------
function hoursToMinutes(hours) {
  let minutes = hours * 60;
  return minutes;
}
console.log(hoursToMinutes(3)); */

//* Drive Link: https://drive.google.com/file/d/124tnpZWQ5e_6X2zifC8HE3ILe0bBuZba/view

// Practice Problem: 2
/* const array = [2023, 2024, 2025, 2028, 2030];

const findLeapYear = (years) => {
  const leapYear = [];
  for (let i = 0; i < years.length; i++) {
    let year = years[i];
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      leapYear.push(year);
    }
  }
  return leapYear;
};

const result = findLeapYear(array);
console.log(result);

// ---Practice Problem: 2 Using filter()---
const array2 = [2023, 2024, 2025, 2028, 2030];

const findLeapYear2 = (years) => {
  const leapYear = years.filter((year) => {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      return year;
    }
  });
  return leapYear;
};

const result2 = findLeapYear2(array2);
console.log(result2);
 */

// Practice Problem: 3
/* const findOddSum = (array) => {
  let oddSum = 0;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element % 2 === 1) {
      oddSum = oddSum + element;
    }
  }
  return oddSum;
};

const array2 = [5, 7, 8, 10, 45, 30];
const arrayOddSum = findOddSum(array2);
console.log(`The sum of all odd numbers in the array is ${arrayOddSum}`);
 */
