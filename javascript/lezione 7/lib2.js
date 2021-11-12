// Recupero dati da API esterne con eventi

import httpRequest from './httpRequest.js';

const btn = document.getElementById('btn');
const sezione = document.getElementById('postSection');
const urlBase= 'http://jsonplaceholder.typicode.com';

btn.addEventListener('click', function(){
  httpRequest('GET', `${urlBase}/posts/1`, showData)
});

function showData(data){
  sezione.textContent = '';
  let newUserDiv = document.createElement("div");
  newUserDiv.style.border = "1px solid #999";
  newUserDiv.style.marginTop = "10px";
  newUserDiv.style.padding = "10px";
  let postText= JSON.parse(data);
  newUserDiv.innerHTML = `
  userId: ${postText.userId}<br>
  id: ${postText.id}<br>
  title: ${postText.title}<br>
  body: ${postText.body}<br>
  `;
  sezione.appendChild(newUserDiv);
  console.log(data);
}
