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

const getSellerById = async (sellerId) => {
  const userFind = await user.findAll({
    attributes: { exclude: ['password'] },
    where: { id: sellerId },
  });
  return userFind[0];
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

const updateSaleStatus = async (id) => {
  const saleForUpdate = await sale.update({ status: 'Entregue' }, 
    { where: { id } });
  return saleForUpdate;
};

module.exports = {
  getSellers,
  createSale,
  getSellerById,
  updateSaleStatus,
};
