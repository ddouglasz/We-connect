module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('businesses', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    location: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
  });
  Business.associate = (models) => {
    Business.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  Business.associate = (models) => {
    Business.hasMany(models.reviews, {
      foreignKey: 'businessId',
      onDelete: 'CASCADE',
    });
  };
  return Business;
};
