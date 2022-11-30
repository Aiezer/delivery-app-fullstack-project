const express = require('express');
const adminController = require('../Controllers/Admin.controller');

const router = express.Router();

router.post('/registrer', adminController.registreAdmin);
router.post('/', adminController.loginAdmin);

module.exports = router;
