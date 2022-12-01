const { product } = require('../../database/models');

const getProducts = async () => {
    const findProducts = await product.findAll();
    if (!findProducts[0]) return false;
    return findProducts;
};

module.exports = {
    getProducts,
};