module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    "sale",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL(9, 2),
      deliveryAddress: DataTypes.STRING(100),
      deliveryNumber: DataTypes.STRING(50),
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING(50),
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "sales",
    }
  );
  
  Sales.associate = (models) => {
    blogPostSchema.belongsTo(models.User, {
      as: 'user', 
      foreignKey: 'userId' 
    })
  }
  return Sales;
};
