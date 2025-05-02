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
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) swap(array, i, j);
    }
  }
  return array;
}

console.log(bubbleSort([-6, 20, 8, -2, 4])); // [-6, -2, 4, 8, 20]
console.log(bubbleSort([6, 1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 6]

// Selection Sort: Selection sorting works by scanning the elements for the smallest element and inserting it into the current position of the array.

// In the code, there is one for loop to iterate through the array and one nested for loop to scan to get the minimum element

// O(n²) - Quadratic Time Complexity (Two nested loops)

function selectionSort(array) {
  let min;

  for (let i = 0; i < array.length; i++) {
    // Set minium to this position
    min = i;

    // Check the rest of the array to see if anything is smaller
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }

    // If the minium isn't in the position, swap it
    if (i !== min) swap(array, i, min);
  }

  return array;
}

console.log(selectionSort([-6, 20, 8, -2, 4])); // [-6, -2, 4, 8, 20]
console.log(selectionSort([6, 1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 6]

// Insertion Sort: Insertion sort works similarly to selection sort by searching the array sequentially and moving the unsorted items into a sorted subList on the left side of the array.

// The outer for loop iterates over the array indices, and the inner for loop moves the unsorted items into the sorted subList on the left side of the array.

// O(n²) - Quadratic Time Complexity (Two nested loops)

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

console.log(insertionSort([-6, 20, 8, -2, 4])); // [-6, -2, 4, 8, 20]
console.log(insertionSort([6, 1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 6]

// Quick Sort: Quicksort works by obtaining a pivot (the central point) and partitioning the array around it (bigger elements on one side and smaller elements on the other side) until everything is sorted.

// This sort is a recursive one and uses the divide-and-conquer methodology to break the quadratic complexity barrier and get the time complexity down to O(n log(n)).
