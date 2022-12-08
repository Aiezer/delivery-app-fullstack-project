const md5 = require('md5');
const jwt = require('jsonwebtoken');
const secret = require('fs')
.readFileSync('../back-end/jwt.evaluation.key', { encoding: 'utf-8' }); 
const { user } = require('../../database/models');

const loginAdmin = async (email, password) => {
  const findAdmin = await user.findAll({ where: { email } });
  if (!findAdmin[0]) return false;
  const passwordHash = md5(password);
  if (passwordHash === findAdmin[0].password) return findAdmin;
  return false;
};

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

  const verify = validateToken(token);
  if (!verify) return false;

  const userpassword = md5(body.password);
  const NewAdmin = await user.create({
    ...body,
    password: userpassword,
  });

  return NewAdmin;
};

module.exports = {
  loginAdmin,
  registerAdmin,
};
