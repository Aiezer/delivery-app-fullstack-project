const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const jwtKey = require('fs')
.readFileSync('../back-end/jwt.evaluation.key', { encoding: 'utf-8' }); 

const tokenGenerate = (data) => jwt.sign(data, jwtKey, { expiresIn: '7d' }); 

module.exports = { tokenGenerate };