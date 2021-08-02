const express = require("express");
const router = express.Router();
const { getPrivateData } = require("../Controllers/privateController");
const { protect } = require("../Middleware/authMiddleware");

router.route("/").get(protect, getPrivateData);

module.exports = router;
