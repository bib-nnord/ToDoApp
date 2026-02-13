
const http = require('http');
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'boards.json'); //Json due to no DB yet
// Specify the port to listen on
const port = 2000;



const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // GET /boards 
  if (req.url === '/boards' && req.method === 'GET') {
    fs.readFile(DATA_FILE, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to read boards.json' }));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    });
  }

  // POST /boards - save new board
  else if (req.url === '/boards' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const newBoard = JSON.parse(body);
        fs.readFile(DATA_FILE, (err, data) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to read boards' }));
            return;
          }
          const boards = JSON.parse(data);
          boards.push(newBoard);
          fs.writeFile(DATA_FILE, JSON.stringify(boards, null, 2), err => {
            if (err) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Failed to save board' }));
              return;
            }
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newBoard));
          });
        });
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
  }
  // Not found
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

// Start the server
server.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
});