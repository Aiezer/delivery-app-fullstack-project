module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define(
    "saleProduct",
    {
      saleId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "salesProducts",
    }
  );
  SalesProducts.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      as: 'sales', 
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.sale.belongsToMany(models.product, {
      as: 'products', 
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  }

  return SalesProducts;
};
