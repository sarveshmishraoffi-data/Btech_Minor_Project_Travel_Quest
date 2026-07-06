const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const listingsController = require("../controllers/listings");
const { isLoggedIn, isOwner, validateListing } = require("../middleware");
const multer = require("multer");
const { storage } = require("../cloudConfig");
const path = require("path");

let upload;
if (process.env.CLOUD_NAME && process.env.CLOUD_API_KEY && process.env.CLOUD_API_SECRET) {
    upload = multer({ storage });
} else {
    // Fallback to local storage in public/uploads
    const fs = require('fs');
    const localDir = path.join(__dirname, "../public/uploads");
    if (!fs.existsSync(localDir)) {
        fs.mkdirSync(localDir, { recursive: true });
    }
    const diskStorage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, localDir);
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
        }
    });
    upload = multer({ storage: diskStorage });
}

router.route("/")
    .get(wrapAsync(listingsController.index))
    .post(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingsController.create));

router.get("/new", isLoggedIn, listingsController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(listingsController.show))
    .put(isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(listingsController.update))
    .delete(isLoggedIn, isOwner, wrapAsync(listingsController.destroy));

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingsController.renderEditForm));

router.post("/:id/expenses", isLoggedIn, wrapAsync(listingsController.addExpense));
router.post("/:id/price-alerts", wrapAsync(listingsController.addPriceAlert));

module.exports = router;
