const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

exports.signUp = (req, res) => {
  // let idUser = bcrypt.hashSync(Math.random() * 4, 8);

  // while(user.findOne({ id: idUser})){
  //   idUser = bcrypt.hashSync(Math.random() * 4, 8);
  // }
  const newUser = new User({
    // id: idUser,
    isAdmin: false,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 9),
    birthDate: req.body.birthDate,
    cellphone: req.body.cellphone
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
      res.send(user, { message: "User was registered successfully!" });
  });
}

exports.signUpAdmin = (req, res) => {
  // let idUser = bcrypt.hashSync(Math.random() * 4, 8);

  // while(user.findOne({ id: idUser})){
  //   idUser = bcrypt.hashSync(Math.random() * 4, 8);
  // }
  const newUser = new User({
    // id: idUser,
    isAdmin: req.body.isAdmin,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 9),
    birthDate: req.body.birthDate,
    cellphone: req.body.cellphone
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
}

exports.signIn = (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        accessToken: token
      });
    });
};