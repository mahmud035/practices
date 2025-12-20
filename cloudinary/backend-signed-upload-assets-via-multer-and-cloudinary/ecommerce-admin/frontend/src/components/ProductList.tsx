// client/src/components/ProductList.tsx

import React, { useState } from 'react';
import type { Product } from '../api/products';
import { useDeleteProduct, useProducts } from '../hooks/useProducts';
import { DeleteConfirmation } from './DeleteConfirmation';
import { ImageGallery } from './ImageGallery';

export const ProductList: React.FC = () => {
  const { data: products, isLoading, error } = useProducts();
  const deleteMutation = useDeleteProduct();

  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [deleteSuccess, setDeleteSuccess] = useState<string | null>(null);

  const handleDeleteClick = (product: Product) => {
    setProductToDelete(product);
  };

  const handleDeleteConfirm = async () => {
    if (!productToDelete) return;

    try {
      await deleteMutation.mutateAsync(productToDelete._id);
      setDeleteSuccess(
        `"${productToDelete.title}" and ${productToDelete.images.length} image(s) deleted successfully.`
      );
      setProductToDelete(null);
      setTimeout(() => setDeleteSuccess(null), 5000);
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-gray-500">
        <div className="w-8 h-8 border-3 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-4" />
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-600 bg-red-50 rounded-lg m-8">
        <p>Failed to load products. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">
        Products ({products?.length || 0})
      </h2>

      {deleteSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-600 mb-6">
          ✓ {deleteSuccess}
        </div>
      )}

      {products?.length === 0 ? (
        <div className="text-center p-12 bg-gray-50 rounded-lg text-gray-500">
          <p>No products yet. Add your first product above!</p>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
          {products?.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Image Gallery */}
              <div className="relative">
                <ImageGallery
                  images={product.images}
                  productTitle={product.title}
                />
                {product.images.length > 1 && (
                  <span className="absolute top-2 left-2 px-2 py-1 bg-black/60 text-white text-xs rounded z-10">
                    {product.images.length} images
                  </span>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                  {product.description.length > 100
                    ? `${product.description.substring(0, 100)}...`
                    : product.description}
                </p>

                <div className="flex justify-between items-center mb-3">
                  <span className="text-xl font-bold text-emerald-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600 capitalize">
                    {product.category}
                  </span>
                </div>

                {product.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                    Edit
                  </button>
                  <button
                    className="flex-1 py-2 bg-red-50 text-red-600 rounded-md text-sm font-medium hover:bg-red-100 transition-colors"
                    onClick={() => handleDeleteClick(product)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <DeleteConfirmation
        isOpen={!!productToDelete}
        productTitle={productToDelete?.title || ''}
        imageCount={productToDelete?.images.length || 0}
        isDeleting={deleteMutation.isPending}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setProductToDelete(null)}
      />
    </div>
  );
};
