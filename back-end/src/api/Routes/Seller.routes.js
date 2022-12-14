const express = require('express');
const sellerController = require('../Controllers/Seller.controller');

const router = express.Router();

router.get('/', sellerController.getSellers);
router.get('/:id', sellerController.getSellerById);
router.post('/orders', sellerController.getSellersOrders);

module.exports = router;
