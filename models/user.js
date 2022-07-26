'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Role, {
        foreignKey: 'rid',
      });
    }
  }
  User.init({
    rid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    countryCode: DataTypes.INTEGER,
    tel: DataTypes.STRING,
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    position: {
      type: DataTypes.ENUM,
      values: ['junior-developer', 'mid-developer', 'senior-devloper', 'project-leader', 'project-manager'],
      defaultValue: 'junior-developer'
    },
    password: DataTypes.STRING,
    address: {
      type: DataTypes.TEXT('long'),
      get() {
        if (this.getDataValue('address')) {
          return JSON.parse(this.getDataValue('address'));
        } else {
          return null;
        }
      },
      set(value) {
        if (value) {
          this.setDataValue('address', JSON.stringify(value));
        } else {
          this.setDataValue('address', null);
        }
      },
    },
    notes: {
      type: DataTypes.TEXT('long'),
      get() {
        if (this.getDataValue('notes')) {
          return JSON.parse(this.getDataValue('notes'));
        } else {
          return null;
        }
      },
      set(value) {
        if (value) {
          this.setDataValue('notes', JSON.stringify(value));
        } else {
          this.setDataValue('notes', null);
        }
      },
    },
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'User',
  });
  return User;
};