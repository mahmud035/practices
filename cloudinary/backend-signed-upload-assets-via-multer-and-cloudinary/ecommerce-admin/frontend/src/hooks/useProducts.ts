import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  type CreateProductData,
} from '../api/products';

// Query key factory for consistency
export const productKeys = {
  all: ['products'] as const,
  detail: (id: string) => ['products', id] as const,
};

/**
 * Hook to fetch all products
 */
export const useProducts = () => {
  return useQuery({
    queryKey: productKeys.all,
    queryFn: getProducts,
  });
};

/**
 * Hook to fetch single product
 */
export const useProduct = (id: string) => {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => getProduct(id),
    enabled: !!id, // Only fetch if id exists
  });
};

/**
 * Hook to create a product
 */
export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      // Invalidate products list to refetch
      queryClient.invalidateQueries({ queryKey: productKeys.all });
    },
  });
};

/**
 * Hook to update a product
 */
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<CreateProductData>;
    }) => updateProduct(id, data),
    onSuccess: (updatedProduct) => {
      // Update cache with new data
      queryClient.setQueryData(
        productKeys.detail(updatedProduct._id),
        updatedProduct
      );
      queryClient.invalidateQueries({ queryKey: productKeys.all });
    },
  });
};

/**
 * Hook to delete a product
 */
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: (result) => {
      // Remove from cache
      queryClient.removeQueries({
        queryKey: productKeys.detail(result.deletedProductId),
      });
      queryClient.invalidateQueries({ queryKey: productKeys.all });
    },
  });
};
