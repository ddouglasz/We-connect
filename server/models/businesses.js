module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('businesses', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    category: DataTypes.TEXT,
    location: DataTypes.TEXT,
    email: DataTypes.TEXT,
    image: DataTypes.TEXT,
  });
  Business.associate = (models) => {
    Business.belongsTo(models.users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Business;
};
