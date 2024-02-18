import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ setEditing, setSelectedProduct }) => {
  const [page, setPage] = useState(1);

  //* [Pagination using json-server]
  const getProducts = async ({ queryKey }) => {
    // console.log({ queryKey });
    const response = await axios.get(
      `http://localhost:3000/products?_page=${queryKey[1]}&_per_page=6`
    );
    if (response && response.data) {
      return response.data;
    }
  };

  //* Get Products Data (GET)
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['products', page],
    queryFn: getProducts,
  });

  if (isLoading) return <span>Fetching Products...</span>;
  if (isError) return <span>An error occurred: {error.message}</span>;

  // console.log(products);

  return (
    <div className="col-span-2">
      <div className="grid grid-cols-1 gap-4 pb-8 lg:grid-cols-2 2xl:grid-cols-3">
        {products?.data &&
          products?.data?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setEditing={setEditing}
              setSelectedProduct={setSelectedProduct}
            />
          ))}
      </div>

      <span>Current Page: {page}</span>
      <div className="flex justify-center pt-5 pb-10">
        {products?.prev && (
          <button
            onClick={() => setPage(products.prev)}
            disabled=""
            className="p-1 mx-1 bg-gray-100 border rounded-sm cursor-pointer disabled:cursor-not-allowed"
          >
            Prev
          </button>
        )}
        {products?.next && (
          <button
            onClick={() => setPage(products.next)}
            disabled=""
            className="p-1 mx-1 bg-gray-100 border rounded-sm cursor-pointer disabled:cursor-not-allowed"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
