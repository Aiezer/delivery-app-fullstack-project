'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const UserTable = queryInterface.createTable('sales', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, 
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      seller_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      total_price: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false,
      },
      delivery_address: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      delivery_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sale_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });

    return UserTable
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};