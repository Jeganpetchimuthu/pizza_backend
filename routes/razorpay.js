const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const router = express.Router();

module.exports.orders = (req, res) => {
  const instance = new Razorpay({
    key_id: "l83FLKBDYLUhlBpfkx6",
    key_secret: "rzp_test_aGyNE45OAm",
  });

  const options = {
    amount: req.body.amount * 100,
    currecy: "INR",
  };
  instance.orders.create(options, function (error, order) {
    if (error) {
      return res.status(500).send({ message: "server error" });
    }
    return res.status(200).send({ message: "order craeted", data: order });
  });
};

module.exports.verify = () => {
  const body =
    req.body.response.razorpay_order_id +
    "|" +
    req.body.response.razorpay_paymenyt_id;
  const expectedSignature = crypto
    .createHmac("jana234", proccess.env.SECRET_KEY)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === req.body.response.razorpay_signature) {
    res.status(200).send({ message: "valid signature" });
  } else {
    res.status(400).send({ message: "invalid signature" });
  }
};
