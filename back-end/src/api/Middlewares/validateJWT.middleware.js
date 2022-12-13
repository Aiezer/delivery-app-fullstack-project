const jwt = require('jsonwebtoken');

require('dotenv/config');

const secret = require('fs')
  .readFileSync('../back-end/jwt.evaluation.key', { encoding: 'utf-8' });

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || token === '') {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    jwt.verify(token, secret);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateJWT,
};
