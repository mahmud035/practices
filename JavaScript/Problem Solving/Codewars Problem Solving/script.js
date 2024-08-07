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
  const avgArray = (nestedArray) => {
    const average = [];
    const numberOfArray = nestedArray.length;
  };

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

  // console.log(hasPair([1, 2, 6, 4], 5)); // true
  // console.log(hasPair([-1, 7, 2, 15], 12)); // false
  // console.log(hasPair([1, 3, 3, 6], 2)); // false
}

// V A P O R C O D E
//* My Solution
{
  const vaporcode = (string) =>
    string.toUpperCase().replace(/\s+/g, '').split('').join('  ');

  // console.log(vaporcode('Lets go to the movies'));
  // console.log(vaporcode("Why isn't my code working?"));

  // Output:
  // "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
  // "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
}

// Check the exam
//* My Solution
{
  const checkExam = (array1, array2) => {
    let score = 0;

    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) score += 4;
      if (array1[i] !== array2[i] && array2[i] !== '') score -= 1;
      if (array2[i] === '') score += 0;
    }

    return score > 0 ? score : 0;
  };

  // console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']));
  // console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']));
  // console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']));
  // console.log(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']));
}

// Flick Switch
//* My Solution
{
  const flickSwitch = (arr) => {
    const booleans = [];
    let shouldReturnTrue = true;

    for (const element of arr) {
      if (element === 'flick') shouldReturnTrue = !shouldReturnTrue;

      shouldReturnTrue ? booleans.push(true) : booleans.push(false);
    }

    return booleans;
  };

  // console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']));
}

// Check same case
//* My Solution
{
  const sameCase = (a, b) => {
    if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) {
      return -1;
    }
    if (
      (a === a.toUpperCase() && b === b.toUpperCase()) ||
      (a === a.toLowerCase() && b === b.toLowerCase())
    ) {
      return 1;
    }
    return 0;
  };

  // console.log(sameCase('a', 'g'));
  // console.log(sameCase('A', 'C'));
  // console.log(sameCase('b', 'G'));
  // console.log(sameCase('0', '?'));
}

// Quarter of the year
//* My Solution
{
  const quarterOf = (month) => {
    if (month >= 1 && month <= 3) return 1;
    if (month >= 4 && month <= 6) return 2;
    if (month >= 7 && month <= 9) return 3;
    if (month >= 10 && month <= 12) return 4;
  };

  // console.log(quarterOf(3));
}

// A wolf in sheep's clothing
//* My Solution
{
  const warnTheSheep = (queue) => {
    if (queue.at(-1) === 'wolf') return 'Pls go away and stop eating my sheep';

    return `Oi! Sheep number ${
      queue.length - queue.indexOf('wolf') - 1
    }! You are about to be eaten by a wolf!`;
  };

  // console.log(warnTheSheep(['sheep', 'sheep', 'sheep', 'wolf', 'sheep']));
}

//* Best Practice & Clever
{
  function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');

    return position === 0
      ? 'Pls go away and stop eating my sheep'
      : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
  }

  // console.log(warnTheSheep(['sheep', 'sheep', 'sheep', 'wolf', 'sheep']));
}

// Century From Year
//* My Solution
{
  const century = (year) => Math.ceil(year / 100);

  // console.log(century(1705)); // 18
  // console.log(century(1900)); // 19
  // console.log(century(1601)); // 17
  // console.log(century(2000)); // 20
  // console.log(century(2742)); // 28
}

// Area or Perimeter
//* My Solution
{
  const areaOrPerimeter = function (l, w) {
    if (l === w) return l * l;
    return 2 * (l + w);
  };

  // console.log(areaOrPerimeter(6, 10));
  // console.log(areaOrPerimeter(3, 3));
}

// Twice as old
//* My Solution
{
  const twiceAsOld = (dadYearsOld, sonYearsOld) => {
    const yearsBeforeDouble = dadYearsOld - sonYearsOld * 2;
    const yearsAfterDouble = sonYearsOld * 2 - dadYearsOld;

    console.log({ yearsBeforeDouble, yearsAfterDouble });

    return Math.abs(yearsAfterDouble);
  };

  // console.log(twiceAsOld(36, 7));
  // console.log(twiceAsOld(55, 30));
  // console.log(twiceAsOld(42, 21));
  // console.log(twiceAsOld(22, 1));
}

// Pillars
//* My Solution
{
  const pillars = (numPill, dist, width) => {
    // (numPill * width) + (dist * 100 * (numPill -1)) - (width * 2)

    return numPill > 1
      ? numPill * width + dist * 100 * (numPill - 1) - width * 2
      : 0;
  };

  // console.log(pillars(1, 10, 10));
  // console.log(pillars(2, 20, 25));
  // console.log(pillars(11, 15, 30));
}

// Third Angle of a Triangle
//* My Solution
{
  const otherAngle = (a, b) => 180 - (a + b);

  // console.log(otherAngle(30, 60));
}

// Multiple of index
//* My Solution
{
  const multipleOfIndex = (array) =>
    array.filter((element, i) => {
      if (i === 0) return element === 0;
      return element % i === 0;
    });

  // console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
  // console.log(multipleOfIndex([0, 2, 3, 6, 9]));
}

// Find Nearest square number
//* My Solution
{
  const nearestSq = (n) => {
    if (Math.trunc(Math.sqrt(n)) * Math.trunc(Math.sqrt(n)) === n) return n;

    const nextSquareNum = Math.ceil(Math.sqrt(n)) * Math.ceil(Math.sqrt(n));
    const prevSquareNum = Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n));

    return nextSquareNum - n < n - prevSquareNum
      ? nextSquareNum
      : prevSquareNum;
  };

  // console.log(nearestSq(1)); // 1
  // console.log(nearestSq(2)); // 1
  // console.log(nearestSq(10)); // 9
  // console.log(nearestSq(111)); // 121
  // console.log(nearestSq(9999)); // 10000
  // console.log(nearestSq(81)); // 81
}

// Find numbers which are divisible by given number
//* My Solution
{
  const divisibleBy = (numbers, divisor) =>
    numbers.filter((number) => number % divisor === 0);

  // console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3));
}

// Reversed sequence
//* My Solution
{
  const reverseSeq = (n) => {
    const array = [];

    for (let i = n; i >= 1; i--) {
      array.push(i);
    }

    return array;
  };

  // console.log(reverseSeq(5));
}

// Is he gonna survive?
//* My Solution
{
  const hero = (bullets, dragons) => bullets >= dragons * 2;

  // console.log(hero(10, 5)); // true
  // console.log(hero(7, 4)); // false
}

// Capitalization and Mutability
//* My Solution
{
  const capitalizeWord = (word) =>
    `${word.at(0).toUpperCase()}${word.slice(1)}`;

  // console.log(capitalizeWord('hello'));
}

// Capitals first!
//* My Solution
{
  const capitalsFirst = (str) => {
    const words = str.split(' ');
    const capitalWords = [];
    const lowercaseWords = [];

    words.forEach((word) => {
      if (/^[A-Z]/.test(word)) capitalWords.push(word);
      if (/^[a-z]/.test(word)) lowercaseWords.push(word);
    });

    return [...capitalWords, ...lowercaseWords].join(' ');
  };

  // NOTE: /^[A-Z]/: This regular expression matches words starting with an uppercase letter.
  // /^[a-z]/: This regular expression matches words starting with a lowercase letter.

  // console.log(capitalsFirst('hey You, Sort me Already!'));
}

// Find the capitals
//* My Solution
{
  const capitals = function (word) {
    const array = [];

    for (let i = 0; i < word.length; i++) {
      if (word.at(i).match(/[A-Z]/)) array.push(i);
    }

    return array;
  };

  // console.log(capitals('CodEWaRs'));
}
