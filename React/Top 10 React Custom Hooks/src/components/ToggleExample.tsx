import useToggle from '../hooks/useToggle';

export default function ToggleExample() {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <div className="p-4 border rounded-lg">
      <h1 className="text-2xl font-medium pb-2">useToggle</h1>

      <button
        onClick={toggleIsOn}
        className={`px-4 py-2 rounded text-white ${
          isOn ? 'bg-green-500' : 'bg-red-500'
        }`}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}
