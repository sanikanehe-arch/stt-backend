const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Trip", tripSchema);