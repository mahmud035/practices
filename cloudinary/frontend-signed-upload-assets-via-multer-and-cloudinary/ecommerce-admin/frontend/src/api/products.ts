import { http } from '../lib/http';

export type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  tags: string[];
  category: string;
  inStock: boolean;
  image: {
    status: 'pending' | 'ready' | 'failed';
    public_id?: string;
    url?: string;
    width?: number;
    height?: number;
    format?: string;
    bytes?: number;
    attempts: number;
    lastError?: string;
    updatedAt?: string;
  };
  createdAt: string;
  updatedAt: string;
};

type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data: T;
  count?: number;
};

export async function listProducts() {
  const res = await http.get<ApiResponse<Product[]>>('/products');
  return res.data.data;
}

export async function getProduct(id: string) {
  const res = await http.get<ApiResponse<Product>>(`/products/${id}`);
  return res.data.data;
}

export async function createProduct(payload: {
  title: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  inStock?: boolean;
}) {
  const res = await http.post<ApiResponse<Product>>('/products', payload);
  return res.data.data;
}

export async function deleteProduct(id: string) {
  const res = await http.delete<ApiResponse<{ deletedId: string }>>(
    `/products/${id}`
  );
  return res.data.data;
}

export async function getUploadSignature(productId: string) {
  const res = await http.post<
    ApiResponse<{
      cloudName: string;
      apiKey: string;
      timestamp: number;
      signature: string;
      folder: string;
      publicId: string;
    }>
  >(`/products/${productId}/image/signature`);
  return res.data.data;
}

export async function confirmProductImage(
  productId: string,
  payload: {
    public_id: string;
    secure_url: string;
    width?: number;
    height?: number;
    format?: string;
    bytes?: number;
  }
) {
  const res = await http.patch<ApiResponse<Product>>(
    `/products/${productId}/image/confirm`,
    payload
  );
  return res.data.data;
}

export async function markImageFailed(productId: string, reason: string) {
  await http.patch(`/products/${productId}/image/failed`, { reason });
}
