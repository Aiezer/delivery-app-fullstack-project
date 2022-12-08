// const secret = require('fs')
//   .readFileSync('../back-end/jwt.evaluation.key', { encoding: 'utf-8' });
const { user, sales } = require('../../database/models');

const getSellers = async () => {
  const sellers = await user.findAll({
    attributes: { exclude: ['password'] },
    where: { role: 'seller' },
  });
  return sellers;
};

const createSale = async (newSale) => {
  const sale = await sales.create({
    ...newSale,
  });
  return sale;
};

module.exports = {
  getSellers,
  createSale,
};