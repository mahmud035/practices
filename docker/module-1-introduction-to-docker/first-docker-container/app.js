import express from 'express';
import connectToDatabase from './helpers.js';

const app = express();

app.get('/', (req, res) => {
  res.send(`<h2>Welcome to Docker!</h2>`);
});

await connectToDatabase();

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
