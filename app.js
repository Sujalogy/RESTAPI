const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// this server...
app.listen(3000, ()=> {
    try {
        mongoose.connection
        console.log("db connected...");
    } catch (error) {
        console.log("db not connected...");
    }
    console.log("server is running at port 3000...");
});

