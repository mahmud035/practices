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

// Find the next perfect square!
//* My Solution
{
  const findNextSquare = (num) => {
    const isPerfectSquare = Number.isInteger(Math.sqrt(num));
    if (!isPerfectSquare) return -1;
    const nextPerfectSquare = Math.pow(Math.sqrt(num) + 1, 2);
    return nextPerfectSquare;
  };

  // console.log(findNextSquare(121)); // 144
  // console.log(findNextSquare(625)); // 676
  // console.log(findNextSquare(114)); // -1 because 114 is not a perfect square
}

// String ends with?
//* My Solution
{
  const solution = (str, ending) => str.endsWith(ending);

  // console.log(solution('abc', 'bc')); // true
}

// Regex validate PIN code
//* My Solution
{
  const validatePIN = (pin) => {
    // regex pattern to check if a string contains exactly 4 digits or exactly 6 digits
    const regex = /^(?:\d{4}|\d{6})$/;
    return regex.test(pin);
  };

  // console.log(validatePIN('1234')); // true
  // console.log(validatePIN('123456')); // true
  // console.log(validatePIN('12345')); // false
  // console.log(validatePIN('a234')); // false
}

// Binary Addition
//* My Solution
{
  const addBinary = (a, b) => (a + b).toString(2);

  // console.log(addBinary(1, 1)); // '10' (1 + 1 = 2 in decimal or 10 in binary)
}

// Keep Hydrated!
//* My Solution
{
  const litres = (time) => Math.floor(time * 0.5);

  // console.log(litres(3)); // 1
  // console.log(litres(6.7)); // 3
}

// Convert number to reversed array of digits
//* My Solution
{
  const digitize = (num) =>
    num
      .toString()
      .split('')
      .map((n) => +n)
      .reverse();

  // console.log(digitize(35231)); // [1, 3, 2, 5, 3];
  // console.log(digitize(0)); // [0]
}

// Returning Strings
//* My Solution
{
  const greet = (name) => `Hello, ${name} how are you doing today?`;

  // console.log(greet('Ryan'));
}

// Opposites Attract
//* My Solution
{
  const lovefunc = (flower1, flower2) => {
    const hasEvenNumPetals = flower1 % 2 === 0 || flower2 % 2 === 0;
    const hasOddNumPetals = flower1 % 2 === 1 || flower2 % 2 === 1;
    return hasEvenNumPetals && hasOddNumPetals ? true : false;
  };

  // console.log(lovefunc(1, 4)); // true
  // console.log(lovefunc(2, 2)); // false
  // console.log(lovefunc(873, 413)); // false
}

// Moving Zeros To The End
//* My Solution
{
  const moveZeros = (arr) => {
    const newArr = [];
    const zeros = [];

    for (const item of arr) {
      if (item === 0) zeros.push(item);
      else newArr.push(item);
    }

    return [...newArr, ...zeros];
  };

  // console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])); // [false,1,1,2,1,3,"a",0,0]
}

// A Needle in the Haystack
//* My Solution
{
  const findNeedle = (haystack) =>
    `found the needle at position ${haystack.indexOf('needle')}`;

  // console.log(
  //   findNeedle([
  //     'hay',
  //     'junk',
  //     'hay',
  //     'hay',
  //     'moreJunk',
  //     'needle',
  //     'randomJunk',
  //   ])
  // );
  // "found the needle at position 5"
}

// Ones and Zeros
//* My Solution
{
  const binaryArrayToNumber = (arr) => Number.parseInt(arr.join(''), 2);

  // console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
  // console.log(binaryArrayToNumber([0, 1, 0, 1])); // 5
}

// Is n divisible by x and y?
//* My Solution
{
  const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;

  // console.log(isDivisible(12, 3, 4)); // true;
  // console.log(isDivisible(3, 3, 4)); // false
}

// Beginner Series #1 School Paperwork
//* My Solution
{
  const paperwork = (n, m) => {
    if (n < 0 || m < 0) return 0;
    return n * m;
  };

  // console.log(paperwork(5, 5)); // 25
  // console.log(paperwork(5, -5)); // 0
}

// Are You Playing Banjo?
//* My Solution
{
  const areYouPlayingBanjo = (name) =>
    name.toLowerCase().startsWith('r')
      ? `${name} plays banjo`
      : `${name} does not play banjo`;

  // console.log(areYouPlayingBanjo('Ringo'));
  // console.log(areYouPlayingBanjo('rolf'));
}

// Number of People in the Bus
//* My Solution
{
  const number = function (busStops) {
    let peopleGetOnBus = 0;
    let peopleGetOffBus = 0;

    for (const [getOn, getOff] of busStops) {
      peopleGetOnBus += getOn;
      peopleGetOffBus += getOff;
    }

    return peopleGetOnBus - peopleGetOffBus;
  };

  // console.log(
  //   number([
  //     [10, 0],
  //     [3, 5],
  //     [5, 8],
  //   ])
  // ); // 5
}

// Find the unique number
//* My Solution
{
  const findUniq = (arr) => {
    const counts = arr.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

    for (const [key, value] of Object.entries(counts)) {
      if (value === 1) return +key;
    }
  };

  // console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
  // console.log(findUniq([0, 0, 0.55, 0, 0])); // 0.55
}

// Simple Pig Latin
//* My Solution
{
  const pigIt = (str) => {
    // regex for checking punctuation marks
    const regex = /^[.,\/#!?$%\^&\*;:{}=\-_`~()]+$/;

    return str
      .split(' ')
      .map((word) => `${word.slice(1)}${word.at(0)}`)
      .map((word) => (regex.test(word) ? word : `${word}ay`))
      .join(' ');
  };

  // console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
  // console.log(pigIt('Hello world !')); // elloHay orldway !
}

// How good are you really?
//* My Solution
{
  const betterThanAverage = (classPoints, myPoint) => {
    const allPoints = [...classPoints, myPoint];
    const sum = allPoints.reduce((acc, curr) => acc + curr, 0);
    const average = sum / allPoints.length;
    return myPoint > average ? true : false;
  };

  // console.log(betterThanAverage([2, 3], 5)); // true
}

// Count of positives / sum of negatives
//* My Solution
{
  const countPositivesSumNegatives = (input) => {
    if (input?.length === 0 || input === null) return [];

    let countPositives = 0;
    const negativeNums = [];

    input.forEach((num) => {
      if (num > 0) countPositives++;
      if (num < 0) negativeNums.push(num);
    });

    const sumOfNegatives = negativeNums.reduce((acc, curr) => acc + curr, 0);

    return [countPositives, sumOfNegatives];
  };

  // console.log(
  //   countPositivesSumNegatives([
  //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  //   ])
  // ); // [10, -65]
}

// Odd or Even?
//* My Solution
{
  const oddOrEven = (array) => {
    if (array.length === 0 || (array.length === 1 && array[0] === 0))
      return 'even';
    if (array.length === 1 && array[0] === 1) return 'odd';

    const sum = array.reduce((acc, curr) => acc + curr, 0);
    const isEven = sum % 2 === 0;

    return isEven ? 'even' : 'odd';
  };

  // console.log(oddOrEven([])); // even
  // console.log(oddOrEven([0])); // even
  // console.log(oddOrEven([1])); // odd

  // console.log(oddOrEven([0, 1, 4])); // odd
  // console.log(oddOrEven([0, -1, -5])); // even
}

// Reverse words
//* My Solution
{
  const reverseWords = (str) => {
    return str
      .split(' ')
      .map((word) => word.split('').reverse())
      .flatMap((wordArr) => wordArr.join(''))
      .join(' ');
  };

  // console.log(reverseWords('This is an example!')); // 'sihT si na !elpmaxe'
}

// Sort the odd
//* My Solution
{
  const sortArray = (arr) => {
    if (arr.length === 0) return [];

    let index = 0;
    const sortedOddNums = arr
      .filter((num) => num % 2 !== 0)
      .sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (num % 2 !== 0) {
        arr[i] = sortedOddNums[index];
        index++;
      }
    }

    return arr;
  };

  // console.log(sortArray([7, 1])); // [1, 7]
  // console.log(sortArray([5, 8, 6, 3, 4])); // [3, 8, 6, 5, 4]
}

// Fake Binary
//* My Solution
{
  const fakeBin = (numericStr) => {
    return numericStr
      .split('')
      .map((n) => +n)
      .map((n) => {
        if (n < 5) return '0';
        else return '1';
      })
      .join('');
  };

  // console.log(fakeBin('45385593107843568')); // '01011110001100111'
}

// Sentence Smash
//* My Solution
{
  const smash = (words) => words.join(' ');

  // console.log(smash(['hello', 'world', 'this', 'is', 'great'])); // 'hello world this is great'
}

// Find missing numbers
//* My Solution
{
  const findMissingNumbers = (arr) => {
    const missingNums = [];
    let startingValue = arr.at(0);
    let endingValue = arr.at(-1);

    for (let i = startingValue; i <= endingValue; i++) {
      if (!arr.includes(i)) missingNums.push(i);
    }

    return missingNums;
  };

  // console.log(findMissingNumbers([-3, -2, 1, 5]));
  // [-1, 0, 2, 3, 4];
}

// Find the missing letter
//* My Solution
{
  const findMissingLetter = (arr) => {
    const charCodes = arr.map((char) => char.charCodeAt(0));
    let startingCharCode = charCodes.at(0);
    let endingCharCode = charCodes.at(-1);
    let missingCharCode;

    for (let i = startingCharCode; i <= endingCharCode; i++) {
      if (!charCodes.includes(i)) {
        missingCharCode = i;
        break;
      }
    }

    return String.fromCharCode(missingCharCode);
  };

  // console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); // 'e'
  // console.log(findMissingLetter(['O', 'Q', 'R', 'S'])); // 'P'
}

// Count by X
//* My Solution
{
  const countBy = (number, numberOfTimesToCount) => {
    const arr = [];
    for (let i = 1; i <= numberOfTimesToCount; i++) {
      arr.push(number * i);
    }
    return arr;
  };

  // console.log(countBy(1, 10)); // [1,2,3,4,5,6,7,8,9,10]
  // console.log(countBy(2, 5)); // [2,4,6,8,10]
}

// Find Maximum and Minimum Values of a List
//* My Solution
{
  const min = function (list) {
    return Math.min(...list);
  };

  const max = function (list) {
    return Math.max(...list);
  };

  // console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));
  // console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
}

// Changing letters
//* My Solution
{
  const swap = (str) =>
    str
      .split('')
      .map((char) => {
        if (/^[aeiou]$/.test(char)) return char.toUpperCase();
        else return char;
      })
      .join('');

  // console.log(swap('Hello World!'));
  // console.log(swap('   @@@'));
}

//* Best Practice
{
  const swap = (str) => str.replace(/[aeiou]/g, (char) => char.toUpperCase());

  // console.log(swap('Hello World!'));
  // console.log(swap('   @@@'));
}

// The highest profit wins!
//* My Solution
{
  const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];

  // console.log(minMax([1, 2, 3, 4, 5]));
  // console.log(minMax([1]));
}

// Take a Ten Minutes Walk
//* My Solution
{
  const isValidWalk = (walk) => {
    if (walk.length !== 10) return false;

    let northSouth = 0;
    let eastWest = 0;

    for (let i = 0; i < walk.length; i++) {
      if (walk[i] === 'n') northSouth++;
      if (walk[i] === 's') northSouth--;
      if (walk[i] === 'e') eastWest++;
      if (walk[i] === 'w') eastWest--;
    }

    return northSouth === 0 && eastWest === 0;
  };

  // console.log(isValidWalk(['w'])); // false
  // console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // true
  // console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // false
}

// Beginner Series #2 Clock
//* My Solution
{
  const past = (h, m, s) => (h * 60 * 60 + m * 60 + s) * 1000;

  // console.log(past(0, 1, 1)); // 61000
  // console.log(past(1, 1, 1)); // 3661000
}

// Beginner Series #4 Cockroach
//* My Solution
{
  const cockroachSpeed = (speedInKmPerHour) =>
    Math.floor(speedInKmPerHour * (100000 / 3600));

  // Formula: cm/s = km/h * (100000 / 3600)

  // console.log(cockroachSpeed(1.08));
  // console.log(cockroachSpeed(3.3838214281631234));
}

// RGB To Hex Conversion
//* My Solution
{
  const rgb = (r, g, b) => {
    const clamp = (value) => Math.max(0, Math.min(255, value));
    const toHex = (value) =>
      clamp(value).toString(16).padStart(2, '0').toUpperCase();

    return `${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  // console.log(rgb(255, 99, 71));
  // console.log(rgb(0, 255, 0));
  // console.log(rgb(0, 0, 0));
}

// Find all occurrences of an element in an array
//* My Solution
{
  const findAll = (arr, n) => {
    const indexPositionsOfN = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === n) indexPositionsOfN.push(i);
    }

    return indexPositionsOfN;
  };

  // console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3)); // [2, 4]
}

// Find Count of Most Frequent Item in an Array
//* My Solution
{
  const mostFrequentItemCount = (array) => {
    if (array.length === 0) return 0;

    const counts = array.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

    const maxCount = Math.max(...Object.values(counts));
    return maxCount;
  };

  // console.log(
  //   mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])
  // ); // 5
  // console.log(mostFrequentItemCount([])); // 0
}

// Find the most frequently occurring elements in arrays
//* My Solution
{
  const getMostFrequent = (forecast) => {
    const { temperature: dailyTemperatures } = forecast;

    // Helper function to count occurrences of each temperatures in an array
    const countOccurrences = (temperatures) => {
      return temperatures.reduce((counts, temp) => {
        counts[temp] = (counts[temp] || 0) + 1;
        return counts;
      }, {});
    };

    // Helper function to find the most frequent temperatures
    const findMostFrequent = (temperatureCounts, originalArray) => {
      const maxFrequency = Math.max(...Object.values(temperatureCounts));

      return originalArray
        .slice() // Create a copy of the array to avoid mutation
        .reverse() // Reverse the array to prioritize the last occurrence in case of a tie
        .find((temp) => temperatureCounts[temp] === maxFrequency);
    };

    return dailyTemperatures.map((dayTemperature) => {
      const temperatureCounts = countOccurrences(dayTemperature);

      return findMostFrequent(temperatureCounts, dayTemperature);
    });
  };

  // console.log(
  //   getMostFrequent({
  //     temperature: [
  //       [15, 17, 19, 21, 21, 21, 20, 16],
  //       [16, 17, 22, 22, 22, 22, 20, 16],
  //       [12, 17, 19, 20, 20, 20, 20, 18],
  //       [14, 15, 19, 19, 20, 22, 18, 17],
  //       [15, 17, 24, 24, 24, 20, 20, 20],
  //     ],
  //   })
  // ); // [21,22,20,19,20]
}

// Grasshopper - Grade book
//* My Solution
{
  const getGrade = (s1, s2, s3) => {
    const score = (s1 + s2 + s3) / 3;

    if (score >= 90 && score <= 100) return 'A';
    if (score >= 80 && score < 90) return 'B';
    if (score >= 70 && score < 80) return 'C';
    if (score >= 60 && score < 70) return 'D';
    if (score >= 0 && score < 60) return 'F';
  };

  // console.log(getGrade(95, 90, 93)); // Output: 'A'
}

// Break camelCase
//* My Solution
{
  const solution = (str) => {
    if (str.length === 0) return '';

    // Check if every character in the string is lowercase
    if (/^[a-z]+$/.test(str)) return str;

    const splitCamelCase = str.split(/(?=[A-Z])/);
    return splitCamelCase.join(' ');
  };

  // console.log(solution('')); // ''
  // console.log(solution('identifier')); // 'identifier'
  // console.log(solution('camelCasing')); // 'camel Casing'
  // console.log(solution('camelCasingTest')); // 'camel Casing Test'
}

// Grasshopper - Personalized Message
//* My Solution
{
  const greet = (name, owner) =>
    name === owner ? `Hello boss` : `Hello guest`;

  // console.log(greet('Daniel', 'Daniel'));
  // console.log(greet('Greg', 'Daniel'));
}

// Get the mean of an array
//* My Solution
{
  const getAverage = (marks) => {
    const sum = marks.reduce((acc, curr) => acc + curr, 0);
    return Math.floor(sum / marks.length);
  };

  // console.log(getAverage([1, 2, 3, 4, 5]));
}

// Remove exclamation marks
//* My Solution
{
  const removeExclamationMarks = (str) => str.replaceAll('!', '');

  // console.log(removeExclamationMarks('Hello World!'));
}

// Write Number in Expanded Form
//* My Solution
{
  const expandedForm = (num) => {
    const numStr = num.toString();
    const nums = [];
    let matchingPlaceValue = 1;

    for (let i = numStr.length - 1; i >= 0; i--) {
      nums.push(numStr[i] * matchingPlaceValue);
      matchingPlaceValue *= 10;
    }

    return nums
      .reverse()
      .filter((num) => num > 0)
      .join(' + ');
  };

  // console.log(expandedForm(42)); // '40 + 2'
  // console.log(expandedForm(70304)); // '70000 + 300 + 4'
}

// Write Number in Expanded Form - Part 2
//* My Solution
{
  const expandedForm = (num) => {
    const [integerPart, fractionalPart] = num.toString().split('.');
    const integerParts = [];
    const fractionalParts = [];
    let valueForInt = 1;
    let valueForFraction = 1;

    for (let i = integerPart.length - 1; i >= 0; i--) {
      integerParts.push(integerPart[i] * valueForInt);
      valueForInt *= 10;
    }

    for (let i = 0; i <= fractionalPart.length - 1; i++) {
      valueForFraction *= 10;

      if (fractionalPart[i] !== '0') {
        fractionalParts.push(`${fractionalPart[i]}/${valueForFraction}`);
      }
    }

    // If only provide fractional part
    if (integerPart === '0') return fractionalParts.join(' + ');

    return `${integerParts
      .reverse()
      .filter((num) => num > 0)
      .join(' + ')} + ${fractionalParts.join('+ ')}`;
  };

  // console.log(expandedForm(807.304)); // '800 + 7 + 3/10 + 4/1000'
}

// Double Char
//* My Solution
{
  const doubleChar = (str) =>
    str
      .split('')
      .map((char) => char.repeat(2))
      .join('');

  // console.log(doubleChar('String')); // 'SSttrriinngg'
}

// You Can't Code Under Pressure #1
//* My Solution
{
  const doubleInteger = (i) => 2 * i;
}

// Count characters in your string
//* My Solution
{
  const count = (string) => {
    const strCount = string.split('').reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});

    return strCount;
  };

  // console.log(count('aba')); // {'a': 2, 'b': 1}
  // console.log(count('')); // {}
}

// Removing Elements
//* My Solution
{
  const removeEveryOther = (arr) => {
    const modifiedArr = [arr[0]];
    const remainingArr = arr.slice(1);

    for (let i = 0; i < remainingArr.length; i++) {
      if (i % 2 !== 0) modifiedArr.push(remainingArr[i]);
    }

    return modifiedArr;
  };

  // console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])); // ['Hello', 'Hello Again']
  // console.log(removeEveryOther([[1, 2]])); // [[1, 2]]
}

//* Best Practices
{
  const removeEveryOther = (arr) =>
    arr.filter((element, index) => index % 2 === 0);

  // console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])); // ['Hello', 'Hello Again']
  // console.log(removeEveryOther([[1, 2]])); // [[1, 2]]
}

// Two Sum
//* My Solution
{
  const twoSum = (numbers, target) => {
    const indexes = [];

    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          indexes.push(i);
          indexes.push(j);
        }
      }
    }
    return indexes;
  };

  // console.log(twoSum([1, 2, 3], 4)); // returns [0, 2] or [2, 0]
  // console.log(twoSum([3, 2, 4], 6)); // returns [1, 2] or [2, 1]
}

// Get Planet Name By ID
//* My Solution
{
  const getPlanetName = (id) => {
    let name;

    switch (id) {
      case 1:
        name = 'Mercury';
        break;
      case 2:
        name = 'Venus';
        break;
      case 3:
        name = 'Earth';
        break;
      case 4:
        name = 'Mars';
        break;
      case 5:
        name = 'Jupiter';
        break;
      case 6:
        name = 'Saturn';
        break;
      case 7:
        name = 'Uranus';
        break;
      case 8:
        name = 'Neptune';
    }

    return name;
  };

  // console.log(getPlanetName(2)); // 'Venus'
  // console.log(getPlanetName(3)); // 'Earth'
  // console.log(getPlanetName(5)); // 'Jupiter'
}

// Equal Sides Of An Array
//* My Solution
{
  function findEvenIndex(arr) {
    const totalSum = arr.reduce((acc, curr) => acc + curr, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (leftSum === totalSum - leftSum - arr[i]) return i; // Found the index
      leftSum += arr[i]; // Update left sum
    }

    return -1; // No index found
  }

  // Test cases
  // console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // Output: 3
  // console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // Output: 1
  // console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // Output: 0
  // console.log(findEvenIndex([1, 2, 3])); // Output: -1 (No index found)
  // console.log(findEvenIndex([5])); // Output: 0 (Single element)
}

// Is a number prime?
//* My Solution
{
  function isPrime(num) {
    if (num <= 1) return false; // Prime numbers must be > 1
    if (num === 2) return true; // 2 is the only even prime
    if (num % 2 === 0) return false; // Even numbers are not prime

    const sqrtNum = Math.sqrt(num); // Only need to check up to √n
    for (let i = 3; i <= sqrtNum; i += 2) {
      if (num % i === 0) return false; // If divisible, not prime
    }

    return true; // Passed all checks, so it's prime
  }

  // Test Cases
  // console.log(isPrime(1)); // false
  // console.log(isPrime(2)); // true
  // console.log(isPrime(3)); // true
  // console.log(isPrime(4)); // false
  // console.log(isPrime(-5)); // false
  // console.log(isPrime(17)); // true
  // console.log(isPrime(18)); // false
  // console.log(isPrime(19)); // true
  // console.log(isPrime(997)); // true (a prime number)
  // console.log(isPrime(1000000007)); // true (large prime)
}

// Round by 0.5 steps
//* My Solution
{
  const solution = (n) => Math.round(n * 2) / 2;

  // console.log(solution(4.2), 4);
  // console.log(solution(4.4), 4.5);
  // console.log(solution(4.6), 4.5);
  // console.log(solution(4.8), 5);
}

// Name Array Capping
//* My Solution
{
  const capMe = (names) =>
    names.map((name) => {
      if (name.length === 0) return name;
      return name.at(0).toUpperCase() + name.slice(1).toLowerCase();
    });

  // console.log(capMe(['jo', 'nelson', 'jurie'])); // ["Jo", "Nelson", "Jurie"]
}

// Sentence Calculator
//* My Solution

{
  /**
   * Converts a string into a numerical value based on the following rules:
   * - Lowercase letters (a-z): a=1, b=2, ..., z=26
   * - Uppercase letters (A-Z): A=2, B=4, ..., Z=52 (double their position)
   * - Digits (0-9): Added as numeric values
   *
   * @param {string} str - The input string to convert.
   * @returns {number} - The total sum based on character rules.
   */
  function lettersToNumbers(str) {
    const lowerCase = []; // To store all lowercase letters
    const upperCase = []; // To store all uppercase letters
    const digits = []; // To store all digit characters
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Reference for uppercase positions

    // Categorize each character in the string
    str.split('').forEach((char) => {
      if (/[a-z]/.test(char)) lowerCase.push(char); // Lowercase check
      else if (/[A-Z]/.test(char)) upperCase.push(char); // Uppercase check
      else if (/\d/.test(char)) digits.push(char); // Digit check
    });

    // Sum of lowercase letters based on their position in the alphabet (a=1, ..., z=26)
    const lowerCaseSum = lowerCase.reduce(
      (acc, curr) => acc + (curr.charCodeAt() - 96),
      0
    );

    // Sum of uppercase letters based on 2 × position in the alphabet (A=2, ..., Z=52)
    const upperCaseSum = upperCase.reduce((acc, curr) => {
      const index = upperCaseLetters.indexOf(curr) + 1;
      return acc + index * 2;
    }, 0);

    // Sum of digit characters as numbers
    const digitsSum = digits.reduce((acc, curr) => acc + Number(curr), 0);

    // Return the total sum of all character values
    return lowerCaseSum + upperCaseSum + digitsSum;
  }

  // console.log(lettersToNumbers('Give me 5!')); // 73
}

// Numbers in different systems
//* My Solution

{
  const sysNums = (n, sys) => {
    if (sys === 16) {
      const hex = n.toString(sys);
      if (
        hex.includes('a') ||
        hex.includes('b') ||
        hex.includes('c') ||
        hex.includes('d') ||
        hex.includes('e') ||
        hex.includes('f')
      )
        return hex;
      else return Number(hex);
    }
    return Number(n.toString(sys));
  };

  // console.log(sysNums(5, 2)); // 101
  // console.log(sysNums(5, 8)); // 5
  // console.log(sysNums(250, 16)); // 'fa'
  // console.log(sysNums(0, 16)); // 'fa'
  // console.log(sysNums(4370, 16)); // 1112
}

//* Best Practices
{
  const sysNums = (n, sys) => {
    const s = n.toString(sys);
    return /^\d+$/.test(s) ? Number(s) : s;
  };

  // console.log(sysNums(5, 2)); // 101
  // console.log(sysNums(5, 8)); // 5
  // console.log(sysNums(250, 16)); // 'fa'
  // console.log(sysNums(0, 16)); // 'fa'
  // console.log(sysNums(4370, 16)); // 1112
}

// Return substring instance count - 2
//* My Solution

{
  function searchSubstr(fullText, searchText, allowOverlap = true) {
    if (searchText.length === 0) return 0;
  }

  console.log(searchSubstr('aaabbbcccc', 'bbb')); // 1
}

// Playing with Sets : Intersection
//* My Solution

{
  const A = new Set([1, 2]);
  const B = new Set([2, 3]);

  function inter(set1, set2) {
    const intersection = new Set();

    for (const element of set1) {
      if (set2.has(element)) {
        intersection.add(element);
      }
    }

    return intersection;
  }

  // console.log(inter(A, B)); // Set {2}
}

// Recursion #1 - Factorial (retired)
//* My Solution

{
  const factorial = (n) => {
    if (n === 0 || n === 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
  };

  // console.log(factorial(0)); // 1
  // console.log(factorial(1)); // 1
  // console.log(factorial(5)); // 120
}

// Recursion #2 - Fibonacci
//* My Solution

{
  const fibonacci = (n) => {
    if (n === 1 || n === 2) return 1; // Base case
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
  };

  // console.log(fibonacci(1)); // 1
  // console.log(fibonacci(2)); // 1
  // console.log(fibonacci(3)); // 2
  // console.log(fibonacci(4)); // 3
}

// SillyCASE
//* My Solution

{
  function sillyCase(silly) {
    const index = Math.ceil(silly.length / 2); // Calculate the index for the upper case letter
    const firstPart = silly.slice(0, index).toLowerCase(); // Lowercase the first part
    const secondPart = silly.slice(index).toUpperCase(); // Uppercase the second part
    return firstPart + secondPart; // Concatenate both parts
  }

  // console.log(sillyCase('foobar')); // fooBAR
  // console.log(sillyCase('codewars')); // codeWARS
  // console.log(sillyCase('brian')); // briAN
}

// Simple Substitution Cipher Helper
//* My Solution

{
  const abc1 = 'abcdefghijklmnopqrstuvwxyz';
  const abc2 = 'etaoinshrdlucmfwypvbgkjqxz';

  function SubstitutionCipher(abc1, abc2) {
    this.encode = function (str) {
      let encodedStr = '';

      // Iterate through each character in the input string
      // and replace it with the corresponding character from abc2
      // based on its position in abc1
      // If the character is not found in abc1, it remains unchanged
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const index = abc1.indexOf(char);
        if (index !== -1) {
          // If character found, get the corresponding character from abc2
          const encodedChar = abc2[index];
          encodedStr += encodedChar;
        } else {
          encodedStr += char; // If character not found, keep it as is
        }
      }

      return encodedStr;
    };

    this.decode = function (str) {
      let decodedStr = '';

      // Iterate through each character in the input string
      // and replace it with the corresponding character from abc1
      // based on its position in abc2
      // If the character is not found in abc1, it remains unchanged
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const index = abc2.indexOf(char);
        if (index !== -1) {
          // If character found, get the corresponding character from abc1
          const decodedChar = abc1[index];
          decodedStr += decodedChar;
        } else {
          decodedStr += char; // If character not found, keep it as is
        }
      }

      return decodedStr;
    };
  }

  const sub = new SubstitutionCipher(abc1, abc2);

  // console.log(sub.encode('abc')); // => "eta"
  // console.log(sub.encode('xyz')); // => "qxz"
  // console.log(sub.encode('aeiou')); // => "eirfg"

  // console.log(sub.decode('eta')); // => "abc"
  // console.log(sub.decode('qxz')); // => "xyz"
  // console.log(sub.decode('eirfg')); // => "aeiou"
}
