const { Router } = require('express');
const orderController = require('../Controllers/CustomerOrder.controller');

const router = Router();

router.post('/orders', orderController.getAll);

router.post('/orders/:id', orderController.getBySaleId);

module.exports = router;
