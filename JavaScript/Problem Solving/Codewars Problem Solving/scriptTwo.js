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
