/*
🧠 Binary Search: Step-by-Step Intuition
  1. Start with two pointers: left at the beginning, right at the end of the sorted array.
  2. Calculate the middle index between left and right.
  3. Compare the target value with the middle element.
  4. If target equals the middle element, return the middle index (target found).
  5. If target is greater than the middle element, move the left pointer to middle + 1 (search right half).
  6. If target is less than the middle element, move the right pointer to middle - 1 (search left half).
  7. Repeat steps 2-6 until left pointer exceeds right pointer.
  8. If the target is not found, return -1.
*/

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

// Time Complexity: O(log n) - Logarithmic Time Complexity
// Logarithmic time complexity, represented as O(log n), occurs when the execution time of an algorithm grows logarithmically with the input size. This means that as the input size increases, the time required to complete the algorithm increases at a much slower rate compared to linear time complexity. "Logarithmic time complexity is often seen in algorithms that divide the input data in half at each step, such as binary search".
