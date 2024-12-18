import { useState } from 'react';
import { useGetProjectsQueryTwo } from '../api/project/project.hook';
import ErrorMessage from '../shared/ErrorMessage';
import Loading from '../shared/Loading';

export default function PaginationWithPageNumbers() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3; // Number of projects per page

  const { isPending, data, isError, error } = useGetProjectsQueryTwo(page);
  const totalPages = data ? Math.ceil(data.totalCount / itemsPerPage) : 1;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <h1 className="my-4 text-2xl font-bold">PaginationWithPageNumbers</h1>
      <div className="bg-white rounded shadow-md">
        {isPending ? (
          <Loading />
        ) : isError ? (
          <ErrorMessage message={error.message} />
        ) : (
          <div>
            {data.projects?.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between p-4 border-b"
              >
                <div>
                  <h3 className="font-semibold">{project.name}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination Buttons */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 text-white bg-teal-500 rounded disabled:bg-gray-300 disabled:hover:cursor-not-allowed"
        >
          Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-3 py-2 rounded ${
                page === pageNumber
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              {pageNumber}
            </button>
          )
        )}

        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 text-white bg-teal-500 rounded disabled:bg-gray-300 disabled:hover:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </>
  );
}
