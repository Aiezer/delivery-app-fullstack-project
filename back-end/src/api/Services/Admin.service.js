const md5 = require('md5');
const { user } = require('../../database/models');

const loginAdmin = async (email, password) => {
    const findAdmin = await user.findAll({ where: { email } });
    if (!findAdmin[0]) return false;
    const passwordHash = md5(password);
    if (passwordHash === findAdmin[0].password) return findAdmin;
    return false;
};

const registerAdmin = async (body) => {
  const alredyExist = await user.findOne({ where: { email: body.email } });
  if (alredyExist) return false;

  const hashPassword = md5(body.password);

  const NewAdmin = user.create({
    ...body,
    password: hashPassword,
  });

  return NewAdmin;
};

module.exports = {
  loginAdmin,
  registerAdmin,
};