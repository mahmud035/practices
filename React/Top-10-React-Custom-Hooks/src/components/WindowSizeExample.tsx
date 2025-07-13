import useWindowSize from '../hooks/useWindowSize';

export default function WindowSizeExample() {
  const { width, height } = useWindowSize();

  return (
    <div className="p-4 border rounded-lg">
      <h1 className="text-2xl font-medium pb-2">useWindowSize</h1>

      <p>Window Width: {width}</p>
      <p>Window Height: {height}</p>
    </div>
  );
}
