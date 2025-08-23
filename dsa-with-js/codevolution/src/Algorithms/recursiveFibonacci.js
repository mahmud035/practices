function recursiveFibonacci(n) {
  if (n <= 1) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // Output: 0
console.log(recursiveFibonacci(1)); // Output: 1
console.log(recursiveFibonacci(6)); // Output: 8
console.log(recursiveFibonacci(7)); // Output: 13

// Time Complexity: O(2^n) Exponential Time Complexity
// The time complexity of this recursive Fibonacci function is O(2^n) because it makes two recursive calls for each value of n. This results in an exponential growth in the number of function calls as n increases. For example, for n = 5, there are 15 function calls; for n = 10, there are 89 function calls; and for n = 20, there are 6765 function calls. This rapid growth makes the algorithm inefficient for large values of n.
