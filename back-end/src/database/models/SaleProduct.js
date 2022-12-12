module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define(
    "saleProduct",
    {
      saleId: { type: DataTypes.INTEGER, primaryKey: true },
      productId: { type: DataTypes.INTEGER, primaryKey: true },
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "sales_products",
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
