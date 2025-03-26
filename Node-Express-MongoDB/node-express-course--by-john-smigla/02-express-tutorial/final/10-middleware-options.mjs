import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

// Flow: req => middleware => res

//* Middleware options (Custom middleware, Built-in middleware, Third-party middleware)
// app.use([logger, authorize])
// app.use(express.static('./public'))
// app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/v1/products', (req, res) => {
  res.send('Products');
});

app.get('/api/v1/items', (req, res) => {
  console.log(req.user);
  res.send('Items');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
