const fs= require('fs');
const os= require('os');

fs.appendFileSync("f1.txt", "Maestro Node.js\n");

//fs.mkdirSync('data');
console.log(os.arch());
