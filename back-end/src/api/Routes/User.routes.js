const express = require('express');
const userController = require('../Controllers/User.controller');
const validateRegister = require('../Middlewares/validateBody.middleware');

const router = express.Router();

router.post('/register', validateRegister, userController.register);
router.post('/login', userController.login);

module.exports = router;