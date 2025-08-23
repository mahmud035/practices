import useFetch from '../hooks/useFetch';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function FetchExample() {
  const { data, loading, error } = useFetch<IPost>('/posts/1');

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-4 border rounded-lg">
      <h1 className="text-2xl font-medium pb-2">useFetch</h1>

      {data && (
        <pre className="whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
