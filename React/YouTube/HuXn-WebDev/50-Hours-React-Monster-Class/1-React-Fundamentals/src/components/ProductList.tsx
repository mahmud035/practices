export default function ProductList() {
  const products = [
    { id: 1, title: 'Cabbage', isFruit: false },
    { id: 2, title: 'Garlic', isFruit: false },
    { id: 3, title: 'Apple', isFruit: true },
  ];

  return (
    <div>
      <h1>Rendering List</h1>

      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}
          >
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
