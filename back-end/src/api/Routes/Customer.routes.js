const customerController = require('../Controllers/Customer.controller');
const express = require('express');

const router = express.Router();

router.post('/register', customerController.register);

module.exports = router;