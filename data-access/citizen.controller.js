var citizenModel = require('../models/citizen.model');
var ObjectId = require('mongoose').Types.ObjectId;

var citizen = {
    addUser: function (req, res, rej) {
      var citizen = new citizenModel(req.data);
      citizen.save(function (err, product) {
        if (err) {
          rej(err);
        } else {
          res(product);
        }
      });
    },
    getAllUsers: function (req, res, rej) {
      citizenModel.find({}, function (err, product) {
        if (err) {
          rej(err);
        } else {
          // console.log(product);
          var data = [];
          product.forEach((x, i) => {
            data[i] = x._doc;
          });
          res(data);
        }
      });
    },
    login: function (req, res, rej) {
      citizenModel.findOne(req.data, function (err, product) {
        if (err) {
          rej(err);
        } else {
          console.log(product);
          res(product._doc);
        }
      });
    },
    editUser: function (req, res, rej) {
      console.log(typeof req.data.Mobile);
      var updateQuery = {
        "Id":req.data.Id ,
        "Name":req.data.Name
        ,
        "Sector":req.data.Sector,
        "SEZCode":req.data.SEZCode ,
        "Mobile":req.data.Mobile 
      };
      citizenModel.findOneAndUpdate({
        _id: ObjectId(req.data._id.id)
      }, updateQuery).exec((err, result) => {
        if (err) {
          console.log(err);
          rej(err);
        } else {
          res(result);
        }
      });
    },
    deleteUser: function (req, res, rej) {
      console.log(req.data);
      citizenModel.findByIdAndRemove({
        _id: ObjectId(req.data._id.id)
      }, (err, result) => {
        if (err) {
          rej(err);
        } else {
          res(result);
        }
      });
    }
  }

  module.exports=citizen;