const { sale, product } = require('../../database/models');

const getObjectSale = (sales) => {
  const { id, userId, sellerId, totalPrice, deliveryAddress, 
    deliveryNumber, saleDate, status, products } = sales;
    const format = saleDate.toLocaleString();
    const finalDate = format.split(' ')[0];
    return {
      id,
      userId,
      sellerId,
      totalPrice: totalPrice.replace('.', ','),
      deliveryAddress,
      deliveryNumber,
      saleDate: finalDate,
      status,
      products,
    }; 
};

  const getAll = async (userId) => {
    const customerOrders = await sale.findAll({
      where: { userId },
    });
    const mapOrders = customerOrders.map((order) => getObjectSale(order))
    return mapOrders;
  };

  const getBySaleId = async (userId, saleId, role) => {
    const key = role === 'customer' ? { userId, id: saleId } : { sellerId: userId, id: saleId };
    const sales = await sale.findOne({ 
      where: key, 
      include: [
        { model: product,
          as: 'products',
          attributes: { exclude: ['urlImage'] },
          through: { as: 'qtd', attributes: ['quantity'] },
        },
    ],
    });
    return getObjectSale(sales);
  };

module.exports = {
  getAll,
  getBySaleId,
  getObjectSale,
};
