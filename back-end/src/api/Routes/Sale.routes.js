const express = require('express');
const { validateJWT } = require('../Middlewares/validateJWT.middleware');
const saleController = require('../Controllers/Sale.controller');

const router = express.Router();

router.get('/sellers', saleController.getSellers);
router.get('/sellers/:id', saleController.getSellerById);
router.post('/', validateJWT, saleController.createSale);

module.exports = router;
