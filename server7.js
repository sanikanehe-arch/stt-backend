const express = require("express");
const mongoose = require("mongoose");
console.log("SERVER7 LOADED");
require("dotenv").config();

console.log("THIS IS MY SERVER7 FILE");

const Trip = require("./models/Trip");
const User = require("./models/User");

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.log("Connection Error:", err);
});

// Home Route
app.get("/", (req, res) => {
    res.send("Trip API is Running");
});

// Create Trip
app.post("/trips", async (req, res) => {
    try {
        const trip = new Trip(req.body);
        await trip.save();

        res.status(201).json({
            message: "Trip Created Successfully",
            trip
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Get All Trips
app.get("/trips", async (req, res) => {
    try {
        const trips = await Trip.find();
        res.status(200).json(trips);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Get Trip by ID
app.get("/trips/:id", async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);

        if (!trip) {
            return res.status(404).json({
                message: "Trip Not Found"
            });
        }

        res.status(200).json(trip);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Update Trip
app.put("/trips/:id", async (req, res) => {
    try {
        const trip = await Trip.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!trip) {
            return res.status(404).json({
                message: "Trip Not Found"
            });
        }

        res.status(200).json({
            message: "Trip Updated Successfully",
            trip
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Delete Trip
app.delete("/trips/:id", async (req, res) => {
    try {
        const trip = await Trip.findByIdAndDelete(req.params.id);

        if (!trip) {
            return res.status(404).json({
                message: "Trip Not Found"
            });
        }

        res.status(200).json({
            message: "Trip Deleted Successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Register User
app.post("/register", async (req, res) => {
    try {
        const user = new User(req.body);

        await user.save();

        res.status(201).json({
            message: "User Registered Successfully",
            user
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Get All Users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Get User by ID
app.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Update User
app.put("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        res.status(200).json({
            message: "User Updated Successfully",
            user
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Delete User
app.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        res.status(200).json({
            message: "User Deleted Successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

const PORT = 5000;

app.get("/test", (req, res) => {
    res.send("Test Route Working");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});