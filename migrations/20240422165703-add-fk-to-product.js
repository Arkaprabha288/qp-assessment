'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
      return queryInterface.addConstraint('Products', {
        fields: ['categoryId'],
        type: 'foreign key',
        name: 'category_id_fk',
        references: { //The table that has the foreign key
          table: 'Categories',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeConstraint('Products', 'category_id_fk');

  }
};
