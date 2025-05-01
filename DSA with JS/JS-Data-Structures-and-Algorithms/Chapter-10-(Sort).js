// Bubble Sort: Bubble sorting is the simplest sorting algorithm. It simply iterates over the entire array and swaps elements if one is bigger than the other

// O(n²) - Quadratic Time Complexity (Two nested loops)

// The algorithm has two nested loops, each iterating through the array. In the worst case, it compares every element with every other element, leading to n * n = n² comparisons.

function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) swap(array, i, j);
    }
  }
  return array;
}

console.log(bubbleSort([-6, 20, 8, -2, 4])); // [-6, -2, 4, 8, 20]
console.log(bubbleSort([6, 1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 6]

// Selection Sort
