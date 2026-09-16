const express = require("express");

const router = express.Router();

const { createContact } = require("../controller/contactController");

router.post("/create-contact", createContact);

module.exports = router;