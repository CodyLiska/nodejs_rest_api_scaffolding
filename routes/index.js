const express = require("express");
const router = express.Router();

const { getIndexLandingPage } = require("../controllers/indexController");

/***
 * App's Main Landing Page
 * GET
 * "/"
 ***/
router.get("/", getIndexLandingPage);

module.exports = router;
