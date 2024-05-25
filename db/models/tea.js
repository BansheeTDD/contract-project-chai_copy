'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsToMany(User, {
        foreignKey: "tea_id",
        through: "Comment"
      });
    }
  }
  Tea.init({
    title: DataTypes.STRING,
    place_cultivation: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tea',
  });
  return Tea;
};