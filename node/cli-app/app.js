// main module
const yargs= require('yargs');
const get= require('./cmd/get');
const add= require('./cmd/add');
const del= require('./cmd/del');

//console.log(chalk.red.inverse("Messaggio stilizzato con chalk"));
//console.log(argv_parsed);

/*
con ogni yargs.command imposto un comando
che posso utilizzare da riga di comando.
un oggetto {} per ogni comando.
Con builder imposto i flag, in questo caso solo nome
demandOption è una proprietà di nome che lo rende
obbligatorio quando uso il comando get
*/

get(yargs); //Ricerca cliente
add(yargs); //Aggiunta cliente
del(yargs); //Rimozione cliente

yargs.parse();
