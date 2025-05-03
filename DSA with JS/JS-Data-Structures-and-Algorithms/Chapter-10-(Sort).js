// Bubble Sort: Bubble sorting is the simplest sorting algorithm. It simply iterates over the entire array and swaps elements if one is bigger than the other

// O(n²) - Quadratic Time Complexity (Two nested loops)

// The algorithm has two nested loops, each iterating through the array. In the worst case, it compares every element with every other element, leading to n * n = n² comparisons.

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

// Selection Sort: Selection sorting works by scanning the elements for the smallest element and inserting it into the current position of the array.

// In the code, there is one for loop to iterate through the array and one nested for loop to scan to get the minimum element

// O(n²) - Quadratic Time Complexity (Two nested loops)

/*
🧠 Selection Sort: Step-by-Step Intuition
  1. Begin at the first element, assume it’s the minimum.
  2. Scan the rest of the array to find the true minimum element.
  3. Swap the minimum element found with the element at the current starting position.
  4. Move one position to the right and repeat the process for the unsorted portion.
  5. Continue until the entire array is sorted.
  6. The sorted portion grows from left to right, with the smallest elements placed in order.
*/

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

console.log(insertionSort([-6, 20, 8, -2, 4])); // [-6, -2, 4, 8, 20]
console.log(insertionSort([6, 1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 6]

// Quick Sort: Quicksort works by obtaining a pivot (the central point) and partitioning the array around it (bigger elements on one side and smaller elements on the other side) until everything is sorted.

// This sort is a recursive one and uses the divide-and-conquer methodology to break the quadratic complexity barrier and get the time complexity down to O(n log(n)).

/*
🧠 Quick Sort: Step-by-Step Intuition
  1. Choose a pivot element (commonly the last element).
  2. Partition the array into two subArrays:
    - Left subarray with elements smaller than the pivot.
    - Right subarray with elements greater than or equal to the pivot.
  3. Recursively apply quickSort to both subArrays.
  4. Combine the sorted left subarray, pivot, and sorted right subarray.
  5. Repeat until subArrays are of size 0 or 1 (base case).
  6. The recursion tree depth is about log(n), and partitioning takes O(n), resulting in average O(n log n) complexity.
*/

function quickSort(array) {
  if (array.length <= 1) return array; // Base case: if the array is empty or has one element, it's already sorted

  const pivot = array.at(-1); // Choose the last element as the pivot
  const leftArray = []; // Elements less than the pivot
  const rightArray = []; // Elements greater than the pivot

  for (let i = 0; i < array.length - 1; i++) {
    const element = array[i];
    if (element < pivot) leftArray.push(element);
    else rightArray.push(element);
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]; // Combine sorted leftArray, pivot, and sorted rightArray
}

console.log(quickSort([4, 1, 5, 2, 3])); // [1, 2, 3, 4, 5]
console.log(quickSort([-6, 20, 8, -2, 4])); // [-6, -2, 4, 8, 20]
console.log(quickSort([6, 1, 23, 4, 2, 3])); // [1, 2, 3, 4, 6, 23]

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

// JavaScript’s Built-in Sort

const numbers = [12, 3, 4, 2, 1, 34, 23];

console.log(numbers.sort((a, b) => a - b)); // Ascending
console.log(numbers.sort((a, b) => b - a)); // Descending

//* ------- Exercise Solutions -------

// USE THE IMPLEMENT SQUARE ROOT FUNCTION FOR AN INTEGER WITHOUT USING ANY MATH LIBRARIES

// The first solution that may come to mind is trying every possibility from 1 to the number, as follows:

function sqrtIntNative(number) {
  if (number === 0 || number === 1) return number;

  let index = 1,
    square = 1;

  while (square < number) {
    if (square === number) return square;
    index++;
    square = index * index;
  }
  return index;
}

console.log(sqrtIntNative(9)); // 3
console.log(sqrtIntNative(16)); // 4

// Time Complexity: O(n)

// This is essentially a linear search since it has to linearly check one by one the value for the square root.

// The binary search algorithm can be applied to this problem. Instead of going up 1 by 1, partition the range into upper half and lower half between 1 and the given number as follows:

function sqrtInt(number) {
  if (number === 0 || number === 1) return number;

  let start = 1,
    end = number,
    ans;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (mid * mid === number) return mid;

    if (mid * mid < number) {
      start = mid + 1; // use the upper section
      ans = mid;
    } else {
      end = mid - 1; // use the lower section
    }
  }
  return ans;
}

console.log(sqrtInt(9)); // 3
console.log(sqrtInt(16)); // 4
console.log(sqrtInt(10)); // 3

// FIND IF TWO ELEMENTS OF AN ARRAY ADD UP TO A GIVEN NUMBER

// The simple approach to this problem is to check every other element for each element in the array.

function findTwoSum(array, sum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) return true;
    }
  }
  return false;
}

console.log(findTwoSum([1, 2, 3, 4, 5], 6)); // true
console.log(findTwoSum([1, 2, 3, 4, 5], 10)); // false

// Time Complexity: O(n^2) - Two nested loops

// There is a lot of checking, and hence it takes quadratic time.

// ✅ A better approach is to store the already visited numbers and check against them. This way, it can be done in linear time.

function findTwoSumBetter(array, sum) {
  const store = {};

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (store[element]) {
      return true; // checks if that needed number has already been seen.
    } else {
      store[sum - element] = element; // means: “I'm saving what number I would need later to complete the sum.”
    }
  }

  return false;
}

console.log(findTwoSumBetter([1, 2, 3, 4, 5], 6)); // true
console.log(findTwoSumBetter([1, 2, 3, 4, 5], 10)); // false

// Time Complexity: O(n)

// This algorithm cuts the time complexity to O(n) but takes O(n) space as well to store items into the store object.

// FIND AN ELEMENT WITHIN AN ARRAY THAT APPEARS ONLY ONCE

function findOnlyOnce(array) {
  const countMap = array.reduce((acc, curr) => {
    acc[curr] = (acc[curr] ?? 0) + 1;
    return acc;
  }, {});

  return Number(Object.keys(countMap).find((key) => countMap[key] === 1));
}

console.log(findOnlyOnce([1, 2, 2, 3, 1])); // 3
console.log(findOnlyOnce([1, 1, 2, 4, 4, 5, 5, 6, 6])); // 2

// Using the above approach, Time Complexity: O(n)

// CREATE A JAVASCRIPT SORT COMPARATOR FUNCTION THAT WOULD SORT STRING BY LENGTH

const mythical = ['dragon', 'slayer', 'magic', 'wizard of oz', 'ned stark'];

console.log(mythical.sort((a, b) => a.length - b.length));
// Sort by length
// ['magic', 'dragon', 'slayer', 'ned stark', 'wizard of oz']

console.log(mythical.sort((a, b) => a.localeCompare(b)));
// Sort alphabetically
// ['dragon', 'magic', 'ned stark', 'slayer', 'wizard of oz']

// IMPLEMENT A WORD COUNTER LIST

// Create a function that generates an object of words (as keys) and the number of times the words occur in a string ordered by highest to lowest occurrences.

// Here’s some example input: practice makes perfect. get perfect by practice. just practice.

// Here’s the example output: { practice: 3, perfect: 2, makes: 1, get: 1, by: 1, just: 1 }.

function wordCount(sentence) {
  const words = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(' ');

  const countMap = words.reduce((acc, word) => {
    acc[word] = (acc[word] ?? 0) + 1;
    return acc;
  }, {});

  const sorted = Object.entries(countMap).sort((a, b) => b[1] - a[1]);

  const result = Object.fromEntries(
    sorted.map(([word, count]) => [word, String(count)])
  );

  return result;
}

console.log(
  wordCount('practice makes perfect. get perfect by practice. just practice.')
);
// { practice: 3, perfect: 2, makes: 1, get: 1, by: 1, just: 1 }.

/*
🧠 Why b[1] - a[1] and not b - a?
 -> `b[1] - a[1]` means we are sorting by value, in descending order.
 -> `b - a` would only work if a and b were numbers directly—not arrays like [key, value].

 Example:
 [['practice', 3], ['perfect', 2]].sort((a, b) => b[1] - a[1])

 Output: compares 2 and 3 --> 3 - 2 = 1 → "practice" stays before "perfect"

 If you used .sort((a, b) => a[1] - b[1]), you'd get ascending order instead.
*/

// Time Complexity = O(n + k log k)
// Where n is total number of characters
// And k is number of unique words
