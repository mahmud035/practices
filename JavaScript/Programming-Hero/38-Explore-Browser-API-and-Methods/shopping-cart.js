'use strict';

const getInputValueById = (id) => {
  const inputField = document.getElementById(id);
  const inputValue = inputField.value;
  inputField.value = '';
  return inputValue;
};

document.getElementById('btn-add-to-cart').addEventListener('click', () => {
  const productName = getInputValueById('product-name');
  const quantity = getInputValueById('product-quantity');
  console.log(productName, quantity);

  //* display product on UI
  addProductToDisplay(productName, quantity);

  //* save product to localStorage
  saveProductToLocalStorage(productName, quantity);
});

const addProductToDisplay = (productName, quantity) => {
  const productContainer = document.getElementById('product-container');

  const li = document.createElement('li');
  li.innerText = ` ${productName} : ${quantity}`;

  productContainer.appendChild(li);
};

const getShoppingCartFromLocalStorage = () => {
  let cart = JSON.parse(localStorage.getItem('cart'))
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
  return cart;
};

const saveProductToLocalStorage = (productName, quantity) => {
  const cart = getShoppingCartFromLocalStorage();

  //* create product object
  const product = {
    name: productName,
    quantity: quantity,
  };
  //* add product object to cart Array
  cart.push(product);

  //* save cart Array to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
};

//* display Stored Product By Default (when page is reloaded)
const displayStoredProducts = () => {
  const cart = getShoppingCartFromLocalStorage();
  console.log(cart);

  cart.forEach((product) => {
    console.log(product);
    const productName = product.name;
    const quantity = product.quantity;
    addProductToDisplay(productName, quantity);
  });
};
displayStoredProducts();
