'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Museum extends Model {
    static associate({ News, User }) {
      this.hasMany(News, { foreignKey: 'museumId' });
      this.belongsToMany(User, {
        through: 'FavoriteMuseum',
        foreignKey: 'museumId',
      });
      this.belongsToMany(User, {
        through: 'VisitedMuseum',
        foreignKey: 'museumId',
      });
      this.belongsToMany(User, {
        through: 'Recall',
        foreignKey: 'museumId',
      });
    }
  }
  Museum.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      location: DataTypes.STRING,
      city: DataTypes.STRING,
      photo: DataTypes.STRING,
      workedTime: DataTypes.STRING,
      holidays: DataTypes.STRING,
      theme: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Museum',
    },
  );
  return Museum;
};
