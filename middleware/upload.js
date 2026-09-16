const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir = path.resolve(
    __dirname,
    "..",
    "uploads",
    "packages"
);

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

console.log("Upload directory:", uploadDir);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },

    filename: function (req, file, cb) {
        const uniqueName =
            Date.now() +
            "stt" +
            path.extname(file.originalname);

        cb(null, uniqueName);
    }
});

const upload = multer({
    storage: storage,

    fileFilter: function (req, file, cb) {
        const allowedExtensions = /jpeg|jpg|png|webp/;

        const extension = allowedExtensions.test(
            path.extname(file.originalname).toLowerCase()
        );

        const mimeType = allowedExtensions.test(
            file.mimetype
        );

        if (extension && mimeType) {
            cb(null, true);
        } else {
            cb(new Error("Only image files are allowed"));
        }
    }
});

module.exports = upload;