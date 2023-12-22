const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

const createJwtToken = (payload, options = {}) =>
  jwt.sign(payload, JWT_SECRET, options);

const verifyTwtToken = (token) => jwt.verify(token, JWT_SECRET);

module.exports = { createJwtToken, verifyTwtToken };
