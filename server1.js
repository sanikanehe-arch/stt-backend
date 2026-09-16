const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://sanikanehe2006_db_user:8TVHlJGWkZR1BYPW@ac-havcs7f-shard-00-00.h8ceu0f.mongodb.net:27017,ac-havcs7f-shard-00-01.h8ceu0f.mongodb.net:27017,ac-havcs7f-shard-00-02.h8ceu0f.mongodb.net:27017/?ssl=true&replicaSet=atlas-u0x3sj-shard-0&authSource=admin&appName=Cluster0")
.then(() => {
    console.log("Connected");

    app.listen(5000, () => {
        console.log("Server running on port 5000");
    });
})
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Backend is working!");
});