"use strict";

const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
    //injecter le contenu de la page d'acceuil dans "content"
    const accueilText = "accueilText ipsum dolor sit amet, \
consectetur adipiscing elit. Maecenas pellentesque purus vel mi pellentesque posuere ultricies\
 eu eros. Vivamus semper metus nulla, tempus tincidunt mauris accumsan nec. \
 Praesent sollicitudin venenatis felis vitae laoreet. Vestibulum a neque vel lectus \
 eleifend vehicula. Nulla rhoncus varius lectus, eu pharetra enim posuere at. \
 Curabitur eu dignissim mi. Fusce tempor eros ante, id tempus justo suscipit ut. \
 Ut bibendum diam sit amet mi facilisis volutpat. Donec imperdiet purus sit amet \
 leo consectetur tempus. Morbi tristique lacus in erat feugiat, id condimentum mi iaculis. \
 Cras rhoncus ligula eu condimentum tincidunt. Suspendisse euismod eros eget odio eleifend \
 convallis. Sed condimentum arcu eu quam tincidunt, at posuere lacus feugiat. \
 Integer eget dictum nisl. Sed dignissim augue a elementum facilisis."
 
    res.render("index", {
        content: accueilText,
        myTitle: "Accueil",
        sayHelloFunction: sayHello("Alex"),
    })
})

function sayHello(firstname) {
    return `Hello ${firstname}`;
}

module.exports = router;

