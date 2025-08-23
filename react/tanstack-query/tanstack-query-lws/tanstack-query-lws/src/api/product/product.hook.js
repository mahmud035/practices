import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query';
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from './product.api';

//* Queries Hook
export const useGetProductsQuery = (page) => {
  return useQuery({
    queryKey: ['products', { page }],
    queryFn: () => getProducts(page),
    placeholderData: keepPreviousData,
  });
};

//* Mutations Hook
export const useAddProductMutation = () => {
  return useMutation({
    mutationFn: (newProduct) => addProduct(newProduct),
  });
};

export const useUpdateProductMutation = () => {
  return useMutation({
    mutationFn: (data) => updateProduct(data),
  });
};

export const useDeleteProductMutation = () => {
  return useMutation({
    mutationFn: (id) => deleteProduct(id),
  });
};
