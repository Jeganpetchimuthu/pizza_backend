const express = require("express");
const mongoose = require("mongoose");

const Pizza = require("../models/pizza.js");

const router = express.Router();

const createPizza = async (req, res) => {
  console.log(req.body);
  const newPizza = new Pizza({
    roll: req.body.roll,
    pizza: req.body.pizza,
    sauce: req.body.sauce,
    cheese: req.body.cheese,
    veggies: req.body.veggies,
    meat: req.body.meat,
  });

  await newPizza.save();

  res.status(200).json(newPizza);
  res.status(400).json("error");
};

const getPizza = async (req, res) => {
  try {
    const pizza = await Pizza.find();
    res.status(200).json(pizza);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatePizza = async (req, res) => {
  const _id = req.params._id;
  try {
    await Pizza.findOneAndUpdate(
      {
        _id: req.params._id,
      },
      {
        pizza: req.body.pizza,
        sauce: req.body.sauce,
        cheese: req.body.cheese,
        veggies: req.body.veggies,
        meat: req.body.meat,
      }
    );
    res.status(201).json({ _id: _id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePizza = async (req, res) => {
  const _id = req.params._id;
  try {
    await Pizza.findOneAndRemove({
      _id: _id,
    });
    res.status(201).json({ _id: _id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports.getPizza = getPizza;
module.exports.createPizza = createPizza;
module.exports.updatePizza = updatePizza;
module.exports.deletePizza = deletePizza;
