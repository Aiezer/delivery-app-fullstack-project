const express = require('express');
const orderController = require('../Controllers/Order.controller');

const router = express.Router();

router.get('/', orderController.getOrders);

module.exports = router;
