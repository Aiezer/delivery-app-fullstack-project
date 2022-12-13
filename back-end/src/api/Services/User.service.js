const md5 = require('md5');
const jwt = require('jsonwebtoken');
const secret = require('fs')
.readFileSync('../back-end/jwt.evaluation.key', { encoding: 'utf-8' }); 
const { user } = require('../../database/models');

const login = async (email, password) => {
  const findUser = await user.findAll({ where: { email } });
  if (!findUser[0]) return { bool: false, message: 'Não existe esse usuário!' };

  const passwordHash = md5(password);

  if (passwordHash === findUser[0].password) return { bool: true, message: findUser[0] };

  return { bool: false, message: 'A senha está incorreta!' };
};

const register = async (body) => {
  const hashPassword = md5(body.password);

  const exist = await user.findOne({ where: { email: body.email } });
  if (exist) return false;

  const newUser = await user.create({
    ...body,
    password: hashPassword,
  });

  return newUser;
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

module.exports = {
  register,
  login,
  validateToken,
};
