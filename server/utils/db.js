const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();
//const user = process.env.user;
//const password = process.env.userpwd;
const database = process.env.DB_HOST;
//if not using docker localhost = db
//const url = `mongodb://${user}:${password}@db:27017/?authMechanism=SCRAM-SHA-1&authSource=${deeB}`;
const url = `mongodb://localhost:27017/${database}`
let mongodb;

function connect(callback){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        mongodb = db.db(process.env.DB_HOST);
        callback();
    });
}

console.log(database)

function get(){
    return mongodb;
}

function close(){
    mongodb.close();
}

module.exports = {
    connect,
    get,
    close
};