import { readFileSync } from 'fs';
import http from 'http';

const port = process.env.PORT || 5000;

// Get all files
const homePage = readFileSync('../navbar-app/index.html');
const homeStyles = readFileSync('../navbar-app/styles.css');
const homeImage = readFileSync('../navbar-app/logo.svg');
const homeLogic = readFileSync('../navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  // Home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(homePage);
  }
  // About page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('<h1>About Page</h1>');
  }
  // Styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.end(homeStyles);
  }
  // Image/Logo
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.end(homeImage);
  }
  // Logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.end(homeLogic);
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
