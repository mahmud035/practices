import { ITodo } from '../../types/todo';
import axios from '../index';

export const getTodos = async (): Promise<ITodo[]> => {
  const { data } = await axios.get('/todos');
  return data;
};

export const addTodo = async (newTodo: ITodo) => {
  return await axios.post('/todos', newTodo);
};

export const updateTodo = async (data: ITodo) => {
  return await axios.put(`/todos/${data.id}`, data);
};

export const deleteTodo = async (id: string) => {
  return await axios.delete(`todos/${id}`);
};
