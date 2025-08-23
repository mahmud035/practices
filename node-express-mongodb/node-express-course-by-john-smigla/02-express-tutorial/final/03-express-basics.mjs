import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  console.log('user hit the resource');
  res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
