// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const joi = require("@hapi/joi");
// const user = require("../models/user");

// const router = express.Router();

// const registerSchema = joi.object({
//   first_name: joi.string().min(3).required(),
//   last_name: joi.string().min(3).required(),
//   email: joi.string().min(3).required().email(),
//   password: joi.string().min(3).required(),
// });

// router.post("/register", async (req, res) => {
//   //checking email alreay existed

//   const emailexist = await user.findOne({ email: req.body.email });
//   if (emailexist) {
//     res.status(400).json("email already existed!!");
//     return;
//   }

//   //Hashing the password

//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(req.body.password, salt);

//   const user = new user({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     password:hashedPassword,
//   });
// });
