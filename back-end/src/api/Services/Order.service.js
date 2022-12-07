const { sale } = require('../../database/models');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'jwt_secret';

const getOrders = async (token) => {
    const decoded = jwt.verify(token, secret);
    // const email = 
    const findOrders = await sale.findAll();
    if (!findOrders[0]) return false;
    return findOrders;
};

module.exports = {
    getOrders,
};