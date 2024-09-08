const express = require("express");
const router = express.Router();

//import controller
const {createQuote,getQuote,searchQuote} = require("../controllers/quote");

//mapping Create
router.get("/quotes/",getQuote);
router.get("/quotes/:search",searchQuote);
router.post("/quotes/create",createQuote);

module.exports = router;