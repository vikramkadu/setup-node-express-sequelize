const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const secret = req.header("secret");

    if (req.url && req.url.includes("/login")) {
      const secrete = req.header("Secret");
      if (secrete === JWT_SECRET) {
        next();
      } else {
        return res.status(401).json({ msg: "Invalid Authentication." });
      }
    } else if (secret && secret !== "null") {
      next();
    } else {
      if (!token)
        return res.status(401).json({ msg: "Invalid Authentication." });
      jwt.verify(token.split(" ")[1], JWT_SECRET, (err, user) => {
        if (err)
          return res.status(401).json({ msg: "Invalid Authentication." });
        console.log(",user", user);
        req.user = user;
        next();
      });
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = auth;
