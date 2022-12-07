const orderService = require('../Services/Order.service');

const getOrders = async (_req, res) => {
  try {
    const orders = await orderService.getOrders();
    return res.status(200).json(orders);
  } catch (e) {
    console.log(e.error);
  }
};

module.exports = {
    getOrders,
};