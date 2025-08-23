'use strict';

/* একটা ডিসকাউন্ট ক্যালকুলেটর এর প্রাকটিস দিয়েছি। সেটা করো। যেখানে একটা প্রাইস লেখা থাকবে এবং একটা বাটন আছে। সেটাতে ক্লিক করলে প্রাইস ৩০% কমে যাবে। এইটার আরেকটু এডভান্সড ভার্সন হবে। তুমি যেদিন Apply বাটনে ক্লিক করবে তখন যদি পাশের টেক্সট বক্স এ DOM লেখা থাকে তাহলে ডিসকাউন্ট কাজ করবে। প্রাইস ৩০% কমবে। আর যদি DOM না লিখে অন্য কিছু লিখে। যেমন ধরো dom বা drum বা অন্য কিছু। তাহলে ডিসকাউন্ট কাজ হবে না।  */

const inputFieldElement = document.getElementById('coupon-field');
const priceElement = document.getElementById('price-value');

document.getElementById('btn-apply-coupon').addEventListener('click', () => {
  const couponCode = inputFieldElement.value;
  inputFieldElement.value = '';
  const previousPrice = parseFloat(priceElement.innerText);

  if (couponCode === 'DOM') {
    const discountPrice = previousPrice * (30 / 100);
    const newPrice = previousPrice - discountPrice;
    priceElement.innerText = newPrice;
    inputFieldElement.setAttribute('disabled', true); // INFO: disable input field after apply coupon code successfully.
    return;
  } else {
    alert('Coupon Code is invalid');
  }
});
