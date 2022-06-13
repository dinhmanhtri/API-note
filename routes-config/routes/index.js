const express = require('express');
const routes = express.Router();

routes.use("/v1", require('./v1/order.routes'));
routes.use("/v2", require('./v2/order.routes'));

module.exports = routes;