const express = require("express");
const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const Joi = require("joi");
const app = express();

const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// Morgan Configuration
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startupDebugger("Morgan enabled..");
}

// Mongoose Configuration
mongoose
  .connect("mongodb://localhost:27017/udemy", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => dbDebugger("Connected to MongoDB..."))
  .catch((err) => dbDebugger("an error occured " + err));

app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => startupDebugger(`Listening on port ${PORT}`));
