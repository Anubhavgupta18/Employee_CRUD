'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Emergency_contacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Employee, {
        foreignKey: 'employeeId',
        onDelete: 'CASCADE'
      })
    }
  }
  Emergency_contacts.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    mobile_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    relationship: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Emergency_contacts',
  });
  return Emergency_contacts;
};