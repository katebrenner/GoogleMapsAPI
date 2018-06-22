const bcrypt = require('bcryptjs');
const User = require('../model/userModel.js');

const usersController = {};

usersController.create = (req, res) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/map');
    });
  }).catch(err => {
    res.status(500).json({error: err});
  });
};

// error will look like this so need a page for it:

// {
// "error": {
// "name": "error",
// "length": 205,
// "severity": "ERROR",
// "code": "23505",
// "detail": "Key (email)=(poop@poop.com) already exists.",
// "schema": "public",
// "table": "users",
// "constraint": "users_email_key",
// "file": "nbtinsert.c",
// "line": "434",
// "routine": "_bt_check_unique"
// }
// }

module.exports = usersController;
