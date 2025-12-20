import { useMutation, useQuery } from '@tanstack/react-query';
import {
  confirmProductImage,
  createProduct,
  deleteProduct,
  getUploadSignature,
  listProducts,
  markImageFailed,
} from '../api/products';
import { uploadToCloudinaryWithRetry } from '../lib/cloudinaryUpload';
import { qk } from './keys';

export function useProducts() {
  return useQuery({
    queryKey: qk.products,
    queryFn: listProducts,
  });
}

export function useDeleteProduct() {
  return useMutation({
    mutationFn: deleteProduct,
  });
}

export function useCreateProductWithImage() {
  return useMutation({
    mutationFn: async (input: {
      title: string;
      description: string;
      price: number;
      category: string;
      tags: string[];
      image: File;
      inStock?: boolean;
      onProgress?: (pct: number) => void;
    }) => {
      // Step 1: create product
      const product = await createProduct({
        title: input.title,
        description: input.description,
        price: input.price,
        category: input.category,
        tags: input.tags,
        inStock: input.inStock ?? true,
      });

      try {
        // Step 2: signature
        const signed = await getUploadSignature(product._id);

        // Step 3: direct upload to Cloudinary (retry + timeout)
        const uploaded = await uploadToCloudinaryWithRetry(
          input.image,
          signed,
          {
            maxRetries: 2,
            timeoutMs: 20_000,
            onProgress: input.onProgress,
          }
        );

        // Step 4: confirm
        const updated = await confirmProductImage(product._id, uploaded);
        return updated;
      } catch (e: any) {
        await markImageFailed(product._id, e?.message || 'Upload failed');
        throw e;
      }
    },
  });
}
