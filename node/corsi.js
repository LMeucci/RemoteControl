var corsi = [
  {nome: 'Maestro JavaScript', pubblicato: true},
  {nome: 'Maestro Node.js', pubblicato: true},
  {nome: 'Maestro PHP', pubblicato: false}
];

function showCorsiPubblicati() {
  const corsiPubblicati = corsi.filter(corso => corso.pubblicato);
  console.log(corsiPubblicati);
}

// così importo un un oggetto con 1 o più proprietà
// ma direttamente la funzione
module.exports = showCorsiPubblicati;

// altrimenti
// module.exports.showCorsi = showCorsiPubblicati;
