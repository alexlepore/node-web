const db = require("../utils/db");

module.exports = {
    findAll: function(req, res){
        db
        .get()
        .collection("blogposts")
        .find({}).toArray(function(err, results){
            res.json(results)
        });
    }
};