import { useState } from 'react';

// AddToCartForm component
const AddToCartForm = ({ id, title, addToCart }) => {
  const formAction = async (formData) => {
    try {
      await addToCart(formData, title);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      action={formAction}
      className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
    >
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <input type="hidden" name="itemID" value={id} className="hidden" />
      <button
        type="submit"
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Add to Cart
      </button>
    </form>
  );
};

// CartDisplay component
const CartDisplay = ({ cart }) => {
  if (cart.length === 0) {
    return null;
  }

  return (
    <>
      <h2 className="my-4 text-xl font-bold">Your Cart:</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <hr className="my-4" />
    </>
  );
};

// ShoppingCart component
const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = async (formData, title) => {
    const id = String(formData.get('itemID'));
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    setCart((prevCart) => [...prevCart, { id, title }]);
    return { id };
  };

  return (
    <>
      <CartDisplay cart={cart} />
      <AddToCartForm
        id="1"
        title="JavaScript: The Definitive Guide"
        addToCart={addToCart}
      />
      <AddToCartForm
        id="2"
        title="JavaScript: The Good Parts"
        addToCart={addToCart}
      />
    </>
  );
};

export { ShoppingCart as ActionExample2 };
