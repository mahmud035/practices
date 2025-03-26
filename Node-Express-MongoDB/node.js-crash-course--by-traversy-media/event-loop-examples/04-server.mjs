import { createServer } from 'http';
import { styleText } from 'util';

const hostname = 'localhost';
const port = 5000;

const server = createServer((req, res) => {
  console.log('request event');
  res.end('Hello World');
});

server.listen(port, hostname, () =>
  console.log(
    styleText(['blue'], `Server running at http://${hostname}:${port}`)
  )
);
