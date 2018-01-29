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

INSERT_IMG

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

TODO
