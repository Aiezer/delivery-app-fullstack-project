const express = require('express');
const saleController = require('../Controllers/Sale.controller');

const router = express.Router();

router.get('/', saleController.getSellers);
router.post('/', saleController.createSale);

module.exports = router;
