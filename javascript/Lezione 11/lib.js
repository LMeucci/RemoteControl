/*
* Promise.all
*/

import httpRequest from './httpRequest.js';
function request(type, url) {
    return new Promise((resolve, reject) => {
        httpRequest(type, url, resolve, reject);
    });
}

const f1 = request('GET', 'f1.txt');
const f2 = request('GET', 'f2.txt');

Promise.all([f1, f2]).then((risposte) => {
    risposte.forEach((risposta, i) => {
        console.log(risposta);
    });
}).catch((err) => {
    console.log(err);
})
