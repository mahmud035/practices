// Merge Sort: Merge sort works by dividing the array into subArrays until each array has one element. Then, each subarray is concatenated (merged) in a sorted order.

/*
🧠 Merge Sort: Step-by-Step Intuition
  1. If the array has 0 or 1 element, it is already sorted; return it.
  2. Divide the array into two halves: left and right.
  3. Recursively apply mergeSort to both halves.
  4. Merge the two sorted halves into one sorted array:
    - Compare the first elements of left and right arrays.
    - Remove the smaller element and add it to the sorted array.
    - Repeat until one of the arrays is empty.
  5. Concatenate any remaining elements from left or right arrays to the sorted array.
  6. Return the merged and sorted array.
  7. The process continues recursively, dividing and merging until the entire array is sorted.
*/

function mergeSort(array) {
  if (array.length <= 1) return array; // Base case: array is now sorted since it's just 1 element

  const midPoint = Math.floor(array.length / 2);
  const leftArray = array.slice(0, midPoint);
  const rightArray = array.slice(midPoint);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray.shift()); // Remove the first element from leftArray and add it to sortedArray
    } else {
      sortedArray.push(rightArray.shift()); // Remove the first element from rightArray and add it to sortedArray
    }
  }

  return [...sortedArray, ...leftArray, ...rightArray]; // Concatenate any remaining elements from leftArray and rightArray
}

console.log(mergeSort([8, 20, -2, 4, -6])); // [-6, -2, 4, 8, 20]
console.log(mergeSort([6, 1, 23, 4, 2, 3])); // [1, 2, 3, 4, 6, 23]

// Time Complexity: O(n log(n))

// Use merge sort when a stable sort is needed. A stable sort is one that’s guaranteed not to reorder elements with identical keys Merge sort is guaranteed to be O(n log(n)). A disadvantage of merge sort is that it uses O(n) in space.

// Reference LinK: https://www.youtube.com/watch?v=3j0SWDX4AtU (Bro Code)
