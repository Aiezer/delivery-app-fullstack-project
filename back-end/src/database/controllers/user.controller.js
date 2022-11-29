const userService = require('../services/user.service');
const { tokenGenerate } = require('../utils/loginFuncs');

const login = async (req, res) => {
    const { email, password } = req.body;
    const service = await userService.login(email, password);
    if (!service) return res.status(404).json({ message: 'Nome de usuário ou senha incorreta(o)(s)' });
    const token = tokenGenerate(req.body);
    req.headers.authorization = token;
    return res.status(200).json({ token });
  }

module.exports = { login };