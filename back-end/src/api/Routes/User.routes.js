const express = require('express');
const userController = require('../Controllers/User.controller');

const router = express.Router();

router.post('/register', userController.register);
router.post('/', userController.login);

module.exports = router;