const http = require('http');
const port = 5000;
const host = 'localhost';

//Creazione web server
const server = http.createServer((request, response) => {
    console.log('Nuova richiesta ricevuta');
});

//Attivazione web server
server.listen(port, host, () => {
    console.log(`Server in ascolto sulla porta ${port}...`);
});

//Gestione errori
server.on('error', err => console.log(err));