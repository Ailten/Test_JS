
//npm install mysql2
//node Example/Example01DB.js

// import mySQL module.
const mysql = require('mysql2');

// create a connection to DB.
const connectionToDB = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'db_mytest'
});

// launch the connection.
connectionToDB.connect(error => {
	if(error){
		console.error('connection to DB failed !', error);
		return;
	}
	console.log('connection to DB succes');
});

// execute a DB query.
let myQuery = 'SELECT u.name FROM `user` u';
connectionToDB.query(myQuery, (error, result) => {
	if(error){
		console.error('query to DB failed', error);
		return;
	}
	console.log(`users names: [${result.map(e => e.name)}]`);
});

myQuery = 'SELECT v.name FROM `vod` v JOIN `user` u ON (v.idUser = u.id) WHERE (u.name = "Babulle")';
connectionToDB.query(myQuery, (error, result) => {
	if(error){
		console.error('query to DB failed', error);
		return;
	}
	console.log(`vod's name of Babulle: [${result.map(e => e.name)}]`);
});

myQuery = 'INSERT INTO `user` (name) VALUES ("Somenda")';
connectionToDB.query(myQuery, (error, result) => {
	if(error){
		console.error('query to DB failed', error);
		return;
	}
	console.log(`insert succes`);
});

myQuery = 'DELETE FROM `user` WHERE (name = "Somenda")';
connectionToDB.query(myQuery, (error, result) => {
	if(error){
		console.error('query to DB failed', error);
		return;
	}
	console.log(`delete succes`);
});

// close the connection.
connectionToDB.end();