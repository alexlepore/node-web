/* This file delete my most recent blog post entry from my database.
This script is for EMERGENCIES, should i not like my blog entry
*/

/*************
 * DELETES NEWEST RECORD
 */

const chalk = require("chalk");
const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config({path:__dirname+'/../.env'});
const user = process.env.user;
const password = process.env.userpwd;
const deeB = process.env.DB_HOST;

const url = `mongodb://${user}:${password}@0.0.0.0:27017/?authMechanism=SCRAM-SHA-1&authSource=${deeB}`;

let scriptMessage = chalk.blue.bgGreen("\nThis prompt script deletes most recent blog entry")

MongoClient.connect(url, function(err, db) {
    var dbs = db.db(process.env.DB_HOST);
    let options = {
        sort:{"_id": -1}
    }

    console.log(scriptMessage)

    dbs.collection("blogposts").findOneAndDelete({}, options ,function(err, res){
        if(err) throw err;
        console.log(chalk.bgRed("Last Entry Deleted!"));
        db.close();
    })
});