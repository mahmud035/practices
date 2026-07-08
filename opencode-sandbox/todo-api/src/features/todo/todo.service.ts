import { Todo } from './todo.interface.js';

let todos: Todo[] = [];

export const todoService = {
  findAll: (): Todo[] => {
    return todos;
  },
  create: (title: string): Todo => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    todos.push(newTodo);
    return newTodo;
  },
  update: (
    id: string,
    updates: Partial<Omit<Todo, 'id'>>,
  ): Todo | undefined => {
    const index = todos.findIndex((t) => t.id === id);
    if (index === -1) return undefined;
    const updatedTodo = { ...todos[index], ...updates } as Todo;
    todos[index] = updatedTodo;
    return updatedTodo;
  },
  delete: (id: string): boolean => {
    const initialLength = todos.length;
    todos = todos.filter((t) => t.id !== id);
    return todos.length !== initialLength;
  },
};
