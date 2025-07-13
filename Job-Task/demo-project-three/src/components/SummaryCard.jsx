const SummaryCard = ({ user, showModal }) => {
  const {
    name,
    address: { city, street },
    email,
  } = user;

  return (
    <div
      className={`grid grid-cols-5 gap-6 items-center px-8 py-16 bg-white shadow-sm rounded-3xl border border-gray-100`}
    >
      <p className="font-medium text-gray-800 col-span-1">{name}</p>

      <div>
        <h3 className="font-bold text-xs text-gray-500 uppercase">Contact</h3>
        <p className="text-gray-700">{email}</p>
      </div>
      <div>
        <h3 className="font-bold text-xs text-gray-500 uppercase">City</h3>
        <p className="text-gray-700">{city}</p>
      </div>
      <div>
        <h3 className="font-bold text-xs text-gray-500 uppercase">Street</h3>
        <p className="text-gray-700">{street}</p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => showModal(user)}
          className="bg-red-500 hover:bg-red-600 text-white rounded-full font-medium px-6 py-2 transition duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default SummaryCard;
