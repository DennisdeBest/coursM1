const http = require('http');

const verge = 'bite';

let currentBite = {
  firstbite: 'Bi',
  lastbite: 'Bite'
};


function bibite(bite) {
  return `${verge}, ${bite.firstbite} ${bite.lastbite}`
}

http.createServer((req, res) => {
  res.end(bibite(currentBite));
}).listen(8080);