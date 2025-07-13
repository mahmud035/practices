export default function ErrorMessage({ message }: { message: string }) {
  return (
    <p className="p-12 text-xl font-bold text-center text-red-500">
      Error: {message}
    </p>
  );
}
