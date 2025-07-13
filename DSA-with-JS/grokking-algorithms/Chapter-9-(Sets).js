// NOTE: A set is a group of unordered unique elements.

const exampleSet = new Set();

// Insertion: O(1)
exampleSet.add(1); // exampleSet: Set {1}
exampleSet.add(1); // exampleSet: Set {1}
exampleSet.add(2); // exampleSet: Set {1, 2}

// Deletion: O(1)
exampleSet.delete(1); // true
console.log(exampleSet); // exampleSet: Set {2}

// Contains: O(1)
exampleSet.add(3); // exampleSet: Set {2, 3}
exampleSet.has(1); // false
exampleSet.has(2); // true
exampleSet.has(3); // true
exampleSet.has(4); // false

// Intersection: The intersection of two sets consists of the common elements between those two sets.

// O(n) - One loop
function intersectSets(setA, setB) {
  const intersection = new Set();

  for (const element of setA) {
    if (setB.has(element)) intersection.add(element);
  }
  return intersection;
}

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
console.log(intersectSets(setA, setB)); // Set {2, 3}

// isSuper: A set is a “superset” of another set if it contains all the elements of the other set.

// This is implemented simply by checking whether the other set contains all the elements of the reference set.

// O(n) - One loop
function isSuperSet(setA, subset) {
  for (const element of subset) {
    if (!setA.has(element)) return false;
  }
  return true;
}

const setC = new Set([5]);
isSuperSet(setA, setB); // true - because setA has all elements that setB does
isSuperSet(setA, setC); // false - because setA does not contain 5 which setC contains

// Union: The union of two sets combines the elements from both sets.

// O(n) - One loop
function unionSet(setA, setB) {
  const union = new Set(setA);

  for (const element of setB) {
    union.add(element);
  }
  return union;
}

unionSet(setA, setB); // Set {1, 2, 3, 4}
unionSet(setA, setC); // Set {1, 2, 3, 4, 5}

// Difference: The difference of set A from set B is all of the elements in set A that are not in set B.

// O(n) - One loop
function differenceSet(setA, setB) {
  const difference = new Set();

  for (const element of setA) {
    if (!setB.has(element)) difference.add(element);
  }
  return difference;
}

differenceSet(setA, setB); // Set {1, 4}

//* ------- Exercise Solutions -------

// USING SETS TO CHECK FOR DUPLICATES IN AN ARRAY

// Check whether there are any duplicates in an array of integers using sets. By converting the array into a set, the size of the set can be compared with the length of the array to check for duplicates easily.

// O(n) - In an array of length n, this function has to iterate through the entire array in the worst case.

function checkDuplicates(arr) {
  const mySet = new Set(arr);
  return mySet.size < arr.length;
}

console.log(checkDuplicates([1, 2, 3, 4, 5])); // false
console.log(checkDuplicates([1, 1, 2, 3, 4, 5])); // true

// RETURNING ALL UNIQUE VALUES FROM SEPARATE ARRAYS

// O(n + m) - where n is the length of arr1 and m is the length of arr2. This is because all elements inside both arrays need to be iterated through.

function uniqueList(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

uniqueList([1, 1, 2, 2], [2, 3, 4, 5]); // [1,2,3,4,5]
uniqueList([1, 2], [3, 4, 5]); // [1,2,3,4,5]
uniqueList([], [2, 2, 3, 4, 5]); // [2,3,4,5]
