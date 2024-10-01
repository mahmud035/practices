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
const ShoppingCart2 = () => {
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

  // NOTE: ektu bujhar ache
  const handleDecreaseClick = (productId) => {
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1,
        };
      } else {
        return product;
      }
    });

    nextProducts = nextProducts.filter((product) => product.count > 0);
    setProducts(nextProducts);
  };

  return (
    <div>
      <hr />
      <h3>Challenge 2 of 4: Remove an item from the shopping cart</h3>

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
            </button>{' '}
            <button onClick={() => handleDecreaseClick(product.id)}> – </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart2;
