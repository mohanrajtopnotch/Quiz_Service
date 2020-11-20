// Packages
const Express = require("express");

// Router Initialization
const Router = Express.Router();

// imports
const DataRouter = require("./router/DataRouter.js");
Router.use(DataRouter);

// Testing Router
Router.get("/ping", (req, res) => {
    res.send("pong from server");
});

module.exports = Router;
