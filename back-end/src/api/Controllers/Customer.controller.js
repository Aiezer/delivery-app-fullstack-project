const customerService = require('../Services/Customer.service');

const register = async (req, res) => {
  const newUser = await customerService.register(req.body);
  return res.status(201).json(newUser);
};

module.exports = {
  register,
};