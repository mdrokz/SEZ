var userModel = require('../models/user.model');

var user = {
  addUser: function (req, res, rej) {
    var user = new userModel(req.data);
    user.save(function (err, product) {
      if (err) {
        rej(err);
      } else {
        res(product);
      }
    });
  },
  getAllUsers: function (req, res, rej) {
    userModel.findOne({}, function (err, product) {
      if (err) {
        rej(err);
      } else {
        res(product);
      }
    });
  },
  login: function (req, res, rej) {
    userModel.findOne(req.data, function (err, product) {
      if (err) {
        rej(err);
      } else {
        console.log(product);
        res(product._doc);
      }
    });
  }
}


module.exports = user;
