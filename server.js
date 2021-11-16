const express = require("express");
// Tramite l'oggetto app definiamo il meccanismo di routing dell'app
const app = express();
// 3000 è una porta di "default" nello sviluppo
const port = process.env.PORT || 3000;

// Settare impostazioni personalizzate
app.set('nomeApp', 'Prima app Express');
// Ve ne sono alcune predefinite di Express
app.set('case sensitive routing', true);
// Recupero le impostazioni con .get()
console.log(app.get('nomeApp'));


/*
// Recuperare i params di ricerca di una query con req.query.param
// "Paramtri con sintassi classica"
app.get('/blog', (req,res) => {
  console.log(req.query.anno);
  res.status(200).send(`<h1>Anno: ${req.query.anno}</h1>`)
});
*/
// Recuperare i params di ricerca seconda parte
// Così da browser i parametri li uso come se fossero il percorso
// Li definisco "Parametri di rotta"
// localhost:3000/blog/anno/mese
/*
app.get('/blog/:anno/:mese', (req,res) => {
  console.log(req.params);
  res.status(200).send(`<h1>Parametri: ${req.query}</h1>`)
});
*/
// Utilizzo i params di rotta per i parametri che sono necessari
// affinchè possa restituire una risposta corretta al client
// Utilizzo i params con sintassi classica per quelli che non lo sono

// .use per gestire le rout che necessitano di funzioni dedicate ripetute
app.use('/user', checkAuthentication, checkAuthorization);
// GET con funzioni Middleware Authentication e Authorization
app.get('/user/risorsa-premium', (req,res) => {
  console.log("Inizio download risorsa");
  res.send("Utente premium riconosciuto. Inizio download risorsa");
});
// GET senza funzioni Middleware
app.get('/contatti', (req,res) => {
  res.status(200).send('<h1>Pagina Contatti</h1>');
});

function checkAuthentication(req,res,next){
  console.log("Controllo autenticazione...");
  if(req.query.nome){
    console.log(`Benvenuto: ${req.query.nome}`);
    req.user = {nome: `${req.query.nome}`, tipo: `${req.query.codice}`};
    return next();
  }
  console.log("Autenticazione fallita!");
  res.status(401).send("Non sei autenticato!");
}

function checkAuthorization(req,res,next){
  console.log(`Controllo auth per ${req.query.nome}...`);
  if(req.user.tipo >0){
    console.log(`Utente ${req.query.nome} sei stato autorizzato!`);
    return next();
  }
  console.log("Autorizzazione fallita!");
  res.status(403).send("Non sei autorizzato!");
}

/*
// Gestisco richieste get/post/put/delete
// con all le gestisco tutte
// con req.method ottengo il tipo di richiesta
app.all('/', (req,res) => {
  console.log(`Nuova richiesta ${req.method} alla rotta root`);
  // Posso inserire lo status nella risposta con .status()
  res.status(200).send(`<h1>Benvenuto<h1>`);
});
*/

// Attivazione web server
app.listen(port);
