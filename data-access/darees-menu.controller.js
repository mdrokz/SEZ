var menuDetailsModel = require('../models/menu-detail.model');
var menuMasterModel = require('../models/menu-master.model');
var ObjectId = require('mongoose').Types.ObjectId;


var dareesMenu = {
  addMenuMaster: function (req, res, rej) {
    if (!req.data._id && !req.data.menuData) {
      var user = new menuMasterModel(req.data.masterMenu);
      user.save(function (err, product) {
        if (err) {
          rej(err);
        } else {
          req.data.menuDetails.forEach(x => {
            x.MenuMasterId = ObjectId(product._id.id);
            var user = new menuDetailsModel(x);
            user.save(function (err, product) {
              if (err) {
                rej(err);
              } else {
                res(product);
              }
            });
          });
          res(product);
        }
      });
    } else {
      var menuMasterUpdateQuery = {
        "Date": req.data.Date,
        "PeopleCount": req.data.PeopleCount,
        "ThaalCount": req.data.ThaalCount
      };
      var menuDetailsUpdateQuery = {
        "SR": req.data.menuData.SR,
        "Item": req.data.menuData.Item,
        "QTY": req.data.menuData.QTY
      };
      menuMasterModel.findOneAndUpdate({
        _id: ObjectId(req.data._id.id)
      }, menuMasterUpdateQuery).exec((err, Masterresult) => {
        if (err) {
          rej(err)
        } else {
          menuDetailsModel.findOneAndUpdate({
            _id: ObjectId(req.data.menuData._id.id)
          }, menuDetailsUpdateQuery).exec((err, Detailresult) => {
            if (err) {
              rej(err)
            } else {
              res({
                menuMaster: Masterresult,
                menuDetail: Detailresult
              });
            }
          })
        }
      })
    }
  },
  getAllMenuData: function (req, res, rej) {
    // menuDetailsModel.find({}, function (err, product) {
    //   if (err) {
    //     rej(err);
    //   } else {
    //     // console.log(product);
    //     var data = [];
    //     product.forEach((x, i) => {
    //       data[i] = x._doc;
    //     });
    //     res(data);
    //   }
    // });
    menuMasterModel.aggregate([{
      $lookup: {
        from: "menudetails",
        localField: "_id",
        foreignField: "MenuMasterId",
        as: "menuData"
      }
    }]).exec((err, result) => {
      if (err) {
        rej(err)
      } else {
        res(result);
        console.log(result);
      }
    })
  },
  deleteUser: function (req, res, rej) {
    console.log(req.data);
    menuDetailsModel.findByIdAndRemove({
      _id: ObjectId(req.data.menuData._id.id)
    }, (err, Detailresult) => {
      if (err) {
        rej(err);
      } else {
        menuMasterModel.findByIdAndRemove({
          _id: ObjectId(req.data._id.id)
        }, (err, Masterresult) => {
          if (err) {
            rej(err);
          } else {
            res({
              menuMaster: Masterresult,
              menuDetail: Detailresult
            });
          }
        });
      }
    });
  }
};

module.exports = dareesMenu;
