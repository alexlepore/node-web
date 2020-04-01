const router = require("express").Router();
const github = require("../../controllers/githubController");

router.route("/")
    .get(github.findAll);

module.exports = router;