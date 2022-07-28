const express = require("express");
const { get } = require("mongoose/lib/schematype");
const router = express.Router();
const User = require("../models/user");
const { loginUser, registerUser } = require("../controllers/user.js");


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
