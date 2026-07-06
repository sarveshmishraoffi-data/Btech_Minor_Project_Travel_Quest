const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const usersController = require("../controllers/users");
const { saveRedirectUrl } = require("../middleware");

router.route("/signup")
    .get(usersController.renderSignupForm)
    .post(wrapAsync(usersController.signup));

router.route("/login")
    .get(usersController.renderLoginForm)
    .post(
        saveRedirectUrl,
        passport.authenticate("local", {
            failureRedirect: "/login",
            failureFlash: true,
        }),
        wrapAsync(usersController.login)
    );

router.get("/logout", usersController.logout);

module.exports = router;
