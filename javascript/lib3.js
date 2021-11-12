const xhr= new XMLHttpRequest();
console.log(xhr.readyState);

// 1st param: Http GET request
// 2nd param: Target file -> file1.text
// 3rd param: connection type, true= asynch connection
xhr.open('GET', 'file1.txt', true);
console.log(xhr.readyState);

xhr.overrideMimeType("text/html"); //fix firefox bug
xhr.send();


xhr.onreadystatechange = function() {
  if(xhr.readyState === 3) {
    console.log(xhr.readyState);
    console.log("Scaricamento dati");
  }
}



xhr.onload= function() {
  switch (xhr.status) {
    case 200: console.log(xhr.responseText); break;
    case 404: console.log("Risorsa non trovata"); break;
    case 500: console.log("Errore interno"); break;
  }
}
