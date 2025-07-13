import React from 'react';

const ProductCard = () => {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      <img
        className="h-48 w-full object-cover"
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
      />
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold">Living room Sofa</h3>
        <p className="mt-2 text-base text-gray-600">
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces, earthy toned spaces and for people who love a chic design with
          a sprinkle of vintage design.
        </p>
        <p className="mt-2 text-2xl font-bold text-blue-600">$450</p>
      </div>
      <hr className="border-gray-300" />
      <div className="px-6 py-4">
        <button className="rounded bg-blue-500 py-2 px-4 font-semibold text-white hover:bg-blue-600">
          Buy now
        </button>
        <button className="ml-2 font-semibold text-blue-500 hover:text-blue-600">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
