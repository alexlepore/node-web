/* 
This file when called creates a collection of my last 15 github repos.
Only needs to be called when new repos are made. 
*/

const MongoClient = require("mongodb").MongoClient;
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config({path: "./../.env"});

//const user = process.env.user;
//const password = process.env.userpwd;

const database = process.env.DB_HOST;
const token = process.env.GITHUB_TOKEN;

//const url = `mongodb://${user}:${password}@0.0.0.0:27017/?authMechanism=SCRAM-SHA-1&authSource=${deeB}`;
const url = `mongodb://0.0.0.0:27017/${database}`

//github api v4 graph ql query build
const githubUrl = "https://api.github.com/graphql";
const oauth = {
	Authorization: `bearer ${token}`
}
const query = `{
	user(login: "alexlepore") {
		repositories(first: 15, ownerAffiliations: OWNER, isFork: false, privacy: PUBLIC, orderBy: {field: CREATED_AT, direction: DESC}) {
			nodes {
				name
				url
				description
				createdAt
				updatedAt
				diskUsage
			}
		}
	}
}`

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
    if (err) throw err;
    var dbs = db.db(process.env.DB_HOST);

    //insert seed data in db via post(get) request to github api
    axios.post(githubUrl, {query: query}, {headers:oauth})
	.then(function(response){
		const gitNodes = response.data.data.user.repositories.nodes;

		dbs.collection("repositories").insertMany(gitNodes, function(err, res){
			if (err) throw err;
			console.log(`Docs inserted ${res.insertedCount}`);
			db.close();
		});
	})
	.catch(function(error){
		console.log(error)
	});
});






