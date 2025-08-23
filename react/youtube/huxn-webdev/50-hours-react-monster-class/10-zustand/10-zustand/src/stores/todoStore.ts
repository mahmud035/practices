import { produce } from 'immer';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the type for the store
interface ITodoStore {
  todos: string[];
  addTodo: (todo: string) => void;
  removeTodo: (index: number) => void;
  clearTodos: () => void;
}

// Create the store
// const useTodoStore = create<ITodoStore>()((set) => ({
//   todos: [],
//   addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
//   removeTodo: (index) =>
//     set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
//   clearTodos: () => set({ todos: [] }),
// }));

// Create the store with persist middleware
// const useTodoStore = create<ITodoStore>()(
//   persist(
//     (set) => ({
//       todos: [],
//       addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
//       removeTodo: (index) =>
//         set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
//       clearTodos: () => set({ todos: [] }),
//     }),
//     { name: 'todo-storage' } // Unique name for localStorage
//   )
// );

// Create the store with persist middleware and immer
const useTodoStore = create<ITodoStore>()(
  persist(
    (set) => ({
      todos: [],

      addTodo: (todo: string) =>
        set(
          produce((state: ITodoStore) => {
            state.todos.push(todo);
          })
        ),

      removeTodo: (index: number) =>
        set(
          produce((state: ITodoStore) => {
            state.todos.splice(index, 1);
          })
        ),

      clearTodos: () => set({ todos: [] }),
    }),
    { name: 'todo-storage' } // Unique name for localStorage
  )
);

export default useTodoStore;
