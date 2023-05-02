const mongoose = require("mongoose");
const { dotenv } = require("process").config();
const connection = mongoose.connect(process.env.uri);
module.exports = {
    connection
}