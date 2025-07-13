import { useEffect, useRef } from 'react';
import DetailsCard from './DetailsCard';

export default function DetailsCardModal({ user, closeModal }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (user) modalRef.current?.showModal();
    else modalRef.current?.close();
  }, [user]);

  return (
    <dialog
      ref={modalRef}
      className="container w-full shadow-sm rounded-3xl border border-gray-100 px-4 py-5 bg-white"
    >
      {user ? <DetailsCard user={user} /> : <p>No user data available.</p>}
      <div className="flex justify-end pt-4">
        <button
          onClick={closeModal}
          className="rounded-full px-4 py-2 text-white bg-red-500 hover:bg-red-600 transition duration-300"
        >
          Hide Details
        </button>
      </div>
    </dialog>
  );
}
