'use strict';

// Google Drive Link: https://drive.google.com/file/d/1Ut8t4Ed8V-U0Axtz4nbIXJhmxvMEMUe9/view

/* // Practice Problem: 1 (1)

const multiplyNumbers = (num1, num2, num3) => {
  return num1 * num2 * num3;
};

const output = multiplyNumbers(5, 3, 4);
console.log(output);

// Practice Problem: 1 (2)

const multipleLine = `
I am a web developer
I love to code
I love to eat biryani.
`;
console.log(multipleLine);

// Practice Problem: 1 (3)

const addNumbers = (num1, num2 = 0) => {
  return num1 + num2;
};
console.log(addNumbers(5));
 */

/* // Practice Problem: 2

const findEvenNumbersFriendsName = (friends) => {
  const evenFriendsName = [];
  for (const friend of friends) {
    if (friend.length % 2 == 0) {
      evenFriendsName.push(friend);
    }
  }
  return evenFriendsName;
};

const friends = ['Emon', 'Bappy', 'Rafsun', 'Akram', 'Topu'];
const evenFriendsName = findEvenNumbersFriendsName(friends);
console.log(evenFriendsName); */

// Practice Problem: 3
const findArraySquareAverage = (numbers) => {
  for (const number of numbers) {
    const square = Math.pow(number * number);
    console.log(square);
  }
};

const array = [2, 3, 4, 5];
console.log(findArraySquareAverage(array));

/* // Practice Problem: 4

const findMaxNumber = (array1, array2) => {
  const newArray = [...array1, ...array2];
  const maxNumber = Math.max(...newArray);
  return maxNumber;
};

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

const maxNumber = findMaxNumber(array1, array2);
console.log(maxNumber); */
