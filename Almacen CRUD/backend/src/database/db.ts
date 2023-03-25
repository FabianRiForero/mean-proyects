import { Dialect, Sequelize } from "sequelize";

const db: string = process.env.SQL_DB || 'myDB';
const user: string = process.env.SQL_USER || 'myUser';
const pass: string = process.env.SQL_PASS ?? 'myPass';
const config = {
    host: process.env.SQL_HOST || 'localhost',
    dialect: process.env.SQL_DIALECT as Dialect || 'mysql',
    port: Number(process.env.SQL_PORT) || 3306,
    timezone: process.env.SQL_TIMEZONE || '+00:00'
};

const sequelize = new Sequelize(db, user, pass, config);

export { sequelize }