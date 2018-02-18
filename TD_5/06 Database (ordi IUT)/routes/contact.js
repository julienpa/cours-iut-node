"use strict";

const express = require('express')

const fs = require('fs')
const router = express.Router();

router.get('/', (req, res) => {
  let html = fs.readFileSync(__dirname + '/../index.html', 'utf8')

  const form = `
    <h2>Contact</h2>
    <form method="post" action="/contact/send">
      <p>
        <label>Votre nom</label>
        <input type="text" name="nom" />
      </p>
      <p>
        <label>Votre message</label>
        <textarea name="message" rows="5" cols="30"></textarea>
      </p>
      <p><input type="submit" value="Envoyer" /></p>
    </form>
  `

  html = html.replace('#content#', form)
  res.send(html)
})

router.post('/send', (req, res) => {
  const form = req.body
  let html = fs.readFileSync(__dirname + '/../index.html', 'utf8')
  const result = `
    <p>Nom envoyé: ${form.nom}</p>
    <p>Message envoyé: ${form.message}</p>
  `
  html = html.replace('#content#', result)
  res.send(html)
})

module.exports = router
