const saleService = require('../Services/Sale.service');

const getSellers = async (req, res) => {
  try {
    const sellers = await saleService.getSellers();
    return res.status(200).json({ sellers });
  } catch (error) {
    console.log('controller:', error);
  }
};

const createSale = async (req, res) => {
  try {
    const { body } = req;
    const newSale = await saleService.createSale(body);
    return res.status(200).json({ newSale });
  } catch (error) {
    console.log('controller:', error);
  }
};

module.exports = {
  getSellers,
  createSale,
};
