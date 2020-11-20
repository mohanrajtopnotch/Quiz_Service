//Import Package
const Mongoose = require("mongoose");
const Env = require("dotenv").config({ path: require("find-config")(".env") });
const DB_HOST=Env.parsed.DB_HOST;
//Database Connection
exports.InitilizeDatabase = async () => {
    try {
        await Mongoose.connect(
            DB_HOST,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useFindAndModify: true,
                useCreateIndex: true,
                useFindAndModify: false,
            }
        );
        console.log(
            new Date().toString() +
                DB_HOST.slice(30).padStart(93, "*") +
                " Database connected"
        );
    } catch (error) {
        console.log(
            new Date().toString() +
                " Unable to Connect " +
                DB_HOST.slice(30).padStart(93, "*")
        );
        console.log(error);
        throw error;
    }
};
