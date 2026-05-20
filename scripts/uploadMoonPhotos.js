// =========================================================
// BULK UPLOAD MOON PHOTOS TO CLOUDINARY
// Uploads dated moon photo folders to Cloudinary.
// =========================================================

require("dotenv").config();

const fs = require("fs");
const path = require("path");
const cloudinary = require("../config/cloudinary");

const moonPhotoRoot = path.join(__dirname, "../moon-photos");

const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

async function uploadMoonPhotos() {
    const folders = fs.readdirSync(moonPhotoRoot);

    for (const folder of folders) {
        const folderPath = path.join(moonPhotoRoot, folder);

        if (!fs.statSync(folderPath).isDirectory()) {
            continue;
        }

        const files = fs.readdirSync(folderPath);

        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const extension = path.extname(file).toLowerCase();

            if (!allowedExtensions.includes(extension)) {
                continue;
            }

            const fileNameWithoutExtension = path.parse(file).name;

            console.log(`Uploading ${folder}/${file}...`);

            await cloudinary.uploader.upload(filePath, {
                folder: `night-sky-high/moon-photos/${folder}`,
                public_id: fileNameWithoutExtension,
                overwrite: true,
            });

            console.log(`Uploaded ${folder}/${file}`);
        }
    }

    console.log("All moon photos uploaded.");
}

uploadMoonPhotos();