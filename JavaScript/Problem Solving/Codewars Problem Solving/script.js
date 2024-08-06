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

// Is every value in the array an array?
//* My Solution
{
  const arrCheck = (value) => value.every((v) => v instanceof Array);

  // console.log(arrCheck([[1], [2]]));
  // console.log(arrCheck(['1', '2']));
  // console.log(arrCheck([{ 1: 1 }, { 2: 2 }]));
}

// Sum The Strings
//* My Solution
{
  function sumStr(a, b) {
    const num1 = a.length > 0 ? Number.parseInt(a) : 0;
    const num2 = b.length > 0 ? Number.parseInt(b) : 0;
    return `${num1 + num2}`;
  }

  // console.log(sumStr('4', '5'));
  // console.log(sumStr('34', '5'));
  // console.log(sumStr('', ''));
  // console.log(sumStr('2', ''));
  // console.log(sumStr('-5', '3'));
}

// Sum of integers in string
//* My Solution
{
  function sumOfIntegersInString(s) {
    const matches = s.match(/\d+/g) || [];
    return matches.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    );
  }

  // console.log(
  //   sumOfIntegersInString(
  //     'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
  //   )
  // );
  // console.log(sumOfIntegersInString('abc'));
}

// FIXME: Replace all dots
//* My Solution
{
  const replaceDots = function (str) {
    return str.replace(/\./g, '-');
  };
}

// USD => CNY
//* My Solution
{
  const usdcny = (usd) => `${(usd * 6.75).toFixed(2)} Chinese Yuan`;

  // console.log(usdcny(15));
  // console.log(usdcny(465));
  // console.log(usdcny(7100));
}

// Average Array
//* My Solution (NOT Completed Yet)
{
  function avgArray(nestedArray) {
    const average = [];
    const numberOfArray = nestedArray.length;

    const avg1 = (nestedArray[0][0] + nestedArray[1][0]) / numberOfArray;
    const avg2 = (nestedArray[0][1] + nestedArray[1][1]) / numberOfArray;
    const avg3 = (nestedArray[0][2] + nestedArray[1][2]) / numberOfArray;
    const avg4 = (nestedArray[0][3] + nestedArray[1][3]) / numberOfArray;

    // console.log(avg1, avg2, avg3, avg4);

    for (let i = 0; i < numberOfArray; i++) {
      const insideArray = nestedArray[i];
      console.log(insideArray);

      for (let j = 0; j < insideArray.length; j++) {
        // console.log(insideArray[i]);
        // console.log(insideArray[j]);
        // console.log(insideArray[i] + insideArray[j]);
        continue;
      }
    }

    // nestedArray
    //   .map((array) => array)
    //   .map((arr) => arr)
    //   .map((ar, i) => {
    //     console.log(ar, i);
    //   });

    // return nestedArray.reduce((acc, curr, i) => {
    //   console.log(acc);
    //   console.log(curr);
    // console.log(i);
    // console.log(curr[i]);

    //   for (let i = 0; i < curr.length; i++) {
    //     const element = curr[i];
    //     console.log(element);
    //   }

    //   return acc;
    // }, []);
  }

  // console.log(
  //   avgArray([
  //     [1, 2, 3, 4],
  //     [5, 6, 7, 8],
  //   ])
  // );
}

// Return the day
//* My Solution
{
  function whatday(num) {
    switch (num) {
      case 1:
        return 'Sunday';
      case 2:
        return 'Monday';
      case 3:
        return 'Tuesday';
      case 4:
        return 'Wednesday';
      case 5:
        return 'Thursday';
      case 6:
        return 'Friday';
      case 7:
        return 'Saturday';
      default:
        return 'Wrong, please enter a number between 1 and 7';
    }
  }

  // console.log(whatday(3));
  // console.log(whatday(40));
}

// Type of sum
//* My Solution
{
  function typeOfSum(a, b) {
    const typeofA = typeof a;
    const typeofB = typeof b;

    if (
      (typeofA === 'number' && typeofB === 'number') ||
      (typeofA === 'boolean' && typeofB === 'number') ||
      (typeofA === 'number' && typeofB === 'boolean') ||
      (a === null && typeofB === 'number') ||
      (typeofA === 'number' && b === null) ||
      (a === null && typeofB === 'undefined') ||
      (typeofA === 'undefined' && b === null) ||
      (typeofA === 'undefined' && typeofB === 'boolean') ||
      (typeofA === 'boolean' && typeofB === 'undefined') ||
      (a === null && typeofB === 'boolean') ||
      (typeofA === 'boolean' && b === null) ||
      (typeofA === 'undefined' && typeofB === 'undefined') ||
      (typeofA === 'boolean' && typeofB === 'boolean') ||
      (a === null && b === null) ||
      (typeofA === 'number' && typeofB === 'undefined') ||
      (typeofA === 'undefined' && typeofB === 'number')
    ) {
      return 'number';
    }

    if (
      typeofA === 'string' ||
      typeofB === 'string' ||
      (typeofA === 'string' && typeofB === 'boolean') ||
      (typeofA === 'boolean' && typeofB === 'string') ||
      (typeofA === 'string' && b === null) ||
      (a === null && typeofB === 'string') ||
      (typeofA === 'undefined' && typeofB === 'string') ||
      (typeofA === 'string' && typeofB === 'undefined')
    ) {
      return 'string';
    }
  }

  // console.log(typeOfSum(3, 5));
}

//* Best Practice
{
  const typeOfSum = (a, b) => typeof (a + b);

  // console.log(typeOfSum(3, 5));
}

// Even numbers in an array
//* My Solution
{
  const evenNumbers = (array, number) => {
    return array.filter((number) => Math.abs(number) % 2 === 0).slice(-number);
  };

  // console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
}

// Convert an array of strings to array of numbers
//* My Solution
{
  const toNumberArray = (stringarray) =>
    stringarray.map((strNum) => Number(strNum));

  // console.log(toNumberArray(['1', '2', '3']));
}

// Two numbers in an array adding up to a given number
//* My Solution
{
  // https://chatgpt.com/share/bfe9d31e-c4b3-42af-958c-57bf613d618a

  const hasPair = (A, sum) => {
    const complements = new Set();

    for (const element of A) {
      if (complements.has(element)) return true;
      complements.add(sum - element);
    }

    return false;
  };

  console.log(hasPair([1, 2, 6, 4], 5)); // true
  console.log(hasPair([-1, 7, 2, 15], 12)); // false
  console.log(hasPair([1, 3, 3, 6], 2)); // false
}
