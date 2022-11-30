const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const secret = process.env.JWT_SECRET || 'jwt_secret';
const tokenGenerate = (data) => jwt.sign(data, secret, { expiresIn: '1d' }); 

module.exports = { tokenGenerate };