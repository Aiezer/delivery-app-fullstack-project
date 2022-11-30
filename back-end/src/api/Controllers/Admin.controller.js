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

const registreAdmin = async (req, res, next) => {
  try {
    const newAdmin = await adminService.registerAdmin(req.body);
    if (!newAdmin) return res.status(409).json({ message: 'Email already registered' });
    return res.status(201).json(newAdmin);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginAdmin,
  registreAdmin,
};