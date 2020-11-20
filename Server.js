// packages
const Express = require('express');
const Env = require("dotenv").config({ path: require("find-config")(".env") });

// Imports
const Server = Express();
const CONTEXT_PATH = Env.parsed.CONTEXT_PATH;
const PORT = Env.parsed.PORT || 3000;
const RouterMux = require('./RouterMux.js');
const Database = require('./database/Database');
const cors=require('cors');

// App Service Start Indication
console.log(new Date().toString() + " App service started");

// Database Initialization
Database.InitilizeDatabase();

// Parsing User data
Server.use(Express.json());
Server.use(Express.urlencoded({ extended: true }));
Server.use(cors());

// Router
Server.use(CONTEXT_PATH, RouterMux);

// Server is listening to port
Server.listen(PORT, () => {
	console.log(new Date().toString() + ' Server is listening to port ' + Env.parsed.PORT);
});
module.exports = { Server };