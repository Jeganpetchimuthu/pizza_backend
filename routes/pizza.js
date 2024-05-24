const express = require("express");
const pizzaAction = require("../controllers/pizza");
const razorpayAction = require("./razorpay");
const router = express.Router();

router.get("/", pizzaAction.getPizza);
router.post("/create", pizzaAction.createPizza);
router.patch("/:_id", pizzaAction.updatePizza);
router.delete("/:_id", pizzaAction.deletePizza);

router.post("/order", razorpayAction.orders);
router.post("/verify", razorpayAction.verify);

module.exports = router;
