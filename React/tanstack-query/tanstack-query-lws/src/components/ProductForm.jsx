import React from 'react';
import toast from 'react-hot-toast';
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from '../api/product/product.hook';
import { generateDefaultProductFormValue } from '../utils';

export default function ProductForm({
  formData,
  setFormData,
  editingId,
  setEditingId,
}) {
  const addProductMutation = useAddProductMutation();
  const updateProductMutation = useUpdateProductMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      // Update
      updateProductMutation.mutate(formData, {
        onSuccess: () => toast.success('Product updated successfully'),
      });
    } else {
      // Create
      addProductMutation.mutate(formData, {
        onSuccess: () => toast.success('Product added successfully'),
      });
    }

    setFormData(generateDefaultProductFormValue());
    setEditingId(null);
  };

  return (
    <div className="col-span-1 px-5 pt-2 pb-10 m-2 bg-gray-100 h-[500px]">
      <h2 className="my-2 text-2xl text-center">
        {editingId ? 'Update Product' : 'Add New Product'}
      </h2>

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData?.title}
          onChange={handleChange}
          className="p-2 my-2 border rounded"
          placeholder="Enter product title"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="p-2 my-2 border rounded"
          placeholder="Enter product description"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="p-2 my-2 border rounded"
          placeholder="Enter product price"
          min={10}
          max={2000}
        />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="p-2 my-2 border rounded"
          placeholder="Enter product rating"
          min={0}
          max={5}
        />
        <input
          type="text"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
          className="p-2 my-2 border rounded"
          placeholder="Enter product thumbnail URL"
        />

        <div className="flex justify-between">
          {editingId && (
            <button
              onClick={() => {
                setEditingId(null);
                setFormData(generateDefaultProductFormValue());
              }}
              type="submit"
              className="px-3 py-2 m-auto mt-4 text-xl text-white bg-red-500 rounded"
            >
              Cancel
            </button>
          )}

          <button
            type="submit"
            className={`px-3 py-2 m-auto mt-4 text-xl text-white rounded ${
              editingId
                ? 'bg-yellow-500 hover:bg-yellow-600'
                : 'bg-emerald-500 hover:bg-emerald-600'
            }`}
          >
            {editingId ? 'Update Product' : 'Add New Product'}
          </button>
        </div>
      </form>
    </div>
  );
}
