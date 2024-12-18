import { useState } from 'react';
import { useGetProjectsQuery } from '../api/project/project.hook';
import ErrorMessage from '../shared/ErrorMessage';
import Loading from '../shared/Loading';
import { IProject } from '../types/project';

export default function Pagination() {
  const [page, setPage] = useState(1);
  const getProjectsQuery = useGetProjectsQuery(page);
  const { isPending, isError, data, error, isFetching, isPlaceholderData } =
    getProjectsQuery;

  return (
    <>
      <h1 className="my-4 text-2xl font-bold ">Pagination</h1>
      <div className="bg-white rounded shadow-md">
        {isPending ? (
          <Loading />
        ) : isError ? (
          <ErrorMessage message={error.message} />
        ) : (
          <div>
            {data?.map((project: IProject) => (
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

      <div className="flex items-center justify-between gap-10 mt-4 bg-white rounded shadow-md">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          className="text-white bg-teal-500 py-2.5 px-4 rounded font-medium disabled:hover:cursor-not-allowed disabled:bg-teal-300"
          disabled={page === 1}
        >
          Prev Page
        </button>
        <span className="font-medium">Current Page: {page}</span>
        <button
          onClick={() => {
            if (!isPlaceholderData) setPage((old) => old + 1);
          }}
          className="text-white bg-teal-500 py-2.5 px-4 rounded font-medium disabled:hover:cursor-not-allowed disabled:bg-teal-300"
          // Disable the Next Page button until we know a next page is available
          // NOTE: To disable the button instead of using "(data || [])?.length < 3", I need to use something based on API response.
          disabled={isPlaceholderData || (data || [])?.length < 3}
        >
          Next Page
        </button>
      </div>
      {isFetching ? <Loading /> : null}
    </>
  );
}
