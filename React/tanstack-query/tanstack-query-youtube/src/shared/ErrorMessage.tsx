import { useGetTodosQuery } from '../api/todo/todo.hook';

export default function ErrorMessage() {
  const getTodosQuery = useGetTodosQuery();

  return (
    <p className="p-12 text-xl font-bold text-center text-red-500">
      Error: {getTodosQuery.error?.message}
    </p>
  );
}
