"use strict";

const express = require('express')
const app = express()

const defaultRoutes = require('./routes/default.js')
const projectsRoutes = require('./routes/projects.js')
const contactRoutes = require('./routes/contact.js')

// Definition du moteur de template (template engine)
app.set('view engine', 'pug')

// Route vers les ressources static
app.use(express.static('public'))

// Decoder le 'body' envoyé depuis un formulaire
app.use(express.urlencoded({extended:true}))

// Routes par defaut
app.use('/', defaultRoutes)

// Routes pour /projects
app.use('/projects', projectsRoutes)

app.use('/contact', contactRoutes)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
