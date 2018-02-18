"use strict";

const express = require('express')
const fs = require('fs')
const router = express.Router();

  router.get('/', (req, res) => {
    const json = fs.readFileSync(__dirname + '/../projects.json', 'utf8')
    const projects = JSON.parse(json)
    let html = ''
    for(let i = 0; i < projects.length; ++i) {
      html += `
      <div>
        <a href="/projects/${projects[i].id}">${projects[i].id} - ${projects[i].name}</a>
      </div>
      `
    }
    let finalHtml = fs.readFileSync(__dirname + '/../index.html', 'utf8')
    finalHtml = finalHtml.replace('#content#', html)
    res.send(finalHtml)
  })
  
  router.get('/:id', (req, res) => {
    const json = fs.readFileSync(__dirname + '/../projects.json', 'utf8')
    const projects = JSON.parse(json)
    let details = getDetails(projects, req.params.id)
    let html = `
      <div>
        <p id="id">ID: ${details.id}</p>
        <p id="name">NAME: ${details.name}</p>
        <p id="description">DESC: ${details.description}</p>
      </div>`
      let finalHtml = fs.readFileSync(__dirname + '/../index.html', 'utf8')
      finalHtml = finalHtml.replace('#content#', html)
      res.send(finalHtml)
  })
  
  
  function getDetails(projects, currentProjectId) {
    currentProjectId = parseInt(currentProjectId, 10)
    let details = {};
    for(let i = 0; i < projects.length; ++i) {
      if (projects[i].id === currentProjectId) {
        details = projects[i]
        break
      }
    }
    return details;
  }

  module.exports = router