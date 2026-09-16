const Booking = require("../models/bookingSchema");
const Package = require("../models/packageSchema");

// ===============================
// CREATE BOOKING
// ===============================
const createBooking = async (req, res) => {
    try {
        const { packageId, travelDate, guests } = req.body;

        // Check package
        const packageData = await Package.findById(packageId);

        if (!packageData) {
            return res.status(404).json({
                message: "Package not found"
            });
        }

        // Check available seats
        if (guests > packageData.availableSeats) {
            return res.status(400).json({
                message: "Not enough available seats"
            });
        }

        // Calculate total amount
        const totalAmount = packageData.price * guests;

        const booking = new Booking({
            user: req.user.id,
            package: packageId,
            travelDate,
            guests,
            totalAmount
        });

        await booking.save();

        // Reduce available seats
        packageData.availableSeats -= guests;
        await packageData.save();

        res.status(201).json({
            message: "Booking created successfully",
            booking
        });

    } catch (error) {
        res.status(500).json({
            message: "Error creating booking",
            error: error.message
        });
    }
};


// ===============================
// GET ALL BOOKINGS
// ===============================
const getAllBookings = async (req, res) => {
    try {

        const bookings = await Booking.find()
            .populate("user", "name email")
            .populate("package");

        res.status(200).json({
            message: "Bookings fetched successfully",
            bookings
        });

    } catch (error) {
        res.status(500).json({
            message: "Error fetching bookings",
            error: error.message
        });
    }
};


// ===============================
// GET BOOKING BY ID
// ===============================
const getBookingById = async (req, res) => {
    try {

        const booking = await Booking.findById(req.params.id)
            .populate("user", "name email")
            .populate("package");

        if (!booking) {
            return res.status(404).json({
                message: "Booking not found"
            });
        }

        res.status(200).json({
            message: "Booking fetched successfully",
            booking
        });

    } catch (error) {
        res.status(500).json({
            message: "Error fetching booking",
            error: error.message
        });
    }
};


// ===============================
// UPDATE BOOKING
// ===============================
const updateBooking = async (req, res) => {
    try {

        const { travelDate, guests, status } = req.body;

        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({
                message: "Booking not found"
            });
        }

        if (travelDate !== undefined) {
            booking.travelDate = travelDate;
        }

        if (guests !== undefined) {
            booking.guests = guests;
        }

        if (status !== undefined) {
            booking.status = status;
        }

        await booking.save();

        res.status(200).json({
            message: "Booking updated successfully",
            booking
        });

    } catch (error) {
        res.status(500).json({
            message: "Error updating booking",
            error: error.message
        });
    }
};


// ===============================
// DELETE BOOKING
// ===============================
const deleteBooking = async (req, res) => {
    try {

        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({
                message: "Booking not found"
            });
        }

        await Booking.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Booking deleted successfully",
            booking
        });

    } catch (error) {
        res.status(500).json({
            message: "Error deleting booking",
            error: error.message
        });
    }
};


module.exports = {
    createBooking,
    getAllBookings,
    getBookingById,
    updateBooking,
    deleteBooking
};