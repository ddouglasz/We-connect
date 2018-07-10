module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('reviews', {
    review: DataTypes.STRING,
    reviewer: DataTypes.STRING,
    rating: DataTypes.INTEGER
  });
  Reviews.associate = (models) => {
    Reviews.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      as: 'reviewer'
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
