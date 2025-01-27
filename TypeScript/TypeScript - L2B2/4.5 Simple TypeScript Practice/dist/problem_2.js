"use strict";
const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 4, 6, 8];
function getSimilarElement(arr1, arr2) {
    const newArray = [];
    for (const element of arr1) {
        if (arr2.includes(element)) {
            newArray.push(element);
        }
    }
    return newArray;
}
console.log(getSimilarElement(array1, array2));
