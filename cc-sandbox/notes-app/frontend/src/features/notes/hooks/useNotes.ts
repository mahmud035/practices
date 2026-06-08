import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from '../../../lib/axios';
import { Note } from '../types/note.types';

interface ApiResponse<T> {
  data: T;
}

const fetchNotes = async (): Promise<Note[]> => {
  const res = await api.get<ApiResponse<Note[]>>('/notes');
  return res.data.data;
};

const createNote = async (payload: { title: string; body: string }): Promise<Note> => {
  const res = await api.post<ApiResponse<Note>>('/notes', payload);
  return res.data.data;
};

const updateNote = async ({
  id,
  payload,
}: {
  id: string;
  payload: { title?: string; body?: string };
}): Promise<Note> => {
  const res = await api.put<ApiResponse<Note>>(`/notes/${id}`, payload);
  return res.data.data;
};

const deleteNote = async (id: string): Promise<void> => {
  await api.delete(`/notes/${id}`);
};

export const useNotes = () =>
  useQuery({ queryKey: ['notes'], queryFn: fetchNotes });

export const useCreateNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createNote,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notes'] }),
  });
};

export const useUpdateNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateNote,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notes'] }),
  });
};

export const useDeleteNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteNote,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notes'] }),
  });
};
