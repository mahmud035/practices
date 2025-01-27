type ArrayType = number[];

const array1: ArrayType = [1, 2, 3, 4, 5];
const array2: ArrayType = [2, 4, 6, 8];

function getSimilarElement(arr1: ArrayType, arr2: ArrayType): ArrayType {
  const newArray: ArrayType = [];

  for (const element of arr1) {
    if (arr2.includes(element)) {
      newArray.push(element);
    }
  }

  return newArray;
}

console.log(getSimilarElement(array1, array2));
