import useLocalStorage from '../hooks/useLocalStorage';

export default function LocalStorageExample() {
  const [name, setName] = useLocalStorage<string>('name', '');

  return (
    <div className="p-4 border rounded-lg">
      <h1 className="text-2xl font-medium pb-2">useLocalStorage</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
        placeholder="Enter your name"
      />
      <p className="mt-2">Stored Name: {name}</p>
    </div>
  );
}
