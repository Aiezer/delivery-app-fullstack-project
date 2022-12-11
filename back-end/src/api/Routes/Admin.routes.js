const express = require('express');
const adminController = require('../Controllers/Admin.controller');
const validateRegister = require('../Middlewares/validateBody.middleware');

const router = express.Router();

router.post('/register', validateRegister, adminController.registerAdmin);

module.exports = router;
