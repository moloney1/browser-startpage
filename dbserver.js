const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const port = 5555;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

	if (err) console.log(err);
	
	let db = client.db('documents');
	let collection = db.collection('test');
	
	app.get('/init', (req, res) => {
		collection.insertMany([
			{
				url: "http://facebook.com",
				displayName: "facebook"
			},
			{
				url: "http://instagram.com",
				displayName: "insta"
			},
			{
				url: "http://reddit.com",
				displayName: "reddit"
			}
		], (err, result) => {
			if (err) {
				console.log("INSERT ERROR");
				console.log(err);
			}
		});
		res.send("initialized");	
	});

	app.get('/', (req, res) => {
		res.send("Hello there\n");
	});

	app.get('/drop', (req, res) => {
		collection.drop((err, delOk) => {
			if (err) console.log(err);
			if (delOk) console.log("collection dropped");
			client.close();
		});		
		res.send("dropped");
	});

	app.get('/dump', (req, res) => {
		collection.find({}).toArray((err, docs) => {
			if (err) {
				console.log("READ ERROR");
				console.log(err);
			}
			console.log(docs);
		});	
	});

	
	app.post('/', (req, res) => {
		res.send('Got a POST request');
	})



	app.listen(port, () => {
		console.log(`listening on port ${port}`);
	});

});
