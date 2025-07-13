function climbingStaircase(n) {
  const noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
}

console.log(climbingStaircase(1)); // Output: 1
console.log(climbingStaircase(2)); // Output: 2
console.log(climbingStaircase(3)); // Output: 3
console.log(climbingStaircase(4)); // Output: 5
console.log(climbingStaircase(5)); // Output: 8

// Time Complexity: O(n) - Linear Time Complexity
