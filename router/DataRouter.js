// Packages
const Express = require("express");

// Router Declaration
const DataRouter = Express.Router();

// imports
const DataDbo = require("../dbo/DataDbo");

//Post Method
DataRouter.post("/createData", async (req, res) => {
    try {
        const result = await DataDbo.createData({ ...req.body });
        console.log(result)
        res.status(200).send(result);
    } catch (err) {
        res.send(err);
    }
});

//Get Method
DataRouter.get("/getData/:id", async (req, res) => {
    let id = req.params.id;
    try {
        const result= await DataDbo.getData({ id });
        console.log(result)
        res.status(200).send(result);
    } catch (err) {
        console.log(result)
    }
});
module.exports = DataRouter;
