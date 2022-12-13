module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "product",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING(100),
      price: DataTypes.DECIMAL(4, 2),
      urlImage: {type: DataTypes.STRING(200), field: 'url_image'}
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "products",
    }
  );

  return Products;
};
