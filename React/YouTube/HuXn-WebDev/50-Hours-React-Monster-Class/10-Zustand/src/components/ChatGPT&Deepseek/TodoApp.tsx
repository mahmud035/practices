import { useState } from 'react';
import useTodoStore from '../../stores/todoStore';

export default function TodoApp() {
  const { todos, addTodo, removeTodo, clearTodos } = useTodoStore();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Todo App</h1>

      {/* Add Todo Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Add a New Todo</h2>
        <div className="flex gap-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter a todo"
            className="border border-gray-300 p-2 rounded-lg flex-grow"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </div>
      </div>

      {/* Todo List Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Todo List</h2>
        {todos.length === 0 ? (
          <p className="text-gray-500">No todos yet. Add one!</p>
        ) : (
          <>
            <ul>
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b border-gray-200 py-2"
                >
                  <span className="text-lg">{todo}</span>
                  <button
                    onClick={() => removeTodo(index)}
                    className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={clearTodos}
              className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-700 transition-colors"
            >
              Clear All
            </button>
          </>
        )}
      </div>
    </div>
  );
}
