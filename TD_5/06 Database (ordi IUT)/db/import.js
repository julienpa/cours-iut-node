"use strict"

// Compte sur le site elephantsql.com
const pg = require('pg')
const fs = require('fs')

// Import du fichier avec les commandes SQL
const dbFilePath = `${__dirname}/populate.sql`
const sql = fs.readFileSync(dbFilePath).toString()

// Url permettant la connexion à la base de données
var conString = "postgres://awwonxhaaah:NaLo34BWjG_BPxCnIjrTd8A2gde64tO9@baasu.db.elephantsql.com:5432/awwonxhaaah"

// Connexion à la base de donnée
pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('Erreur de connexion à la BD', err)
  }

  // Execution des commandes SQL
  client.query(sql, function(err, result) {
		if (err) {
			console.log(res)
		}
		else {
			console.log("Import terminé avec succès")
		}

    // Cloture de la connexion
		done()
  })
})
