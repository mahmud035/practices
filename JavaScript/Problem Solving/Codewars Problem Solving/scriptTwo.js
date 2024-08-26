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
