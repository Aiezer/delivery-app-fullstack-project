const productService = require('../Services/Product.service');

const getProducts = async (_req, res) => {
  const products = await productService.getProducts();
  return res.status(200).json(products);
};

module.exports = {
    getProducts,
};