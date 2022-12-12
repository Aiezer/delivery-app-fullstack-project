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

const createSale = async (body, products) => {
  const sales = await sale.create({
    ...body,
  });
  products.map((prod) => saleProduct.create({
      saleId: sales.id,
      productId: prod.prodId,
      quantity: prod.prodQnt,
    }));
  return sales;
};

module.exports = {
  getSellers,
  createSale,
};