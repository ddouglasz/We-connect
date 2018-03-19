module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('reviews', {
    review: DataTypes.STRING,
  });
  Reviews.associate = (models) => {
    Reviews.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  Reviews.associate = (models) => {
    Reviews.belongsTo(models.businesses, {
      foreignKey: 'businessId',
      onDelete: 'CASCADE',
    });
  };
  return Reviews;
};
