const fs= require('fs');
const chalk= require('chalk');



function get(yargs){
  yargs.command(
    {
      command: 'get',
      describe: 'Ricerca cliente in base al nome',
      builder: {
        nome: {
          describe: 'Nome del cliente da ricercare',
          demandOption: true,
          type: 'string'
        }
      },
      handler(argv){
        const ris= getCliente(argv.nome);
        if(ris.status){
          console.log(chalk.green.bold('Cliente trovato'));
          console.log(ris.cliente);
        }
        else{
          console.log(chalk.red.bold('Cliente non trovato, forse cercavi\n'));
          console.log(ris.suggerimenti);
        }
      }
    }
  )
}

function getCliente(nome){
  const clientiJSON= fs.readFileSync('clienti.json', 'utf-8'),
        clienti= JSON.parse(clientiJSON);
        cliente= clienti.find(clienteItem => clienteItem.nome ===nome),
        ris= { status: false, suggerimenti: '', cliente: null};

  if(!cliente){
    clienti.map(clienteItem => {
      if(clienteItem.nome[0] === nome[0]){
        ris.suggerimenti += `${clienteItem.nome} `;
      }
    })
    return ris;
  }
  ris.status= true;
  ris.cliente= cliente;
  return ris;
}

module.exports= get;
