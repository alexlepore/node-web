const db = require("../utils/db");
const axios = require("axios");
const chalk = require("chalk");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    findAll: function(req, res){
        let options = {
            sort:{"_id": -1}
        }

        db
        .get()
        .collection("gifs")
        .find({}, options).limit(1)
        .toArray(function(err, results){
            res.json(results)
        })
    },
    create: function(req, res){
        const token = process.env.GIPHY_TOKEN;

        axios.get("https://api.giphy.com/v1/gifs/trending", {
            params: {
                api_key: token,
                limit: '10'
            }
        })
        .then(function(res){
            let data = res.data.data;
            let image_urls = {};

            for(let i = 0; i < data.length; i++){
                image_urls[i] = data[i].images.fixed_height.url;
            }

            db
            .get()
            .collection("gifs")
            .insertOne(image_urls, function(err, res){
                if (err) throw err;
                console.log(chalk.bgMagenta("****Gifs Inserted into DB****"));
                console.log(chalk.bgMagenta("****Called every 3 hours****"));
            });
        })
        .catch(function(error){
            console.log(error);
        });
    },
    deleteAll: function(req, res){
        let options = {
            sort:{"_id": -1}
        }

        db
        .get()
        .collection("gifs")
        .deleteOne({}, options, function(err, res){
            if (err) throw err;
            console.log(chalk.magenta("****Deleted oldest document from collection****"));
            console.log(chalk.magenta("****Called Every 3.1 hours****"));
        })
    }
};