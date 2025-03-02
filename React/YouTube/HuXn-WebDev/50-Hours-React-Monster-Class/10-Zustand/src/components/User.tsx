import useUserStore from '../stores/userStore';

export default function User() {
  const { name, loading, fetchUser } = useUserStore(); // Get state and actions from the store

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">User</h2>
      <p className="text-xl mb-4">Name: {loading ? 'Loading...' : name}</p>
      <button
        onClick={() => fetchUser(1)}
        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
      >
        Fetch User
      </button>
    </div>
  );
}
