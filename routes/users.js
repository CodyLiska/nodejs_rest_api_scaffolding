const express = require("express");
const router = express.Router();

const { getLoginPage } = require("../controllers/usersController");

/***
 * Login Landing Page
 * GET
 * "/users/login"
 ***/
router.get("/login", getLoginPage);

module.exports = router;
