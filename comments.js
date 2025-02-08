// Create web server
// Create a web server that listens on port 3000. When you navigate to http://localhost:3000/ in your browser, the server should respond with "Hello, World!".
// The code you write should be in a file named comments.js.

const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello, World!');
  res.end();
});

server.listen(3000);