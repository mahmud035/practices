"use strict";
const products = [
    { id: 1, name: 'Vivo 21e', price: 26000, category: 'mobile' },
    { id: 2, name: 'Asus X556U', price: 56000, category: 'laptop' },
    { id: 3, name: 'logitech k380', price: 2700, category: 'keyboard' },
    { id: 4, name: 'hp 22fw', price: 11000, category: 'monitor' },
];
function getSpecificProduct(products, criteria) {
    if (Array.isArray(products)) {
        const requiredProduct = products.filter((p) => p.category === criteria);
        return requiredProduct;
    }
}
console.log(getSpecificProduct(products, 'monitor'));
