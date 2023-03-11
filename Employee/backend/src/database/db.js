import { Sequelize } from 'sequelize'

const _db = process.env.SQL_DB || 'auth_db';
const _user = process.env.SQL_USER || 'root';
const _pass = process.env.SQL_PASS || '';
const _config = {
    host: process.env.SQL_HOST || 'localhost',
    dialect: process.env.SQL_DIALECT || 'mysql',
    timezone: process.env.SQL_TIMEZONE || '00:00'
}

const db = new Sequelize(_db, _user, _pass, _config);

export default db;