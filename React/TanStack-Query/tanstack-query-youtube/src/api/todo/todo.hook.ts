import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ITodo } from '../../types/todo';
import { addTodo, deleteTodo, getTodo, getTodos, updateTodo } from './todo.api';

//* Queries Hook
export const useGetTodosQuery = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });
};

export const useGetTodoQuery = (id: string) => {
  return useQuery({
    queryKey: ['todos', { id }],
    queryFn: () => getTodo(id),
  });
};

/**
 * NOTE: If I want my mutation to stay in `loading` state while my related queries update, I have two options:
 * 1. `return` the result of `invalidateQueries` from the callback or
 * 2. use `async...await` on callback function.
 * Link: https://tkdodo.eu/blog/mastering-mutations-in-react-query#awaited-promises
 */

//* Mutations Hook
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
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
