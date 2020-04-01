const router = require("express").Router();
const apiGithubRepos = require("./githubrepos");
const apiBlogEntries = require("./blogentries");
const apiGiphyImages = require("./giphyimages");

router.use("/githubrepos", apiGithubRepos);
router.use("/blogentries", apiBlogEntries);
router.use("/giphyimages", apiGiphyImages);

module.exports = router;