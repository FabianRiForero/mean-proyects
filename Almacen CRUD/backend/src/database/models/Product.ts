import { DataTypes as dataTypes } from 'sequelize'
import { sequelize } from '../db'

const alias: string = 'Product';
const cols = {
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: dataTypes.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: dataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    price: {
        type: dataTypes.DOUBLE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    stock: {
        type: dataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
};
const config = {
    tableName: 'products',
    timestamps: true
};

const Product = sequelize.define(alias, cols, config);

export { Product }