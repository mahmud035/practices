import React, { useCallback, useState } from 'react';
import type { CreateProductData, ProductImage } from '../api/products';
import { useCreateProduct } from '../hooks/useProducts';
import type { ImageUploadState } from './MultiImageUpload';
import { MultiImageUpload } from './MultiImageUpload';

interface ProductFormProps {
  onSuccess?: () => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    tags: '',
  });
  const [images, setImages] = useState<ImageUploadState[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const createMutation = useCreateProduct();

  // Check if all images are uploaded
  const allImagesUploaded =
    images.length > 0 && images.every((img) => img.status === 'success');
  const hasUploadingImages = images.some((img) => img.status === 'uploading');
  const hasErrorImages = images.some((img) => img.status === 'error');

  // Handler that supports both direct value and function updates
  const handleImagesChange = useCallback(
    (
      newImagesOrUpdater:
        | ImageUploadState[]
        | ((prev: ImageUploadState[]) => ImageUploadState[])
    ) => {
      if (typeof newImagesOrUpdater === 'function') {
        setImages((prev) => newImagesOrUpdater(prev));
      } else {
        setImages(newImagesOrUpdater);
      }

      // Clear error when images change
      if (errors.images) {
        setErrors((prev) => ({ ...prev, images: '' }));
      }
    },
    [errors.images]
  );

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
    if (images.length === 0) {
      newErrors.images = 'At least one product image is required';
    } else if (!allImagesUploaded) {
      newErrors.images = 'Please wait for all images to upload';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Convert image states to ProductImage format
    const productImages: ProductImage[] = images
      .filter((img) => img.cloudinary)
      .map((img, index) => ({
        public_id: img.cloudinary!.public_id,
        url: img.cloudinary!.url,
        isPrimary: index === 0,
      }));

    const productData: CreateProductData = {
      title: formData.title,
      description: formData.description,
      price: parseFloat(formData.price),
      category: formData.category,
      tags: formData.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
      images: productImages,
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

      // Clean up blob URLs
      images.forEach((img) => URL.revokeObjectURL(img.preview));
      setImages([]);

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
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Determine submit button state
  const getSubmitButtonState = () => {
    if (createMutation.isPending) {
      return { disabled: true, text: 'Creating Product...', icon: 'spinner' };
    }
    if (hasUploadingImages) {
      return { disabled: true, text: 'Uploading Images...', icon: 'spinner' };
    }
    if (hasErrorImages) {
      return { disabled: true, text: 'Fix Image Errors First', icon: 'error' };
    }
    if (images.length === 0) {
      return { disabled: false, text: 'Add Product', icon: null };
    }
    if (!allImagesUploaded) {
      return { disabled: true, text: 'Waiting for Upload...', icon: 'spinner' };
    }
    return { disabled: false, text: 'Add Product', icon: 'check' };
  };

  const buttonState = getSubmitButtonState();

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-sm"
    >
      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        Add New Product
      </h2>

      {/* Image upload - NOW AT THE TOP for better UX */}
      <MultiImageUpload
        maxImages={10}
        value={images}
        onChange={handleImagesChange}
      />
      {errors.images && (
        <p className="mt-1 text-sm text-red-500">{errors.images}</p>
      )}

      {/* Upload status indicator */}
      {images.length > 0 && (
        <div
          className={`flex items-center gap-2 p-3 rounded-md mb-5 text-sm
          ${
            allImagesUploaded
              ? 'bg-green-50 text-green-600'
              : 'bg-gray-100 text-gray-500'
          }`}
        >
          {hasUploadingImages && (
            <>
              <span className="w-3.5 h-3.5 border-2 border-gray-500 border-t-transparent rounded-full animate-spin" />
              Uploading images...
            </>
          )}
          {hasErrorImages && (
            <span className="text-red-600">Some images failed to upload</span>
          )}
          {allImagesUploaded && (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              All {images.length} image(s) uploaded to Cloudinary
            </>
          )}
        </div>
      )}

      <div className="mb-5">
        <label htmlFor="title" className="block mb-2 font-medium text-gray-700">
          Product Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter product title"
          className={`w-full px-3 py-3 border rounded-md text-base transition-colors
            focus:outline-none focus:border-blue-500 focus:ring-[3px] focus:ring-blue-500/10
            ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.title && (
          <span className="block mt-1 text-sm text-red-500">
            {errors.title}
          </span>
        )}
      </div>

      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 font-medium text-gray-700"
        >
          Description *
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter product description"
          rows={4}
          className={`w-full px-3 py-3 border rounded-md text-base transition-colors resize-y
            focus:outline-none focus:border-blue-500 focus:ring-[3px] focus:ring-blue-500/10
            ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.description && (
          <span className="block mt-1 text-sm text-red-500">
            {errors.description}
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="mb-5">
          <label
            htmlFor="price"
            className="block mb-2 font-medium text-gray-700"
          >
            Price ($) *
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="0.00"
            step="0.01"
            min="0"
            className={`w-full px-3 py-3 border rounded-md text-base transition-colors
              focus:outline-none focus:border-blue-500 focus:ring-[3px] focus:ring-blue-500/10
              ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.price && (
            <span className="block mt-1 text-sm text-red-500">
              {errors.price}
            </span>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="category"
            className="block mb-2 font-medium text-gray-700"
          >
            Category *
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className={`w-full px-3 py-3 border rounded-md text-base transition-colors
              focus:outline-none focus:border-blue-500 focus:ring-[3px] focus:ring-blue-500/10
              ${errors.category ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Select category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home & Garden</option>
            <option value="sports">Sports & Outdoors</option>
            <option value="books">Books</option>
          </select>
          {errors.category && (
            <span className="block mt-1 text-sm text-red-500">
              {errors.category}
            </span>
          )}
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="tags" className="block mb-2 font-medium text-gray-700">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleInputChange}
          placeholder="e.g., new, featured, sale"
          className="w-full px-3 py-3 border border-gray-300 rounded-md text-base transition-colors
            focus:outline-none focus:border-blue-500 focus:ring-[3px] focus:ring-blue-500/10"
        />
      </div>

      <button
        type="submit"
        className={`w-full py-3.5 text-white border-none rounded-md text-base font-medium
          cursor-pointer transition-all flex items-center justify-center gap-2
          disabled:bg-blue-300 disabled:cursor-not-allowed
          ${
            buttonState.icon === 'check'
              ? 'bg-emerald-500 hover:bg-emerald-600'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        disabled={buttonState.disabled}
      >
        {buttonState.icon === 'spinner' && (
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        )}
        {buttonState.icon === 'check' && (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
        {buttonState.text}
      </button>

      {createMutation.isError && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-600">
          Failed to create product. Please try again.
        </div>
      )}

      {createMutation.isSuccess && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md text-green-600">
          Product created successfully!
        </div>
      )}
    </form>
  );
};
