import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ITodo } from '../../types/todo';
import { addTodo, deleteTodo, getTodos, updateTodo } from './todo.api';

// Queries Hook
export const useGetTodosQuery = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });
};

// Mutations Hook
export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newTodo: ITodo) => addTodo(newTodo),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ITodo) => updateTodo(data),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteTodo(id),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
