import useHover from '../hooks/useHover';

export default function HoverExample() {
  const [ref, isHovered] = useHover();

  return (
    <div className="p-4 border rounded-lg">
      <h1 className="text-2xl font-medium pb-2">useHover</h1>

      <div
        ref={ref}
        className={`p-4 rounded-lg transition-colors ${
          isHovered ? 'bg-yellow-300' : 'bg-gray-300'
        }`}
      >
        Hover over me!
      </div>
      <p className="mt-2">Hover State: {isHovered.toString()}</p>
    </div>
  );
}
