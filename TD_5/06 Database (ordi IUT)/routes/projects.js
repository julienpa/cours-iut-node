"use strict"

const express = require('express')
const pg = require('pg')
const fs = require('fs')
const router = express.Router()

const conString = "postgres://awwonxhh:NaLo34BWjG_BPxCnIjrTd8A2gde64tO9@baasu.db.elephantsql.com:5432/awwonxhh"

router.get('/', (req, res) => {
  executeQuery("SELECT * FROM projects", [], (result) => {
    res.render('projects', { projectsList: result.rows })
  })
})

router.get('/:id', (req, res) => {
  executeQuery("SELECT * FROM projects WHERE id = $1", [req.params.id], (result) => {
    let details = result.rows[0]
    res.render('project_details', { project: details })
  })
})

function executeQuery(sql, params, callback) {
  // 1. Connection
  pg.connect(conString, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err)
    }
    // 2. Execute the query
    client.query(sql, params, function(err, result) {
      // 3. Close Connection
      done()

      if (err) {
        console.log(err)
      }
      else {
        // 4. Execute the callback(res)
        callback(result)
      }
    })
  })
}

module.exports = router
