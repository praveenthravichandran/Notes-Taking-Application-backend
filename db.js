const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDb = mongoose.connect(process.env.MongoDb_Url);

module.exports = {
    connectDb,
};
