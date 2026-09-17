const express = require("express");

const router = express.Router();

const {
    registerUser,
    login,
    deleteUser,
    getUserDetails,
    updateUserDetails,
    changePassword
} = require("../controller/userController");

router.post("/register", registerUser);
router.post("/login", login);

router.get("/:id", getUserDetails);

router.put("/:id", updateUserDetails);
router.delete("/:id", deleteUser);
router.put("/:id/change-password", changePassword);

module.exports = router;