const app = require("express");
const http = require("http");
const port = process.env.PORT || 5000;
const host = 'localhost';

// Creazione web server
const server = http.createServer((request,response) => {
  console.log(request.url);
  const body = 'Questo è il corso Maestro Node.js';

  response.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Content-Length': Buffer.byteLength(body)
  });
  response.end(body);
});

// Attivazione web server
server.listen(port, host, () => {
  console.log(`Server in ascolto sulla porta ${port}...`);
})

// Gestione errori
server.on('error', (err) => {
  console.log(err);
});
