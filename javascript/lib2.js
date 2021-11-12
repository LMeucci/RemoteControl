let obj= {
  a:19,
  b:13
};
console.log(obj);

let objJSON= JSON.stringify(obj);
localStorage.setItem("info",objJSON);

let voti= [26,27,28];
console.log(voti);
let votiJSON= JSON.stringify(voti);
localStorage.setItem("voti",votiJSON);

let infoJSONFormat= localStorage.getItem("info");
let votiJSONFormat= localStorage.getItem("voti");

let infoRestored= JSON.parse(infoJSONFormat);
let votiRestored= JSON.parse(votiJSONFormat);

console.log(infoRestored);
console.log(votiRestored);
