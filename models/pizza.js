const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
  roll: {
    type: String,
    required: true,
  },
  pizza: {
    type: String,
    required: true,
    available: true,
  },

  sauce: {
    type: String,
    required: true,
    available: true,
  },

  cheese: {
    type: String,
    required: true,
    available: true,
  },

  veggies: {
    type: String,
    default: true,
    available: true,
  },

  meat: {
    type: [String],
    required: true,
    available: true,
  },
});
pizza = mongoose.model("pizza", pizzaSchema);
module.exports = pizza;
