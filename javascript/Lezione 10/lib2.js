/*
* https://jsonplaceholder.typicode.com/posts/1
* https://jsonplaceholder.typicode.com/posts/1/comments
*/

import httpRequest from './httpRequest.js'

const url = 'https://jsonplaceholder.typicode.com'

function request(type, url){
  return new Promise((resolve, reject) => {
      httpRequest(type, url, resolve, reject);
  });
}


request('GET', `${url}/posts/1`).then((risp) => {
  console.log(risp);
  return request('GET', `${url}/posts/1/comments`);
}).then((risp) => {
  console.log(risp);
}).catch((err) => {
  console.log(err);
});