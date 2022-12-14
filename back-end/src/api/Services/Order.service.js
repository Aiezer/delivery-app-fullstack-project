const { sale, product } = require('../../database/models');

  const getAll = async (userId) => {
    const customerOrders = await sale.findAll({
      where: { userId },
    });

    return customerOrders;
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
    const format = sales.saleDate.toLocaleString();
    const finalDate = format.split(' ')[0];
    sales.date = finalDate
    return sales; 
  };

module.exports = {
  getAll,
  getBySaleId,
};
