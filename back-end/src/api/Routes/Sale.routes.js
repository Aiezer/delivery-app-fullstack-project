const express = require('express');
const saleController = require('../Controllers/Sale.controller');

const router = express.Router();

router.post('/', saleController.createSale);
router.put('/update/:id', saleController.updateSaleStatus);

module.exports = router;
