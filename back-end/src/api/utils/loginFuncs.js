// const md5 = require('md5');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const tokenGenerate = (data) => {
  const secret = process.env.JWT_SECRET || 'jwt_secret';
  return jwt.sign(data, secret, { expiresIn: '1d' }); 
};

module.exports = { tokenGenerate };
