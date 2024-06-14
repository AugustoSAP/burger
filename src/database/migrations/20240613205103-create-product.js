'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('users', {
         id:{
          type: Sequelize.INTEGER,
          allowNull:false,
          primaryKey: true,
          autoIncrement: true,
         },
         name:{
          type:Sequelize.STRING,
          allowNull:false,
         },
         preice:{
          type: Sequelize.INTEGER,
          allowNull: false,
         },
         category:{
          type:Sequelize.STRING,
          allowNull:false,
         },
         path:{
          type: Sequelize.STRING,
          allowNull: false,
         },
         create_at:{
          type: Sequelize.DATE,
          allowNull:false,
         },
         update:{
          type: Sequelize.DATE,
          allowNull: false,
         },

         });
    
  },

  async down (queryInterface, Sequelize) {
   
  
      await queryInterface.dropTable('users');
     
  }
};
