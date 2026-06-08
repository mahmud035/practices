import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import api from '../../../lib/axios';
import type { ApiResponse, IMedia } from '../types/media.types';

const MEDIA_KEY = ['media'] as const;

export const useMediaList = () =>
  useQuery<IMedia[]>({
    queryKey: MEDIA_KEY,
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<IMedia[]>>('/media');
      return data.data;
    },
  });

export const useUploadMedia = () => {
  const queryClient = useQueryClient();
  const [uploadProgress, setUploadProgress] = useState(0);

  const mutation = useMutation<IMedia, Error, File>({
    mutationFn: async (file: File) => {
      setUploadProgress(0);
      const formData = new FormData();
      formData.append('image', file);

      const { data } = await api.post<ApiResponse<IMedia>>('/media/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (event) => {
          if (event.total) {
            setUploadProgress(Math.round((event.loaded * 100) / event.total));
          }
        },
      });

      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MEDIA_KEY });
      setUploadProgress(0);
    },
    onError: () => {
      setUploadProgress(0);
    },
  });

  return { ...mutation, uploadProgress };
};

export const useDeleteMedia = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: async (id: string) => {
      await api.delete(`/media/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MEDIA_KEY });
    },
  });
};
