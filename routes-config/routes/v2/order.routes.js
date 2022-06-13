const express = require("express");
const routes = express.Router();

routes.get("/order", (req, res, next) => {
  res.send("v2/order");
});

module.exports = routes;
