const { user, sale, product } = require('../../database/models');

const getSellers = async () => {
  const sellers = await user.findAll({
    attributes: { exclude: ['password'] },
    where: { role: 'seller' },
  });
  return sellers;
};

const getSellerById = async (sellerId) => {
  const userFind = await user.findAll({
    attributes: { exclude: ['password'] },
    where: { id: sellerId },
  });
  return userFind[0];
};

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

const getSellerOrders = async (sellerId) => {
  try {
    const sales = await sale.findAll({
      where: { sellerId },
      include: [
        {
          model: product,
          as: 'products',
          attributes: { exclude: ['urlImage'] },
          through: { as: 'qtd', attributes: ['quantity'] },
        },
      ],
    });
    return sales.map((item) => getObjectSale(item));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getSellers,
  getSellerById,
  getSellerOrders,
};
