const express = require("express");
const router = express.Router();

const { getItemsLandingPage, getSearchPage } = require("../controllers/itemsController")

/***
 * Itmes Landing Page
 * GET
 * "/items"
 ***/
router.get("/", getItemsLandingPage);

/***
 * Search Page
 * GET
 * "/items/search"
 ***/
router.get("/search", getSearchPage);

module.exports = router;
