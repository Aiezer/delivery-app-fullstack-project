'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        name: 'Delivery App Admin',
        email: 'adm@deliveryapp.com',
        password: 'a4c86edecc5aee06eff8fdeda69e0d04',
        role: 'administrator',
      },
      {
        id: 2,
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        password: '3c28d2b0881bf46457a853e0b07531c6',
        role: 'seller',
      },
      {
        id: 3,
        name: 'Cliente Zé Birita',
        email: 'zebirita@email.com',
        password: '1c37466c159755ce1fa181bd247cb925',
        role: 'customer',
      },
      {
        id: 4,
        name: 'Andrés D\'Alessandro',
        email: 'andresDalessandro@maiordosul.com',
        password: '1991-2004-2021',
        role: 'customer',
      }
     ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};