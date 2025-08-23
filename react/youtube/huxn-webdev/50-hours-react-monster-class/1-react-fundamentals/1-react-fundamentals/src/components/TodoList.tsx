import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const todo = (form.elements.namedItem('newTodo') as HTMLInputElement).value;

    setTodos((prevTodos) => [...prevTodos, todo]);
    form.reset();
  };

  return (
    <div>
      <h2>Todo List</h2>

      <ol>
        {todos.map((todo) => (
          <li key={crypto.randomUUID()}>{todo}</li>
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" name="newTodo" placeholder="Add new todo" />
        <button type="submit">Add New Todo</button>
      </form>
    </div>
  );
}
