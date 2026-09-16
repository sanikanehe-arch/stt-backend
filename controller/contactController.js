const Contact = require("../models/contactModel");

const createContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);

        res.status(201).json({
            message: "Contact created",
            contact: contact
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createContact
};