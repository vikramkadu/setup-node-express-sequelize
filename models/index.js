const dbConfig = require("../config/sequelizeConfig");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
    handleDisconnects: true,
  },
  dialectOptions: {
    options: {
      port: 1433,
      requestTimeout: 600000,
      encrypt: true,
    },
    encrypt: true,
  },
  options: {
    dialectModule: "tedious",
    encrypt: true,
    port: dbConfig.PORT,
    tdsVersion: "7_1",
    trustServerCertificate: true,
    ssl: true,
  },
  logging: (msg) => console.error(msg),
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully."); // eslint-disable-line no-console
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err); // eslint-disable-line no-console
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Projects = require("./projectModal.js")(sequelize, Sequelize);
db.Users = require("./userModel")(sequelize, Sequelize);
db.Role = require("./rolesModal")(sequelize, Sequelize);
db.Users.belongsTo(db.Role);

module.exports = db;
