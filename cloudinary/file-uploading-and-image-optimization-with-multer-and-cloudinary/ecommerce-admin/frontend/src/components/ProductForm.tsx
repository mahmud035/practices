import { useState } from 'react';
import type { CreateProductData } from '../api/products';
import { useCreateProduct } from '../hooks/useProducts';
import ImageUpload from './ImageUpload';

interface ProductFormProps {
  onSuccess?: () => void;
}

export default function ProductForm({ onSuccess }: ProductFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    tags: '',
  });
  const [image, setImage] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const createMutation = useCreateProduct();

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Valid price is required';
    }
    if (!formData.category.trim()) {
      newErrors.category = 'Category is required';
    }
    if (!image) {
      newErrors.image = 'Product image is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || !image) return;

    const productData: CreateProductData = {
      title: formData.title,
      description: formData.description,
      price: parseFloat(formData.price),
      category: formData.category,
      tags: formData.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
      image,
    };

    try {
      await createMutation.mutateAsync(productData);

      // Reset form
      setFormData({
        title: '',
        description: '',
        price: '',
        category: '',
        tags: '',
      });
      setImage(null);

      onSuccess?.();
    } catch (error) {
      console.error('Failed to create product:', error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2 className="product-form__title">Add New Product</h2>

      <ImageUpload
        onFileSelect={(file) => {
          setImage(file);
          if (errors.image) {
            setErrors((prev) => ({ ...prev, image: '' }));
          }
        }}
        error={errors.image}
      />

      <div className="product-form__field">
        <label htmlFor="title">Product Title *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter product title"
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <span className="error-text">{errors.title}</span>}
      </div>

      <div className="product-form__field">
        <label htmlFor="description">Description *</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter product description"
          rows={4}
          className={errors.description ? 'error' : ''}
        />
        {errors.description && (
          <span className="error-text">{errors.description}</span>
        )}
      </div>

      <div className="product-form__row">
        <div className="product-form__field">
          <label htmlFor="price">Price ($) *</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="0.00"
            step="0.01"
            min="0"
            className={errors.price ? 'error' : ''}
          />
          {errors.price && <span className="error-text">{errors.price}</span>}
        </div>

        <div className="product-form__field">
          <label htmlFor="category">Category *</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className={errors.category ? 'error' : ''}
          >
            <option value="">Select category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home & Garden</option>
            <option value="sports">Sports & Outdoors</option>
            <option value="books">Books</option>
          </select>
          {errors.category && (
            <span className="error-text">{errors.category}</span>
          )}
        </div>
      </div>

      <div className="product-form__field">
        <label htmlFor="tags">Tags (comma-separated)</label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleInputChange}
          placeholder="e.g., new, featured, sale"
        />
      </div>

      <button
        type="submit"
        className="product-form__submit"
        disabled={createMutation.isPending}
      >
        {createMutation.isPending ? (
          <>
            <span className="spinner"></span>
            Uploading...
          </>
        ) : (
          'Add Product'
        )}
      </button>

      {createMutation.isError && (
        <div className="product-form__error">
          Failed to create product. Please try again.
        </div>
      )}

      {createMutation.isSuccess && (
        <div className="product-form__success">
          Product created successfully! Image uploaded to Cloudinary.
        </div>
      )}

      <style>{`
        .product-form {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .product-form__title {
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          font-weight: 600;
          color: #111827;
        }

        .product-form__field {
          margin-bottom: 1.25rem;
        }

        .product-form__field label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #374151;
        }

        .product-form__field input,
        .product-form__field textarea,
        .product-form__field select {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        .product-form__field input:focus,
        .product-form__field textarea:focus,
        .product-form__field select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .product-form__field input.error,
        .product-form__field textarea.error,
        .product-form__field select.error {
          border-color: #ef4444;
        }

        .error-text {
          display: block;
          margin-top: 0.25rem;
          font-size: 0.875rem;
          color: #ef4444;
        }

        .product-form__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .product-form__submit {
          width: 100%;
          padding: 0.875rem;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 0.375rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .product-form__submit:hover:not(:disabled) {
          background: #2563eb;
        }

        .product-form__submit:disabled {
          background: #93c5fd;
          cursor: not-allowed;
        }

        .spinner {
          width: 1rem;
          height: 1rem;
          border: 2px solid white;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .product-form__error {
          margin-top: 1rem;
          padding: 0.75rem;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 0.375rem;
          color: #dc2626;
        }

        .product-form__success {
          margin-top: 1rem;
          padding: 0.75rem;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 0.375rem;
          color: #16a34a;
        }
      `}</style>
    </form>
  );
}
