const saleService = require('../Services/Sale.service');

const strController = 'controller:';

const createSale = async (req, res) => {
  try {
    const { body: { request, products } } = req;
    const newSale = await saleService.createSale(request, products);
    if (newSale) {
      return res.status(201).json(newSale);
    } return res.status(404).json({ message: 'Error creating' });
  } catch (error) {
    console.log(strController, error);
  }
};

const updateSaleStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedSale = await saleService.updateSaleStatus(id, status);
    return res.status(200).json(updatedSale);
  } catch (error) {
    console.log(strController, error);
  }
};

module.exports = {
  createSale,
  updateSaleStatus,
};
