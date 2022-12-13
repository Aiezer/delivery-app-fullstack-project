const express = require('express');
const saleController = require('../Controllers/Sale.controller');

const router = express.Router();

router.get('/sellers', saleController.getSellers);
router.post('/', saleController.createSale);

module.exports = router;
