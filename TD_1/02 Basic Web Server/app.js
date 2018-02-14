"use strict";

const http = require('http');

// ES5
//http.createServer(function (req, res) {
//})

// ES6
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html"});
    res.end("<b>Hello world</b>");
}).listen(3000, "127.0.0.1");