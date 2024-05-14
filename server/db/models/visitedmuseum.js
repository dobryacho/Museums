'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VisitedMuseum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VisitedMuseum.init(
    {
      userId: DataTypes.INTEGER,
      museumId: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'visitedMuseum',
    },
  );
  return VisitedMuseum;
};
