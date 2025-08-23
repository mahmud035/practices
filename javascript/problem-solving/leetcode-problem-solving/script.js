'use strict';

//* Buy Two Chocolates

{
  /**
   * @param {number[]} prices
   * @param {number} money
   * @return {number}
   */

  const buyChoco = (prices, money) => {
    const sortedPrice = prices.sort((a, b) => a - b);
    const twoChocolatesPrice = sortedPrice[0] + sortedPrice[1];

    return twoChocolatesPrice <= money ? money - twoChocolatesPrice : money;
  };

  // buyChoco([1, 2, 3], 3);
  // buyChoco([3, 2, 3], 3);
}

//* Filter Elements from Array

{
  /**
   * @param {number[]} arr
   * @param {Function} fn
   * @return {number[]}
   */

  // n => number from the arr
  // i => index number of arr

  const arr = [0, 10, 20, 30];

  let fn = function greaterThan10(n, i = undefined) {
    console.log(`n => ${n}`);
    console.log(`i => ${i}`);
    console.log(Boolean(arr[i]));
    return n > 10;
  };

  const filter = (arr, fn) => {
    const filteredArr = [];

    arr.forEach((i) => {
      console.log(i);
      console.log(fn(arr[i], i));
      // if (fn(arr[i])) filteredArr.push(arr[i]);
    });

    return filteredArr;
  };

  const newArray = filter(arr, fn);
  console.log(newArray);

  // console.log(Boolean(0));
  // console.log(Boolean(1));
}
