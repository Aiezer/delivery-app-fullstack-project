const { Router } = require('express');
const orderController = require('../Controllers/CustomerOrder.controller');

const customerOrdersRoute = Router();

customerOrdersRoute
  .post(
    '/orders',
    orderController.getAll,
    )

  .post(
    '/orders/:id',
    orderController.getBySaleId,
    );

module.exports = customerOrdersRoute;
