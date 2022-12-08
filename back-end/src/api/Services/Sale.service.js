const secret = require('fs')
  .readFileSync('../back-end/jwt.evaluation.key', { encoding: 'utf-8' });
const { user, sales } = require('../../database/models');

const getSellers = () => {
  const sellers = user.findAll({ where: { role: 'seller' }});
  console.log(sellers);
  return sellers;
};

const createSale = (newSale) => {
  const sale = sales.create({
    ...newSale,
  });
  return sale;
};

module.exports = {
  getSellers,
  createSale,
}