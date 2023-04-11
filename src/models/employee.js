'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Emergency_contacts, {
        foreignKey:'employeeId'
      })
    }
  }
  Employee.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    jobtitle: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    mobile_number: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    address: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};