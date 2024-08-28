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
}
