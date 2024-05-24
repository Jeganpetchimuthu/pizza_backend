const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl, { useNewUrlParser: true });

const con = mongoose.connection;

try {
  con.on("open", () => {
    console.log("mongoDB connected!!!");
  });
} catch (error) {
  console.log("Error: " + error);
}

const PORT = process.env.PORT;

const pizzaRouter = require("./routes/pizza");
app.use("/pizza", pizzaRouter);

const razorpayRouter = require("./routes/pizza");
app.use("/order", razorpayRouter);
app.use("/verify", razorpayRouter);

const loginRouter = require("./routes/loginpage");
app.use("/api", loginRouter);

const mailRouter = require("./routes/mail");
app.use("/api", mailRouter);

// const userRouter = require("./routes/user");

// app.use("/User", userRouter);

app.get("/", (req, res) => {
  res.send("welcome!!!!");
});
app.get("/read", (req, res) => {
  res.send("Hello all welcome!!!!");
});

app.listen(PORT, () => {
  console.log("This Node application is running on port " + PORT);
});
