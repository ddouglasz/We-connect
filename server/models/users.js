module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    hashPassword: DataTypes.STRING
  });
  User.associate = (models) => {
    User.hasMany(models.businesses, {
      foreignKey: 'userId',
      as: 'businesses',
    });
    User.hasMany(models.reviews, {
      foreignKey: 'userId',
      as: 'reviews',
    });
  };
  return User;
};
