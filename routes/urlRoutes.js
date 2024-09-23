const express = require('express');
const router = express.Router();
const { generateShortURL } = require("../controllers/urlMappingController");
router.post("/generate-short-url", generateShortURL)

module.exports.urlRouter = router;