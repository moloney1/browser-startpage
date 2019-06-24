const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const cors = require('cors')
//app.use(express.json());
const port = 5555;

app.use(express.urlencoded());
app.use(cors());

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
		});		
		res.send("dropped");
	});

	app.get('/dump', cors(), (req, res) => {
		collection.find({}).toArray((err, docs) => {
			if (err) {
				console.log("READ ERROR");
				console.log(err);
				res.sendStatus(500);
			}
			res.status(200).send(docs);
			console.log(docs);
		});	
	});

	app.post('/testpost', (req, res) => {
		console.log(`Received: URL ${req.body.url},
		display name ${req.body.displayName}`);
		res.status(200).send("post acknowledged");
	});

	// TODO handle duplicates
	app.post('/addSite', (req, res) => {
		let url = req.body.url;
		let displayName = req.body.displayName;

		collection.insertOne({
			url: url,
			displayName: displayName
		}, (err, result) => {
			if (err) {
				console.log("INSERT ERROR");
				console.log(err);
				res.sendStatus(500);
			} else {
				console.log(`Inserted ${url}:${displayName}`)
				res.sendStatus(204);
			}
		});
	});

	app.post('/query', (req, res) => {
		let url = req.body.url;
		let displayName = req.body.displayName;

		collection.find({
			url: url,
			displayName: displayName
		}).toArray((err, docs) => {
			if (err) {
				res.sendStatus(500);
			}
			if (docs) {
				console.log(docs);
				res.status(200).send(docs);
			} else {
				res.sendStatus(400);
			}
		});
	});

	app.post('/del', (req, res) => {
		let url = req.body.url;
		let displayName = req.body.displayName;

		collection.deleteOne({
			url: url,
			displayName: displayName
		}, (err, result) => {
			if (err) {
				res.status(500).send("Error deleting");
			}
			if (result.result.n) {
				res.status(200).send("Delete successful");
			} else {
				res.status(400).send("No such record");
			}
		});

	});

	app.listen(port, () => {
		console.log(`listening on port ${port}`);
	});

});
