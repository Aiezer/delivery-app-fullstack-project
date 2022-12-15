'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
    [
      {
        id: 1,
        user_id: 3,
        seller_id: 2,
        total_price: 50,
        delivery_address: "avenida 25 de julho, N 156",
        delivery_number: "123456",
        sale_date: new Date(),
        status: "Entregue"
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 89,
        delivery_address: "avenida 27 de julho, N 186",
        delivery_number: "654123",
        sale_date: new Date(),
        status: "Entregue"
      },
      {
        id: 3,
        user_id: 3,
        seller_id: 2,
        total_price: 24,
        delivery_address: "avenida 28 de julho, N 159",
        delivery_number: "123465",
        sale_date: new Date(),
        status: "Pendente"
      },
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};