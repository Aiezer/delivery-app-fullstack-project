const md5 = require('md5');
const { user } = require('../../database/models');

const login = async (email, password) => {
  const findUser = await user.findAll({ where: { email } });
  if (!findUser[0]) return false;
  const passwordHash = md5(password);
  if (passwordHash === findUser[0].password) return true
  return false;
}

const register = async (body) => {
  const hashPassword = md5(body.password);

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