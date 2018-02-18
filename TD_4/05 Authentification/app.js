"use strict";

const express = require('express')
const app = express()
const cookieSession = require('cookie-session')

const defaultRoutes = require('./routes/default.js')
const projectsRoutes = require('./routes/projects.js')
const contactRoutes = require('./routes/contact.js')
const loginRoutes = require('./routes/login.js')

// Definition du moteur de modeles (template engine)
app.set('view engine', 'pug')

// Middleware de gestion des cookie
const cookieParams = {
  name: 'ma_session',
  keys: ['secret_key'],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}
app.use(cookieSession(cookieParams))

// Reuse the user each time
app.use((req, res, next) => {
  if (req.session && req.session.userId) {
    res.locals.username = req.session.username
  }
  next()
})

// Route vers les ressources static
app.use(express.static('public'))

// Decoder le 'body' envoyé depuis un formulaire
app.use(express.urlencoded({ extended: true }))

// Routes par defaut
app.use('/', defaultRoutes)

// Routes pour /projects
app.use('/projects', projectsRoutes)

app.use('/contact', contactRoutes)

app.use('/login', loginRoutes)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
