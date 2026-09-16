const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());



mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("API is working!");
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});