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
<<<<<<< HEAD
    return res.status(201).json({ message: 'O usuario foi criado' });
=======
    return res.status(201).json({ message: 'O usuario foi criado', newUser });
>>>>>>> fe9ac140db32d4f9a54876ed28bf2fe08a2a9d22
  } catch (e) {
    return res.status(500).json({ message: e.error });
  }
};

const validateToken = async (req, res) => {
  const autho = req.headers.authorization;
  console.log('dentro do controller', autho);

  const service = await userService.validateToken(autho);
  if (service === true) return res.status(201).send(true);
  
  return res.status(401).send(false);
};

module.exports = {
  register,
  login,
  validateToken,
};