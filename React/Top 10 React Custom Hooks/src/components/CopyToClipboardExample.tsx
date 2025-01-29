import useCopyToClipboard from '../hooks/useCopyToClipboard';

export default function CopyToClipboardExample() {
  const { copiedText, copy } = useCopyToClipboard();

  return (
    <div className="p-4 border rounded-lg">
      <h1 className="text-2xl font-medium pb-2">useCopyToClipboard</h1>

      <button
        onClick={() => copy('Hello, World!')}
        className="bg-orange-500 text-white p-2 rounded"
      >
        Copy "Hello, World!"
      </button>

      {copiedText && (
        <p className="mt-2 text-green-500">Copied: {copiedText}</p>
      )}
    </div>
  );
}
