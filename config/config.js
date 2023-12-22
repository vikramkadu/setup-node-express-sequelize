const dotdenv = require("dotenv");
dotdenv.config();
const config = require("../config.json");
module.exports = {
  USER:  config.USER,
  PASSWORD: config.PASSWORD,
  SERVER: config.SERVER,
  DATABASE: config.DATABASE,
  JWT_SECRET: config.JWT_SECRET,
  FROMMAIl: config.FromMail,
  SENDGRID_API_KEY: config.SENDGRID_API_KEY,
};
