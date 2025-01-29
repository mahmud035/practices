import { useState } from 'react';
import usePrevious from '../hooks/usePrevious';

export default function PreviousExample() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div className="p-4 border rounded-lg">
      <h1 className="text-2xl font-medium pb-2">usePrevious</h1>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
      <p className="mt-2">Current: {count}</p>
      <p>Previous: {prevCount}</p>
    </div>
  );
}
