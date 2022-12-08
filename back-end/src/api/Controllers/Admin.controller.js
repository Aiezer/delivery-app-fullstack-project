const adminService = require('../Services/Admin.service');
const { tokenGenerate } = require('../utils/loginFuncs');

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  const findAdmin = adminService.loginAdmin(email, password);

  if (!findAdmin) return res.status(404).json({ message: 'Email ou senha incorreta(o)(s)' });

  const token = tokenGenerate(req.body);
  req.headers.authorization = token;

  return res.status(200).json({ token });
};

const registerAdmin = async (req, res) => {
  const token = req.headers.authorization;

  try {
    const newAdmin = await adminService.registerAdmin(token, req.body);
    if (!newAdmin) return res.status(409).json({ message: 'Email already registered' });
    return res.status(201).json({ message: 'novo cadastro realizado' });
  } catch (error) {
    return res.status(500).json({ message: error.error });
  }
};

module.exports = {
  loginAdmin,
  registerAdmin,
};