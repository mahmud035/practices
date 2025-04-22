function isPowerOfTwo(n) {
  if (n < 1) return false; // 0 and negative numbers are not powers of 2
  while (n > 1) {
    if (n % 2 !== 0) return false; // If n is not divisible by 2, it's not a power of 2
    n = n / 2; // Divide n by 2
  }
  return true; // If we reach 1, n is a power of 2
}

console.log(isPowerOfTwo(1)); // true (2^0 = 1)
console.log(isPowerOfTwo(2)); // true (2^1 = 2)
console.log(isPowerOfTwo(3)); // false (not a power of 2)
console.log(isPowerOfTwo(4)); // true (2^2 = 4)

// Time Complexity: O(log n) - Logarithmic Time Complexity
// The time complexity of this function is O(log n) because the input size is halved in each iteration. This is typical for algorithms that involve dividing the problem space in half, such as "binary search" or "checking powers of two".
