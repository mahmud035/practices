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

// Indexed capitalization
//* My Solution
{
  const capitalize = (s, arr) => {
    const strArray = s.split('');

    arr.forEach((element) => {
      if (element >= 0 && element < s.length) {
        strArray[element] = strArray[element].toUpperCase();
      }
    });

    return strArray.join('');
  };

  // console.log(capitalize('abcdef', [1, 2, 5, 100]));
}

// Alternate capitalization
//* My Solution
{
  const capitalize = (s) => {
    const strArray = s.split('');
    const evenIndexes = [...strArray];
    const oddIndexes = [...strArray];

    strArray.forEach((_, i) => {
      evenIndexes[0] = evenIndexes[0].toUpperCase();

      if (i > 0 && i % 2 === 0) evenIndexes[i] = evenIndexes[i].toUpperCase();

      if (i > 0 && i % 2 === 1) oddIndexes[i] = oddIndexes[i].toUpperCase();
    });

    return [evenIndexes.join(''), oddIndexes.join('')];
  };

  // console.log(capitalize('abcdef'));
}

//* Best Practice & Clever
{
  const capitalize = (s) => {
    const even = s
      .split('')
      .map((el, i) => (i % 2 === 0 ? el.toUpperCase() : el))
      .join('');

    const odd = s
      .split('')
      .map((el, i) => (i % 2 !== 0 ? el.toUpperCase() : el))
      .join('');

    return [even, odd];
  };

  // console.log(capitalize('abcdef'));
}

// Alternate case
//* My Solution
{
  const alternateCase = (s) => {
    const strArr = s.split('');

    strArr.forEach((char, i) => {
      if (/[A-Z]/.test(char)) strArr[i] = strArr[i].toLowerCase();

      if (/[a-z]/.test(char)) strArr[i] = strArr[i].toUpperCase();
    });

    return strArr.includes('') ? strArr.join(' ') : strArr.join('');
  };

  // console.log(alternateCase('Hello World'));
  // console.log(alternateCase('abc'));
  // console.log(alternateCase('ABC'));
}

//* Best Practice
{
  const alternateCase = (s) => {
    return s
      .split('')
      .map((char) =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
      )
      .join('');
  };

  // console.log(alternateCase('Hello World'));
  // console.log(alternateCase('abc'));
  // console.log(alternateCase('ABC'));
}

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
//* My Solution
{
  String.prototype.toAlternatingCase = function () {
    return this.split('')
      .map((char) => {
        if (/[A-Z]/.test(char)) return char.toLowerCase();
        if (/[a-z]/.test(char)) return char.toUpperCase();
        else return char;
      })
      .join('');
  };

  // console.log('hello world'.toAlternatingCase());
  // console.log('hello WORLD'.toAlternatingCase());
  // console.log('1a2b3c4d5e'.toAlternatingCase());
}

// Are we alternate?
//* My Solution
{
  const isAlt = (word) => {
    const isVowel = (char) => `aeiou`.includes(char);
    const isConsonant = (char) => !isVowel(char) && /[a-z]/.test(char);

    return word.split('').every((_, i, arr) => {
      // NOTE: If the index is the lastIndex (i === arr.length - 1), the function returns true because there's no next character to check.
      if (i === arr.length - 1) return true;

      return (
        (isVowel(arr[i]) && isConsonant(arr[i + 1])) ||
        (isConsonant(arr[i]) && isVowel(arr[i + 1]))
      );
    });
  };

  // console.log(isAlt('amazon'));
  // console.log(isAlt('apple'));
  // console.log(isAlt('banana'));
}

// ES6 string addition
//* My Solution
{
  const joinStrings = (string1, string2) => `${string1} ${string2}`;

  // console.log(joinStrings('string1', 'string2'));
  // console.log(joinStrings(134, 234));
}

// Duck Duck Goose
//* My Solution
{
  const duckDuckGoose = (players, goose) => {
    if (goose <= players.length) return players[goose - 1]?.name;
    if (goose > players.length) {
      if (goose % players.length === 0)
        return players[players.length - 1]?.name;

      return players[(goose % players.length) - 1]?.name;
    }
  };

  const players = [
    { name: 'a' },
    { name: 'b' },
    { name: 'c' },
    { name: 'd' },
    { name: 'c' },
    { name: 'e' },
    { name: 'f' },
    { name: 'g' },
    { name: 'h' },
    { name: 'z' },
  ];
  // console.log(duckDuckGoose(players, 3));
  // console.log(duckDuckGoose(players, 18));
  // console.log(duckDuckGoose(players, 20));
}

// simple calculator
//* My Solution
{
  const calculator = (a, b, sign) => {
    const operators = `+-*/`;

    if (
      !operators.includes(sign) ||
      typeof a !== 'number' ||
      typeof b !== 'number'
    )
      return 'unknown value';

    switch (sign) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        if (b === 0) return 'unknown value';
        return a / b;
    }
  };

  // console.log(calculator(1, 2, '+')); // 3
  // console.log(calculator(1, 2, '-')); // -1
  // console.log(calculator(1, 2, '&')); // unknown value
  // console.log(calculator(1, 'k', '*')); // unknown value
}

//Check if a triangle is an equable triangle!
//* My Solution
{
  const equableTriangle = (a, b, c) => {
    const perimeter = a + b + c;
    const semiPerimeter = perimeter / 2;

    // Calculate area using Heron's formula
    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - a) *
        (semiPerimeter - b) *
        (semiPerimeter - c)
    );

    return area === perimeter ? true : false;
  };

  // console.log(equableTriangle(5, 12, 13));
  // console.log(equableTriangle(2, 3, 4));
}

// Is this a triangle?
//* My Solution
{
  const isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;

  // console.log(isTriangle(1, 2, 2));
  // console.log(isTriangle(7, 2, 2));
}

// Find the volume of a Cone
//* My Solution
{
  const volume = (r, h) => Math.floor((1 / 3) * Math.PI * Math.pow(r, 2) * h);

  // console.log(volume(7, 3));
}

// Volume of a Cuboid
//* My Solution
{
  class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height;
    }
  }

  // console.log(Kata.getVolumeOfCuboid(1, 2, 2));
  // console.log(Kata.getVolumeOfCuboid(6, 2, 5));
}

// Switch it Up!
//* My Solution
{
  const switchItUp = (number) => {
    switch (number) {
      case 0:
        return 'Zero';
      case 1:
        return 'One';
      case 2:
        return 'Two';
      case 3:
        return 'Three';
      case 4:
        return 'Four';
      case 5:
        return 'Five';
      case 6:
        return 'Six';
      case 7:
        return 'Seven';
      case 8:
        return 'Eight';
      case 9:
        return 'Nine';
      default:
        return 'Unknown';
    }
  };

  // console.log(switchItUp(1));
  // console.log(switchItUp(5));
}

// Exclamation marks series #1: Remove an exclamation mark from the end of string
//* My Solution
{
  const remove = (string) =>
    string.at(-1) === '!' ? string.slice(0, -1) : string;

  // console.log(remove('Hi!'));
  // console.log(remove('Hi!!!'));
  // console.log(remove('!Hi'));
  // console.log(remove('Hi! Hi!'));
  // console.log(remove('Hi'));
}

// Exclamation marks series #2: Remove all exclamation marks from the end of sentence
//* My Solution
{
  const remove = (string) =>
    string.includes('!') ? string.replace(/!+$/, '') : string;

  // !+ matches one or more exclamation marks.
  // $ asserts the position at the end of the string.

  // console.log(remove('Hi!'));
  // console.log(remove('Hi!!!'));
  // console.log(remove('!Hi'));
  // console.log(remove('Hi! Hi!'));
  // console.log(remove('Hi'));
}

// Exclamation marks series #3: Remove all exclamation marks from sentence except at the end
//* My Solution
{
  const remove = (string) => {
    // Split the Sentence
    const mainPart = string.replace(/!+$/, '');
    const trailingExclamations = string.match(/!+$/) || '';

    // Remove Exclamation Marks from Main Part
    const cleanedMainPart = mainPart.replace(/!/g, '');

    // Concatenate and Return
    return cleanedMainPart + trailingExclamations;
  };

  // trailingExclamations captures any exclamation marks at the end of the sentence using the regular expression /!+$/. If there are no trailing exclamations, it returns an empty string.

  // console.log(remove('Hi!'));
  // console.log(remove('Hi!!!'));
  // console.log(remove('!Hi'));
  // console.log(remove('Hi! Hi!'));
  // console.log(remove('Hi'));
}

// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
//* My Solution
{
  const remove = (string) => {
    // Remove all exclamation marks from the string
    const cleanedString = string.replace(/!/g, '');

    // Add a single exclamation mark at the end
    return cleanedString + '!';
  };

  // console.log(remove('Hi!'));
  // console.log(remove('Hi!!!'));
  // console.log(remove('!Hi'));
  // console.log(remove('Hi! Hi!'));
  // console.log(remove('Hi'));
}

// Exclamation marks series #5: Remove all exclamation marks from the end of words
//* My Solution
{
  const remove = (string) =>
    string
      .split(' ')
      .map((word) => word.replace(/!+$/, ''))
      .join(' ');

  // replace(/!+$/, '') uses a regular expression to match one or more exclamation marks (!+) at the end of the word ($ asserts position at the end of a string) and replaces them with an empty string '', effectively removing them.

  // console.log(remove('Hi!'));
  // console.log(remove('Hi!!!'));
  // console.log(remove('!Hi!'));
  // console.log(remove('Hi! Hi!'));
  // console.log(remove('!!!Hi !!hi!!! !hi'));
}

// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
//* My Solution
{
  const remove = (s, n) => {
    let result = '';

    for (let i = 0; i < s.length; i++) {
      if (s[i] === '!' && n > 0) n--;
      else result += s[i];
    }

    return result;
  };

  // console.log(remove('Hi!', 1)); // Output: "Hi"
  // console.log(remove('Hi!', 100)); // Output: "Hi"
  // console.log(remove('Hi!!!', 1)); // Output: "Hi!!"
  // console.log(remove('Hi!!!', 100)); // Output: "Hi"
  // console.log(remove('!Hi', 1)); // Output: "Hi"
  // console.log(remove('!Hi!', 1)); // Output: "Hi!"
  // console.log(remove('!Hi!', 100)); // Output: "Hi"
  // console.log(remove('!!!Hi !!hi!!! !hi', 1)); // Output: "!!Hi !!hi!!! !hi"
  // console.log(remove('!!!Hi !!hi!!! !hi', 3)); // Output: "Hi !!hi!!! !hi"
  // console.log(remove('!!!Hi !!hi!!! !hi', 5)); // Output: "Hi hi!!! !hi"
  // console.log(remove('!!!Hi !!hi!!! !hi', 100)); // Output: "Hi hi hi"
}

// Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
//* My Solution
{
  const remove = (string) => {
    return string
      .split(' ')
      .filter((word) => {
        const exclamationCount = (word.match(/!/g) || []).length;
        return exclamationCount !== 1;
      })
      .join(' ');
  };

  // console.log(remove('Hi!')); // Output: ""
  // console.log(remove('Hi! Hi!')); // Output: ""
  // console.log(remove('Hi! Hi! Hi!')); // Output: ""
  // console.log(remove('Hi Hi! Hi!')); // Output: "Hi"
  // console.log(remove('Hi! !Hi Hi!')); // Output: ""
  // console.log(remove('Hi! Hi!! Hi!')); // Output: "Hi!!"
  // console.log(remove('Hi! !Hi! Hi!')); // Output: "!Hi!"
}

// Exclamation marks series #8: Move all exclamation marks to the end of the sentence
//* My Solution
{
  const remove = (string) => {
    const withoutExclamations = string.replace(/!/g, '');

    const exclamationCount = string.length - withoutExclamations.length;

    return withoutExclamations + '!'.repeat(exclamationCount);
  };

  // console.log(remove('Hi!'));
  // console.log(remove('Hi! Hi!'));
  // console.log(remove('Hi! Hi! Hi!'));
  // console.log(remove('Hi! !Hi Hi!'));
}

// Exclamation marks series #9: Remove or add a exclamation mark at the end of words of the sentence
//* My Solution
{
  const removeOrAdd = (string) =>
    string
      .split(' ')
      .map((word) => {
        if (word.endsWith('!') && !word.endsWith('!!'))
          return word.slice(0, -1);
        if (!word.endsWith('!')) return word + '!';
        return word;
      })
      .join(' ');

  // console.log(removeOrAdd('Hi!'));
  // console.log(removeOrAdd('Hi! Hi'));
  // console.log(removeOrAdd('Hi! Hi'));
  // console.log(removeOrAdd('Hi! Hi Hi!!'));
  // console.log(removeOrAdd('!Hi! !Hi !Hi!!'));
}

// Exclamation marks series #10: Remove some exclamation marks to keep the same number of exclamation marks at the beginning and end of each word
//* My Solution
{
  const remove = (string) => {
    return string
      .split(' ')
      .map((word) => {
        // Count exclamation marks at the start
        const startExclamations = word.match(/^!+/)?.[0].length || 0;

        // Count exclamation marks at the end
        const endExclamations = word.match(/!+$/)?.[0].length || 0;

        // Calculate the minimum number of exclamation marks to keep
        const minExclamations = Math.min(startExclamations, endExclamations);

        // Remove exclamation marks from both sides
        const wordWithoutExclamations = word.replace(/(^!+)|(!+$)/g, '');

        return (
          '!'.repeat(minExclamations) +
          wordWithoutExclamations +
          '!'.repeat(minExclamations)
        );
      })
      .join(' ');
  };

  // console.log(remove('Hi!'));
  // console.log(remove('!Hi! Hi!'));
  // console.log(remove('!!Hi! !Hi!!'));
  // console.log(remove('Hi! Hi!'));
  // console.log(remove('!!!!Hi!! !!!!Hi !Hi!!!'));
}

// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
//* My Solution
{
  const replace = (s) => s.replace(/[aeiouAEIOU]/g, '!');

  // console.log(replace('Hi!'));
  // console.log(replace('!Hi! Hi!'));
  // console.log(replace('aeiou'));
  // console.log(replace('ABCDE'));
}

// Beginner - Reduce but Grow
//* My Solution
{
  const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);

  // console.log(grow([1, 2, 3, 4]));
}

// Simple Comparison?
//* My Solution
{
  const add = (a, b) => a == b;

  // console.log(add('1', 1));
  // console.log(add(1, '0'));
}

// I love you, a little , a lot, passionately ... not at all
//* My Solution
{
  const howMuchILoveYou = (numOfPetals) => {
    if (numOfPetals >= 1 && numOfPetals <= 6) {
      switch (numOfPetals) {
        case 1:
          return `I love you`;
        case 2:
          return `a little`;
        case 3:
          return `a lot`;
        case 4:
          return `passionately`;
        case 5:
          return `madly`;
        case 6:
          return `not at all`;
      }
    }

    if (numOfPetals > 6) {
      switch (numOfPetals % 6) {
        case 1:
          return `I love you`;
        case 2:
          return `a little`;
        case 3:
          return `a lot`;
        case 4:
          return `passionately`;
        case 5:
          return `madly`;
        case 0:
        case 6:
          return `not at all`;
      }
    }
  };

  // console.log(howMuchILoveYou(7)); // "I love you"
  // console.log(howMuchILoveYou(3)); // "a lot"
  // console.log(howMuchILoveYou(6)); // "not at all"
  // console.log(howMuchILoveYou(132)); // 'not at all'
}

// Filter out the geese
//* My Solution
{
  const gooseFilter = (birds) => {
    const geese = [
      'African',
      'Roman Tufted',
      'Toulouse',
      'Pilgrim',
      'Steinbacher',
    ];

    return birds.filter((bird) => !geese.includes(bird));
  };

  // console.log(
  //   gooseFilter([
  //     'Mallard',
  //     'Hook Bill',
  //     'African',
  //     'Crested',
  //     'Pilgrim',
  //     'Toulouse',
  //     'Blue Swedish',
  //   ])
  // );

  // console.log(
  //   gooseFilter(['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested'])
  // );

  // console.log(
  //   gooseFilter([
  //     'African',
  //     'Roman Tufted',
  //     'Toulouse',
  //     'Pilgrim',
  //     'Steinbacher',
  //   ])
  // );
}

// Calculate Meal Total
//* My Solution
{
  const calculate_total = (subtotal, tax, tip) => {
    const taxes = subtotal * (tax / 100);
    const tips = subtotal * (tip / 100);
    const total = (subtotal + taxes + tips).toFixed(2);
    return Number.parseFloat(total);
  };

  // console.log(calculate_total(5, 5, 10));
  // console.log(calculate_total(36.97, 7, 15));
}

// Sort with a sorting array
//* My Solution
{
  const sort = (initialArray, sortingArray) => {
    const sortedArray = [];

    for (let i = 0; i < sortingArray.length; i++) {
      sortedArray[sortingArray[i]] = initialArray[i];
    }

    return sortedArray;
  };

  // console.log(sort(['x', 'y', 'z'], [1, 2, 0]));
  // console.log(sort(['z', 'x', 'y'], [0, 2, 1]));
}

// Pythagorean Triple
//* My Solution
{
  const isPythagoreanTriple = (integers) => {
    const [a, b, c] = integers.sort((a, b) => a - b);

    // a**2 + b**2 = c**2
    const isPossible = Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);

    return isPossible;
  };

  // console.log(isPythagoreanTriple([3, 4, 5]));
  // console.log(isPythagoreanTriple([3, 5, 9]));
  // console.log(isPythagoreanTriple([13, 12, 5]));
}

// 5 without numbers !!
//* My Solution
{
  const unusualFive = () => {
    return 'five!'.length;
  };

  // console.log(unusualFive());
}

// Count Odd Numbers below n
//* My Solution
{
  const oddCount = (n) => Math.floor(n / 2);

  // console.log(oddCount(15));
  // console.log(oddCount(15023));
}

// Do you speak "English"?
//* My Solution
{
  const spEng = (sentence) => {
    const matches = sentence.match(/English/gi) || [];
    const isSpeakEnglish = matches.length > 0;

    return isSpeakEnglish;
  };

  // console.log(spEng('abcEnglishdef'));
}

// Geometry Basics: Distance between points in 2D
//* My Solution
{
  const distanceBetweenPoints = (a, b) => {
    const dx = b.x - a.x; // Difference in x-coordinates
    const dy = b.y - a.y; // Difference in y-coordinates

    return Math.sqrt(dx * dx + dy * dy); // Distance formula
  };

  // Example usage:
  const pointA = { x: 1, y: 2 };
  const pointB = { x: 4, y: 6 };

  // console.log(distanceBetweenPoints(pointA, pointB)); // 5
}

// Find out whether the shape is a cube
//* My Solution
{
  const cubeChecker = (volume, side) => {
    if (volume <= 0 || side <= 0) return false;

    return volume === side * side * side ? true : false;
  };

  // console.log(cubeChecker(8, 3));
  // console.log(cubeChecker(8, 2));
  // console.log(cubeChecker(0, 0));
}

// Difference of Volumes of Cuboids
//* My Solution
{
  const findDifference = (a, b) =>
    Math.abs(
      a.reduce((acc, curr) => acc * curr, 1) -
        b.reduce((acc, curr) => acc * curr, 1)
    );

  // console.log(findDifference([2, 2, 3], [5, 4, 1]));
}

// Find Multiples of a Number
//* My Solution
{
  const findMultiples = (integer, limit) => {
    const array = [];
    let i = integer; // loop variable

    while (i <= limit) {
      array.push(i);
      i += integer; // increment
    }

    return array;
  };

  // console.log(findMultiples(5, 25));
  // console.log(findMultiples(4, 27));
}

// Invert values
//* My Solution
{
  const invert = (array) =>
    array.length > 0 ? array.map((element) => element * -1) : [];

  // console.log(invert([1, 2, 3, 4, 5]));
  // console.log(invert([1, -2, 3, -4, 5]));
  // console.log(invert([]));
}

// Merge two sorted arrays into one
//* My Solution
{
  const mergeArrays = (arr1, arr2) => {
    if (arr1.length === 0 && arr2.length === 0) return [];

    // Merge the two arrays
    const mergedArray = [...arr1, ...arr2];

    // Use Set to remove duplicates
    const uniqueArray = [...new Set(mergedArray)];

    // Sort the unique array
    uniqueArray.sort((a, b) => a - b);

    return uniqueArray;
  };

  // console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]));
  // console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
  // console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
}

// Merge two arrays
//* My Solution
{
  const mergeArrays = (a, b) => {
    const mergedArray = [];
    const maxArrayLength = Math.max(a.length, b.length);

    for (let i = 0; i < maxArrayLength; i++) {
      if (a[i]) mergedArray.push(a[i]);
      if (b[i]) mergedArray.push(b[i]);
    }

    return mergedArray;
  };

  // console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]));
  // console.log(mergeArrays([1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f']));
}

// Calculate Price Excluding VAT
//* My Solution
{
  const excludingVatPrice = (price) => {
    if (price === null) return -1;

    const vatRate = 0.15;
    const originalPrice = price / (1 + vatRate);

    return Number.parseFloat(originalPrice.toFixed(2));
  };

  // console.log(excludingVatPrice(230));
  // console.log(excludingVatPrice(123));
}

// Will there be enough space?
//* My Solution
{
  const enough = (cap, on, wait) => (cap >= on + wait ? 0 : wait - (cap - on));

  // console.log(enough(10, 5, 5));
  // console.log(enough(100, 60, 50));
}

// For Twins: 1. Types
//* My Solution
{
  const typeValidation = (variable, type) => typeof variable === type;

  // console.log(typeValidation(42, 'number'));
  // console.log(typeValidation('42', 'number'));
}

// For Twins: 2. Math operations
//* My Solution
{
  const iceBrickVolume = (radius, bottleLength, rimLength) => {
    const iceBrickHeight = bottleLength - rimLength;
    const iceBrickArea = 2 * radius * radius; // assume iceBreak as rectangular (length * width)
    return iceBrickArea * iceBrickHeight;
  };

  // console.log(iceBrickVolume(1, 10, 2)); // 16
  // console.log(iceBrickVolume(5, 30, 7)); // 1150
}

// Converter
//* My Solution
{
  class Converter {
    // Declare private fields
    #number;
    #unit;

    constructor(number, unit) {
      this.#number = number;
      this.#unit = unit;
    }

    // Getter for unit
    get unit() {
      return this.#unit;
    }

    // Getter for size
    get size() {
      return `${this.#number} ${this.#unit}`;
    }

    // Method to convert size to Bytes
    toB() {
      this.#convertTo('B');
    }

    // Method to convert size to Kilobytes
    toKB() {
      this.#convertTo('KB');
    }

    // Method to convert size to Megabytes
    toMB() {
      this.#convertTo('MB');
    }

    // Method to convert size to Gigabytes
    toGB() {
      this.#convertTo('GB');
    }

    // Method to convert size to Terabytes
    toTB() {
      this.#convertTo('TB');
    }

    // Private method to handle conversions
    #convertTo(targetUnit) {
      const units = ['B', 'KB', 'MB', 'GB', 'TB'];
      const conversionRates = [
        1,
        1024,
        1024 * 1024,
        1024 * 1024 * 1024,
        1024 * 1024 * 1024 * 1024,
      ];

      // Find the index of the current unit and the target unit
      const currentIndex = units.indexOf(this.#unit);
      const targetIndex = units.indexOf(targetUnit);

      console.log({ currentIndex, targetIndex });

      // Convert the size to bytes first
      const sizeInBytes = this.#number * conversionRates[currentIndex];

      // Convert bytes to the target unit
      const sizeInTargetUnit = sizeInBytes / conversionRates[targetIndex];

      // Round down to 3 decimal places
      this.#number = Math.floor(sizeInTargetUnit * 1000) / 1000;

      // Update the unit
      this.#unit = targetUnit;
    }
  }

  const file = new Converter(1, 'TB');
  // file.toMB();
  // console.log(file.unit); // 'MB'
  // console.log(file.size); // '1048576 MB'
}

// Convert to Binary
//* My Solution
{
  const toBinary = (n) => Number(n.toString(2));

  // console.log(toBinary(1));
  // console.log(toBinary(5));
  // console.log(toBinary(11));
}

// Convert Integer to Binary
//* My Solution
{
  const toBinary = (n) => {
    // For positive numbers or zero
    if (n >= 0) return n.toString(2);

    // For negative numbers, use two's complement (32-bit)
    return (n >>> 0).toString(2);
  };

  // console.log(toBinary(3));
  // console.log(toBinary(-3));
}

// Convert a Boolean to a String
//* My Solution
{
  const booleanToString = (b) => b.toString();

  // console.log(booleanToString(true));
  // console.log(booleanToString(false));
}

// Convert string to camel case
//* My Solution
{
  const toCamelCase = (str) => {
    return str
      .split(/[-_]/)
      .map((word, i) =>
        i === 0 ? word : `${word.at(0).toUpperCase()}${word.slice(1)}`
      )
      .join('');
  };

  // console.log(toCamelCase('the-stealth-warrior'));
  // console.log(toCamelCase('The_Stealth_Warrior'));
  // console.log(toCamelCase('The_Stealth-Warrior'));
}

// Pull your words together, man!
//* My Solution
{
  const sentencify = (words) => {
    const string = words
      .map((word, i) =>
        i === 0 ? `${word.at(0).toUpperCase()}${word?.slice(1)}` : word
      )
      .join(' ');

    return string + '.';
  };

  // console.log(sentencify(['i', 'am', 'an', 'AI']));
  // console.log(sentencify(['FIELDS', 'of', 'CORN', 'are', 'to', 'be', 'sown']));
  // console.log(sentencify(['this', 'is', 'a', 'sentence']));
  // console.log(sentencify(['yes']));
}

// Convert all the cases!
//* My Solution
{
  const changeCase = (identifier, targetCase) => {
    const caseTypes = ['snake', 'camel', 'kebab'];

    // Handle Edge Cases
    const containsDashAndUnderscore = (identifier) =>
      /[-]/.test(identifier) && /[_]/.test(identifier);

    const containsCapitalLetterAndUnderscore = (identifier) =>
      /[A-Z]/.test(identifier) && /_/.test(identifier);

    const containsCapitalLetterAndDash = (identifier) =>
      /[A-Z]/.test(identifier) && /-/.test(identifier);

    if (
      !caseTypes.includes(targetCase) ||
      containsDashAndUnderscore(identifier) ||
      containsCapitalLetterAndUnderscore(identifier) ||
      containsCapitalLetterAndDash(identifier)
    ) {
      return undefined;
    }
    if (identifier.length === 0) return '';

    // Split the string by camel case, dashes, or underscores
    const words = identifier.split(/(?=[A-Z])|[-_]/);

    if (targetCase === 'snake') return words.join('_').toLowerCase();

    if (targetCase === 'camel') {
      return words
        .map((word, i) =>
          i === 0
            ? `${word.at(0).toLowerCase()}${word.slice(1)}`
            : `${word.at(0).toUpperCase()}${word.slice(1)}`
        )
        .join('');
    }

    if (targetCase === 'kebab') return words.join('-').toLowerCase();
  };

  // console.log(changeCase('snakeCase', 'snake'));
  // console.log(changeCase('some-lisp-name', 'camel'));
  // console.log(changeCase('map_to_all', 'kebab'));
  // console.log(changeCase('doHTMLRequest', 'kebab'));

  // console.log(changeCase('snakeCamel_case', 'snake'));
  // console.log(changeCase('invalid-inPut_bad', 'kebab'));
  // console.log(changeCase('valid-input', 'huh???'));
  // console.log(changeCase('', 'camel'));
}

// Converting Measures
//* My Solution (NOT Completed Yet)
{
  const convertRecipe = (recipe) => {
    const array = recipe.split(' ');
  };

  // console.log(convertRecipe('2 tbsp of butter'));
  // //  "2 tbsp (30g) of butter"

  // console.log(convertRecipe('1/2 tbsp of oregano'));
  // // "1/2 tbsp (8g) of oregano"

  // console.log(convertRecipe('1/2 tsp of salt'));
  // "1/2 tsp (3g) of salt"

  // console.log(
  //   convertRecipe(
  //     'Add to the mixing bowl and coat well with 1 tbsp of olive oil & 1/2 tbsp of dried dill'
  //   )
  // );
  // "Add to the mixing bowl and coat well with 1 tbsp (15g) of olive oil & 1/2 tbsp (8g) of dried dill"
}

// Average Scores
//* My Solution
{
  const average = (scores) => {
    const sum = scores.reduce((acc, curr) => acc + curr, 0);
    return Math.round(sum / scores.length);
  };

  // console.log(average([49, 3, 5, 300, 7]));
}

// Calculate average
//* My Solution
{
  const findAverage = (array) => {
    if (array.length === 0) return 0;

    return array.reduce((acc, curr) => acc + curr, 0) / array.length;
  };

  // console.log(findAverage([1, 2, 3]));
  // console.log(findAverage([1, 2, 3, 4]));
}

// Basic JS - Calculating averages
//* My Solution
{
  const calculator = {
    average(...args) {
      if (args.length === 0) return 0;

      return args.reduce((acc, curr) => acc + curr, 0) / args.length;
    },
  };

  // console.log(calculator.average());
  // console.log(calculator.average(3, 4, 5));
}

// Basic Calculator
//* My Solution
{
  const calculate = (num1, operation, num2) => {
    if (num2 === 0 && operation === '/') return null;

    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return null;
    }
  };

  // console.log(calculate(2, '+', 4));
  // console.log(calculate(6, '-', 1.5));
  // console.log(calculate(-4, '*', 8));
  // console.log(calculate(49, '/', -7));
  // console.log(calculate(8, 'm', 2));
  // console.log(calculate(8, 'm', 0));
}

// Basic JS - Building a calculator
//* My Solution
{
  const Calculator = {
    add(num1, num2) {
      return num1 + num2;
    },

    subtract(num1, num2) {
      return num1 - num2;
    },

    multiply(num1, num2) {
      return num1 * num2;
    },

    divide(num1, num2) {
      if (num2 === 0) return false;
      return num1 / num2;
    },
  };

  // console.log(Calculator.add(2, 6));
  // console.log(Calculator.subtract(5, 3));
  // console.log(Calculator.multiply(9, 2));
  // console.log(Calculator.divide(12, 4));
  // console.log(Calculator.divide(33, 0));
}

// Basics 03: Strings, Numbers and Calculation
//* My Solution
{
  const calculateString = (st) => {
    const findNumbersAndOperators = (str) =>
      str.match(/[0-9]+|[.+\-*/]/g) || [];

    const findOperators = (str) => str.match(/[*/+\-]/g) || [];

    const result = findNumbersAndOperators(st);
    const operator = findOperators(st)[0];

    const formattedArray = result.join('').split(operator);
    const num1 = Number(formattedArray[0]);
    const num2 = Number(formattedArray[1]);

    // console.log({ operator, formattedArray, num1, num2 });

    switch (operator) {
      case '+':
        return Math.round(num1 + num2).toString();
      case '-':
        return Math.round(num1 - num2).toString();
      case '*':
        return Math.round(num1 * num2).toString();
      case '/':
        return Math.round(num1 / num2).toString();
    }
  };

  // console.log(calculateString('gdfgdf234dg54gf*23oP42'));
  // console.log(calculateString('a1a2b3c.c0c/a1a0b.cc00c'));
}

// Write shortest function to calculate Average number of Array
//* My Solution
{
  const avg = (a) => a.reduce((x, y) => x + y, 0) / a.length;

  // console.log(avg([0, 1, 2, 3, 4]));
}

// Mad Mathematician's Calculator (Basic Version)
//* My Solution (NOT Completed Yet)
{
  const calc = (a, b, operator) => {
    const operatorCharCode = operator.charCodeAt(0);
    // console.log({ [operator]: operatorCharCode });

    switch (operatorCharCode) {
      case 43:
        return Number((a + b).toFixed(2));
      case 45:
        return Number((a - b).toFixed(2));
      case 42:
        return Number((a * b).toFixed(2));
      case 47:
        if (b === 0) return NaN;
        return Number((a.toString() / b.toString()).toString().slice(0, 4));
      case 37:
        if (b === 0) return NaN;
        return Number((a % b).toFixed(2));
    }
  };

  // console.log(calc(0, 12, '+'));
  // console.log(calc(54, 20, '-'));
  // console.log(calc(4, 5, '*'));
  // console.log(calc(5, 3, '/'));
  // console.log(calc(10, 5, '%'));
  // console.log(calc(5, 0, '%'));
}

// Slope of a Line
//* My Solution
{
  const getSlope = (p1, p2) => {
    const [x1, y1] = p1;
    const [x2, y2] = p2;

    // Check if the line is vertical
    if (x1 === x2) return null;

    // Check if same point is given twice
    if (x1 === x2 && y1 === y2) return null;

    // Calculate the slope
    return (y2 - y1) / (x2 - x1);
  };

  // console.log(getSlope([1, 1], [1, 2]));
  // console.log(getSlope([-5, 9], [-5, 9]));
  // console.log(getSlope([1, 8], [2, 9]));
}

// String basics
//* My Solution
{
  const getUsersIds = (str) => {
    return str
      .split(',')
      .map((word) =>
        word.replace(/#/g, '').replace('uid', '').trim().toLowerCase()
      );
  };

  // console.log(getUsersIds('   uidabc  '));
  // console.log(getUsersIds('uidone, uidtwo'));
  // console.log(getUsersIds('  uidin name whitespace'));
  // console.log(getUsersIds('uid##doublehashtag'));
  // console.log(getUsersIds('uid12 ab, uid#, uidMiXeDcHaRs'));
}

// IndexOf Array in Array
//* My Solution
{
  const searchArray = (arrayToSearch, query) => {
    // Handle edge case
    if (!Array.isArray(query) || (Array.isArray(query) && query.length !== 2)) {
      throw new Error('Query should be an array of length two.');
    }

    let indexOf = -1;

    for (let i = 0; i < arrayToSearch.length; i++) {
      // Handle edge cases
      if (!Array.isArray(arrayToSearch[i]))
        throw new Error('Each sub-array should be an array.');

      if (arrayToSearch[i].length !== 2)
        throw new Error(
          'Each sub-array in the two-dimensional array should be of length two.'
        );

      if (
        arrayToSearch[i][0] === query[0] &&
        arrayToSearch[i][1] === query[1]
      ) {
        indexOf = i; // Update indexOf when a match is found
        break; // Exit the loop once the first match is found
      }
    }

    return indexOf;
  };

  const bigArray = [
    [2, 3],
    [7, 2],
    [9, 20],
    [1, 2],
    [7, 2],
    [45, 4],
    [7, 87],
    [4, 5],
    [2, 7],
    [6, 32],
  ];

  // let searchFor = [9, 20];
  // console.log(searchArray(bigArray, searchFor)); // 2

  // searchFor = [1, 12];
  // console.log(searchArray(bigArray, searchFor)); // -1

  // searchFor = [7, 2];
  // console.log(searchArray(bigArray, searchFor)); // 1
}
