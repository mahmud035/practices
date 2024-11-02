'use strict';

// Training JS #10: loop statement --for
//* My Solution
{
  const pickIt = (arr) => {
    const odd = [];
    const even = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) even.push(arr[i]);
      else odd.push(arr[i]);
    }

    return [odd, even];
  };

  // console.log(pickIt([1, 2, 3]));
}

// Training JS #11: loop statement --break,continue
//* My Solution
{
  const grabDoll = (dolls) => {
    const bag = [];

    for (let i = 0; i < dolls.length; i++) {
      if (bag.length === 3) break;

      const element = dolls[i];

      if (element === 'Hello Kitty' || element === 'Barbie doll')
        bag.push(element);
      else continue;
    }

    return bag;
  };

  // console.log(
  //   grabDoll([
  //     'Mickey Mouse',
  //     'Barbie doll',
  //     'Hello Kitty',
  //     'Hello Kitty',
  //     'Hello Kitty',
  //     'Snow white',
  //   ])
  // );
}

// Training JS #12: loop statement --for..in and for..of
//* My Solution
{
  function giveMeFive(obj) {
    const arr = [];

    for (const key in obj) {
      if (key.length === 5) arr.push(key);
      if (obj[key].length === 5) arr.push(obj[key]);
    }

    return arr;
  }

  // console.log(giveMeFive({ Pears: 'than', apple: 'sweet' }));
}

// Training JS #13: Number object and its properties
//* My Solution
{
  const whatNumberIsIt = (n) => {
    if (Number.MAX_VALUE === n) return 'Input number is Number.MAX_VALUE';

    if (Number.MIN_VALUE === n) return 'Input number is Number.MIN_VALUE';

    if (Number.isNaN(n)) return 'Input number is Number.NaN';

    if (Number.NEGATIVE_INFINITY === n)
      return 'Input number is Number.NEGATIVE_INFINITY';

    if (Number.POSITIVE_INFINITY === n)
      return 'Input number is Number.POSITIVE_INFINITY';

    return `Input number is ${n}`;
  };

  // console.log(whatNumberIsIt(1 / 0));
  // console.log(whatNumberIsIt(100));
}

// Training JS #14: Methods of Number object--toString() and toLocaleString()
//* My Solution
{
  const colorOf = (r, g, b) => {
    const rr = r.toString(16).padStart(2, `0`);
    const gg = g.toString(16).padStart(2, `0`);
    const bb = b.toString(16).padStart(2, `0`);

    return `#${rr}${gg}${bb}`;
  };

  // console.log(colorOf(255, 0, 0));
  // console.log(colorOf(0, 111, 0));
  // console.log(colorOf(1, 2, 3));
}

// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
//* My Solution
{
  const howManySmaller = (arr, n) => {
    return arr.map((num) => +num.toFixed(2)).filter((num) => num < n).length;
  };

  // console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));
  // console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19));
}

// Training JS #16: Methods of String object--slice(), substring() and substr()
//* My Solution
{
  const cutIt = (arr) => {
    let shortestStrLength = arr[0].length;

    for (const str of arr) {
      if (str.length < shortestStrLength) shortestStrLength = str.length;
    }

    return arr.map((str) => str.slice(0, shortestStrLength));
  };

  // console.log(cutIt(['ab', 'cde', 'fgh']));
}

// Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
//* My Solution
{
  const firstToLast = (str, char) => {
    const firstPosition = str.indexOf(char);
    const lastPosition = str.lastIndexOf(char);

    if (firstPosition === -1) return -1; // 'char' not found
    if (firstPosition === lastPosition) return 0; // 'char' found only one time.

    return lastPosition - firstPosition;
  };

  // console.log(firstToLast('ababc', 'a'));
  // console.log(firstToLast('ababc', 'c'));
  // console.log(firstToLast('ababc', 'd'));
}

// Training JS #18: Methods of String object--concat() split() and its good friend join()
//* My Solution
{
  const splitAndMerge = (string, separator) => {
    const result = string
      .split(' ')
      .map((word) => word.split('').join(separator))
      .join(' ');

    return result;
  };

  // console.log(splitAndMerge('My name is John', ' '));
  // console.log(splitAndMerge('My name is John', '-'));
  // console.log(splitAndMerge('Hello World!', '.'));
}

// Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
//* My Solution
{
  const alienLanguage = (str) => {
    const upperCaseStr = str.toUpperCase();

    return upperCaseStr
      .split(' ')
      .map((word) => word.slice(0, -1) + word.slice(-1).toLowerCase())
      .join(' ');
  };

  // console.log(alienLanguage('My name is John'));
}

// Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
//* My Solution (Not Completed Yet)
{
  // console.log(String.fromCharCode(97)); // a
  // console.log(String.fromCharCode(98)); // b
}

// Training JS #21: Methods of String object--trim() and the string template
//* My Solution
{
  const fiveLine = (s) => {
    const str = s.trim();
    return `${str}\n${str}${str}\n${str}${str}${str}\n${str}${str}${str}${str}\n${str}${str}${str}${str}${str}`;
  };

  // console.log(fiveLine('  a'));
  // console.log(fiveLine('\txy \n'));
}

// Training Time
//* My Solution
{
  let a = 1;
  let b = 2;

  // Swapping
  [a, b] = [b, a];

  // console.log(a); // 2
  // console.log(b); // 1

  const shuffleIt = (...args) => {
    const [arr, ...rest] = args;

    for (let i = 0; i < rest.length; i++) {
      const element = rest[i];

      for (let j = 0; j < element.length - 1; j++) {
        const firstIndex = element[0];
        const secondIndex = element[1];
        const firstValue = arr[firstIndex];
        const secondValue = arr[secondIndex];

        // Swapping
        arr[firstIndex] = secondValue;
        arr[secondIndex] = firstValue;
      }

      // console.log(`After ${i + 1} swap:`, arr);
    }

    return arr;
  };

  // console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2]));
  // console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4]));
  // console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3]));
  // console.log(
  //   shuffleIt([41, 15, 90, 52, 28, 67, 56, 75, 26], [5, 6], [0, 6], [5, 0])
  // );
}

// Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()
//* My Solution
{
  const infiniteLoop = (arr, d, n) => {
    let [firstArr, secondArr, thirdArr] = arr;
    let flatArr = arr.flat();
    let removedEls = [];
    let newArr = [];

    if (d === 'left') {
      removedEls = flatArr.splice(0, n);
      newArr = [...flatArr, ...removedEls];
    }

    if (d === 'right') {
      removedEls = flatArr.splice(flatArr.length - n, n);
      newArr = [...removedEls, ...flatArr];
    }

    firstArr = newArr.slice(0, firstArr.length);
    secondArr = newArr.slice(
      firstArr.length,
      firstArr.length + secondArr.length
    );
    thirdArr = newArr.slice(firstArr.length + secondArr.length);

    return [firstArr, secondArr, thirdArr];
  };

  // console.log(
  //   infiniteLoop(
  //     [
  //       [1, 2, 3],
  //       [4, 5, 6],
  //       [7, 8, 9],
  //     ],
  //     'left',
  //     1
  //   )
  // );
  // console.log(
  //   infiniteLoop(
  //     [
  //       [1, 2, 3],
  //       [4, 5, 6],
  //       [7, 8, 9],
  //     ],
  //     'right',
  //     1
  //   )
  // );
  // console.log(
  //   infiniteLoop(
  //     [
  //       [1, 2],
  //       [3, 4, 5, 6],
  //       [7, 8, 9, 10],
  //     ],
  //     'left',
  //     2
  //   )
  // );
}

// Training JS #24: methods of arrayObject---splice() and slice()
//* My Solution
{
  const threeInOne = (arr) => {
    const size = arr.length / 3;
    const result = [];

    // Create sub-array of the desired size
    for (let i = 0; i < size; i++) {
      result.push(arr.slice(i * 3, i * 3 + 3));
    }

    // Calculate the sum of each sub-array
    return result.map((subArr) => {
      return subArr.reduce((acc, curr) => acc + curr, 0);
    });
  };

  // console.log(threeInOne([1, 2, 3]));
  // console.log(threeInOne([1, 2, 3, 4, 5, 6]));
  // console.log(threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9]));
}

// Training JS #25: methods of arrayObject---reverse() and sort()
//* My Solution
{
  const sortIt = (arr) => {
    // Count the frequency of each element
    const frequencyMap = arr.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    }, {});

    console.log(frequencyMap);

    // Sort the array based on the specified conditions
    return arr.slice().sort((a, b) => {
      const freqA = frequencyMap[a];
      const freqB = frequencyMap[b];

      if (freqA !== freqB) return freqA - freqB; // Sort by frequency (ascending)

      return b - a; // Sort by value (descending)
    });
  };

  // console.log(sortIt([1, 1, 1, 2, 2, 3]));
  // console.log(sortIt([1, 1, 1, 2, 2, 2, 3, 3, 3]));
  // console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6]));
}

// Training JS #26: methods of arrayObject---map()
//* My Solution
{
  const isolateIt = (arr) => {
    return arr.map((str) => {
      // string length is an even number
      if (str.length % 2 === 0) {
        return `${str.slice(0, str.length / 2)}|${str.slice(str.length / 2)}`;
      }

      // string length is an odd number
      return `${str.slice(0, str.length / 2)}|${str.slice(str.length / 2 + 1)}`;
    });
  };

  // console.log(isolateIt(['abcd', 'efgh']));
  // console.log(isolateIt(['abcde', 'fghij']));
  // console.log(isolateIt(['1234', '56789']));
}

// Training JS #27: methods of arrayObject---filter()
//* My Solution
{
  const countGrade = (scores) => {
    // Count the frequency of score
    const frequencyMap = scores.reduce((acc, score) => {
      if (score === 100) acc['S'] = (acc['S'] || 0) + 1;
      if (score < 100 && score >= 90) acc['A'] = (acc['A'] || 0) + 1;
      if (score < 90 && score >= 80) acc['B'] = (acc['B'] || 0) + 1;
      if (score < 80 && score >= 60) acc['C'] = (acc['C'] || 0) + 1;
      if (score < 60 && score >= 0) acc['D'] = (acc['D'] || 0) + 1;
      if (score === -1) acc['X'] = (acc['X'] || 0) + 1;

      return acc;
    }, {});

    // return the grade distribution of the scores
    return {
      S: frequencyMap['S'] || 0,
      A: frequencyMap['A'] || 0,
      B: frequencyMap['B'] || 0,
      C: frequencyMap['C'] || 0,
      D: frequencyMap['D'] || 0,
      X: frequencyMap['X'] || 0,
    };
  };

  // console.log(countGrade([50, 60, 70, 80, 90, 100]));
  // console.log(countGrade([65, 75, , 85, 85, 95, 100, 100]));
  // console.log(countGrade([-1, -1, -1, -1, -1, -1]));
}

// Training JS #28: methods of arrayObject---every() and some()
//* My Solution
{
  const mirrorImage = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      let a = arr[i].toString();
      let b = arr[i + 1].toString();

      // Check if b is the reverse of a
      if (a === b.split('').reverse().join('')) {
        return [arr[i], arr[i + 1]];
      }
    }

    // If no mirror-image pair is found, return [-1, -1]
    return [-1, -1];
  };

  // console.log(mirrorImage([11, 22, 33, 33, 22, 11]));
  // console.log(mirrorImage([454, 86, 57, 75, 16, 88]));
  // console.log(mirrorImage([454, 0, 57, 0, 16, 88]));
}

// Training JS #29: methods of arrayObject---concat() and join()
//* My Solution
{
  const bigToSmall = (arr) =>
    arr
      .flat()
      .sort((a, b) => b - a)
      .join('>');

  // console.log(
  //   bigToSmall([
  //     [1, 2],
  //     [3, 4],
  //     [5, 6],
  //   ])
  // );
  // console.log(
  //   bigToSmall([
  //     [1, 3, 5],
  //     [2, 4, 6],
  //   ])
  // );
  // console.log(bigToSmall([[1, 1], [1], [1, 1]]));
}

// Training JS #30: methods of arrayObject---reduce() and reduceRight()
//* My Solution
{
  const tailAndHead = (array) => {
    const result = array
      .reduce((acc, _, i, arr) => {
        const tailOfElement = +arr[i].toString().at(-1);
        const headOfNextElement = +arr[i + 1]?.toString()?.at(0);

        acc.push(tailOfElement + headOfNextElement);
        return acc;
      }, [])
      .slice(0, -1)
      .reduce((acc, curr) => acc * curr, 1);

    return result;
  };

  // console.log(tailAndHead([1, 2, 3, 4, 5]));
  // console.log(tailAndHead([111, 2345, 66, 78, 900]));
  // console.log(tailAndHead([35456, 782, 569, 2454, 875]));
}

// Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
//* My Solution
{
  const blackAndWhite = (arr) => {
    if (!Array.isArray(arr)) return "It's a fake array";

    return arr.includes(5) && arr.includes(13)
      ? "It's a black array"
      : "It's a white array";
  };

  // console.log(blackAndWhite(5, 13));
  // console.log(blackAndWhite([5, 13]));
  // console.log(blackAndWhite([5, 12]));
}

// Training JS #32: methods of Math---round() ceil() and floor()
//* My Solution
{
  const roundIt = (n) => {
    const [left, right] = `${n}`.split('.');

    return right.length > left.length
      ? Math.ceil(n)
      : left.length > right.length
      ? Math.floor(n)
      : Math.round(n);
  };

  // console.log(roundIt(3.45));
  // console.log(roundIt(34.5));
  // console.log(roundIt(34.56));
}

// Training JS #33: methods of Math---max() min() and abs()
//* My Solution
{
  const maxMin = (arr1, arr2) => {
    const differences = arr1.reduce((acc, _, i, arr) => {
      acc[i] = Math.abs(arr[i] - arr2[i]);
      return acc;
    }, []);

    const maxValue = Math.max(...differences);
    const minValue = Math.min(...differences);

    return [maxValue, minValue];
  };

  // console.log(maxMin([1, 3, 5], [9, 8, 7]));
  // console.log(maxMin([1, 10, 100, 1000], [0, 0, 0, 0]));
  // console.log(maxMin([10, 20, 30, 40], [111, 11, 1, -111]));
}

// Training JS #34: methods of Math---pow() sqrt() and cbrt()
//* My Solution
{
  const cutCube = (volume, n) => {
    // Check if the cube root of n is an integer (i.e., n is a perfect cube)
    const cubeRootN = Math.cbrt(n);

    if (!Number.isInteger(cubeRootN)) {
      return false; // n is not a perfect cube
    }

    // Check if the cube root of the volume is an integer (i.e., volume is a perfect cube)
    const cubeRootVolume = Math.cbrt(volume);

    if (!Number.isInteger(cubeRootVolume)) {
      return false; // volume is not a perfect cube
    }

    // Check if the small cube's side length is an integer
    const smallCubeSide = cubeRootVolume / cubeRootN;
    return Number.isInteger(smallCubeSide);
  };

  // console.log(cutCube(27, 27));
  // console.log(cutCube(512, 8));
  // console.log(cutCube(256, 8));
}

// Even or Odd
//* My Solution
{
  const evenOrOdd = (number) => (number % 2 === 0 ? 'Even' : 'Odd');

  // console.log(evenOrOdd(2));
  // console.log(evenOrOdd(7));
  // console.log(evenOrOdd(-42));
  // console.log(evenOrOdd(0));
}

// Disemvowel Trolls
//* My Solution
{
  const disemvowel = (str) => str.replace(/[aeiouAEIOU]/g, '');

  // console.log(disemvowel('This website is for losers LOL!'));
}

// Square Every Digit
//* My Solution
{
  const squareDigits = (num) =>
    +num
      .toString()
      .split('')
      .map((num) => Math.pow(+num, 2))
      .join('');

  // console.log(squareDigits(3212)); // 9414
}

// Who likes it?
//* My Solution
{
  const likes = (a) => {
    switch (a.length) {
      case 0:
        return 'no one likes this';
      case 1:
        return `${a[0]} likes this`;
      case 2:
        return `${a[0]} and ${a[1]} like this`;
      case 3:
        return `${a[0]}, ${a[1]} and ${a[2]} like this`;
      default:
        return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
    }
  };

  // console.log(likes([]));
  // console.log(likes(['Peter']));
  // console.log(likes(['Jacob', 'Alex']));
  // console.log(likes(['Max', 'John', 'Mark']));
  // console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
}

// Find the odd int
//* My Solution
{
  const findOdd = (nums) => {
    const counts = nums.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    }, {});

    for (const [key, value] of Object.entries(counts)) {
      if (value % 2 === 1) return +key;
    }
  };

  // console.log(findOdd([7])); // 7
  // console.log(findOdd([0])); // 0
  // console.log(findOdd([1, 1, 2])); // 2
  // console.log(findOdd([0, 1, 0, 1, 0])); // 0;
  // console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
}

// Descending Order
//* My Solution
{
  const descendingOrder = (num) =>
    +num
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('');

  // console.log(descendingOrder(1021)); // 2110
  // console.log(descendingOrder(145263)); // 654321
}

// Return Negative
//* My Solution
{
  const makeNegative = (num) => {
    if (num < 0) return num;
    if (num === 0) return 0;
    return -num;
  };

  // console.log(makeNegative(1)); // -1
  // console.log(makeNegative(-5)); // -5
  // console.log(makeNegative(0)); // 0
  // console.log(makeNegative(0.12)); // -0.12
}

// Sum of positive
//* My Solution
{
  const positiveSum = (arr) => {
    if (arr.length === 0) return 0;

    return arr.filter((num) => num > 0).reduce((acc, curr) => acc + curr, 0);
  };

  // console.log(positiveSum([1, -4, 7, 12])); // 20
}

// Reversed Strings
//* My Solution
{
  const solution = (str) => str.split('').reverse().join('');

  // console.log(solution('world'));
  // console.log(solution('word'));
}

// List Filtering
//* My Solution
{
  const filterList = (list) => list.filter((item) => typeof item === 'number');

  // console.log(filterList([1, 2, 'a', 'b']));
}

// Get the Middle Character
//* My Solution
{
  const getMiddle = (str) => {
    const isStrLengthOdd = str.length % 2 === 1;

    return isStrLengthOdd
      ? str.at(Math.floor(str.length / 2))
      : `${str.at(str.length / 2 - 1)}${str.at(str.length / 2)}`;
  };

  // console.log(getMiddle('test')); // 'es'
  // console.log(getMiddle('testing')); // 't'
}

// You're a square!
//* My Solution
{
  const isSquare = (num) =>
    Math.floor(Math.sqrt(num)) * Math.floor(Math.sqrt(num)) === num;

  // console.log(isSquare(3)); // false
  // console.log(isSquare(25)); // true
  // console.log(isSquare(88)); // false
}

// Convert a Number to a String!
//* My Solution
{
  const numberToString = (num) => num.toString();

  // console.log(numberToString(123));
}

// Convert a String to a Number!
//* My Solution
{
  const stringToNumber = (str) => +str;

  // console.log(stringToNumber('1234'));
}

// Convert boolean values to strings 'Yes' or 'No'.
//* My Solution
{
  const boolToWord = (bool) => (bool === true ? 'Yes' : 'No');

  // console.log(boolToWord(true));
  // console.log(boolToWord(false));
}

// Isograms
//* My Solution
{
  const isIsogram = (str) => {
    if (str.length === 0) return true;

    const counts = str
      .toLowerCase()
      .split('')
      .reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});

    for (const value of Object.values(counts)) {
      if (value > 1) return false;
    }

    return true;
  };

  // console.log(isIsogram('Dermatoglyphics')); // true
  // console.log(isIsogram('isogram')); // true
  // console.log(isIsogram('aba')); // false
  // console.log(isIsogram('moOse')); // false
  // console.log(isIsogram('isIsogram')); // false
  // console.log(isIsogram('')); // true
}

// Counting Duplicates
//* My Solution
{
  const duplicateCount = (text) => {
    let count = 0;

    const counts = text
      .toLowerCase()
      .split('')
      .reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});

    for (const value of Object.values(counts)) {
      if (value > 1) count++;
    }

    return count;
  };

  // console.log(duplicateCount('')); // 0
  // console.log(duplicateCount('abcde')); // 0
  // console.log(duplicateCount('aabbcde')); // 2
  // console.log(duplicateCount('aabBcde')); // 2
}

// Exes and Ohs
//* My Solution
{
  const XO = (str) => {
    const counts = str
      .toLowerCase()
      .split('')
      .reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});

    const numOfX = counts['x'];
    const numOfO = counts['o'];

    return numOfX === numOfO ? true : false;
  };

  // console.log(XO('ooxx')); // true
  // console.log(XO('xooxx')); // false
  // console.log(XO('ooxXm')); // true
  // console.log(XO('zpzpzpp')); // true; when no 'x' and 'o' is present should return true
  // console.log(XO('zzoo')); // false
}

// Duplicate Encoder
//* My Solution
{
  const duplicateEncode = (word) => {
    const wordLower = word.toLowerCase();
    let newStr = '';

    const counts = wordLower.split('').reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

    const hasMultipleTimes = (key) => (counts[key] > 1 ? true : false);

    for (const char of wordLower) {
      hasMultipleTimes(char) ? (newStr += ')') : (newStr += '(');
    }

    return newStr;
  };

  // console.log(duplicateEncode('din')); // "((("
  // console.log(duplicateEncode('recede')); // "()()()"
  // console.log(duplicateEncode('Success')); // ")())())"
  // console.log(duplicateEncode('(( @')); // "))(("
}

// Multiples of 3 or 5
//* My Solution
{
  const solution = (num) => {
    if (num < 0) return 0;

    const result = Array.from({ length: num - 1 }, (_, i) => i + 1)
      .filter((n) => n % 3 === 0 || n % 5 === 0 || (n % 3 === 0 && n % 5 === 0))
      .reduce((acc, curr) => acc + curr, 0);

    return result;
  };

  // console.log(solution(10)); // 23
}

// Array.diff
//* My Solution
{
  const arrayDiff = (a, b) => a.filter((n) => !b.includes(n));

  // console.log(arrayDiff([1, 2], [1])); // [2]
  // console.log(arrayDiff([1, 2, 2], [1])); // [2, 2]
}

// Sum of Digits / Digital Root
//* My Solution
{
  const digitalRoot = (n) => {
    const getSum = (num) => {
      return num
        .toString()
        .split('')
        .map((n) => +n)
        .reduce((acc, curr) => acc + curr, 0);
    };

    let sum = getSum(n);
    while (sum >= 10) {
      sum = getSum(sum);
    }

    return sum;
  };

  // console.log(digitalRoot(16)); // 7
  // console.log(digitalRoot(942)); // 6
  // console.log(digitalRoot(132189)); // 6
  // console.log(digitalRoot(493193)); // 2
}

// Create Phone Number
//* My Solution
{
  const createPhoneNumber = (nums) =>
    `(${nums.slice(0, 3).join('')}) ${nums.slice(3, 6).join('')}-${nums
      .slice(6)
      .join('')}`;

  // console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
  // console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // (111) 111-1111
  // console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
}

// Bit Counting
//* My Solution
{
  const countBits = (num) => {
    if (num === 0) return 0;
    const binary = num.toString(2);

    const counts = binary.split('').reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

    return counts['1'];
  };

  // console.log(countBits(0)); // 0
  // console.log(countBits(4)); // 1
  // console.log(countBits(7)); // 3
  // console.log(countBits(10)); // 2
}

// Mumbling
//* My Solution
{
  const accum = (str) => {
    return str
      .toLowerCase()
      .split('')
      .map((char, i) => char.repeat(i + 1))
      .map((word) => `${word.at(0).toUpperCase()}${word.slice(1)}`)
      .join('-');
  };

  // console.log(accum('abcd')); // "A-Bb-Ccc-Dddd"
  // console.log(accum('cwAt')); // "C-Ww-Aaa-Tttt"
}

// Find The Parity Outlier
//* My Solution
{
  const findOutlier = (nums) => {
    const odds = nums.filter((num) => Math.abs(num) % 2 === 1);
    const evens = nums.filter((num) => Math.abs(num) % 2 === 0);

    return odds.length === 1 ? odds[0] : evens[0];
  };

  // console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // 11
  // console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160
}

// Opposite number
//* My Solution
{
  const opposite = (number) =>
    number === 0 ? 0 : number > 0 ? -number : Math.abs(number);

  // console.log(opposite(0)); // 0
  // console.log(opposite(1)); // -1
  // console.log(opposite(-34)); // 34
}

// Square(n) Sum
//* My Solution
{
  const squareSum = (nums) =>
    nums.map((num) => Math.pow(num, 2)).reduce((acc, curr) => acc + curr, 0);

  // console.log(squareSum([1, 2, 2]));
}

// Remove First and Last Character
//* My Solution
{
  const removeChar = (str) => str.slice(1, -1);

  // console.log(removeChar('country')); // 'ountr'
}

// Replace With Alphabet Position
//* My Solution
{
  const alphabetPosition = (text) => {
    const validText = text.toLowerCase().match(/[a-z]/g) || [];

    return validText
      .map((char) => char.charCodeAt(0) - 96)
      .filter((num) => num > 0)
      .join(' ');
  };

  // console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

  // console.log(alphabetPosition('w-{3*f:%')); // '23 6'
}

// Persistent Bugger.
//* My Solution
{
  const persistence = (num) => {
    if (num < 10) return 0;

    const getMultiply = (num) => {
      return num
        .toString()
        .split('')
        .map((n) => +n)
        .reduce((acc, curr) => acc * curr, 1);
    };

    let multiply = getMultiply(num);
    let count = 1;

    while (multiply >= 10) {
      multiply = getMultiply(multiply);
      count++;
    }

    return count;
  };

  // console.log(persistence(39)); // 3
  // console.log(persistence(999)); // 4
  // console.log(persistence(4)); // 0
}

// Shortest Word
//* My Solution
{
  const findShort = (str) =>
    str
      .split(' ')
      .sort((a, b) => a.length - b.length)
      .at(0).length;

  // console.log(findShort("Let's travel abroad shall we")); // 2
}

// Credit Card Mask
//* My Solution
{
  const maskify = (cc) => {
    if (cc.length <= 4) return cc;
    const lastFourChars = cc.slice(-4);
    return lastFourChars.padStart(cc.length, '#');
  };

  // console.log(maskify('4556364607935616')); // "############5616"
  // console.log(maskify('1')); // '1"
  // console.log(maskify('')); // ''
  // console.log(maskify('Skippy')); // '##ippy'
}

// Grasshopper - Summation;
//* My Solution
{
  const summation = (num) => (num * (num + 1)) / 2;

  // console.log(summation(2)); // 3
}

// Find the smallest integer in the array
//* My Solution
{
  const findSmallestInt = (arr) => Math.min(...arr);

  // console.log(findSmallestInt([34, 15, 88, 2])); // 2
}

// Sum of two lowest positive integers
//* My Solution
{
  const sumTwoSmallestNumbers = (nums) =>
    nums
      .sort((a, b) => a - b)
      .slice(0, 2)
      .reduce((acc, curr) => acc + curr, 0);

  // console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // 7
}

// Counting sheep...
//* My Solution
{
  const countSheeps = (sheep) => sheep.filter((s) => s).length;

  // console.log(countSheeps([undefined, null, false, true])); // 1
}

// Beginner Series #3 Sum of Numbers
//* My Solution
{
  const getSum = (a, b) => {
    if (a === b) return a;

    const smallNumber = Math.min(a, b);
    const largeNumber = Math.max(a, b);
    let sum = 0;

    for (let i = smallNumber; i <= largeNumber; i++) {
      sum += i;
    }
    return sum;
  };

  // console.log(getSum(1, 2)); // 3
  // console.log(getSum(1, 1)); // 1 (1 since both are same)
  // console.log(getSum(-1, 2)); // 2 (-1 + 0 + 1 + 2 = 2)
}

// Does my number look big in this?
//* My Solution
{
  const narcissistic = (num) => {
    const narcissisticSum = num
      .toString()
      .split('')
      .map((n, _, arr) => Math.pow(+n, arr.length))
      .reduce((acc, curr) => acc + curr, 0);

    return narcissisticSum === num ? true : false;
  };

  // console.log(narcissistic(153));
  // true => 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

  // console.log(narcissistic(1652));
  // false => 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
}

// Your order, please
//* My Solution
{
  const order = (sentence) => {
    if (sentence.length === 0) return '';
    const words = sentence.split(' ');
    const arr = [];

    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      for (let j = 0; j < word.length; j++) {
        // Check if the character is a digit (1-9)
        if (/^[0-9]*$/.test(word[j])) arr[word[j] - 1] = word;
      }
    }

    return arr.join(' ');
  };

  // console.log(order('is2 Thi1s T4est 3a')); // "Thi1s is2 3a T4est"
}

// Unique In Order
//* My Solution
{
  const uniqueInOrder = (iterable) => {
    if (iterable.length === 0) return [];

    const isNumericArray = typeof iterable[0] === 'number';
    const strArray = isNumericArray ? iterable.map(String) : iterable;
    const result = [];
    let currentChar = strArray[0];
    let count = 0;

    for (let i = 0; i < strArray.length; i++) {
      const char = strArray[i];

      if (char === currentChar) count++;
      else {
        result.push(currentChar.repeat(count));
        currentChar = char;
        count = 1;
      }
    }

    result.push(currentChar.repeat(count)); // For the last set of characters

    // Convert back to original type
    return result.map((item) => (isNumericArray ? parseInt(item[0]) : item[0]));
  };

  // console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
  // console.log(uniqueInOrder('ABBCcAD')); // ['A', 'B', 'C', 'c', 'A', 'D']
  // console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1, 2, 3]
}

// Friend or Foe?
//* My Solution
{
  const friend = (friends) => friends.filter((f) => f.length === 4);

  // console.log(friend(['Ryan', 'Kieran', 'Mark'])); // ["Ryan", "Mark"]
}

// Two to One
//* My Solution
{
  const longest = (str1, str2) => {
    const combinedArr = [
      ...str1.split('').sort(),
      ...str2.split('').sort(),
    ].sort();

    return [...new Set(combinedArr)].join('');
  };

  // console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq')); // 'abcdefklmopqwxy'
}

// Categorize New Member
//* My Solution
{
  const openOrSenior = (data) =>
    data.flatMap(([age, handicap]) =>
      age >= 55 && handicap > 7 ? 'Senior' : 'Open'
    );

  // console.log(
  //   openOrSenior([
  //     [18, 20],
  //     [45, 2],
  //     [61, 12],
  //     [37, 6],
  //     [21, 21],
  //     [78, 9],
  //   ])
  // );

  // Output: ["Open", "Open", "Senior", "Open", "Open", "Senior"]
}

// Detect Pangram
//* My Solution
{
  const isPangram = (str) => {
    const alphabet = str.toLowerCase().match(/[a-z]/g);
    const uniqueAlphabet = [...new Set(alphabet)];
    return uniqueAlphabet.length === 26 ? true : false;
  };

  // console.log(isPangram('The quick brown fox jumps over the lazy dog.')); // true

  // console.log(isPangram('This is not a pangram.')); // false
}

// Basic Mathematical Operations
//* My Solution
{
  const basicOp = (operation, value1, value2) => {
    switch (operation) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
    }
  };

  // console.log(basicOp('+', 4, 7)); // 11
}
