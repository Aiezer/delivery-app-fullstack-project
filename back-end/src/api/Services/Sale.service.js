// const secret = require('fs')
//   .readFileSync('../back-end/jwt.evaluation.key', { encoding: 'utf-8' });
const { sale, saleProduct } = require('../../database/models');

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
  createSale,
  updateSaleStatus,
};
