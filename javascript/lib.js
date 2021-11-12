//const nav= document.querySelector("nav");
/*
nav.addEventListener('click', (e) => {
  if(e.target.tagName === "A"){
    e.preventDefault();
    e.target.style.color = "red";
  }
});
*/

const invio= document.getElementById("invio");

const input= document.getElementById("testo");

function fn_handler(e) {
  if(e.which === 13 && invio.checked){
    let testo= input.value;
    input.value= '';
    console.log('${testo}');
  }

  if(e.which === 113) {
    input.removeEventListener('keypress', fn_handler);
    document.getElementById('status').textContent = "Event listener rimosso"
  }
}

input.addEventListener('keypress', fn_handler);
