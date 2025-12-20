import { useState } from 'react';
import type { Product } from '../api/products';
import { useDeleteProduct, useProducts } from '../hooks/useProducts';
import DeleteConfirmation from './DeleteConfirmation';

export default function ProductList() {
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
      const result = await deleteMutation.mutateAsync(productToDelete._id);
      setDeleteSuccess(
        `"${productToDelete.title}" has been deleted. Image (${result.deletedImageId}) removed from Cloudinary.`
      );
      setProductToDelete(null);

      // Clear success message after 5 seconds
      setTimeout(() => setDeleteSuccess(null), 5000);
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="loading">
        <div className="loading__spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-state">
        <p>Failed to load products. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      <h2 className="product-list__title">
        Products ({products?.length || 0})
      </h2>

      {deleteSuccess && (
        <div className="product-list__success">✓ {deleteSuccess}</div>
      )}

      {products?.length === 0 ? (
        <div className="product-list__empty">
          <p>No products yet. Add your first product above!</p>
        </div>
      ) : (
        <div className="product-list__grid">
          {products?.map((product) => (
            <div key={product._id} className="product-card">
              <div className="product-card__image-container">
                <img
                  src={product.image.url}
                  alt={product.title}
                  className="product-card__image"
                  loading="lazy"
                />
                {/* Image loaded from Cloudinary indicator */}
                <span
                  className="product-card__cloudinary-badge"
                  title="Served from Cloudinary CDN"
                >
                  ☁️
                </span>
              </div>

              <div className="product-card__content">
                <h3 className="product-card__title">{product.title}</h3>
                <p className="product-card__description">
                  {product.description.length > 100
                    ? `${product.description.substring(0, 100)}...`
                    : product.description}
                </p>

                <div className="product-card__meta">
                  <span className="product-card__price">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="product-card__category">
                    {product.category}
                  </span>
                </div>

                {product.tags.length > 0 && (
                  <div className="product-card__tags">
                    {product.tags.map((tag) => (
                      <span key={tag} className="product-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="product-card__actions">
                  <button className="product-card__btn product-card__btn--edit">
                    Edit
                  </button>
                  <button
                    className="product-card__btn product-card__btn--delete"
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
        isDeleting={deleteMutation.isPending}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setProductToDelete(null)}
      />

      <style>{`
        .product-list {
          padding: 2rem;
        }

        .product-list__title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #111827;
        }

        .product-list__success {
          padding: 1rem;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 0.5rem;
          color: #16a34a;
          margin-bottom: 1.5rem;
        }

        .product-list__empty {
          text-align: center;
          padding: 3rem;
          background: #f9fafb;
          border-radius: 0.5rem;
          color: #6b7280;
        }

        .product-list__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .product-card {
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: box-shadow 0.2s;
        }

        .product-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .product-card__image-container {
          position: relative;
          aspect-ratio: 1;
          background: #f3f4f6;
        }

        .product-card__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-card__cloudinary-badge {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: white;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .product-card__content {
          padding: 1rem;
        }

        .product-card__title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.5rem;
        }

        .product-card__description {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.75rem;
          line-height: 1.5;
        }

        .product-card__meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .product-card__price {
          font-size: 1.25rem;
          font-weight: 700;
          color: #059669;
        }

        .product-card__category {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          background: #f3f4f6;
          border-radius: 1rem;
          color: #4b5563;
          text-transform: capitalize;
        }

        .product-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .product-card__tag {
          font-size: 0.75rem;
          padding: 0.125rem 0.5rem;
          background: #eff6ff;
          color: #2563eb;
          border-radius: 0.25rem;
        }

        .product-card__actions {
          display: flex;
          gap: 0.5rem;
        }

        .product-card__btn {
          flex: 1;
          padding: 0.5rem;
          border: none;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
        }

        .product-card__btn--edit {
          background: #f3f4f6;
          color: #374151;
        }

        .product-card__btn--edit:hover {
          background: #e5e7eb;
        }

        .product-card__btn--delete {
          background: #fef2f2;
          color: #dc2626;
        }

        .product-card__btn--delete:hover {
          background: #fee2e2;
        }

        .loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          color: #6b7280;
        }

        .loading__spinner {
          width: 2rem;
          height: 2rem;
          border: 3px solid #e5e7eb;
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin-bottom: 1rem;
        }

        .error-state {
          padding: 2rem;
          text-align: center;
          color: #dc2626;
          background: #fef2f2;
          border-radius: 0.5rem;
          margin: 2rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
