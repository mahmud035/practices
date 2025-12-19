import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Create axios instance with base config
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Types
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
  count?: number;
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: {
    public_id: string;
    url: string;
  };
  tags: string[];
  category: string;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductData {
  title: string;
  description: string;
  price: number;
  tags: string[];
  category: string;
  image: File;
}

// API Functions

/**
 * Get all products
 */
export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<ApiResponse<Product[]>>('/products');
  return response.data.data;
};

/**
 * Get single product
 */
export const getProduct = async (id: string): Promise<Product> => {
  const response = await api.get<ApiResponse<Product>>(`/products/${id}`);
  return response.data.data;
};

/**
 * Create a new product
 * Uses FormData because we're uploading a file
 */
export const createProduct = async (
  data: CreateProductData
): Promise<Product> => {
  const formData = new FormData();

  // Append text fields
  formData.append('title', data.title);
  formData.append('description', data.description);
  formData.append('price', data.price.toString());
  formData.append('category', data.category);
  formData.append('tags', JSON.stringify(data.tags));

  // Append file - the key 'image' must match the multer field name
  formData.append('image', data.image);

  const response = await api.post<ApiResponse<Product>>('/products', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data.data;
};

/**
 * Update a product
 */
export const updateProduct = async (
  id: string,
  data: Partial<CreateProductData>
): Promise<Product> => {
  const formData = new FormData();

  if (data.title) formData.append('title', data.title);
  if (data.description) formData.append('description', data.description);
  if (data.price) formData.append('price', data.price.toString());
  if (data.category) formData.append('category', data.category);
  if (data.tags) formData.append('tags', JSON.stringify(data.tags));
  if (data.image) formData.append('image', data.image);

  const response = await api.put<ApiResponse<Product>>(
    `/products/${id}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return response.data.data;
};

/**
 * Delete a product
 */
export const deleteProduct = async (
  id: string
): Promise<{ deletedProductId: string; deletedImageId: string }> => {
  const response = await api.delete<
    ApiResponse<{ deletedProductId: string; deletedImageId: string }>
  >(`/products/${id}`);
  return response.data.data;
};
