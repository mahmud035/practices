import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

// Flow: req => middleware => res

export const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get('/', logger, (req, res) => {
  res.send('Home');
});

app.get('/about', logger, (req, res) => {
  res.send('About');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
