const fs= require('fs');



function del(yargs){
  yargs.command(
    {
      command: 'del',
      describe: 'Rimozione cliente',
      builder:{
        nome:{
          describe: 'Nome del cliente da rimuovere',
          demandOption: true,
          type: 'string'
        }
      },
      handler(argv){
        delCliente(argv.nome);
      }
    }
  )

}

function delCliente(nome){
  const clientiJSON= fs.readFileSync('clienti.json', 'utf-8'),
        clienti= JSON.parse(clientiJSON),
        clienteIndex= clienti.findIndex(cliente => cliente.nome === nome);

  if(clienteIndex === -1){
    console.log('Cliente non trovato');
    return;
  }
  clienti.splice(clienteIndex, 1);
  fs.writeFileSync('clienti.json', JSON.stringify(clienti));
  console.log(clienti);
}

module.exports= del;
