'use strict';

/* ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। */

/* // find the smallest number in the array
const findArraySmallestNumber = (arr) => {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
};

const array = [70, 120, 111, 215, 330, 54, 78];
const smallestNumber = findArraySmallestNumber(array);
console.log(smallestNumber); */

/* ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।   */

/* // find the smallest of the three numbers
const findSmallest = (a, b, c) => {
  let smallest = a;
  if (b < smallest) {
    smallest = b;
  }
  if (c < smallest) {
    smallest = c;
  }
  return smallest;
};

const smallNumber = findSmallest(30, 20, 60);
console.log(smallNumber); */

/* ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। */

/* const findArrayAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const average = sum / arr.length;
  return average;
};

const array2 = [20, 120, 111, 215, 330, 54, 78];
const average = findArrayAverage(array2).toFixed(2);
console.log(`Average: ${average}`); */

/* ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।  */

/* // find area of an reactangle
const findArea = (length, width) => {
  return length * width;
};

const area = findArea(10, 20);
console.log(`Area: ${area}`); */

/* ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।  */

/* const secondMaxElement = (arr) => {
  let max = Math.max.apply(null, arr); // get the max of the array
  console.log(max);
  arr.splice(arr.indexOf(max), 1); // remove max from the array
  return Math.max.apply(null, arr); // get the 2nd max
};

const arr = [20, 120, 111, 215, 330, 54, 78];
const secondMaximum = secondMaxElement(arr);
console.log(`Second Maximum: ${secondMaximum}`); */
