const express = require('express');
const userController = require('../Controllers/User.controller');

const router = express.Router();

router.post('/', userController.validateToken);

module.exports = router;