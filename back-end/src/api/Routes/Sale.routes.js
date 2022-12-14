const express = require('express');
const saleController = require('../Controllers/Sale.controller');

const router = express.Router();

router.get('/sellers', saleController.getSellers);
router.get('/sellers/:id', saleController.getSellerById);
router.post('/', saleController.createSale);
router.put('/update/:id', saleController.updateSaleStatus);

module.exports = router;
