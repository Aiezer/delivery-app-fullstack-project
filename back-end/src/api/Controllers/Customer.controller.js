const customerService = require('../Services/Customer.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const service = await customerService.login(email, password);
  if (!service) return res.status(404).json({ message: 'Nome de usuário ou senha incorreta(o)(s)' });
  const token = tokenGenerate(req.body);
  req.headers.authorization = token;
  return res.status(200).json({ token });
}

const register = async (req, res, next) => {
  try {
    const newUser = await customerService.register(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
  
};

module.exports = {
  register,
  login,
};