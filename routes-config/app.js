const express = require("express");
const app = express();

app.use(require("./routes"));
app.use(express.json());

module.exports = app;
