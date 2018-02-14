"use strict";

const http = require('http');
const fs = require('fs');
const person = {
    firstname: "Alex",
    lastname: "Collin"
};

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json"});
    // fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);

    res.end(JSON.stringify(person));    

}).listen(3000, "127.0.0.1");