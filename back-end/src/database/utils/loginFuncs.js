const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const md5 = require('md5');

dotenv.config();

const secret = process.env.JWT_SECRET || 'jwt_secret';
const tokenGenerate = (data) => { return jwt.sign(data, secret, { expiresIn: '1d' }); }

module.exports = { tokenGenerate }

