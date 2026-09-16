const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

// =========================
// ROUTES
// =========================

const userRoutes = require("./routes/userRoutes");
const packageRoutes = require("./routes/packageRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

const app = express();

// =========================
// MIDDLEWARE
// =========================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =========================
// UPLOADS
// =========================

app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"))
);

// =========================
// ROUTES
// =========================

app.use("/users", userRoutes);

app.use("/packages", packageRoutes);

app.use("/bookings", bookingRoutes);

app.use("/contacts", contactRoutes);

console.log("USER ROUTES LOADED");
console.log("PACKAGE ROUTES LOADED");
console.log("BOOKING ROUTES LOADED");
console.log("CONTACT ROUTES LOADED");

// =========================
// MONGODB CONNECTION
// =========================

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:", error);
    });

// =========================
// SERVER
// =========================

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});