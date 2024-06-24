const { DB_USER, DB_PASS, DB_NAME } = require('./server.config');

module.exports = {
  "development": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
