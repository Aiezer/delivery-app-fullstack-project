// const secret = require('fs')
//   .readFileSync('../back-end/jwt.evaluation.key', { encoding: 'utf-8' });
const { user, sale } = require('../../database/models');

const getSellers = async () => {
  const sellers = await user.findAll({
    attributes: { exclude: ['password'] },
    where: { role: 'seller' },
  });
  return sellers;
};

const createSale = async (body) => {
  const sales = await sale.create({
    ...body,
  });
  return sales;
};

module.exports = {
  getSellers,
  createSale,
};