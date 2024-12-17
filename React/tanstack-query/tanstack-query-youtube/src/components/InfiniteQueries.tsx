import React from 'react';
import { useGetProductsQuery } from '../api/product/product.hook';
import ErrorMessage from '../shared/ErrorMessage';
import Loading from '../shared/Loading';

export default function InfiniteQueries() {
  const getProductsQuery = useGetProductsQuery();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isPending,
    isError,
  } = getProductsQuery;

  return (
    <div className="mt-48 mb-96">
      <h1 className="my-4 text-2xl font-bold ">Infinite Queries</h1>
      <div className="bg-white rounded shadow-md">
        {isPending ? (
          <Loading />
        ) : isError ? (
          <ErrorMessage />
        ) : (
          <>
            {data.pages.map((group, i) => (
              <React.Fragment key={i}>
                {group.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-4 border-b"
                  >
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </>
        )}
      </div>

      <div className="flex items-center gap-10 mt-4 rounded">
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className="text-white bg-teal-500 py-2.5 px-4 rounded font-medium disabled:hover:cursor-not-allowed disabled:bg-teal-300"
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>

        <span className="font-medium">
          {isFetching && isFetchingNextPage ? 'Fetching...' : null}
        </span>
      </div>
    </div>
  );
}
