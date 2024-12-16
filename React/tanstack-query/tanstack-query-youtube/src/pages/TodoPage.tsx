import { useState } from 'react';
import toast from 'react-hot-toast';
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from '../api/todo/todo.hook';
import ErrorMessage from '../shared/ErrorMessage';
import Loading from '../shared/Loading';
import { ITodo } from '../types/todo';
import { generateDefaultTodoFormValue } from '../utils';

export default function TodoPage() {
  const [formData, setFormData] = useState(generateDefaultTodoFormValue());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null); // Track which todo is being deleted

  const getTodosQuery = useGetTodosQuery();
  const addTodoMutation = useAddTodoMutation();
  const updateTodoMutation = useUpdateTodoMutation();
  const deleteTodoMutation = useDeleteTodoMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editingId) {
      // Update
      updateTodoMutation.mutate(formData, {
        onSuccess: () => {
          toast.success('Todo updated successfully');
          setFormData(generateDefaultTodoFormValue());
        },
      });
    } else {
      // Create
      addTodoMutation.mutate(formData, {
        onSuccess: () => {
          toast.success('Todo added successfully');
          setFormData(generateDefaultTodoFormValue());
        },
      });
    }

    setEditingId(null);
  };

  const handleEdit = (todo: ITodo) => {
    setEditingId(todo.id);
    setFormData({ ...todo });
  };

  const handleDeleteTodo = (id: string) => {
    setDeletingId(id); // Mark the todo being deleted
    deleteTodoMutation.mutate(id, {
      onSuccess: () => {
        toast.success('Todo deleted successfully');
        setDeletingId(null); // Reset the deleting state
      },
      onError: () => setDeletingId(null), // Reset the deleting state on error
    });
  };

  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">Todo Management</h1>
      <form
        onSubmit={handleSubmit}
        className="p-4 mb-6 bg-white rounded shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          {updateTodoMutation.isPending
            ? 'Updating Todo'
            : editingId
            ? 'Update Todo'
            : addTodoMutation.isPending
            ? 'Adding Todo'
            : 'Add Todo'}
        </button>
      </form>

      {/* TodoList */}
      <div className="bg-white rounded shadow-md">
        {getTodosQuery.isPending ? (
          <Loading />
        ) : getTodosQuery.isError ? (
          <ErrorMessage />
        ) : getTodosQuery.data.length > 0 ? (
          getTodosQuery.data.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between p-4 border-b"
            >
              <div>
                <h3 className="font-semibold">{todo.title}</h3>
                <p className="text-sm text-gray-500">{todo.description}</p>
              </div>
              <div>
                <button
                  onClick={() => handleEdit(todo)}
                  className="px-3 py-1 mr-2 text-white bg-yellow-500 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600 disabled:hover:bg-red-300 disabled:bg-red-300 disabled:cursor-not-allowed"
                  disabled={deletingId === todo.id} // Disable only the button for the todo being deleted
                >
                  {deletingId === todo.id ? 'Deleting Todo' : 'Delete'}
                </button>
              </div>
            </div>
          ))
        ) : (
          // Render a message if no todos are found
          <p className="p-12 text-xl font-bold text-center">No Todo Found!</p>
        )}
      </div>
    </>
  );
}
