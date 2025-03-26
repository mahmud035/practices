import { createServer } from 'http';
import { styleText } from 'util';

const hostname = 'localhost';
const port = 5000;

const server = createServer((req, res) => {
  if (req.url === '/') res.end('Welcome to our home page');
  else if (req.url === '/about') res.end('Here is our short history');
  else {
    res.end(
      `<h1>Sorry</h1>
       <p>"${req.url}" is not available</p>
       <a href="/">Back to home</a>
      `
    );
  }
});

server.listen(port, hostname, () => {
  console.log(
    styleText(['blue'], `Server running at http://${hostname}:${port}`)
  );
});
