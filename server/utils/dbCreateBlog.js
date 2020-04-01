/*
This file when called creates and inserts a blog post,
that my blog page queries.
*/

const inquirer = require('inquirer');
const chalk = require("chalk");
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config({path:__dirname+'/../.env'});
const user = process.env.user;
const password = process.env.userpwd;
const deeB = process.env.DB_HOST;

const url = `mongodb://${user}:${password}@0.0.0.0:27017/?authMechanism=SCRAM-SHA-1&authSource=${deeB}`;

let scriptMessage = chalk.blue.bgGreen("\nThis prompt script will be used to create blog entries into our mongodb.")

blogpost =[
    {
        type: 'input',
        name: 'blog_title',
        message: "Blog Title:\n"
    },
    {
        type: 'editor',
        name: 'blog_entry',
        message: "Enter actual entry here:\n"
    }
]

MongoClient.connect(url, function(err, db) {
    var dbs = db.db(process.env.DB_HOST);

    console.log(scriptMessage)

    inquirer.prompt(blogpost).then(post => {
        console.log(post);
        dbs.collection("blogposts").insertOne({date: new Date().toLocaleString(), post}, function(err, res){
            if(err) throw err;
            console.log(chalk.bgYellow("post inserted!"));
            db.close();
        })
    })
    
});