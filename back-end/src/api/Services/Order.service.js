const jwt = require('jsonwebtoken');
const secret = require('fs');
const { sale, user } = require('../../database/models');

  secret.readFileSync('../back-end/jwt.evaluation.key', { encoding: 'utf-8' });

const getOrders = async (token, type) => {
    const decoded = jwt.verify(token, secret);
    console.log(type, token);
    if (type === 'customer') {
      const userFind = await user.findAll({ where: { email: decoded.email } });
      const findOrders = await sale.findAll({ where: 
        type === 'customer'
        ? { userId: userFind[0].id }
        : { sellerId: userFind[0].id },
         });
      if (!findOrders[0]) return false;
      return findOrders;
    }
};

module.exports = {
    getOrders,
};
