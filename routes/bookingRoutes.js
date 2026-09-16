const express = require("express");

const router = express.Router();

const {
    createBooking,
    getAllBookings,
    getBookingById,
    updateBooking,
    deleteBooking
} = require("../controller/bookingController");

const auth = require("../middleware/auth");


// Create booking
router.post("/create-booking", auth, createBooking);


// Get all bookings
router.get("/", auth, getAllBookings);


// Get booking by ID
router.get("/:id", auth, getBookingById);


// Update booking
router.put("/:id", auth, updateBooking);


// Delete booking
router.delete("/:id", auth, deleteBooking);


module.exports = router;