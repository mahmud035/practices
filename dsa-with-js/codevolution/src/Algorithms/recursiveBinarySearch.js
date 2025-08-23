function recursiveBinarySearch(sortedArr, target) {
  if (sortedArr.length === 0) return -1; // Base case: empty array

  const middleIndex = Math.floor(sortedArr.length / 2);

  if (sortedArr[middleIndex] === target) {
    return middleIndex; // Target found at middleIndex
  } else if (sortedArr[middleIndex] < target) {
    const result = recursiveBinarySearch(
      sortedArr.slice(middleIndex + 1),
      target
    );
    return result === -1 ? -1 : middleIndex + 1 + result; // Adjust index for the right half
  } else {
    return recursiveBinarySearch(sortedArr.slice(0, middleIndex), target); // Search in the left half
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // Output: 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // Output: 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // Output: -1

// Time Complexity: O(log n) - Logarithmic Time Complexity
// Logarithmic time complexity, represented as O(log n), occurs when the execution time of an algorithm grows logarithmically with the input size. This means that as the input size increases, the time required to complete the algorithm increases at a much slower rate compared to linear time complexity. Logarithmic time complexity is often seen in algorithms that divide the input data in half at each step, such as binary search.
