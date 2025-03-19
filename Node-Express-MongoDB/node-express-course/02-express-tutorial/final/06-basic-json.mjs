import express from 'express';
import { products } from '../data.js';

const app = express();
const port = process.env.PORT || 5000;

// Get all products
app.get('/api/v1/products', (req, res) => {
  res.status(200).json(products);
});

// Get single product
app.get('/api/v1/products/:productId', (req, res) => {
  const { productId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );

  if (!singleProduct) return res.status(404).send('Product Does Not Exist');

  res.status(200).json(singleProduct);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
