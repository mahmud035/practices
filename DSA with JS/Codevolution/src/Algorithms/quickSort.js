function quickSort(array) {
  if (array.length <= 1) return array; // Base case: if the array is empty or has one element, it's already sorted

  const pivot = array.at(-1); // Choose the last element as the pivot
  const leftArray = []; // Elements less than the pivot
  const rightArray = []; // Elements greater than the pivot

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) leftArray.push(array[i]);
    else rightArray.push(array[i]);
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]; // Combine sorted leftArray, pivot, and sorted rightArray
}

console.log(quickSort([4, 1, 5, 2, 3])); // [1, 2, 3, 4, 5]
console.log(quickSort([-6, 20, 8, -2, 4])); // [-6, -2, 4, 8, 20]
console.log(quickSort([6, 1, 23, 4, 2, 3])); // [1, 2, 3, 4, 6, 23]

// This sort is a recursive one and uses the divide-and-conquer methodology to break the quadratic complexity barrier and get the time complexity down to O(n log(n)).

// Time Complexity: O(n log(n)) on average, O(n²) for worst case

// The algorithm divides the array into two halves (leftArray and rightArray) and recursively sorts them. The depth of recursion is log(n), and at each level, we perform O(n) work to partition the array. Thus, the overall time complexity is O(n log n).

// 🌳 QuickSort Recursive Tree 👇

/*
  quickSort([4, 1, 5, 2, 3])
  pivot = 3
  ├── quickSort([1, 2])
  │   pivot = 2
  │   ├── quickSort([1])
  │   │   → [1]
  │   └── quickSort([])
  │       → []
  │   🔁 Combine: [1] + [2] + [] → [1, 2]
  │
  ├── pivot = 3
  │
  └── quickSort([4, 5])
      pivot = 5
      ├── quickSort([4])
      │   → [4]
      └── quickSort([])
          → []
      🔁 Combine: [4] + [5] + [] → [4, 5]

  🔁 Final Combine: [1, 2] + [3] + [4, 5] → [1, 2, 3, 4, 5]
*/

/*
  quickSort([-6, 20, 8, -2, 4])
  pivot = 4
  ├── quickSort([-6, -2])
  │   pivot = -2
  │   ├── quickSort([-6])
  │   │   → [-6]
  │   └── quickSort([])
  │       → []
  │   🔁 Combine: [-6] + [-2] + [] → [-6, -2]
  │
  ├── pivot = 4
  │
  └── quickSort([20, 8])
      pivot = 8
      ├── quickSort([])
      │   → []
      └── quickSort([20])
          → [20]
      🔁 Combine: [] + [8] + [20] → [8, 20]

  🔁 Final Combine: [-6, -2] + [4] + [8, 20] → [-6, -2, 4, 8, 20]
*/

/*
  quickSort([6, 1, 23, 4, 2, 3])
  pivot = 3
  ├── quickSort([1, 2])
  │   pivot = 2
  │   ├── quickSort([1])
  │   │   → [1]
  │   └── quickSort([])
  │       → []
  │   🔁 Combine: [1] + [2] + [] → [1, 2]
  │
  ├── pivot = 3
  │
  └── quickSort([6, 23, 4])
      pivot = 4
      ├── quickSort([])
      │   → []
      └── quickSort([6, 23])
          pivot = 23
          ├── quickSort([6])
          │   → [6]
          └── quickSort([])
              → []
          🔁 Combine: [6] + [23] + [] → [6, 23]
      🔁 Combine: [] + [4] + [6, 23] → [4, 6, 23]

  🔁 Final Combine: [1, 2] + [3] + [4, 6, 23] → [1, 2, 3, 4, 6, 23]
*/
