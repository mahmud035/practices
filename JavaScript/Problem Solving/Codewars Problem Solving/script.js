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
