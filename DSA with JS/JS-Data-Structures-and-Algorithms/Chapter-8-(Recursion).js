function countDownToZero(n) {
  if (n < 0) return; // base case. stop the function
  console.log(n);
  return countDownToZero(n - 1); // count down 1
}

countDownToZero(10); // 10 9 8 7 6 5 4 3 2 1 0

//* Fibonacci Sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ...

// Iterative Solution: Fibonacci Sequence
// O(n) - Linear Time Complexity

function getNthFibo(n) {
  if (n <= 1) return n;
  let sum = 0,
    last = 1,
    lastLast = 0;

  for (let i = 1; i < n; i++) {
    sum = last + lastLast;
    lastLast = last;
    last = sum;
  }
  return sum;
}

console.log(getNthFibo(5)); // 5
console.log(getNthFibo(7)); // 13
console.log(getNthFibo(10)); // 55

// Recursive Solution: Fibonacci Sequence
// O(2^n) - Exponential Time Complexity

function recursiveGetNthFibo(n) {
  if (n <= 1) return n; // base case
  return recursiveGetNthFibo(n - 1) + recursiveGetNthFibo(n - 2);
}

console.log(recursiveGetNthFibo(5)); // 5
console.log(recursiveGetNthFibo(7)); // 13
console.log(recursiveGetNthFibo(10)); // 55

/*
                    fib(5)
                  /        \
             fib(4)        fib(3)
            /     \        /     \
         fib(3)  fib(2)  fib(2)  fib(1)
        /    \     |      |       |
     fib(2) fib(1) fib(1) fib(0) fib(0)
     ...
*/

// Fibonacci Sequence: Tail Recursion
// O(n) - Linear Time Complexity

function getNthFiboBetter(n, lastLast = 0, last = 1) {
  if (n === 0) return lastLast;
  if (n === 1) return last;
  return getNthFiboBetter(n - 1, last, lastLast + last);
}

console.log(getNthFiboBetter(5)); // Output: 5
console.log(getNthFiboBetter(7)); // Output: 13
console.log(getNthFiboBetter(10)); // Output: 55

// Pascal’s Triangle
// O(2^n)

function pascalTriangle(row, col) {
  if (col === 0) return 1;
  else if (row === 0) return 0;
  else {
    return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
  }
}

console.log(pascalTriangle(5, 2)); // 10

/*
    Row 0:         1
    Row 1:       1   1
    Row 2:     1   2   1
    Row 3:   1   3   3   1
    Row 4: 1   4   6   4   1
    Row 5:1  5  10  10  5  1
*/

//* ------- Exercise Solutions -------

// CONVERT DECIMAL (BASE 10) TO BINARY NUMBER

// O(log n) - Time complexity is logarithmic because the recursive call divides the n by 2, which makes the algorithm fast.

function base10ToString(n) {
  let binaryString = '';

  function base10ToStringHelper(n) {
    // base case
    if (n < 2) {
      binaryString += n;
      return;
    } else {
      // First, break the number by dividing it by 2 (move to the next digit)
      // Then, add the remainder (0 or 1) after the deeper calls finish
      base10ToStringHelper(Math.floor(n / 2));
      base10ToStringHelper(n % 2);
    }
  }
  base10ToStringHelper(n);

  return binaryString;
}

const decimalNum = 232;
console.log(base10ToString(decimalNum)); // 11101000
console.log(decimalNum.toString(2)); // 11101000 (built-in method)

/*
 📘 What the code does:
 1. It recursively divides n by 2 until n < 2.
 2. Once it hits the base case (n < 2), it starts returning back up the stack.
 3. On the way up, it builds the binary string by appending the remainders (n % 2).
*/

/*
🔄 Execution flow for n = 232:

base10ToStringHelper(232)
↳ base10ToStringHelper(116)
  ↳ base10ToStringHelper(58)
    ↳ base10ToStringHelper(29)
      ↳ base10ToStringHelper(14)
        ↳ base10ToStringHelper(7)
          ↳ base10ToStringHelper(3)
            ↳ base10ToStringHelper(1)
              ➜ base case: append '1'
            ➜ base10ToStringHelper(1 % 2 = 1) ➜ append '1'
          ➜ base10ToStringHelper(3 % 2 = 1) ➜ append '1'
        ➜ base10ToStringHelper(7 % 2 = 1) ➜ append '0'
      ➜ base10ToStringHelper(14 % 2 = 0) ➜ append '1'
    ➜ base10ToStringHelper(29 % 2 = 1) ➜ append '0'
  ➜ base10ToStringHelper(58 % 2 = 0) ➜ append '0'
➜ base10ToStringHelper(116 % 2 = 0) ➜ append '0'
➜ base10ToStringHelper(232 % 2 = 0) ➜ append '0'

*/

// PRINT ALL PERMUTATIONS OF AN ARRAY

// O(n!) - There are n! permutations, and it creates n! call stacks.

function swap(strArr, index1, index2) {
  const temp = strArr[index1];
  strArr[index1] = strArr[index2];
  strArr[index2] = temp;
}

function permute(strArr, begin, end) {
  if (begin === end) {
    console.log(strArr);
  } else {
    for (let i = begin; i <= end; i++) {
      swap(strArr, begin, i);
      permute(strArr, begin + 1, end);
      swap(strArr, begin, i); // backtrack
    }
  }
}

function permuteArray(strArr) {
  permute(strArr, 0, strArr.length - 1);
}

permuteArray(['A', 'C', 'D']);
// ["A", "C", "D"]
// ["A", "D", "C"]
// ["C", "A", "D"]
// ["C", "D", "A"]
// ["D", "C", "A"]
// ["D", "A", "C"]

// FLATTEN AN OBJECT

// O(n) - Each property is visited only once and stored once per n properties.

function flattenDictionary(dictionary) {
  const flattenedDictionary = {};

  function flattenDictionaryHelper(dictionary, propName) {
    if (typeof dictionary !== 'object') {
      flattenedDictionary[propName] = dictionary;
      return;
    }

    for (const prop in dictionary) {
      if (propName === '') {
        flattenDictionaryHelper(dictionary[prop], propName + prop);
      } else {
        flattenDictionaryHelper(dictionary[prop], propName + '.' + prop);
      }
    }
  }

  flattenDictionaryHelper(dictionary, '');
  return flattenDictionary;
}

// WRITE A PROGRAM THAT RECURSIVELY DETERMINES IF A STRING IS A PALINDROME

// 🧠 The idea behind this one is that with two indexes (one in front and one in back) you check at each step until the front and back meet - which is also known as `Two-Pointer Approach`

// O(n)

function isPalindromeRecursive(word) {
  // Input validation
  if (typeof word !== 'string') return false;

  // Call helper function with initial positions
  return isPalindromeHelper(word, 0, word.length - 1);
}

function isPalindromeHelper(word, beginPos, endPos) {
  // Base case: when pointers meet or cross over
  if (beginPos >= endPos) return true;

  // Compare characters at both ends
  if (word.charAt(beginPos) !== word.charAt(endPos)) return false;

  // Recursive step: move closer to the center
  return isPalindromeHelper(word, beginPos + 1, endPos - 1);
}

console.log(isPalindromeRecursive('hi')); // false
console.log(isPalindromeRecursive('iii')); // true
console.log(isPalindromeRecursive('ii')); // true
console.log(isPalindromeRecursive('aibohphobia')); // true
console.log(isPalindromeRecursive('racecar')); // true
console.log(isPalindromeRecursive('')); // true (empty string is a palindrome)
console.log(isPalindromeRecursive(12321)); // false (not a string)
