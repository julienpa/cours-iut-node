"use strict";

const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/', (req, res) => {
    res.render("login", {myTitle: "Login"});
})

router.get("/logout", (req, res) => {
    req.session = null;
    res.redirect("/login");
})


router.post('/send', (req, res) => {
    const form = req.body;
    //ouvrir fichier JSON users 
    const jason = fs.readFileSync(__dirname + "/../users.json", "utf8");
    const users = JSON.parse(jason);
    //verif des infos envoyes et comparaison
    let userFound = null;
    users.forEach(user => {
        if(user.username === form.user && user.password === form.pass){
            userFound = user;
            return;
        }
    })
    //si ok, crée un cookie d'oauth
    if(userFound) {
        console.log(userFound);
        req.session.userId = userFound.id
        req.session.username = userFound.username
        res.locals.username = userFound.username
    } else {
        console.log("Mauvais mot de passe");
    }
    res.render("login", {userView: userFound});
})

module.exports = router;

