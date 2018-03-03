// Compte sur le site elephantsql.com
const { Client } = require('pg')
const fs = require('fs')

// Import du fichier avec les commandes SQL
const dbFilePath = `${__dirname}/populate.sql`
const sql = fs.readFileSync(dbFilePath).toString()

// Inialisation de la connexion
const client = new Client({
	user: 'dqwaktnwfi',
	host: 'horton.elephantsql.com',
	database: 'dqwaktnwfi',
	password: 'ceIrQsu630rgaKfLZYLX1iEUJG-W43-b',
	port: 5432,
})
client.connect()

// Execution des commandes SQL
client.query(sql, (err, res) => {
	if (err) {
		console.log(res);
	}
	else {
		console.log("Import terminé avec succès");
	}
	client.end()
})