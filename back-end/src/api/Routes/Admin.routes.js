const express = require('express');
const adminController = require('../Controllers/Admin.controller');
const validateRegister = require('../Middlewares/validateBody.middleware');

const router = express.Router();

router.post('/register', validateRegister, adminController.registreAdmin);
router.post('/', adminController.loginAdmin);

module.exports = router;
