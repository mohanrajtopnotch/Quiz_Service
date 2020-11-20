// packages
const Express = require('express');
const Env = require("dotenv").config({ path: require("find-config")(".env") });

// Imports
const Server = Express();
const RouterMux = require('./RouterMux.js');
const Database = require('./database/Database');
const cors=require('cors');
const PORT=Env.parsed.PORT || 7000;
const CONTEXT_PATH=Env.parsed.CONTEXT_PATH;
// App Service Start Indication
console.log(new Date().toString() + " App service started");

// Database Initialization
Database.InitilizeDatabase();

// Parsing User data
Server.use(Express.json());
Server.use(Express.urlencoded({ extended: true }));
Server.use(
	cors({
        //App Front CORS 
        origin: "http://localhost:3000",
        credentials: true,
    })
);

// Router
Server.use(CONTEXT_PATH, RouterMux);

// Server is listening to port
Server.listen(process.env.PORT, () => {
	console.log(new Date().toString() + ' Server is listening to port ' + process.env.PORT);
});
module.exports = { Server };