function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let previousIndex = i - 1;

    while (previousIndex >= 0 && array[previousIndex] > current) {
      array[previousIndex + 1] = array[previousIndex];
      previousIndex--;
    }

    array[previousIndex + 1] = current;
  }
  return array;
}

console.log(insertionSort([4, 1, 5, 2, 3])); // [1, 2, 3, 4, 5]

// Time Complexity: O(n²) - Quadratic Time Complexity
// The algorithm has two nested loops, each iterating through the array. In the worst case, it compares every element with every other element, leading to n * n = n² comparisons.
