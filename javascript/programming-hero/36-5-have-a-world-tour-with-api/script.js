'use strict';

/* ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।  */

/* const someObject = {
  text: 'InshaAllah I will do it',
  type: 'Object',
  data: [
    {
      id: 1,
      name: 'Object-1',
      type: 'Object',
      attributes: {
        color: 'red',
        size: 'big',
        arr: [1, 2, 3, 4, 5],
      },
    },
    {
      id: 2,
      name: 'Object-2',
      type: 'Object',
      attributes: {},
    },
  ],
  prices: [200, 300],
  total: function () {
    return `${this.prices[0] + this.prices[1]}`;
  },
}; */

/* ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।  */

/* const someObject = {
  text: 'InshaAllah I will do it',
  type: 'Object',
  data: [
    {
      id: 1,
      name: 'Object-1',
      type: 'Object',
      attributes: {
        color: 'red',
        size: 'big',
        arr: [1, 2, 3, 4, 5],
      },
    },
    {
      id: 2,
      name: 'Object-2',
      type: 'Object',
      attributes: {},
    },
  ],
  prices: [200, 300],
  total: function () {
    return `${this.prices[0] + this.prices[1]}`;
  },
};

const tempString = `name: ${someObject.data[0].name}, array-element: ${someObject.data[0].attributes.arr[4]}, prices: ${someObject.prices[1]},`;

const totalPrice = `totalPrice:${someObject.total()}`;

console.log(tempString, totalPrice); */

/* ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে।  */

/* const arrowFunc1 = () => 89;
console.log(arrowFunc1()); */

/* ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ৭ দিয়ে ভাগ করে ভাগফল রিটার্ন করবে।  */

/* const arrowFunc2 = (num) => num / 7;
console.log(arrowFunc2(7)); */

/* ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।  */

/* const arrowFunc3 = (num1, num2) => (num1 + num2) / 2;
console.log(arrowFunc3(10,20)); */

/* ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। */

/* const arrowFunc4 = (num1, num2) => {
  num1 += 7;
  num2 += 7;
  return num1 + num2;
};
console.log(arrowFunc4(3, 5)); */

/* ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  */

/* const numbers = [7, 14, 21, 35, 63, 70, 56, 77];

const multiplyNumbers = numbers.map((number) => number / 7);
console.log(multiplyNumbers); */

/* ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে। */

/* const person = {
  id: 101,
  name: 'John',
  age: 21,
};

const { name, age } = person;
console.log(name, age); */

/* const balances = [100, 200, 300, 400];
const [, balance] = balances;
console.log(balance);
 */

/* ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।  */

const loadPhotos = () => {
  fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((response) => response.json())
    .then((data) => displayPhotos(data));
};

const displayPhotos = (photos) => {
  const first20Photos = photos.slice(0, 20);
  const photosContainer = document.getElementById('photos');

  first20Photos.forEach((photo) => {
    // console.log(photo);
    const div = document.createElement('div');
    div.className = 'col-md-4 mb-3';

    div.innerHTML = `
      <div class = "card  h-100" >
        <img src = "${photo.url}" class="card-img-top" >
        <div class = "card-body">
            <h5 class = "card-title">${photo.title}</h5>
            <p class = "card-text"></p>
            <button onclick = "loadSinglePhoto('${photo.id}')">See Details</button>
        </div>
      </div>`;
    photosContainer.appendChild(div);
  });
};

const loadSinglePhoto = (photoId) => {
  const url = `https://jsonplaceholder.typicode.com/photos/${photoId}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displaySinglePhoto(data));
};

const displaySinglePhoto = (singlePhoto) => {
  console.log(singlePhoto);
  const singlePhotoContainer = document.getElementById('single-photo');
  singlePhotoContainer.textContent = ''; // remove previous photo
  const div = document.createElement('div');
  div.classList.add();
  div.innerHTML = `
     <div class = "card  h-100 mb-4" >
       Main image: <img src = "${singlePhoto.url}" class="card-img-top mb-4" >
      Thumblain image: <img src = "${singlePhoto.thumbnailUrl}" class="card-img-top" >
        <div class = "card-body">
            <h5 class = "card-title">Title: ${singlePhoto.title}</h5>
            <p class = "card-text"></p>
        </div>
      </div>`;
  singlePhotoContainer.appendChild(div);
};
