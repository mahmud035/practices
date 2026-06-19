export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoList {
  add: (text: string) => Todo;
  remove: (id: number) => void;
  toggle: (id: number) => void;
  getAll: () => Todo[];
  getCompleted: () => Todo[];
}

let nextId = 1;

export function createTodoList(): TodoList {
  const items: Todo[] = [];

  return {
    add(text: string): Todo {
      if (!text.trim()) {
        throw new Error('Todo text cannot be empty');
      }
      const todo: Todo = { id: nextId++, text, completed: false };
      items.push(todo);
      return todo;
    },

    remove(id: number): void {
      const index = items.findIndex((item) => item.id === id);
      if (index === -1) {
        throw new Error(`Todo with id ${id} not found`);
      }
      items.splice(index, 1);
    },

    toggle(id: number): void {
      const todo = items.find((item) => item.id === id);
      if (!todo) {
        throw new Error(`Todo with id ${id} not found`);
      }
      todo.completed = !todo.completed;
    },

    getAll(): Todo[] {
      return items;
    },

    getCompleted(): Todo[] {
      return items.filter((item) => item.completed);
    },
  };
}
