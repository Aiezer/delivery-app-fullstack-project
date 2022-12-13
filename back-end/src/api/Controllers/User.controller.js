const userService = require('../Services/User.service');
const { tokenGenerate } = require('../utils/loginFuncs');

const login = async (req, res) => {
  const { password } = req.body;

  const service = await userService.login(req.body.email, password);
  const { name, email, role, id } = service.message;

  if (service.bool === false) return res.status(404).json({ message: service.message });
  const token = tokenGenerate(req.body);

  req.headers.authorization = token;
  return res.status(200).json({ name, email, id, role, token });
};

const register = async (req, res) => {
  try {
    const newUser = await userService.register(req.body);
    if (!newUser) return res.status(409).json({ message: 'Email already registered' });

    return res.status(201).json({ message: 'O usuario foi criado', newUser });
  } catch (e) {
    return res.status(500).json({ message: e.error });
  }
};

const validateToken = async (req, res) => {
  const autho = req.headers.authorization;

  const service = await userService.validateToken(autho);
  if (service) return res.status(201).send(true);
  
  return res.status(401).send(false);
};

module.exports = {
  register,
  login,
  validateToken,
};
