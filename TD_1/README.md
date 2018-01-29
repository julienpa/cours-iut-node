# Récapitulatif du cours du 23 Janvier 2018

## Notions théoriques

### Quelques mots sur Javascript
JavaScript est un langage qui a plus de 20 ans et a connu et continue à connaitre beaucoup d’évolutions. Dans ça dernière version on parle de `ES6` / `ecmascript 2017` qui fait référence à la version de EcmaScript implémenté par JavaScript. Pour rappel ECMAScript est un ensemble de normes qui définissent les fonctionnalités et comportement du langage JavaScript. Pouvant être aussi bien utilisé coté backend (via NodeJS) que Front-end (Navigateur Internets), JavaScript dans sa version ES6 n’est supporté que par les dernières versions de Chrome, Firefox, Edge, … Afin d’être compatible avec des versions plus anciennes, il est nécessaire de convertir le code JS en ES5 à l’aide d’outils comme https://babeljs.io. ES6 est de plus en plus utilisé par la communauté, car ces nouvelles fonctionnalités simplifient le développement, et la qualité du code produit.

Plus d’informations sur Javascript
[JavaScript | MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript)
Feature clés en ES6 [Top 10 ES6 Features Every Busy JavaScript Developer Must Know](https://webapplog.com/es6/) (English)

### Quelques mots sur NodeJS
Permet d’exécuter du Javascript coté backend.
Peut s’installer sur Windows, MacOS, Linux, aussi bien sur des Environnements de Développement (vos machine de dev) que sur des serveurs de production.

### Fonctionnement Client / Serveur
Nous avons vu: comment fonctionne une requête HTTP
#### L’anatomie d’une requête HTTP

Lorsqu’une requête HTTP est envoyée, celle-ci contient une série d’information sur la destination de la requête
```
CONNECT www.google.com:443 HTTP/1.1
Host: www.google.com
Connection: keep alive
```

Ici, on utilise la version `1.1` du protocol `HTTP` afin d’accéder à la ressource (= ici c’est une pages HTML) disponible à l’url `www.google.com` via le port `443` (= HTTPS). En plus de ces informations, la requête HTTP contient aussi une série de “Header HTTP” permettant au client de donner des informations au serveur le concernant.

Ci-dessous un screenshot obtenu via l'onglet "Network" dans le [Chrome DevTools](https://developer.chrome.com/devtools)
![Network screenshot in Google Chrome Developer Tool](network_screenshot.png)

En réponse le serveur nous à retourné un document de type `MIME = text/html`

```
Status: HTTP/1.1 200 OK
Content-Length: 44
Content-Type: text/html
<html><head>...</html></head>
```

#### MIME
Pour rappel le MIME est équivalent aux extensions de fichier sur Windows / macOS. Il permet aux client & serveur de savoir quels types de fichiers accepter ou renvoyer. Les plus courants sont
  * text/html
  * application/json
  * application/xml
  * image/png, image/jpeg
  * Liste plus exhaustive dispo [Liste complète des types MIME | MDN](https://developer.mozilla.org/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types)

#### Les ports
Lorsque l’on se connecte à un site, par défaut le port utilisé est le port 80, ou bien 443 lorsque la connexion est sécurisée (= HTTPs). Cela étant dit il est tout à fait possible de choisir un autre port, ce qui est quelque chose de très courant en développement Web afin de ne pas créer de conflit avec les ports utilisés par défaut. Sont souvent utilisés, les ports `3000`  `8080`  `5000`


#### Résolution DNS
Résolution d’une nom-de-domain.com en adresse IP grasse aux serveurs DNS.

* Résolution d’un nom de domaine en cascade - Video explicative https://www.youtube.com/watch?v=3EvjwlQ43_4 (English)
* Une fois l’adresse IP obtenue, le “client” faisant la requête, met en “cache” l’IP afin de ne pas avoir à redemander aux serveurs DNS à chaque nouvelle requête.

## Mise en pratique

### Exercice 1: Serveur basic sur le port 3000

**./app.js**
```js
"use strict";

const http = require('http');

// in ES5
// http.createServer(function(req, res) {
//     res.writeHead(200, { "Content-Type": "text/html"});
//     res.end("<b>Hello world</b>");
// }).listen(3000, "127.0.0.1");

// in ES6
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html"});
    res.end("<b>Hello world</b>");
}).listen(3000, "127.0.0.1");
```

Pour afficher le "Hello World" dans la navigateur

* Lancer le serveur NodeJS via la commande `node app.js`
* Ouvrir l'url `http://localhost:3000` via votre navigateur favoris

### Exercice 2: Afficher un fichier HTML depuis un fichier séparé

**./app.js**
```js
"use strict";

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    html = html.replace('#firstname#', "Alexandre");
    res.writeHead(200, { "Content-Type": "text/html"});
    res.end(html);

}).listen(3000, "127.0.0.1");
```

**./index.html**
```html
<html>
    <head>
        <title>Hello</title>
    </head>
    <body>
        <b>Hello #firstname#</b>
    </body>
</html>
```

#### Info: Utilisation des stream
Pour des raisons de performance il est préférable d'utiliser les Stream de NodeJS

**./app.js**
```js
"use strict";

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html"});
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);

}).listen(3000, "127.0.0.1");
```

### Exercice 3: Afficher une liste de fruits dynamiquements


**./app.js**
```js
"use strict";

const http = require('http');
const fs = require('fs');
const fruits = ['Fraise', 'Orange', 'Melon'];

http.createServer((req, res) => {
    let html = fs.readFileSync(__dirname + '/fruits.html', 'utf8');
    let listHtml = '';

    // Create the HTML with the fruit list
    for (let i=0; i < fruits.length; ++i) {
        listHtml += '<li>' + fruits[i] + '</li>';
    }

    // Inject the fruitlist into the HTML file loaded
    html = html.replace('#fruit_list#', listHtml);

    res.writeHead(200, { "Content-Type": "text/html"});
    res.end(html);
}).listen(3000, "127.0.0.1");
```

**./index.html**

```html
<html>
    <head>
        <title>Liste de fruits</title>
    </head>
    <body>
        <b>Ma liste</b>
        <ul>
            #fruit_list#
        </ul>
    </body>
</html>
```

### Exercice 4: Retourner une réponse JSON

```js
"use strict";

const http = require('http');
const fs = require('fs');
const person = {
    firstname: "Mark",
    lastname: "Zukenberg"
};

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json"});
    res.end(JSON.stringify(person));

}).listen(3000, "127.0.0.1");
```

### Exercice 5: Routage des urls

```js
"use strict";

const http = require('http');
const fs = require('fs');
const fruits = ['Fraise', 'Orange', 'Melon'];
const person = {
    firstname: "Mark",
    lastname: "Zukenberg"
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
```
