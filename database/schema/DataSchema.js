// Package
const Mongoose = require("mongoose");
// const MongooseHidden = require("mongoose-hidden");

// Mongoose Schema Declaration
const Schema = Mongoose.Schema;

// Data Column
const DATA_COLUMN = require("../column/DataColumn.js");
const DataSchema = new Schema(
    {    
        [DATA_COLUMN.ID]: {
            type: String,
            required: true,
        },
        [DATA_COLUMN.QUESTION]: {
            type: String,
            required: true,
        },
        [DATA_COLUMN.OPTION1]:{
            type:String,
            required:true
        },
        [DATA_COLUMN.OPTION2]:{
            type:String,
            required:true
        },
        [DATA_COLUMN.OPTION3]:{
            type:String,
            required:true
        },
        [DATA_COLUMN.OPTION4]:{
            type:String,
            required:true
        },
        [DATA_COLUMN.CORRECT]:{
            type:String,
            required:true
        },
    },
    {
        timestamps: true
    }
);
module.exports = Mongoose.model("DataSchema", DataSchema);
