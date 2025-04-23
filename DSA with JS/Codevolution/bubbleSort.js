function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[i]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}

console.log(bubbleSort([-6, 20, 8, -2, 4])); // [-6, -2, 4, 8, 20]
console.log(bubbleSort([6, 1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 6]

// Time Complexity: O(n²) - Quadratic Time Complexity ()
// The algorithm has two nested loops, each iterating through the array. In the worst case, it compares every element with every other element, leading to n * n = n² comparisons.
