const userService = require('../Services/User.service');
const { tokenGenerate } = require('../utils/loginFuncs');

const login = async (req, res) => {
  const { email, password } = req.body;
  const service = await userService.login(email, password);
  if (!service) return res.status(404).json({ message: 'Email ou senha incorreta(o)(s)' });
  const token = tokenGenerate(req.body);
  req.headers.authorization = token;
  return res.status(200).json({ token });
};

const register = async (req, res, next) => {
  try {
    const newUser = await userService.register(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};