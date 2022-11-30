const md5 = require('md5');
const { user } = require('../../database/models');
const { validateRegistre } = require('../utils/ValidateSchemas');

const login = async (email, password) => {
  const findUser = await user.findAll({ where: { email } });
  if (!findUser[0]) return { bool: false, message: 'Não existe esse usuário!' };
  const passwordHash = md5(password);
  if (passwordHash === findUser[0].password) return { bool: true, message: findUser[0] };
  return { bool: false, message: 'A senha está incorreta!' };
};

const register = async (body) => {
  const findError = validateRegistre(body);

  if (findError) throw new Error(findError);

  const hashPassword = md5(body.password);

  const exist = await user.findOne({ where: { email: body.email } });
  if (exist) return false;

  const newUser = await user.create({
    ...body,
    password: hashPassword,
  });

  return newUser;
};

module.exports = {
  register,
  login,
};