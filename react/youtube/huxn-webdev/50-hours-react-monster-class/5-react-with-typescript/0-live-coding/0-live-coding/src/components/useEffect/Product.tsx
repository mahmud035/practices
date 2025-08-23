import { useEffect, useState } from 'react';
import { IProduct } from '../../utils/productTypes';

export default function Product() {
  const [data, setData] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products/1');
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div>
      {data?.id ? (
        <div>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>Description: {data.description}</p>
          <p>Price: {data.price}</p>
          <p>DiscountPercentage: {data.discountPercentage}</p>
          <p>Rating: {data.rating}</p>
          <p>Stock: {data.stock}</p>
          <p>Brand: {data.brand}</p>
          <p>Category: {data.category}</p>
          <p>Thumbnail: {data.thumbnail}</p>
          {data.images.map((img) => (
            <img key={img} src={img} style={{ width: '400px' }} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
