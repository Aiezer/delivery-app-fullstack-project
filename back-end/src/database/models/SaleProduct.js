module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define(
    "saleProduct",
    {
      saleId: { type: DataTypes.INTEGER, primaryKey: true, field: "sale_id" },
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: "product_id",
      },
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "sales_products",
    }
  );

  SalesProducts.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      foreignKey: "saleId",
      as: "products",
      through: SalesProducts,
      otherKey: "productId",
    });
    models.product.belongsToMany(models.sale, {
      foreignKey: "productId",
      as: "sales",
      through: SalesProducts,
      otherKey: "saleId",
    });
  };

  return SalesProducts;
};
