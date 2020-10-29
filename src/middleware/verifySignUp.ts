const db = require("../models");
const User = db.user;

export class verifySignUp{

  checkDuplicateUser = (req, res, next) => {
  // Username
  User.fullName.set(req.body.firstName, req.body.lastName);

  User.findOne({
    fullName: User.fullName.get(),
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }
  }
  };
    checkDuplicateEmail = (req, res, next) => {
    // Email
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }

      next();
    });
    };

    checkAdminExisted = (req, res, next) => {
      if(req.body.isAdmin == true){
        next();
      }
      res.status(400).send({ message: 'Failed! Isnt Admin' });
    }
}