const mysql = require ("mysql2");
const dotenv = require ("dotenv");

dotenv.config();

const dbPool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })

module.exports = dbPool.promise();