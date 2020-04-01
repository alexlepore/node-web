const router = require("express").Router();
const blogs = require("../../controllers/blogsController");

router.route("/")
    .get(blogs.findAll);

module.exports = router;