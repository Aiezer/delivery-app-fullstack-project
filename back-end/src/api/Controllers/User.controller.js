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

const register = async (req, res) => {
  try {
    const newUser = await userService.register(req.body);
    if (!newUser) return res.status(409).json({ message: 'Email already registered' });
    return res.status(201).json({ message: 'O usuario foi criado' });
  } catch (e) {
    return res.status(500).json({ message: e.error });
  }
};

const validateToken = async (req, res) => {
      const service = await userService.validateToken(req.body);
      if (service === false) return res.status(401).send(false);
      if (service === true) return res.status(200).send(true);
};

module.exports = {
  register,
  login,
  validateToken,
};