const express = require("express");
const route = express.Router();
const createError = require("http-errors");

// Get a list of all user
route.get("/", (req, res, next) => {
  return next(createError.InternalServerError());
  res.send("Get list user");
});

route.post("/", (req, res, next) => {
  res.send("Create user");
});

route.patch("/id", (req, res, next) => {
  res.send("Update a user");
});

// Delete a User
route.delete("/id", (req, res, next) => {
  res.send("Delete a user");
});

route.get("/id", (req, res, next) => {
  res.send("Get user detail");
});

module.exports = route;
