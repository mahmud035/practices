"use strict";
const product1 = { name: 'monitor', price: 11000, quantity: 1 };
const product2 = { name: 'laptop', price: 56000, quantity: 1 };
const products2 = [product1, product2];
// console.log(products2);
function calculateTotalPrice(products) {
    let totalPrice = 0;
    if (Array.isArray(products)) {
        products.forEach((product) => {
            totalPrice = totalPrice + product.price;
        });
    }
    return totalPrice;
}
console.log(calculateTotalPrice(products2));
