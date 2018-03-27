
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('businesses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    category: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    image: {
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
    userId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id',
        as: 'userId'
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('businesses')
};
