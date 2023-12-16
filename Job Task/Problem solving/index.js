// Find the counts of elements of an unsorted integer array which are equal to the average of all elements of that array.
// Ex:
// Input Case 1:
// input: [2,2,2,2,2]
// output:  5
// solution : 2+ 2+ 2+ 2+ 2 = 10/5 ==> 2
// it contain five 2 element

// Input Case 2:
// input: [ 1,3,2,4,5]
// output:  1
// solution : 1+ 3+ 2+ 4+ 5 = 15/5 ==> 3
// it contain one 3 element

/* const array = [1, 3, 2, 4, 5];

const countOccurrences = (array) => {
  let count = 0;

  const average =
    array.reduce((total, currentValue) => total + currentValue, 0) /
    array.length;

  array.forEach((element) => {
    if (element === average) {
      count++;
    }
  });

  return count;
};

console.log(countOccurrences(array));
 */

// 3. Find the average of largest and smallest numbers in an unsorted integer array?
// Eg.
// Input Case 1:
// input: [1, 4, 3, 2]
// output:  2.5
// solution : average = (1+4)/2 =>5/2 => 2.5

// input: [1, 4, 3, 4]
// output:  3
// solution : average = (1+4 +4)/3 =>9/3 => 3

/* const array = [1, 4, 3, 4, 4];

const averageOfLargestAndSmallestNumber = (array) => {
  const largestNumber = Math.max.apply(null, array);
  const smallestNumber = Math.min.apply(null, array);

  let count = 0;
  for (const largestElement of array) {
    if (largestNumber === largestElement) {
      count++;
    }
  }

  const average = (largestNumber * count + smallestNumber) / (count + 1);
  return average;
};

console.log(averageOfLargestAndSmallestNumber(array)); */

const array = [
  'ghi@hotmail.com',
  'def@yahoo.com',
  'ghi@gmail.com',
  'abc@channelier.com',
  'abc@hotmail.com',
  'def@hotmail.com',
  'abc@gmail.com',
  'abc@yahoo.com',
  'def@channelier.com',
  'jkl@hotmail.com',
  'ghi@yahoo.com',
  'def@gmail.com',
];

const sendEmail = (array) => {
  const sortedArray = array.sort();
  return sortedArray;
};

console.log(sendEmail(array));
