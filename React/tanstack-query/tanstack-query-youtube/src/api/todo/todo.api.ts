import { ITodo } from '../../types/todo';
import axios from '../index';

export const getTodos = async (): Promise<ITodo[]> => {
  const { data } = await axios.get('/todos');
  return data;
};

export const getTodo = async (id: string): Promise<ITodo> => {
  return (await axios.get(`/todos/${id}`)).data;
};

export const addTodo = async (newTodo: ITodo): Promise<ITodo> => {
  return (await axios.post('/todos', newTodo)).data;
};

export const updateTodo = async (data: ITodo): Promise<ITodo> => {
  return (await axios.put(`/todos/${data.id}`, data)).data;
};

export const deleteTodo = async (id: string): Promise<ITodo> => {
  return (await axios.delete(`/todos/${id}`)).data;
};
