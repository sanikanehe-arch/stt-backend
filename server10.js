const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "API is running"
    });
});

// User routes
const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});