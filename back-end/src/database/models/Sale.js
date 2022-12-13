module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    "sale",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: {type: DataTypes.INTEGER, field: 'user_id',},
      sellerId: {type: DataTypes.INTEGER, field: 'seller_id',},
      totalPrice: {type: DataTypes.DECIMAL(9, 2), field: 'total_price',},
      deliveryAddress: {type: DataTypes.STRING(100), field: 'delivery_address',},
      deliveryNumber: {type: DataTypes.STRING(50), field: 'delivery_number',},
      saleDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, field: 'sale_date'},
      status: DataTypes.STRING(50)
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "sales",
    }
  );
  
  Sales.associate = (models) => {
    Sales.belongsTo(models.user, {
      as: 'customer',
      foreignKey: 'userId'
    });
    Sales.belongsTo(models.user, {
      as: 'seller',
      foreignKey: 'sellerId'
    });
  };
  
  return Sales;
};
