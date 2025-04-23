function mergeSort(array) {
  if (array.length <= 1) return array; // Base case: array is now sorted since it's just 1 element

  const midPoint = Math.floor(array.length / 2);
  const leftArray = array.slice(0, midPoint);
  const rightArray = array.slice(midPoint);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray.shift()); // Remove the first element from leftArray and add it to sortedArray
    } else {
      sortedArray.push(rightArray.shift()); // Remove the first element from rightArray and add it to sortedArray
    }
  }

  return [...sortedArray, ...leftArray, ...rightArray]; // Concatenate any remaining elements from leftArray and rightArray
}

console.log(mergeSort([8, 20, -2, 4, -6])); // [-6, -2, 4, 8, 20]

// Time Complexity: O(n log n)

// Reference LinK: https://www.youtube.com/watch?v=3j0SWDX4AtU (Bro Code)
