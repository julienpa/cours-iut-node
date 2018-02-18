"use strict";

const express = require('express')

const fs = require('fs')
const router = express.Router();

router.get('/', (req, res) => {
  res.render('login')
})

router.get('/logout', (req, res) => {
  req.session = null;
  res.redirect("/")
})

router.post('/send', (req, res) => {
  const form = req.body

  // Ouvre le fichier JSON avec la liste des users
  const json = fs.readFileSync(__dirname + '/../users.json', 'utf8')
  const users = JSON.parse(json)

  // Vérification des infos reçu de la saisie du formulaire et comparaison avec notre users.json
  let userFound = null
  let resultMessage = ''
  users.forEach(user => {
    if (user.username === form.user
     && user.password === form.pass) {
      userFound = user
      return
    }
  })
  // Si userFound !== null, on le sauvegarde dans la session à l'aide d'un cookie
  if (userFound) {
    req.session.userId = userFound.id
    req.session.username = userFound.username
    res.locals.username = userFound.username

    resultMessage = `Vous êtes connecté en temps que ${userFound.username}`
  }
  else {
    resultMessage = 'L\'identifiant ou le mot de pass sont incorect'
  }
  res.render('login', { info: resultMessage })
})

module.exports = router
