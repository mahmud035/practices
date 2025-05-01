// Iterate through the and array the find
// Using loop
// O(n)
function linearSearch(array, n) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) return true;
  }
  return false;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)); // true
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // false

// Using Higher Order Function
// O(n)
function linearSearchTwo(array, n) {
  return array.some((element) => element === n);
}

console.log(linearSearchTwo([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)); // true
console.log(linearSearchTwo([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // false

// Logarithmic time complexity, represented as O(log n), occurs when the execution time of an algorithm grows logarithmically with the input size. This means that as the input size increases, the time required to complete the algorithm increases at a much slower rate compared to linear time complexity. "Logarithmic time complexity is often seen in algorithms that divide the input data in half at each step, such as binary search".

// O(log n) - Input size reduced by half
function binarySearch(sortedArr, target) {
  let leftIndex = 0;
  let rightIndx = sortedArr.length - 1;

  while (leftIndex <= rightIndx) {
    const middleIndex = Math.floor((leftIndex + rightIndx) / 2);

    if (target === sortedArr[middleIndex]) {
      return middleIndex; // Target found at middleIndex
    } else if (target > sortedArr[middleIndex]) {
      leftIndex = middleIndex + 1; // Search in the rightIndex half
    } else {
      rightIndx = middleIndex - 1; // Search in the leftIndex halt
    }
  }

  return -1; // Target not found
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // Output: 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // Output: 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // Output: -1
console.log(binarySearch([1, 2, 3, 4], 4)); // Output: 3
console.log(binarySearch([1, 2, 3, 4], 5)); // Output: -1
