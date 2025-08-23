export default function ProductInfo() {
  const product = {
    name: 'Laptop',
    price: 1200,
    availability: 'In stock',
  };

  return (
    <div>
      <h1>Product Info</h1>

      <h3>Name: {product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
}
