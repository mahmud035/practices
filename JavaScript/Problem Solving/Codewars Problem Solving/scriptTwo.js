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
