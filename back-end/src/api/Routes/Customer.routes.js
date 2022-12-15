const { Router } = require('express');
const customerController = require('../Controllers/Customer.controller');

const router = Router();

router.post('/orders', customerController.getAll);
router.post('/orders/:id', customerController.getBySaleId);

module.exports = router;
