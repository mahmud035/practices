import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    rating: 5,
    thumbnail: '',
  });
  // Get QueryClient from the context
  const queryClient = useQueryClient();

  //* Add New Product (POST)
  const { mutateAsync: postMutateAsync } = useMutation({
    mutationFn: async (newProduct) => {
      return await axios.post(`http://localhost:3000/products`, newProduct);
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast.success('Product added successfully!');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...product, id: crypto.randomUUID().toString() };
    postMutateAsync(newData); // call the mutateAsync function
  };

  //* handle form data using single event handler
  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === 'number'
        ? event.target.valueAsNumber
        : event.target.value;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  return (
    <div className="col-span-1 p-2 m-2 bg-gray-100 h-1/2">
      <h2 className="my-2 text-2xl text-center">Add a Product</h2>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={product?.title}
          onChange={handleChange}
          className="p-2 my-2 border rounded"
          placeholder="Enter a product title"
        />
        <textarea
          name="description"
          value={product?.description}
          onChange={handleChange}
          className="p-2 my-2 border rounded"
          placeholder="Enter a product description"
        />

        <input
          type="number"
          name="price"
          value={product?.price}
          onChange={handleChange}
          className="p-2 my-2 border rounded"
          placeholder="Enter a product price"
        />
        <input
          type="text"
          name="thumbnail"
          value={product?.thumbnail}
          onChange={handleChange}
          className="p-2 my-2 border rounded"
          placeholder="Enter a product thumbnail URL"
        />

        <button
          type="submit"
          className="px-3 py-2 m-auto mt-2 text-xl text-white bg-black rounded-md"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
