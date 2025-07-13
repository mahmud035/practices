function linearSearch(arr, target) {
  return arr.indexOf(target) !== -1 ? arr.indexOf(target) : -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // Output: -1

// Time Complexity: O(n) - Linear Time Complexity
// Linear time complexity, represented as O(n), occurs when the execution time of an algorithm grows linearly with the input size. This means that as the input size increases, the time required to complete the algorithm increases proportionally. Linear time complexity is often seen in algorithms that involve a single loop iterating through the input data.
