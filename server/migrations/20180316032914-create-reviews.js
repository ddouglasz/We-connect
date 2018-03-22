module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('reviews', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    review: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    businessId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'businesses',
        key: 'id',
        as: 'businessId'
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('reviews')
};
