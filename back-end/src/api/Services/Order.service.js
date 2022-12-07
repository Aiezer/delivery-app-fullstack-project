const { sale, user } = require('../../database/models');
const jwt = require('jsonwebtoken');

const secret = require('fs')
  .readFileSync('../back-end/jwt.evaluation.key', { encoding: 'utf-8' });

const getOrders = async (token) => {
    const decoded = jwt.verify(token, secret);
    const userFind = await user.findAll({ where: { email: decoded.email } })
    const findOrders = await sale.findAll({ where: { userId: userFind[0].id } });
    if (!findOrders[0]) return false;
    return findOrders;
};

module.exports = {
    getOrders,
};