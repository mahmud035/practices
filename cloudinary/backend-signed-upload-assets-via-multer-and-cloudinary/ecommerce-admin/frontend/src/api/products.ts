import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Types
export interface ProductImage {
  public_id: string;
  url: string;
  isPrimary?: boolean;
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  images: ProductImage[];
  primaryImage?: ProductImage;
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
  images: ProductImage[];
}

export interface UploadedImage {
  public_id: string;
  url: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

// Product API Functions

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<ApiResponse<Product[]>>('/products');
  return response.data.data;
};

export const getProduct = async (id: string): Promise<Product> => {
  const response = await api.get<ApiResponse<Product>>(`/products/${id}`);
  return response.data.data;
};

export const createProduct = async (
  data: CreateProductData
): Promise<Product> => {
  const response = await api.post<ApiResponse<Product>>('/products', {
    ...data,
    price: data.price.toString(),
    tags: JSON.stringify(data.tags),
    images: data.images,
  });
  return response.data.data;
};

export const updateProduct = async (
  id: string,
  data: Partial<CreateProductData>
): Promise<Product> => {
  const response = await api.put<ApiResponse<Product>>(`/products/${id}`, {
    ...data,
    price: data.price?.toString(),
    tags: data.tags ? JSON.stringify(data.tags) : undefined,
  });
  return response.data.data;
};

export const deleteProduct = async (
  id: string
): Promise<{ deletedProductId: string }> => {
  const response = await api.delete<ApiResponse<{ deletedProductId: string }>>(
    `/products/${id}`
  );
  return response.data.data;
};

// Upload API Functions

export const uploadImage = async (
  file: File,
  onProgress?: (progress: number) => void
): Promise<UploadedImage> => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await api.post<ApiResponse<UploadedImage>>(
    '/upload/image',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total && onProgress) {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          onProgress(progress);
        }
      },
    }
  );

  return response.data.data;
};

export const uploadMultipleImages = async (
  files: File[],
  onProgress?: (fileIndex: number, progress: number) => void
): Promise<UploadedImage[]> => {
  const results: UploadedImage[] = [];

  for (let i = 0; i < files.length; i++) {
    const result = await uploadImage(files[i], (progress) => {
      onProgress?.(i, progress);
    });
    results.push(result);
  }

  return results;
};

// Fixed: Use request body instead of URL param for publicId with slashes
export const deleteUploadedImage = async (publicId: string): Promise<void> => {
  await api.delete('/upload/image', {
    data: {
      publicId,
    },
  });
};
