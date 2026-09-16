const express = require("express");
const router = express.Router();

const {
    createPackage,
    getAllPackages,
    getPackageById,
    updatePackage,
    deletePackage
} = require("../controller/packageController");

const auth = require("../middleware/auth");
const upload = require("../middleware/upload");

router.post(
    "/create-package",
    auth,
    upload.array("images", 12),
    createPackage
);

router.get("/", auth, getAllPackages);

router.get("/:id", auth, getPackageById);

router.put(
    "/:id",
    auth,
    upload.array("images", 12),
    updatePackage
);

router.delete("/:id", auth, deletePackage);

module.exports = router;