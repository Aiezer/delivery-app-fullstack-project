const productService = require('../Services/Product.service');

const getProducts = async (_req, res) => {
  try {
    const products = await productService.getProducts();
    return res.status(200).json(products);
  } catch (e) {
    console.log(e.error);
  }
};

module.exports = {
    getProducts,
};