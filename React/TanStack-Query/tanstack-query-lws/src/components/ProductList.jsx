import { useState } from 'react';
import { useGetProductsQuery } from '../api/product/product.hook';
import ErrorMessage from '../shared/ErrorMessage';
import Loading from '../shared/Loading';
import ProductCard from './ProductCard';

// NOTE: hit http://localhost:3000/products?_page=1&_per_page=6 in the browser url and see the result.

const ProductList = ({ setEditingId, setFormData, setSelectedProduct }) => {
  const [page, setPage] = useState(1);
  const getProductsQuery = useGetProductsQuery(page);
  const { isPending, isError, data, error, isPlaceholderData } =
    getProductsQuery;

  return (
    <div className="col-span-2 pb-40">
      <h2 className="my-2 text-3xl font-medium text-center">Product List</h2>
      <div className="grid grid-cols-1 gap-4 pb-8 lg:grid-cols-2 2xl:grid-cols-3">
        {isPending ? (
          <Loading />
        ) : isError ? (
          <ErrorMessage message={error.message} />
        ) : (
          data?.data?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setFormData={setFormData}
              setEditingId={setEditingId}
              setSelectedProduct={setSelectedProduct}
            />
          ))
        )}
      </div>

      <div className="flex items-center justify-between gap-10 mt-4 rounded">
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
          disabled={isPlaceholderData || data?.next === null}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ProductList;
