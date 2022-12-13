const orderService = require('../Services/Order.service');

const getAll = async (req, res) => {
  const { userId } = req.body;
  
  const customerOrders = await orderService.getAll(userId);

  return res.status(200).json(customerOrders);
};

const getBySaleId = async (req, res) => {
  const { id } = req.params;
  const { userId, role } = req.body;
  const sales = await orderService.getBySaleId(userId, id, role);
  return res.status(200).json(sales);
};

module.exports = {
  getAll,
  getBySaleId,
};
