// server.js
// Import fs and http modules
const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  console.log(`Requested: ${page}`);

  if (page === '/' || page === '/index.html') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Error loading index.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (page === '/css/style.css') {
    fs.readFile('css/style.css', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
  } else if (page === '/js/main.js') {
    fs.readFile('js/main.js', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
}).listen(3001, () => console.log('Server running on http://localhost:3001'));
