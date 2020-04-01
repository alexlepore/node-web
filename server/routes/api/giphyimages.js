const router = require("express").Router();
const gifs = require("../../controllers/giphyController");

router.route("/")
    .get(gifs.findAll);

module.exports = router;