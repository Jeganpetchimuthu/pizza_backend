const express = require("express");

const router = express.Router();

const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")("sk");

router.post("/payment", (req, res) => {
  const { product, token } = req.body;
  const transactionKey = uuidv4();
  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges
        .create({
          amount: product.price,
          currency: "inr",
          customer: customer.id,
          receipt_email: token.email,
          description: product.name,
        })
        .then((result) => {
          res.json(result);
        })
        .catch((error) => {
          console.log(error);
        });
    });
});
module.exports = router;
