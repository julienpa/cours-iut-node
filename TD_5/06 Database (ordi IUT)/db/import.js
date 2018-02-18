"use strict";

// Compte sur le site elephantsql.com
const pg = require('pg')
const fs = require('fs')

// Import du fichier avec les commandes SQL
const dbFilePath = `${__dirname}/populate.sql`
const sql = fs.readFileSync(dbFilePath).toString()

var conString = "postgres://awwonxhh:NaLo34BWjG_BPxCnIjrTd8A2gde64tO9@baasu.db.elephantsql.com:5432/awwonxhh";

pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }
  client.query(sql, function(err, result) {
		if (err) {
			console.log(res);
		}
		else {
			console.log("Import terminé avec succès");
		}
		done()
  });
});
