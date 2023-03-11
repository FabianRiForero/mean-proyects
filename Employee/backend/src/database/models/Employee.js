import { Sequelize } from 'sequelize';
import db from '../db.js'

const { DataTypes } = Sequelize;

const alias = 'Employee';
const cols = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  office: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
};
const config = {
  tableName: 'employees',
  timestamps: true
};

const Employee = db.define(alias, cols, config);

export default Employee;