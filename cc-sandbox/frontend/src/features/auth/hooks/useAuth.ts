import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from '../../../lib/axios';
import { ApiResponse, User } from '../types/auth.types';

const fetchMe = async (): Promise<User | null> => {
  try {
    const res = await api.get<ApiResponse<User>>('/auth/me');
    return res.data.data;
  } catch {
    return null;
  }
};

export const useMe = () =>
  useQuery({ queryKey: ['me'], queryFn: fetchMe, retry: false });

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { name: string; email: string; password: string }) => {
      const res = await api.post<ApiResponse<User>>('/auth/register', payload);
      return res.data.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['me'] }),
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { email: string; password: string }) => {
      const res = await api.post<ApiResponse<User>>('/auth/login', payload);
      return res.data.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['me'] }),
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => api.post('/auth/logout'),
    onSuccess: () => queryClient.setQueryData(['me'], null),
  });
};
