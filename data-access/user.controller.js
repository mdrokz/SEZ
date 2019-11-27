var userModel = require('../models/user.model');
var userRoleModel = require('../models/user-roles.model');
var roleModel = require('../models/roles.model');
var ObjectId = require('mongoose').Types.ObjectId;
var user = {
  addUser: function (req, res, rej) {
    req.data.username = req.data.Name;
    var user = new userModel(req.data);
    console.log(req.data)
    user.save(function (err, product) {
      if (err) {
        rej(err);
      } else {
        roleModel.findOne({
          role: "member"
        }, (err, res) => {
          if (err) {
            rej(err);
          } else {
            var userRole = new userRoleModel({
              userId: product._id,
              roleId: res._id
            })
            userRole.save(function (err, product) {
              if (err) {
                rej(err)
              } else {
                console.log(product)
              }
            });
          }
        })
        res(product);
      }
    });
  },
  getAllUsers: function (req, res, rej) {
    userModel.find({}, function (err, product) {
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
    if (Object.keys(req.data).length != 0) {
      console.log("it went in wtf");
      userModel.findOne(req.data, function (err, product) {
        if (err) {
          rej(err);
        } else {
          console.log(product);
          res(product._doc);
        }
      });
    } else {
      rej(null)
    }
  },
  editUser: function (req, res, rej) {
    console.log(typeof req.data.Mobile);
    var updateQuery = {
      "Id": req.data.Id,
      "Name": req.data.Name,
      "ITS": req.data.ITS,
      "Mobile": req.data.Mobile,
      "Age": req.data.Age,
      "Title": req.data.Title,
      "SectorIncharge": req.data.SectorIncharge,
      "SpecialSkills": req.data.SpecialSkills
    };
    userModel.findOneAndUpdate({
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
    userModel.findByIdAndRemove({
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



module.exports = user;
