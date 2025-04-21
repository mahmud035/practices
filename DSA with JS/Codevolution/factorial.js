function factorial(n) {
  if (n === 0 || n === 1) return 1; // Base case: factorial of 0 or 1 is 1
  return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
}

console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// Time Complexity: 0(n) - Linear Time Complexity
