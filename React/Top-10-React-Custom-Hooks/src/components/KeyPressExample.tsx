import useKeyPress from '../hooks/useKeyPress';

export default function KeyPressExample() {
  const enterPressed = useKeyPress('Enter');

  return (
    <div className="p-4 border rounded-lg">
      <h1 className="text-2xl font-medium pb-2">useKeyPress</h1>

      <p className="mt-2">Enter Pressed: {enterPressed.toString()}</p>
    </div>
  );
}
