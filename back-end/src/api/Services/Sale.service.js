// const secret = require('fs')
//   .readFileSync('../back-end/jwt.evaluation.key', { encoding: 'utf-8' });
const { user, sale, saleProduct } = require('../../database/models');

const getSellers = async () => {
  const sellers = await user.findAll({
    attributes: { exclude: ['password'] },
    where: { role: 'seller' },
  });
  return sellers;
};

const createSale = async (body) => {
  const { products } = body;
  const data = {
    userId: body.userId,
    sellerId: Number(body.sellerId),
    totalPrice: Number(body.totalPrice),
    deliveryAddress: body.deliveryAddress,
    deliveryNumber: body.deliveryNumber,
    status: body.status,
  };
  const sales = await sale.create({
    ...data,
  });

  products.map((prod) => {
    saleProduct.create({
      saleId: sales.id,
      productId: prod.prodId,
      quantity: Number(prod.prodQnt),
    });
  });

  return sales;
};

module.exports = {
  getSellers,
  createSale,
};