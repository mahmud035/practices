function cartesianProduct(array1, array2) {
  const arrays = [];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      arrays.push([array1[i], array2[j]]);
    }
  }

  return arrays;
}

console.log(cartesianProduct([1, 2], [3, 4])); // [[1, 3], [1, 4], [2, 3], [2, 4]]

// Time Complexity: 0(n * m) where n is the length of the first array and m is the length of the second array.
