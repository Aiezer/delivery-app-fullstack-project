const { user } = require('../models')
const md5 = require('md5')

const login = async (email, password) => {
    const findUser = await user.findAll({ where: { email } });
    if (!findUser[0]) return false;
    const passwordHash = md5(password);
    if(passwordHash === findUser[0].password) return true
    return false;
  }

module.exports = { login };