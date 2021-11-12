// modulo principale

const fs=  require('fs');

fs.readFile('f1.txt', 'utf-8', (err,dati) => {
  if(err) throw err;
  console.log(dati);
})
