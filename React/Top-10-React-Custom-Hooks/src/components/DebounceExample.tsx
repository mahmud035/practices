import { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

export default function DebounceExample() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <div className="p-4 border rounded-lg">
      <h1 className="text-2xl font-medium pb-2">useDebounce</h1>

      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded"
        placeholder="Type something..."
      />
      <p className="mt-2">Debounced Value: {debouncedSearchTerm}</p>
    </div>
  );
}
