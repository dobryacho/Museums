'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    static associate({ Museum }) {
      this.belongsTo(Museum, { foreignKey: 'museumId' });
    }
  }
  News.init(
    {
      text: DataTypes.STRING,
      museumId: DataTypes.INTEGER,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'News',
    },
  );
  return News;
};
