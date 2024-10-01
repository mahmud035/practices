import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const EditProduct = ({ editing, setEditing }) => {
  const [product, setProduct] = useState(editing || {});

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  //* Edit Product (PUT / PATCH)
  const { mutateAsync: editMutateAsync } = useMutation({
    mutationFn: async (updatedProduct) => {
      return await axios.patch(
        `http://localhost:3000/products/${updatedProduct.id}`,
        updatedProduct
      );
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      setEditing(null);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = { ...product, id: product.id };
    editMutateAsync(updatedData); // call the mutateAsync function
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
      <h2 className="my-2 text-2xl text-center">Edit Product</h2>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          className="p-2 my-2 border rounded"
          placeholder="Enter a product title"
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          className="p-2 my-2 border rounded"
          placeholder="Enter a product description"
        />

        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="p-2 my-2 border rounded"
          placeholder="Enter a product price"
        />
        <input
          type="text"
          name="thumbnail"
          value={product.thumbnail}
          onChange={handleChange}
          className="p-2 my-2 border rounded"
          placeholder="Enter a product thumbnail URL"
        />

        <div className="flex justify-between">
          <button
            onClick={() => setEditing(null)}
            type="submit"
            className="px-3 py-2 m-auto mt-2 text-xl text-white bg-red-500 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-3 py-2 m-auto mt-2 text-xl text-white bg-black rounded-md"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
