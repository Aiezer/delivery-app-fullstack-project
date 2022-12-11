const adminService = require('../Services/Admin.service');

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
  registerAdmin,
};