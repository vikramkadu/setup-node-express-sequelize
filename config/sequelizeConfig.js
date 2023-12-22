const { SERVER, USER, PASSWORD, DATABASE } = require("./config");

module.exports = {
  HOST: SERVER,
  PORT: 3306,
  USER: USER,
  PASSWORD: PASSWORD,
  DB: DATABASE,
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
