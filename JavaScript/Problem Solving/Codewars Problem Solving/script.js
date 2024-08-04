'use strict';

// Sum of differences in array
//* My Solution
{
  function sumOfDifferences(arr) {
    if (arr.length === 0 || arr.length === 1) return 0;

    const sortedArray = arr.sort((a, b) => b - a);
    let sum = 0;

    sortedArray.forEach((element, index, array) => {
      const firstElement = element;
      const secondElement = array[index + 1];

      if (secondElement !== undefined) {
        const differences = firstElement - secondElement;
        sum += differences;
      }
    });

    return sum;
  }
  // console.log(sumOfDifferences([10, 2, 1]));
}

//* Clever Solution
{
  function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
  }
  // console.log(sumOfDifferences([10, 2, 1]));
}

// If you can't sleep, just count sheep!!
//* My Solution
{
  const countSheep = function (num) {
    const strArr = [];

    for (let i = 0; i < num; i++) {
      strArr.push(`${i + 1} sheep...`);
    }

    return strArr.join('');
  };

  // console.log(countSheep(3));
}

//* Best Practice
{
  const countSheep = function (num) {
    let str = '';

    for (let i = 1; i <= num; i++) {
      str += `${i} sheep...`;
    }

    return str;
  };

  // console.log(countSheep(3));
}

// The Feast of Many Beasts
//* My Solution
{
  function feast(beast, dish) {
    return beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1)
      ? true
      : false;
  }

  // console.log(feast('great blue heron', 'garlic naan'));
  // console.log(feast('chickadee', 'chocolate cake'));
}

// Total amount of points
//* My Solution
{
  function points(games) {
    let totalPoints = 0;

    games.forEach((game) => {
      const x = Number.parseInt(game.at(0));
      const y = Number.parseInt(game.at(-1));

      if (x > y) totalPoints += 3;
      if (x === y) totalPoints += 1;
    });

    return totalPoints;
  }

  // console.log(points(['3:1', '2:2', '0:1']));
}

// Student's Final Grade
//* My Solution
{
  function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) return 100;
    if (exam > 75 && projects >= 5) return 90;
    if (exam > 50 && projects >= 2) return 75;

    return 0;
  }

  // console.log(finalGrade(100, 12));
  // console.log(finalGrade(99, 0));
  // console.log(finalGrade(10, 15));

  // console.log(finalGrade(85, 5));

  // console.log(finalGrade(55, 3));

  // console.log(finalGrade(55, 0));
  // console.log(finalGrade(20, 2));
}

// Multiplication table for number
//* My Solution
{
  function multiTable(number) {
    const table = [];

    for (let i = 1; i <= 10; i++) {
      if (i === 10) table.push(`${i} * ${number} = ${i * number}`);
      else table.push(`${i} * ${number} = ${i * number}\n`);
    }

    return table.join('');
  }

  // console.log(multiTable(5));
}

// Array plus array
//* My Solution
{
  function arrayPlusArray(arr1, arr2) {
    const newArray = [...arr1, ...arr2];
    const sum = newArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum;

    // return [...arr1, ...arr2].reduce(
    //   (accumulator, currentValue) => accumulator + currentValue,
    //   0
    // );
  }

  // console.log(arrayPlusArray([1, 2, 3], [4, 5, 6, 7]));
}

// Array Array Array
//* My Solution
{
  function explode(x) {
    const firstValue = x.at(0);
    const secondValue = x.at(1);
    const nestedArray = [];
    let score = 0;

    if (typeof firstValue === 'number' && typeof secondValue === 'number') {
      score += firstValue + secondValue;
    } else if (
      typeof firstValue === 'number' ||
      typeof secondValue === 'number'
    ) {
      score = typeof firstValue === 'number' ? firstValue : secondValue;
    } else return 'Void!';

    // Loop over the score and create nestedArray
    for (let i = 1; i <= score; i++) {
      nestedArray.push([firstValue, secondValue]);
    }
    return nestedArray;
  }

  // console.log(explode([4, 3]));
  // console.log(explode(['a', 3]));
  // console.log(explode(['a', '3']));
}
