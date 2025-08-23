import { useFormStatus } from 'react-dom';

export default function FormButton() {
  // The `useFormStatus` Hook provides status information of the last form submission.
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-black text-white px-4 py-2 mt-3"
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}
