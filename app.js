const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 5000;

//Creazione web server
const server = http.createServer((request, response) => {
    const routing = {
        '/': 'index.html',
        '/home': 'index.html',
        '/contatti': 'contatti.html'
    };
    response.setHeader('Content-Type', 'text/html');
    render(response, routing[request.url]);
});

function render(response, htmlfile) {
    fs.stat(`./${htmlfile}`, (err, stats) => {
        if(stats) {
            response.statusCode = 200;
            fs.createReadStream(htmlfile).pipe(response);
        } else {
            response.statusCode = 404;
            response.end('Risorsa non trovata');
        }
    })
}

server.listen(port);
