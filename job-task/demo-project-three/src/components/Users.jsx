import { useState } from 'react';
import { useGetUsersQuery } from '../api/user/user.hook';
import DetailsCardModal from './DetailsCardModal';
import Spinner from './Spinner';
import SummaryCard from './SummaryCard';

const Users = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 3;
  const { isPending, isError, error, data } = useGetUsersQuery(page, limit);

  const totalPages = data ? Math.ceil(data?.totalCount / limit) : 1;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const showModal = (user) => {
    setSelectedUser(user); // Set the selected user
  };

  const closeModal = () => {
    setSelectedUser(null); // Clear the selected user
  };

  return (
    <div className="py-5 max-w-screen-xl mx-auto">
      <div className="mx-auto container">
        <div className="grid gap-10 pb-7">
          {isPending ? (
            <Spinner />
          ) : isError ? (
            <h2>{error.message}</h2>
          ) : (
            data?.users?.map((user) => (
              <SummaryCard
                key={user.id}
                user={user}
                showModal={() => showModal(user)} // Pass user data
              />
            ))
          )}
        </div>

        {/* Pagination Buttons */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-300 text-gray-600 rounded hover:bg-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-3 py-2 rounded transition duration-300 ${
                  page === pageNumber
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {pageNumber}
              </button>
            )
          )}

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-600 rounded hover:bg-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>

      <DetailsCardModal user={selectedUser} closeModal={closeModal} />
    </div>
  );
};

export default Users;
