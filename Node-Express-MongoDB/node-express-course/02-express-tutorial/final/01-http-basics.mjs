import { createServer } from 'http';

const port = process.env.PORT || 5000;

// Create server
const server = createServer((req, res) => {
  const url = req.url;
  console.log(url);

  // Home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('<h1>Home Page</h1>');
  }
  // About page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('<h1>About Page</h1>');
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end('<h1>Page Not Found</h1>');
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
