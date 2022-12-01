module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "user",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: { type: DataTypes.STRING, defaultValue: 'customer' },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "users",
    }
  );

  Users.associate = (models) => {
    Users.hasMany(models.sale, {
      as: "sales",
      foreignKey: "userId",
    });
  };

  return Users;
};
