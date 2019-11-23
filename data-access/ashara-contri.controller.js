var asharacontrimodel = require('../models/ashara-contri.model');
var ObjectId = require('mongoose').Types.ObjectId;

var ycontri = {
    addUser: function (req, res, rej) {
      var ycontri = new asharacontrimodel(req.data);
      ycontri.save(function (err, product) {
        if (err) {
          rej(err);
        } else {
          res(product);
        }
      });
    },
    getAllUsers: function (req, res, rej) {
        asharacontrimodel.find({}, function (err, product) {
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
    editUser: function (req, res, rej) {
      console.log(typeof req.data.Mobile);
      var updateQuery = {
        "Id":req.data.Id ,
        "Name":req.data.Name,
        "ITS":req.data.ITS,
        "Mobile":req.data.Mobile 
      };
      asharacontrimodel.findOneAndUpdate({
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
      asharacontrimodel.findByIdAndRemove({
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

  module.exports=ycontri;