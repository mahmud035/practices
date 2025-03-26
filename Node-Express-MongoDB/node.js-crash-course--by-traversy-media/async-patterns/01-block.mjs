import { createServer } from 'http';
import { styleText } from 'util';

const hostname = 'localhost';
const port = 5000;

const server = createServer((req, res) => {
  if (req.url === '/') res.end('Home Page');
  else if (req.url === '/about') {
    // Blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end('About Page');
  } else res.end('Error Page');
});

server.listen(port, hostname, () => {
  console.log(
    styleText(['blue'], `Server running at http://${hostname}:${port}`)
  );
});
