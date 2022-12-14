const sellerService = require("../Services/Seller.service");

const strController = "controller:";

const getSellers = async (req, res) => {
  try {
    const sellers = await sellerService.getSellers();
    return res.status(200).json(sellers);
  } catch (e) {
    console.log(strController, e);
  }
};

const getSellerById = async (req, res) => {
  try {
    const { id } = req.params;
    const seller = await sellerService.getSellerById(id);
    return res.status(200).json(seller.name);
  } catch (error) {
    console.log(strController, error);
  }
};

module.exports = {
  getSellers,
  getSellerById,
};
