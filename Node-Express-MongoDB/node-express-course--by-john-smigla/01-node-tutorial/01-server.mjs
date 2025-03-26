import { createServer } from 'http';
import { styleText } from 'util';

const hostname = 'localhost';
const port = 5000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () =>
  console.log(
    styleText(['blue'], `Server running at http://${hostname}:${port}`)
  )
);
