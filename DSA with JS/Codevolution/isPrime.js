function isPrime(n) {
  if (n <= 1) return false; // 0 and 1 are not prime numbers
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false; // n is divisible by i, hence not prime
  }
  return true; // n is prime if no divisors were found
}

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false

// Time Complexity: 0(sqrt(n)) - Square Root Time Complexity
