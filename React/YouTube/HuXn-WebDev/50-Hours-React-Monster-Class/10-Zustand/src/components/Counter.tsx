import useCounterStore from '../stores/counterStore';

export default function Counter() {
  const { count, increment, decrement } = useCounterStore(); // Get state and actions from the store

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-semibold mb-4">Counter</h2>
      <p className="text-xl mb-4">Count: {count}</p>
      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
