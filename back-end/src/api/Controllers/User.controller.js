const userService = require('../Services/User.service');
const { tokenGenerate } = require('../utils/loginFuncs');

const login = async (req, res) => {
  const { password } = req.body;
  const service = await userService.login(req.body.email, password);
  const { name, email, role } = service.message;
  if (service.bool === false) return res.status(404).json({ message: service.message });
  const token = tokenGenerate(req.body);
  req.headers.authorization = token;
  return res.status(200).json({ name, email, role, token });
};

const register = async (req, res, next) => {
  try {
    const newUser = await userService.register(req.body);
    if (!newUser) return res.status(409).json({ message: 'Email already registered' });
    return res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
};