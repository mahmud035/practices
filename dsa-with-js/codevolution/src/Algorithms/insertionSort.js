/*
🧠 Insertion Sort: Step-by-Step Intuition
  1. Start from the second element (index 1).
  2. Take the current element (`currentValue`) and compare it with elements in the sorted portion to its left.
  3. Shift all larger elements in the sorted portion one step to the right.
  4. Insert `currentValue` into the correct position where all left elements are smaller.
  5. Repeat for each element, growing the sorted portion from left to right.
  6. The array gradually transforms from partially sorted to fully sorted.
*/

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let previousIndex = i - 1;

    while (previousIndex >= 0 && array[previousIndex] > currentValue) {
      array[previousIndex + 1] = array[previousIndex];
      previousIndex--;
    }

    array[previousIndex + 1] = currentValue;
  }
  return array;
}

console.log(insertionSort([4, 1, 5, 2, 3])); // [1, 2, 3, 4, 5]

// Time Complexity: O(n²) - Quadratic Time Complexity
// The algorithm has two nested loops, each iterating through the array. In the worst case, it compares every element with every other element, leading to n * n = n² comparisons.
