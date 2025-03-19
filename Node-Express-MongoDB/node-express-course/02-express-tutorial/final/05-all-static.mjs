import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

// Setup static and middleware
app.use(express.static('../public'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
