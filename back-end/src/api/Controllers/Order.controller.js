const orderService = require('../Services/Order.service');

const getOrders = async (req, res) => {
  try {
    const token = req.header('Authorization')
    const orders = await orderService.getOrders(token);
    if (orders === false) return res.status(200).json({ message: "Você não tem pedidos!" });
    return res.status(200).json(orders);
  } catch (e) {
    console.log(e.error);
  }
};

module.exports = {
    getOrders,
};