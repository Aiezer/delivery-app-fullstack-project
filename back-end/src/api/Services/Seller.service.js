const { user } = require("../../database/models");

const getSellers = async () => {
  const sellers = await user.findAll({
    attributes: { exclude: ["password"] },
    where: { role: "seller" },
  });
  return sellers;
};

const getSellerById = async (sellerId) => {
  const userFind = await user.findAll({
    attributes: { exclude: ["password"] },
    where: { id: sellerId },
  });
  return userFind[0];
};

module.exports = {
  getSellers,
  getSellerById,
};
