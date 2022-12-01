const express = require('express');
const productController = require('../Controllers/Product.controller');

const router = express.Router();

router.get('/', productController.getProducts);

module.exports = router;
