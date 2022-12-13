const md5 = require('md5');
const jwt = require('jsonwebtoken');
const secret = require('fs')
.readFileSync('../back-end/jwt.evaluation.key', { encoding: 'utf-8' }); 
const { user } = require('../../database/models');

const validateToken = async (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    const passwordHash = md5(decoded.password);
    const findUser = await user.findAll({ where: { email: decoded.email } });
    if (passwordHash === findUser[0].password) return true;
    return false;
  } catch (e) {
    return false;
  }
};

const registerAdmin = async (token, body) => {
  const alredyExist = await user.findOne({ where: { email: body.email } });
  if (alredyExist) return false;
  const verify = await validateToken(token);
  if (!verify) return false;

  const userpassword = md5(body.password);
  const NewAdmin = await user.create({
    ...body,
    password: userpassword,
  });

  return NewAdmin;
};

module.exports = {
  registerAdmin,
};
