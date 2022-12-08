const saleService = require('../Services/Sale.service');

const getSellers = (req, res) => {
  try {
    const sellers = saleService.getSellers();
    return res.status(200).json({ sellers });
  } catch (error) {
    console.log('controller:', error);
  }
};

const createSale = (req, res) => {
  try {
    const { body } = req;
    const newSale = saleService.createSale(body);
    return res.status(200).json({ newSale });
  } catch (error) {
    console.log('controller:', error);
  }
}

module.exports = {
  getSellers,
  createSale
}
