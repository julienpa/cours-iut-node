"use strict";

const express = require('express')
const fs = require('fs')
const router = express.Router();
const { Client } = require('pg')

const conString = "postgres://waktnwfi:ceIrQsu630rgaKfLZYLX1iEUJG-W43-b@horton.elephantsql.com:5432/waktnwfi";

router.get('/', (req, res) => {
   executeQuery("SELECT * FROM projects;", [], (result) => {
    res.render("projects", {projects_list: result.rows})
   })
});

router.get('/:id', (req, res) => {
    executeQuery("SELECT * FROM projects WHERE id=$1;", [req.params.id], (results) => {
        let details = results.rows[0];
        res.render('project_details', { project: result.rows[0] })
    })
});

function executeQuery(sql, params, callback){
    // 1. Connection
    const client = new Client({
        user: 'waktnwfi',
        host: 'horton.elephantsql.com',
        database: 'waktnwfi',
        password: 'ceIrQsu630rgaKfLZYLX1iEUJG-W43-b',
        port: 5432,
    });
    client.connect();

    // 2. Execute the query
    client.query(sql, params, (err, dbRes) => {
        // 3. Close Connection
        client.end();

        if (err) {
            console.log(err);
        }
        else {
            // 4. Execute the callback(res)
            callback(dbRes);
        }
    });
}

module.exports = router;
