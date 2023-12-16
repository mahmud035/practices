document.getElementById('sixteenGB').addEventListener('click', function () {
  /*    const memoryCost = document.getElementById('memory-cost');
  memoryCost.innerText = 200;

  const bestPrice = document.getElementById('best-price').innerText;
  const memoryPrice = document.getElementById('memory-cost').innerText;
  const storagePrice = document.getElementById('storage-cost').innerText;
  const deliveryPrice = document.getElementById('delivery-cost').innerText;

  const totalPrice =
    parseFloat(bestPrice) +
    parseFloat(memoryPrice) +
    parseFloat(storagePrice) +
    parseFloat(deliveryPrice);

  const total = document.getElementById('total-price');
  console.log(total);
  total.innerText = totalPrice; */
  updatePrice('memory-cost', 200);
});

function onClick(clickId, updateId, price) {
  document.getElementById(clickId).addEventListener('click', function () {
    updatePrice(updateId, price);
  });
}

// Update Memory cost
onClick('eightGB', 'memory-cost', 0);
onClick('sixteenGB', 'memory-cost', 300);
// Update Storage cost
onClick('ssd1', 'storage-cost', 0);
onClick('ssd2', 'storage-cost', 400);
onClick('ssd3', 'storage-cost', 700);
// Update Delivery option
onClick('free-delivery', 'delivery-cost', 0);
onClick('paid-delivery', 'delivery-cost', 20);

function updatePrice(updateId, price) {
  const extraCost = document.getElementById(updateId);
  extraCost.innerText = price;

  const bestPrice = document.getElementById('best-price').innerText;
  const memoryPrice = document.getElementById('memory-cost').innerText;
  const storagePrice = document.getElementById('storage-cost').innerText;
  const deliveryPrice = document.getElementById('delivery-cost').innerText;

  const totalPrice =
    parseFloat(bestPrice) +
    parseFloat(memoryPrice) +
    parseFloat(storagePrice) +
    parseFloat(deliveryPrice);

  const total = document.getElementById('total-price');
  total.innerText = totalPrice;
}

const fakeCode = 'pHero';
document.getElementById('apply-btn').addEventListener('click', function () {
  const promoCode = document.getElementById('promo-input').value;
  if (promoCode === fakeCode) {
    const total = document.getElementById('total-price');
    let totalPrice = parseFloat(total.innerText);

    const discount = totalPrice * 0.2;

    totalPrice = totalPrice - discount;
    total.innerText = totalPrice;
  } else {
  }
});
