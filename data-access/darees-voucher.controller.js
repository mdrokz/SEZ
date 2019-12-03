var dareesvoucherModel = require('../models/darees-voucher.model');
var ObjectId = require('mongoose').Types.ObjectId;

var dvoucher = {
    addUser: function (req, res, rej) {
      var dcontri = new dareesvoucherModel(req.data);
      dcontri.save(function (err, product) {
        if (err) {
          rej(err);
        } else {
          res(product);
        }
      });
    },
}

module.exports=dvoucher;