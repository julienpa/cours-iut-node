"use strict";

const http = require('http');
const fs = require('fs');
const fruits = ['Fraise', 'Orange', 'Melon'];
const person = {
    firstname: "Alex",
    lastname: "Collin"
};

http.createServer((req, res) => {
    if (req.url === '/fruits') {
        let html = fs.readFileSync(__dirname + '/fruits.html', 'utf8');
        html = html.replace('#fruit_list#', getItemList(fruits));
        res.writeHead(200, { "Content-Type": "text/html"});
        res.end(html);
    }
    else if (req.url === '/json') {
        res.writeHead(200, { "Content-Type": "application/json"});
        res.end(JSON.stringify(person));  
    }
    else {
        res.writeHead(404);
        res.end();
    }
        
}).listen(3000, "127.0.0.1");

function getItemList(list) {
    let listHtml = '';
    for (let i=0; i < fruits.length; ++i) {
        listHtml += '<li>' + fruits[i] + '</li>';
    }
    return listHtml;
}