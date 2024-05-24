const express = require("express");
const userAction = require("../controllers/user");

const router = express.Router();

router.post("/", userAction.createUser);

module.exports = router;
