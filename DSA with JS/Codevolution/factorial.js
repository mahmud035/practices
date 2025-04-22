function factorial(n) {
  if (n === 0 || n === 1) return 1; // Base case: factorial of 0 or 1 is 1
  return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120

// Time Complexity: 0(n) - Linear Time Complexity
// The time complexity of the factorial function is O(n) because it makes n recursive calls before reaching the base case. Each call involves a multiplication operation, and as n increases, the number of operations grows linearly. For example, for n = 5, there are 5 multiplications; for n = 10, there are 10 multiplications. This linear growth makes the algorithm efficient for calculating factorials of relatively small numbers.
