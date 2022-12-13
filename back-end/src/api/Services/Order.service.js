const { sale, product } = require('../../database/models');

  const getAll = async (userId) => {
    const customerOrders = await sale.findAll({
      where: { userId },
    });

    return customerOrders;
  };

  const getBySaleId = async (userId, saleId, role) => {
    const key = role === 'customer' ? { userId, id: saleId } : { sellerId: userId, id: saleId };
console.log('entrou');
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
    console.log(sales);
    return sales; 
  };

module.exports = {
  getAll,
  getBySaleId,
};
