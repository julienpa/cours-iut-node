"use strict";

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router();
const defaultRoutes = require('./routes/default.js')
const projectsRoutes = require('./routes/projects.js')
const contactRoutes = require('./routes/contact.js')

// Route vers les ressources static
app.use(express.static('public'))

app.use(bodyParser.json())

// Routes par defaut
app.use('/', defaultRoutes);

// Routes pour /projects
app.use('/projects', projectsRoutes);

app.use('/contact', contactRoutes);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})