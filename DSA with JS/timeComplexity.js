// NOTE: Reference Links:
// 1. https://www.perplexity.ai/search/dsa-with-js-FFYXee2lRmyenRJzNaqb.g
// 2. https://www.doabledanny.com/big-o-notation-in-javascript
// 3. https://adrianmejia.com/how-to-find-time-complexity-of-an-algorithm-code-big-o-notation/
// 4. https://chat.deepseek.com/a/chat/s/a8c66268-304f-452c-b712-8a781b9fcd47

/**
 * What is Time Complexity?
 * ✅ Amount of work the CPU has to do (time complexity) as the input size grows (towards infinity).
 * ✅ Big O = Big Order function. Drop constants and lower order terms. E.g. O(3*n^2 + 10n + 10) becomes O(n^2).
 * ✅ Big O notation cares about the worst-case scenario.
 */

// O(1) - Constant Time Complexity: An algorithm with O(1) complexity takes the same amount of time to execute regardless of the input size.

// As long as you have a fixed number of operations, it will be constant time, even if we have 1 or 100 of these statements.

// In JavaScript, operations like accessing an array element by index, object property access, or performing basic arithmetic operations all have constant time complexity. These operations execute in the same amount of time regardless of whether you're working with small or large data sets.

function getFirstElement(array) {
  return array[0]; // O(1) operation
}

function isEven(number) {
  return number % 2 === 0; // O(1) operation
}

function getUserName(user) {
  return user.name; // O(1) operation
}

// O(n) - Linear Time Complexity: Linear time complexity, expressed as O(n), means that the execution time of an algorithm increases linearly with the size of the input. In other words, if the input size doubles, the algorithm will take approximately twice as long to complete.

// The most common examples of linear time complexity in JavaScript involve iterating through an array or string once. Here are some examples:

// For Loop Example

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// This function has O(n) time complexity because it iterates through each element of the array exactly once. As the array size increases, the time required increases proportionally.

// While Loop Example

function findElement(arr, target) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === target) return i;
    i++;
  }
  return -1;
}

// This linear search algorithm has O(n) time complexity. In the worst case (when the target element is not in the array), it needs to check every element once.

// Linear Search Example

function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }
  return -1;
}

// This is a classic example of an O(n) algorithm. The time spent to finish processing the data is directly proportional to the size of the input array.

// O(n²) - Quadratic Time Complexity: Quadratic time complexity, represented as O(n²), occurs when the execution time of an algorithm grows proportionally to the square of the input size. This typically happens when we have nested loops, with each loop iterating through the input.

// As the input size increases, algorithms with O(n²) complexity become significantly slower. If the input size doubles, the execution time roughly quadruples. This makes quadratic time algorithms impractical for large data sets.

// Nested Loops Example

function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

// In this example, for each element in the array, we iterate through the entire array again. With an array of length n, this results in n² operations, giving us O(n²) time complexity.

// Duplicate Check Example

function containsDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

// This function checks for duplicates by comparing every pair of elements in the array. For an array of length n, the number of comparisons is roughly n²/2, which simplifies to O(n²) in Big O notation.

// O(n²) algorithms should be avoided when dealing with large data sets. For sorting operations, more efficient algorithms like merge sort or quick sort (both O(n log n)) should be preferred. Similarly, for operations like finding duplicates, using data structures like Sets or Maps can reduce the time complexity to O(n).
