import React, { useState } from 'react';

const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
];

const ShoppingCart = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleIncreaseClick = (productId) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      })
    );
  };

  return (
    <div>
      <hr />
      <h3>Challenge 1 of 4: Update an item in the shopping cart</h3>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>)
            <button
              onClick={() => {
                handleIncreaseClick(product.id);
              }}
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
