import express from 'express';
import { products } from '../data.js';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/v1/products">Products</a>');
});

// Get all products
app.get('/api/v1/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.status(200).json(newProducts);
});

// Get single product
app.get('/api/v1/products/:productId', (req, res) => {
  const { productId } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );

  if (!singleProduct) return res.status(404).send('Product Does Not Exist');

  return res.status(200).json(singleProduct);
});

// Multiple params
app.get('/api/v1/products/:productId/reviews/:reviewId', (req, res) => {
  const { productId, reviewId } = req.params;

  console.log(productId, reviewId);
  res.json({ productId, reviewId });
});

// Get products with query
app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  if (limit) sortedProducts = sortedProducts.slice(0, Number(limit));

  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
