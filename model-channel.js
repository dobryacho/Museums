const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    static associate({ User }) {
      this.belongsToMany(User, { through: 'Userschannels', foreignKey: 'channel_id' });
    }
  }
  Channel.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Channel',
  });
  return Channel;
};
