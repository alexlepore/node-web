'use strict';

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const compression = require("compression");
const helmet = require("helmet");
const morgan = require("morgan");
const chalk = require("chalk");
const port = process.env.port || 3001;
const db = require("./utils/db");
const routes = require("./routes");
const giphy = require("./controllers/giphyController");
const dotenv = require("dotenv");
dotenv.config();


/**
 * Morgan logger
 */
app.use(morgan(function (tokens, req, res) {
	return '\n~~~~~~~~~\n' 
	+ chalk.bgBlue('Method') + ' ' + chalk.yellow(tokens.method(req, res))
	+ '\n' + chalk.bgBlue('Status') + ' ' + chalk.yellow(tokens['status'](req, res))
	+ '\n' + chalk.bgBlue('http-version') + ' ' + chalk.yellow(tokens['http-version'](req, res))
	+ '\n\n' + chalk.bgMagenta('Remote Address') + ' ' + chalk.bgCyan(tokens['remote-addr'](req, res))
	+ '\n' + chalk.bgMagenta('Referrer Header') + ' ' + chalk.bgCyan(tokens['referrer'](req, res))
	+ '\n' + chalk.bgMagenta('URL') + ' ' + chalk.bgCyan(tokens.url(req, res))
	+ '\n\n' + chalk.bgGreen('user-agent') + '\n' + chalk.cyan(tokens['user-agent'](req, res))
}));


app.use(routes);


/**
 * Get NODE_ENV from environment and store in Express.
 */
app.set('env', process.env.NODE_ENV);


/**
 * Configure body parser for AJAX requests
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/**
 * Protect and Compress
 */
app.use(helmet());
app.use(compression());


/**
 * Server listen DB Connection
 */
db.connect(function(){
	// Giphy API on server start
	giphy.create();

	/*****
	 * Every 3 hours call giphy
	 * Every 3.1 hours oldest call
	*****/
	setInterval(giphy.create, 10800000); 
	setInterval(giphy.deleteAll, 10800099);

	app.listen(port, function(){
		console.log(`Listening port ${port}`)
	});
});
