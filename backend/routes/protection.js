const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(403).json("Forbidden.");
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else res.status(401).json("Unauthorized.");
};

module.exports = verifyJWT;
