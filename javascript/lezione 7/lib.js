/*
 * Recuperare dati da API esterne
*/

import httpRequest from './httpRequest.js';

const urlBase = 'http://jsonplaceholder.typicode.com';

let post = httpRequest('GET', `${urlBase}/posts/1`, getPost);

function getPost(post) {
    console.log(post);
    httpRequest('GET', `${urlBase}/post/1/comments`, showComments);
}

function showComments(commenti) {
    console.log(commenti);
}
