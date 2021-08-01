const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotPass,
  resetPass,
} = require("../Controllers/authController");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotPass").post(forgotPass);
router.route("/resetPass").put(resetPass);
module.exports = router;
