const express = require('express');
const customerController = require('../Controllers/Customer.controller');

const router = express.Router();

router.post('/register', customerController.register);

module.exports = router;