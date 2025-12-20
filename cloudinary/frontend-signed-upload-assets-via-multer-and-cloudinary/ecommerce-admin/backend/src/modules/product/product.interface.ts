export type ProductImageStatus = 'pending' | 'ready' | 'failed';

export interface ProductImage {
  status: ProductImageStatus;
  public_id?: string;
  url?: string;
  width?: number;
  height?: number;
  format?: string;
  bytes?: number;

  // observability/debug
  attempts: number;
  lastError?: string;
  updatedAt?: Date;
}

export interface ProductEntity {
  title: string;
  description: string;
  price: number;
  tags: string[];
  category: string;
  inStock: boolean;
  image: ProductImage;
}
