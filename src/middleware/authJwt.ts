const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

export class authJWT{
  verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Unauthorized!" });
      }
      req.id = decoded.id;
      next();
    });
  };

  isAdmin = (req, res, next) => {
    User.findById(req.id).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (user.isAdmin == true) {
        next();
        return;
      }

      res.status(403).send({ message: "Require Admin Role!" });
      return;
    });
  };
}