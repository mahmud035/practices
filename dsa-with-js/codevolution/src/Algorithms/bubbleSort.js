// Bubble Sort: Bubble sorting is the simplest sorting algorithm. It simply iterates over the entire array and swaps elements if one is bigger than the other

/*
🧠 Bubble Sort: Step-by-Step Intuition
  1. Start from the beginning of the array.
  2. Compare the current element with the next element.
  3. If the current element is greater than the next, swap them.
  4. Move to the next pair and repeat until reaching the end of the unsorted portion.
  5. After each pass, the largest unsorted element moves to its correct position at the end.
  6. Reduce the range of comparison by one since the last element is sorted.
  7. Repeat the process for all elements until the entire array is sorted.
*/

function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

console.log(bubbleSort([-6, 20, 8, -2, 4])); // [-6, -2, 4, 8, 20]
console.log(bubbleSort([6, 1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 6]

// O(n²) - Quadratic Time Complexity (Two nested loops)

// The algorithm has two nested loops, each iterating through the array. In the worst case, it compares every element with every other element, leading to n * n = n² comparisons.
