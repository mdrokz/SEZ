var dareescontrimodel = require('../models/darees-contri.model');
var ObjectId = require('mongoose').Types.ObjectId;

var dcontri = {
    addUser: function (req, res, rej) {
      var dcontri = new dareescontrimodel(req.data);
      dcontri.save(function (err, product) {
        if (err) {
          rej(err);
        } else {
          res(product);
        }
      });
    },
}

module.exports=dcontri;