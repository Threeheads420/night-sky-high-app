// =========================================================
// CLOUDINARY STORAGE CONFIGURATION
// Tells multer where uploaded images should go in Cloudinary.
// =========================================================

const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "night-sky-high",
    allowed_formats: ["jpg", "jpeg", "png", "webp", "gif"],
  },
});

module.exports = storage;