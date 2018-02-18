"use strict";

const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/', (req, res) => {
    const form = `
        <h2>Contact</h2>
        <form method="post" action="/contact/send">
            <p>
                <label>Votre nom</label>
                <input type="text" name="nom" placeholder="Aide ici..." />
            </p>
            <p>
                <label>Votre message</label>
                <textarea name="message" rows="5" cols="30"></textarea>
            </p>
            <p>
            <input type="submit" value="Send" />
            </p>
        </form>
        `
    res.render("index", {content: form, myTitle: "Contact"});
})


router.post('/send', (req, res) => {
    const form = req.body;
    const result = ` 
        <p>Nom envoyé: ${form.nom}</p>
        <p>Message envoyé: ${form.message}</p>
    `
    res.render("index", {content: result})
})


module.exports = router;
