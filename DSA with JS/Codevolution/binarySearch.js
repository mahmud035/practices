function binarySearch(sortedArr, target) {
  let leftIndex = 0;
  let rightIndex = sortedArr.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (sortedArr[middleIndex] === target) {
      return middleIndex; // Target found at middleIndex
    } else if (sortedArr[middleIndex] < target) {
      leftIndex = middleIndex + 1; // Search in the rightIndex half
    } else {
      rightIndex = middleIndex - 1; // Search in the leftIndex halt
    }
  }

  return -1; // Target not found
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // Output: 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // Output: 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // Output: -1

// Time Complexity: O(log n) - Logarithmic Time Complexity
// Logarithmic time complexity, represented as O(log n), occurs when the execution time of an algorithm grows logarithmically with the input size. This means that as the input size increases, the time required to complete the algorithm increases at a much slower rate compared to linear time complexity. "Logarithmic time complexity is often seen in algorithms that divide the input data in half at each step, such as binary search".
